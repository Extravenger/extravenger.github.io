---
layout: page
title: Github Repositories
permalink: /github-repositories/
---

<div style="text-align: center;">
  <h2 class="certs-title">Github Repositories</h2>
  <p class="tools-note">These repositories were gathered and developed as part of my hands-on learning during various courses.</p>
</div>
<br>

<div class="tools-cards-container">

  <a class="tool-card-link" href="https://github.com/Extravenger/RollerRoaster" target="_blank">
  <div class="tool-card">
    <div class="tool-card-inner">
      <div class="tool-card-content">
        <h1>RollerRoaster</h1>
        <p>RollerRoaster is a tool designed for performing enumeration and exploitation of Kerberoasting attack in Active Directory environments.</p>
      </div>
    </div>
  </div>
  </a>

  <a class="tool-card-link" href="https://github.com/Extravenger/OSEPlayground" target="_blank">
    <div class="tool-card">
      <div class="tool-card-inner">
        <div class="tool-card-content">
          <h1>OSEPlayground</h1>
          <p>A collection of useful tools and scripts were developed and gathered throughout the Offensive Security's PEN-300 (OSEP) course.</p>
        </div>
      </div>
    </div>
  </a>

  <a class="tool-card-link" href="https://github.com/Extravenger/mssqlVenger" target="_blank">
    <div class="tool-card">
      <div class="tool-card-inner">
        <div class="tool-card-content">
          <h1>mssqlVenger</h1>
          <p>An MSSQL exploitation tool designed for Active Directory environments, developed as part of the OSEP course.</p>
        </div>
      </div>
    </div>
  </a>
  
  <!-- Add more tools as needed -->

</div>

<style>
.tools-cards-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.tool-card {
  width: 300px;
  height: 200px; /* Fixed height for uniformity */
  background: var(--card-background);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 15px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tool-card:hover {
  transform: scale(1.05);
}

.tool-card-inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.tool-card-content {
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.tool-card-content h1 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.tool-card-content p {
  font-size: 0.9em;
  margin: 0;
}

.tool-card-link {
  text-decoration: none;
}
</style>
