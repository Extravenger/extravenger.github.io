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
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.tool-card {
  width: 300px;
  background: var(--card-background);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 15px;
  text-align: center;
  position: relative;
  animation: moveAndFragment 8s infinite linear;
  will-change: transform, opacity, clip-path;
}

.tool-card:nth-child(1) {
  animation-delay: 0s;
}

.tool-card:nth-child(2) {
  animation-delay: 2s;
}

.tool-card:nth-child(3) {
  animation-delay: 4s;
}

@keyframes moveAndFragment {
  0% {
    transform: translateX(-100%);
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
  25% {
    transform: translateX(50vw);
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
  30% {
    opacity: 0;
    clip-path: inset(0 50% 0 50%);
  }
  35% {
    transform: translateX(80vw);
    opacity: 0;
  }
  36% {
    transform: translateX(-100%);
    opacity: 0;
    clip-path: polygon(0 0, 50% 20%, 30% 80%, 0 100%);
  }
  40% {
    opacity: 0.3;
    clip-path: polygon(0 0, 50% 20%, 30% 80%, 0 100%);
  }
  50% {
    opacity: 0.7;
    clip-path: polygon(0 0, 70% 30%, 50% 70%, 0 100%);
  }
  60% {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
  100% {
    transform: translateX(-100%);
    opacity: 1;
    clip-path: inset(0 0 0 0);
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
