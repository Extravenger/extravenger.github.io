---
layout: page
title: Github Repositories
permalink: /github-repositories/
---

<div style="text-align: center;">
  <h2 class="certs-title">Github Repositories</h2>
  <p class="tools-note">These repositories were developed as part of my hands-on learning during various courses.</p>
</div>
<br>

<div class="tools-cards-container">

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
  flex-wrap: nowrap;
  gap: 20px;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.tool-card {
  width: 300px;
  background: var(--card-background);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 15px;
  text-align: center;
  position: relative;
  animation: moveAndFragment 10s infinite linear;
  will-change: transform, opacity;
  flex-shrink: 0;
}

@keyframes moveAndFragment {
  0% {
    transform: translateX(-100%);
    opacity: 1;
  }
  50% {
    transform: translateX(calc(50vw + 50%));
    opacity: 1;
  }
  55% {
    opacity: 0;
    transform: translateX(calc(50vw + 50%));
  }
  60% {
    transform: translateX(80vw);
    opacity: 0;
  }
  61% {
    transform: translateX(-100%);
    opacity: 0;
  }
  70% {
    transform: translateX(-80%);
    opacity: 0.3;
  }
  80% {
    transform: translateX(-60%);
    opacity: 0.7;
  }
  90% {
    transform: translateX(-40%);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 1;
  }
}

.tool-card:hover {
  animation-play-state: paused;
  transform: scale(1.05);
}

.tool-card-content {
  color: var(--text-color);
}

.tool-card-link {
  text-decoration: none;
}
</style>
