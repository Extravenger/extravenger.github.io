---
layout: page
title: Public Tools
permalink: /tools/
---

<div style="text-align: center;">
  <h2 class="tools-title">Open-Source Tools Developed by Me</h2>
  <p class="tools-note">Here are some public tools I have developed. Click on the cards to learn more and access the repositories.</p>
</div>

<div class="tools-cards-container">

  <a class="tool-card-link" href="https://github.com/yourrepo/tool1" target="_blank">
    <div class="tool-card">
      <div class="tool-card-inner">
        <div class="tool-card-content">
          <h3>Tool Name 1</h3>
          <p>A brief description of what this tool does and its primary features.</p>
        </div>
      </div>
    </div>
  </a>

  <a class="tool-card-link" href="https://github.com/yourrepo/tool2" target="_blank">
    <div class="tool-card">
      <div class="tool-card-inner">
        <div class="tool-card-content">
          <h3>Tool Name 2</h3>
          <p>A brief description of what this tool does and its primary features.</p>
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
  border-radius: 10px;
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
