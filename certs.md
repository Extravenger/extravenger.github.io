---
layout: page
title: Certifications
permalink: /certs/
---
<style type="text/css">
  .certs-title {
    text-align: center;
    color: #333;
  }
  .chronological-note {
    text-align: center;
    font-style: italic;
    color: #666;
  }
  .cert-cards-container {
    overflow: hidden;
    width: 100%;
    margin: 20px 0;
  }
  .cert-track {
    display: flex;
    gap: 20px;
    animation: scroll 60s linear infinite;
  }
  @keyframes scroll {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
  .cert-card-link {
    display: block;
    width: 250px;
    height: 350px;
    flex: 0 0 auto;
  }
  .cert-card {
    width: 100%;
    height: 100%;
    perspective: 1000px;
  }
  .cert-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .cert-card:hover .cert-card-inner {
    transform: rotateY(180deg);
  }
  .cert-card-image,
  .cert-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .cert-card-image {
    background: #fff;
  }
  .cert-card-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }
  .cert-card-back {
    background: #f9f9f9;
    transform: rotateY(180deg);
    overflow-y: auto;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 8px;
  }
  .cert-card-back .content {
    text-align: center;
  }
  .cert-card-back h3 {
    margin-top: 0;
    color: #333;
  }
  .cert-card-back ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .cert-card-back li {
    margin-bottom: 10px;
  }
</style>
<h2 class="certs-title">My Accomplishments</h2>
<p class="chronological-note">
  Note: The images are arranged in chronological order. Hover over the images to see details of <span style="color: lightcoral;">Skills & Knowledge</span> achieved per certification.
