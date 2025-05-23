---
layout: page
title: Public Tools
permalink: /tools/
---

<div style="text-align: center;">
  <h2 class="certs-title">Open-Source Tools</h2>
  <p class="tools-note">Here are some tools I have developed and make them public as part of the courses i've taken.</p>
</div>
<br>

<div class="tools-cards-container">

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

  <a class="tool-card-link" href="https://github.com/Extravenger/scanVenger" target="_blank">
    <div class="tool-card">
      <div class="tool-card-inner">
        <div class="tool-card-content">
          <h1>scanVenger</h1>
          <p>A Windows-based tool for discovering live hosts and scanning open ports within a network, primarily built as part of the OSEP course.</p>
        </div>
      </div>
    </div>
  </a>

  <!-- Add more tools as needed -->

</div>

<style>
.tools-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.tool-card {
  width: 300px;
  background: var(--card-background);
  border: 5px solid #666;
  border-radius: 20px;
  padding: 15px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
}

.tool-card:hover {
  transform: scale(1.05);
}

.tool-card-content {
  color: var(--text-color);
}

.tool-card-link {
  text-decoration: none;
}
</style>
