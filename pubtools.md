---
layout: page
title: Public Tools
permalink: /tools/
---

<div style="text-align: center;">
  <h2 class="tools-title">Open-Source Tools Developed by Me</h2>
  <p class="tools-note">Here are some public tools I have developed.</p>
</div>
<br>

<div class="tools-cards-container">

  <a class="tool-card-link" href="https://github.com/Extravenger/mssqlVenger" target="_blank">
    <div class="tool-card">
      <div class="tool-card-inner">
        <div class="tool-card-content">
          <h3>mssqlVenger</h3>
          <p>An MSSQL exploitation tool designed for Active Directory environments, developed as part of the OSEP course.</p>
        </div>
      </div>
    </div>
  </a>

  <a class="tool-card-link" href="https://github.com/Extravenger/scanVenger" target="_blank">
    <div class="tool-card">
      <div class="tool-card-inner">
        <div class="tool-card-content">
          <h3>scanVenger</h3>
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
  border: 5px solid #333;
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