</p>
<div class="cert-cards-container">
  <div class="cert-track">
    <a class="cert-card-link">
      <div class="cert-card">
        <div class="cert-card-inner">
          <div class="cert-card-image">
            <img src="/assets/img/certs/ITSAFE.png" alt="Cert 1">
          </div>
          <div class="cert-card-back">
            <div class="content">
              <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
              <ul>
                <li>Active Directory Enumeration & Exploitation</li>
                <li>Offensive Python</li>
                <li>Linux & Windows Privilege Escalation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="cert-card-link">
      <div class="cert-card">
        <div class="cert-card-inner">
          <div class="cert-card-image">
            <img src="/assets/img/certs/THM.png" alt="Cert 2">
          </div>
          <div class="cert-card-back">
            <div class="content">
              <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
              <ul>
                <li>Advanced Exploitation including: SQL Injection, Remote File Inlcusion, SSH Tunneling and Privilege Escalation.</li>
                <li>Buffer Overflow Exploitation.</li>
                <li>Basic Active Directory Exploitation.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="cert-card-link">
      <div class="cert-card">
        <div class="cert-card-inner">
          <div class="cert-card-image">
            <img src="/assets/img/certs/EJPT.png" alt="Cert 3">
          </div>
          <div class="cert-card-back">
            <div class="content">
              <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
              <ul>
                <li>Assessment Methodologies.</li>
                <li>Web Application Penetration Testing.</li>
                <li>Host & Networking Penetration Testing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="cert-card-link">
      <div class="cert-card">
        <div class="cert-card-inner">
          <div class="cert-card-image">
            <img src="/assets/img/certs/OSCP.png" alt="Cert 2">
          </div>
          <div class="cert-card-back">
            <div class="content">
              <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
              <ul>
                <li>Client Side Attacks.</li>
                <li>Web Exploitation.</li>
                <li>Tunneling.</li>
                <li>Privilege Escalation.</li>
                <li>Active Directory Attacks.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="cert-card-link">
      <div class="cert-card">
        <div class="cert-card-inner">
          <div class="cert-card-image">
            <img src="/assets/img/certs/CRTP.png" alt="Cert 4">
          </div>
          <div class="cert-card-back">
            <div class="content">
              <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
              <ul>
                <li>Active Directory Enumeration.</li>
                <li>Local Privilege Escalation.</li>
                <li>Domain Privilege Escalation.</li>
                <li>Domain Persistence.</li>
                <li>Forest privilege escalation using cross trust attacks.</li>
                <li>Inter-forest trust attacks.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="cert-card-link">
      <div class="cert-card">
        <div class="cert-card-inner">
          <div class="cert-card-image">
            <img src="/assets/img/certs/HTB-Offshore.png" alt="Cert 5">
          </div>
          <div class="cert-card-back">
            <div class="content">
              <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
              <ul>
                <li>Web Application Attacks.</li>
                <li>Enumeration.</li>
                <li>Exploiting Obscure and Real-World Active Directory Flaws.</li>
                <li>Lateral Movement and Crossing Trust Boundaries.</li>
                <li>Evading Endpoint Protections.</li>
                <li>Reverse Engineering.</li>
                <li>Out-Of-The-Box Thinking.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="cert-card-link">
      <div class="cert-card">
        <div class="cert-card-inner">
          <div class="cert-card-image">
            <img src="/assets/img/certs/OSEP.png" alt="Cert 6">
          </div>
          <div class="cert-card-back">
            <div class="content">
              <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
              <ul>
                <li>Client-Side Attacks.</li>
                <li>Process Injection and Migration.</li>
                <li>Antivirus Evasion.</li>
                <li>Application Allow-Listing.</li>
                <li>Bypassing Network Filters.</li>
                <li>Windows and Linux Lateral Movement.</li>
                <li>Active Directory Exploitation.</li>
                <li>Microsoft SQL Attacks.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="cert-card-link">
      <div class="cert-card">
        <div class="cert-card-inner">
          <div class="cert-card-image">
            <img src="/assets/img/certs/OSWE.png" alt="Cert 2">
          </div>
          <div class="cert-card-back">
            <div class="content">
              <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
              <ul>
                <li>Persistent Cross-Site Scripting</li>
                <li>Session Hijacking</li>
                <li>Data Exfiltration</li>
                <li>Bypassing File Extension Filters</li>
                <li>Magic Hashes</li>
                <li>PostgreSQL Extension and User-Defined Functions</li>
                <li>Bypassing REGEX Restrictions</li>
                <li>Cross-Site Request Forgery</li>
                <li>Type Juggling</li>
                <li>Blind SQL Injection</li>
                <li>Bypassing File Upload Restrictions</li>
                <li>Loose Comparisons</li>
                <li>Bypassing Character Restrictions</li>
                <li>PostgreSQL Large Objects</li>
                <li>Debugging .NET Assemblies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
    <!-- Duplicated certifications for infinite loop -->
    <a class="cert-card-link">
      <div class="cert-card">
        <div class="cert-card-inner">
          <div class="cert-card-image">
            <img src="/assets/img/certs/ITSAFE.png" alt="Cert 1">
          </div>
          <div class="cert-card-back">
            <div class="content">
              <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
              <ul>
                <li>Active Directory Enumeration & Exploitation</li>
                <li>Offensive Python</li>
                <li>Linux & Windows Privilege Escalation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="cert-card-link">
      <div class="cert-card">
        <div class="cert-card-inner">
          <div class="cert-card-image">
            <img src="/assets/img/certs/THM.png" alt="Cert 2">
          </div>
          <div class="cert-card-back">
            <div class="content">
              <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
              <ul>
                <li>Advanced Exploitation including: SQL Injection, Remote File Inlcusion, SSH Tunneling and Privilege Escalation.</li>
                <li>Buffer Overflow Exploitation.</li>
                <li>Basic Active Directory Exploitation.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="cert-card-link">
      <div class="cert-card">
        <div class="cert-card-inner">
          <div class="cert-card-image">
            <img src="/assets/img/certs/EJPT.png" alt="Cert 3">
          </div>
          <div class="cert-card-back">
            <div class="content">
              <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
              <ul>
                <li>Assessment Methodologies.</li>
                <li>Web Application Penetration Testing.</li>
                <li>Host & Networking Penetration Testing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="cert-card-link">
      <div class="cert-card">
        <div class="cert-card-inner">
          <div class="cert-card-image">
            <img src="/assets/img/certs/OSCP.png" alt="Cert 2">
          </div>
          <div class="cert-card-back">
            <div class="content">
              <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
              <ul>
                <li>Client Side Attacks.</li>
                <li>Web Exploitation.</li>
                <li>Tunneling.</li>
                <li>Privilege Escalation.</li>
                <li>Active Directory Attacks.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="cert-card-link">
      <div class="cert-card">
        <div class="cert-card-inner">
          <div class="cert-card-image">
            <img src="/assets/img/certs/CRTP.png" alt="Cert 4">
          </div>
          <div class="cert-card-back">
            <div class="content">
              <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
              <ul>
                <li>Active Directory Enumeration.</li>
                <li>Local Privilege Escalation.</li>
                <li>Domain Privilege Escalation.</li>
                <li>Domain Persistence.</li>
                <li>Forest privilege escalation using cross trust attacks.</li>
                <li>Inter-forest trust attacks.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="cert-card-link">
      <div class="cert-card">
        <div class="cert-card-inner">
          <div class="cert-card-image">
            <img src="/assets/img/certs/HTB-Offshore.png" alt="Cert 5">
          </div>
          <div class="cert-card-back">
            <div class="content">
              <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
              <ul>
                <li>Web Application Attacks.</li>
                <li>Enumeration.</li>
                <li>Exploiting Obscure and Real-World Active Directory Flaws.</li>
                <li>Lateral Movement and Crossing Trust Boundaries.</li>
                <li>Evading Endpoint Protections.</li>
                <li>Reverse Engineering.</li>
                <li>Out-Of-The-Box Thinking.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="cert-card-link">
      <div class="cert-card">
        <div class="cert-card-inner">
          <div class="cert-card-image">
            <img src="/assets/img/certs/OSEP.png" alt="Cert 6">
          </div>
          <div class="cert-card-back">
            <div class="content">
              <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
              <ul>
                <li>Client-Side Attacks.</li>
                <li>Process Injection and Migration.</li>
                <li>Antivirus Evasion.</li>
                <li>Application Allow-Listing.</li>
                <li>Bypassing Network Filters.</li>
                <li>Windows and Linux Lateral Movement.</li>
                <li>Active Directory Exploitation.</li>
                <li>Microsoft SQL Attacks.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="cert-card-link">
      <div class="cert-card">
        <div class="cert-card-inner">
          <div class="cert-card-image">
            <img src="/assets/img/certs/OSWE.png" alt="Cert 2">
          </div>
          <div class="cert-card-back">
            <div class="content">
              <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
              <ul>
                <li>Persistent Cross-Site Scripting</li>
                <li>Session Hijacking</li>
                <li>Data Exfiltration</li>
                <li>Bypassing File Extension Filters</li>
                <li>Magic Hashes</li>
                <li>PostgreSQL Extension and User-Defined Functions</li>
                <li>Bypassing REGEX Restrictions</li>
                <li>Cross-Site Request Forgery</li>
                <li>Type Juggling</li>
                <li>Blind SQL Injection</li>
                <li>Bypassing File Upload Restrictions</li>
                <li>Loose Comparisons</li>
                <li>Bypassing Character Restrictions</li>
                <li>PostgreSQL Large Objects</li>
                <li>Debugging .NET Assemblies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>
