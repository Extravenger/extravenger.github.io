---
layout: page
title: Certifications
permalink: /certs/
---

<style>
/* Makes the entire cards clickable */
.cert-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

/* Container for the conveyor belt effect */
.cert-cards-container {
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow: hidden;
  padding: 40px 0;
}

/* Dark fade on the right - the "eating" effect */
.cert-cards-container::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 150px;
  background: linear-gradient(to right, 
    transparent 0%,
    var(--background, #0d0d0d) 100%
  );
  z-index: 100;
  pointer-events: none;
}

/* Entry fade on the left */
.cert-cards-container::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(to left, 
    transparent 0%,
    var(--background, #0d0d0d) 100%
  );
  z-index: 50;
  pointer-events: none;
}

/* Wrapper - horizontal conveyor belt */
.cert-cards-wrapper {
  display: flex;
  gap: 60px;
  padding: 20px 200px 20px 80px;
  animation: conveyor 50s linear infinite;
  width: max-content;
}

@keyframes conveyor {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pause animation on hover */
.cert-cards-wrapper:hover {
  animation-play-state: paused;
}

/* Card container */
.cert-card {
  display: flex;
  background: transparent;
  border-radius: 15px;
  border: 1px solid #8b7355;
  overflow: hidden;
  padding: 10px;
  width: 480px;
  height: 360px;
  flex-shrink: 0;
  box-sizing: border-box;
  perspective: 1000px;
  position: relative;
  transition: transform 0.4s ease, border-color 0.4s ease;
}

.cert-card:hover {
  transform: scale(1.03) translateY(-5px);
  border-color: #c9a96e;
}

/* Card inner element for flip effect */
.cert-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.cert-card:hover .cert-card-inner {
  transform: rotateY(180deg);
}

/* Front side of the card */
.cert-card-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  border-radius: 8px;
  background: transparent;
}

.cert-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease, filter 0.5s ease;
}

.cert-card:hover .cert-card-image img {
  transform: scale(1.1);
  filter: brightness(1.1);
}

/* Back side of the card */
.cert-card-back {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--background, #0d0d0d);
  color: #ccc;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  text-align: left;
  overflow-y: auto;
  word-wrap: break-word;
  border-radius: 8px;
  border: 1px solid #8b7355;
}

.cert-card-back .content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.cert-card-back h3 {
  margin: 0 0 12px 0;
  font-size: 1rem;
  border-bottom: 2px solid #8b7355;
  padding-bottom: 8px;
  width: 100%;
}

.cert-card-back ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.5;
}

.cert-card-back ul li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 6px;
}

.cert-card-back ul li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #c9a96e;
  font-weight: bold;
}

/* Title styling */
h2.certs-title {
  text-align: center;
  font-size: 2.8rem;
  font-weight: bold;
  color: #fff !important;
  opacity: 0;
  animation: titleReveal 1.2s ease-out 0.2s forwards;
  margin-bottom: 10px;
  letter-spacing: 15px;
}

@keyframes titleReveal {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
    letter-spacing: 15px;
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    letter-spacing: 3px;
  }
}

/* Chronological note style */
.chronological-note {
  text-align: center;
  font-size: 1rem;
  margin-bottom: 15px;
  color: #888;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.8s;
}

/* Scroll hint */
.scroll-hint {
  text-align: center;
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 10px;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards, subtlePulse 3s ease-in-out infinite;
  animation-delay: 1.2s, 2.5s;
}

.scroll-hint span {
  color: #c9a96e;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

@keyframes subtlePulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}

/* Scrollbar styling */
.cert-card-back::-webkit-scrollbar {
  width: 5px;
}

.cert-card-back::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.cert-card-back::-webkit-scrollbar-thumb {
  background: #8b7355;
  border-radius: 3px;
}

.cert-card-back::-webkit-scrollbar-thumb:hover {
  background: #c9a96e;
}

/* Responsive */
@media (max-width: 768px) {
  .cert-cards-wrapper {
    gap: 40px;
    padding: 15px 120px 15px 40px;
    animation-duration: 35s;
  }

  .cert-card {
    width: 340px;
    height: 280px;
  }

  .cert-card-back {
    font-size: 0.8rem;
    padding: 15px;
  }

  h2.certs-title {
    font-size: 2rem;
    letter-spacing: 2px;
  }

  .cert-cards-container::after {
    width: 100px;
  }
  
  .cert-cards-container::before {
    width: 60px;
  }
}

