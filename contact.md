---
layout: page
title: "Contact"
permalink: /contact/
---

<style>
  /* General Reset */
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden; /* Disable scrolling */
  }

  /* Container for the cards */
  .contact-page-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    padding: 50px 20px;
    flex-wrap: nowrap; /* Single row */
    overflow-x: auto;  /* Allow horizontal scrolling if needed */
    width: 100%;
  }

  /* Card Container */
  .contact-card {
    perspective: 1000px;
    width: 200px;
    height: 200px;
    flex-shrink: 0; /* Prevent shrinking */
  }

  /* Inner Wrapper for 3D Flip */
  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
  }

  /* Flip on Hover */
  .contact-card:hover .card-inner {
    transform: rotateY(180deg);
  }

  /* Front and Back of the Card */
  .card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 12px;
    overflow: hidden;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
  }

  .card-front {
    background-size: cover;
    background-position: center;
  }

  .card-back {
    background: var(--color-bg-secondary);
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
  }

  /* Styling for Text and Links */
  .card-back a {
    color: var(--color-accent);
    text-decoration: none;
    font-size: 1.2em;
    transition: color 0.3s;
  }

  .card-back a:hover {
    color: #0073e6;
  }
</style>

<div class="contact-page-container">
  <!-- GitHub Card -->
  <div class="contact-card">
    <div class="card-inner">
      <!-- Front Side with Background Image -->
      <div class="card-front" style="background-image: url('https://extravenger.github.io/assets/img/contact/github-bg.jpg');">
      </div>
      <!-- Back Side with Details -->
      <div class="card-back">
        <a href="https://github.com/Extravenger" target="_blank">GitHub</a>
      </div>
    </div>
  </div>

  <!-- LinkedIn Card -->
  <div class="contact-card">
    <div class="card-inner">
      <!-- Front Side with Background Image -->
      <div class="card-front" style="background-image: url('https://extravenger.github.io/assets/img/contact/linkedin-bg.jpg');">
      </div>
      <!-- Back Side with Details -->
      <div class="card-back">
        <a href="https://www.linkedin.com/in/amitmorr/" target="_blank">LinkedIn</a>
      </div>
    </div>
  </div>

  <!-- Discord Card -->
  <div class="contact-card">
    <div class="card-inner">
      <!-- Front Side with Background Image -->
      <div class="card-front" style="background-image: url('https://extravenger.github.io/assets/img/contact/discord-bg.jpg');">
      </div>
      <!-- Back Side with Details -->
      <div class="card-back">
        <p>Extravenger#8538</p>
      </div>
    </div>
  </div>
</div>
