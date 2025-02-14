---
layout: page
title: Certifications
permalink: /certs/
---

<h2 class="certs-title">🏆 My Accomplishments Throughout The Years 🏆</h2>

<p class="chronological-note">Note: The images are arranged in chronological order and clickable to show what <span style="color: lightcoral;">Skills & Knowledge</span> achieved per certification.</p>

<div class="cert-cards-container">

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

  <!-- Repeat for other certifications -->
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
              <li>A lot of Active Directory stuff, Pivoting, Web attacks etc.</li>
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
  
</div>

<script>
document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('clicked');
  });
});
</script>

<style>
  .cert-card {
    width: 250px;
    height: 350px;
    perspective: 1000px;
    margin: 20px;
  }

  .cert-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .cert-card-front,
  .cert-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
  }

  .cert-card-front {
    background-size: cover;
    background-position: center;
  }

  .cert-card-back {
    background-size: cover;
    background-position: center;
    transform: rotateY(180deg);
  }

  /* Flip on hover */
  .cert-card:hover .cert-card-inner {
    transform: rotateY(180deg);
  }

  /* Other styling for the card */
  .cert-card-image img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  .cert-card-back .content {
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 10px;
  }

  .cert-card-back h3 {
    font-size: 1.2rem;
    color: lightcoral;
  }

  .cert-card-back ul {
    list-style-type: none;
    padding: 0;
  }

  .cert-card-back ul li {
    font-size: 0.9rem;
    margin: 5px 0;
  }
</style>