@media (max-width: 480px) {
  .cert-cards-wrapper {
    gap: 25px;
    padding: 10px 80px 10px 20px;
  }

  .cert-card {
    width: 280px;
    height: 230px;
  }

  .cert-card-back {
    font-size: 0.7rem;
    padding: 12px;
  }

  h2.certs-title {
    font-size: 1.5rem;
  }
  
  .cert-cards-container::after {
    width: 60px;
  }
  
  .cert-cards-container::before {
    width: 40px;
  }
}
</style>

<h2 class="certs-title">My Accomplishments</h2>

<p class="chronological-note">
  Certifications arranged in chronological order. <span style="color: lightcoral;">Hover</span> to reveal skills & knowledge.
</p>

<p class="scroll-hint">
  ◀ Cards scroll automatically • <span>Hover to pause</span> • Flip cards to see details ▶
</p>

<div class="cert-cards-container">
  <div class="cert-cards-wrapper">

    <!-- First set of cards -->
    <div class="cert-card">
      <div class="cert-card-inner">
        <div class="cert-card-image">
          <img src="/assets/img/certs/ITSAFE.png" alt="ITSAFE Certification">
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

    <div class="cert-card">
      <div class="cert-card-inner">
        <div class="cert-card-image">
          <img src="/assets/img/certs/THM.png" alt="TryHackMe Certification">
        </div>
        <div class="cert-card-back">
          <div class="content">
            <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
            <ul>
              <li>Advanced Exploitation: SQL Injection, RFI, SSH Tunneling</li>
              <li>Buffer Overflow Exploitation</li>
              <li>Basic Active Directory Exploitation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="cert-card">
      <div class="cert-card-inner">
        <div class="cert-card-image">
          <img src="/assets/img/certs/EJPT.png" alt="eJPT Certification">
        </div>
        <div class="cert-card-back">
          <div class="content">
            <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
            <ul>
              <li>Assessment Methodologies</li>
              <li>Web Application Penetration Testing</li>
              <li>Host & Networking Penetration Testing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="cert-card">
      <div class="cert-card-inner">
        <div class="cert-card-image">
          <img src="/assets/img/certs/OSCP.png" alt="OSCP Certification">
        </div>
        <div class="cert-card-back">
          <div class="content">
            <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
            <ul>
              <li>Client Side Attacks</li>
              <li>Web Exploitation</li>
              <li>Tunneling</li>
              <li>Privilege Escalation</li>
              <li>Active Directory Attacks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="cert-card">
      <div class="cert-card-inner">
        <div class="cert-card-image">
          <img src="/assets/img/certs/CRTP.png" alt="CRTP Certification">
        </div>
        <div class="cert-card-back">
          <div class="content">
            <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
            <ul>
              <li>Active Directory Enumeration</li>
              <li>Local Privilege Escalation</li>
              <li>Domain Privilege Escalation</li>
              <li>Domain Persistence</li>
              <li>Cross Trust Attacks</li>
              <li>Inter-forest Trust Attacks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="cert-card">
      <div class="cert-card-inner">
        <div class="cert-card-image">
          <img src="/assets/img/certs/HTB-Offshore.png" alt="HTB Offshore Certification">
        </div>
        <div class="cert-card-back">
          <div class="content">
            <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
            <ul>
              <li>Web Application Attacks</li>
              <li>Enumeration</li>
              <li>Real-World Active Directory Flaws</li>
              <li>Lateral Movement & Trust Boundaries</li>
              <li>Evading Endpoint Protections</li>
              <li>Reverse Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="cert-card">
      <div class="cert-card-inner">
        <div class="cert-card-image">
          <img src="/assets/img/certs/OSEP.png" alt="OSEP Certification">
        </div>
        <div class="cert-card-back">
          <div class="content">
            <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
            <ul>
              <li>Client-Side Attacks</li>
              <li>Process Injection & Migration</li>
              <li>Antivirus Evasion</li>
              <li>Application Allow-Listing Bypass</li>
              <li>Network Filter Bypass</li>
              <li>Lateral Movement (Win/Linux)</li>
              <li>Microsoft SQL Attacks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="cert-card">
      <div class="cert-card-inner">
        <div class="cert-card-image">
          <img src="/assets/img/certs/OSWE.png" alt="OSWE Certification">
        </div>
        <div class="cert-card-back">
          <div class="content">
            <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
            <ul>
              <li>Persistent XSS & Session Hijacking</li>
              <li>File Upload/Extension Bypasses</li>
              <li>PostgreSQL Extensions & UDFs</li>
              <li>Type Juggling & Magic Hashes</li>
              <li>Blind SQL Injection</li>
              <li>CSRF & REGEX Bypasses</li>
              <li>.NET Assembly Debugging</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Duplicate set for seamless infinite scroll -->
    <div class="cert-card">
      <div class="cert-card-inner">
        <div class="cert-card-image">
          <img src="/assets/img/certs/ITSAFE.png" alt="ITSAFE Certification">
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

    <div class="cert-card">
      <div class="cert-card-inner">
        <div class="cert-card-image">
          <img src="/assets/img/certs/THM.png" alt="TryHackMe Certification">
        </div>
        <div class="cert-card-back">
          <div class="content">
            <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
            <ul>
              <li>Advanced Exploitation: SQL Injection, RFI, SSH Tunneling</li>
              <li>Buffer Overflow Exploitation</li>
              <li>Basic Active Directory Exploitation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="cert-card">
      <div class="cert-card-inner">
        <div class="cert-card-image">
          <img src="/assets/img/certs/EJPT.png" alt="eJPT Certification">
        </div>
        <div class="cert-card-back">
          <div class="content">
            <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
            <ul>
              <li>Assessment Methodologies</li>
              <li>Web Application Penetration Testing</li>
              <li>Host & Networking Penetration Testing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="cert-card">
      <div class="cert-card-inner">
        <div class="cert-card-image">
          <img src="/assets/img/certs/OSCP.png" alt="OSCP Certification">
        </div>
        <div class="cert-card-back">
          <div class="content">
            <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
            <ul>
              <li>Client Side Attacks</li>
              <li>Web Exploitation</li>
              <li>Tunneling</li>
              <li>Privilege Escalation</li>
              <li>Active Directory Attacks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="cert-card">
      <div class="cert-card-inner">
        <div class="cert-card-image">
          <img src="/assets/img/certs/CRTP.png" alt="CRTP Certification">
        </div>
        <div class="cert-card-back">
          <div class="content">
            <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
            <ul>
              <li>Active Directory Enumeration</li>
              <li>Local Privilege Escalation</li>
              <li>Domain Privilege Escalation</li>
              <li>Domain Persistence</li>
              <li>Cross Trust Attacks</li>
              <li>Inter-forest Trust Attacks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="cert-card">
      <div class="cert-card-inner">
        <div class="cert-card-image">
          <img src="/assets/img/certs/HTB-Offshore.png" alt="HTB Offshore Certification">
        </div>
        <div class="cert-card-back">
          <div class="content">
            <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
            <ul>
              <li>Web Application Attacks</li>
              <li>Enumeration</li>
              <li>Real-World Active Directory Flaws</li>
              <li>Lateral Movement & Trust Boundaries</li>
              <li>Evading Endpoint Protections</li>
              <li>Reverse Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="cert-card">
      <div class="cert-card-inner">
        <div class="cert-card-image">
          <img src="/assets/img/certs/OSEP.png" alt="OSEP Certification">
        </div>
        <div class="cert-card-back">
          <div class="content">
            <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
            <ul>
              <li>Client-Side Attacks</li>
              <li>Process Injection & Migration</li>
              <li>Antivirus Evasion</li>
              <li>Application Allow-Listing Bypass</li>
              <li>Network Filter Bypass</li>
              <li>Lateral Movement (Win/Linux)</li>
              <li>Microsoft SQL Attacks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="cert-card">
      <div class="cert-card-inner">
        <div class="cert-card-image">
          <img src="/assets/img/certs/OSWE.png" alt="OSWE Certification">
        </div>
        <div class="cert-card-back">
          <div class="content">
            <h3><span style="color: lightcoral;">Skills & Knowledge</span></h3>
            <ul>
              <li>Persistent XSS & Session Hijacking</li>
              <li>File Upload/Extension Bypasses</li>
              <li>PostgreSQL Extensions & UDFs</li>
              <li>Type Juggling & Magic Hashes</li>
              <li>Blind SQL Injection</li>
              <li>CSRF & REGEX Bypasses</li>
              <li>.NET Assembly Debugging</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
