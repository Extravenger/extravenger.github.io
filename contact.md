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
  }

  /* Centering Container */
  .contact-page-container {
    min-height: 80vh; /* Ensure it doesn't interfere with the navbar */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  /* Card Style for the Contact Section */
  .contact-card {
    background: var(--color-bg-secondary);
    color: var(--color-text);
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 90%;
    max-width: 400px;
    animation: fadeIn 1s ease;
  }

  /* Header Styles */
  .contact-card h1 {
    margin-top: 0;
    font-size: 2em;
    color: var(--color-accent);
  }

  /* Social Links Styling */
  .social-links {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .social-links li {
    display: inline-block;
  }

  .social-links a {
    text-decoration: none;
    font-size: 24px;
    color: var(--color-text);
    transition: transform 0.3s, color 0.3s;
  }

  .social-links a:hover {
    transform: scale(1.2);
    color: var(--color-accent);
  }

  /* Animation */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

<div class="contact-page-container">
  <div class="contact-card">
    <h1>Contact Me</h1>
    <p>Feel free to reach out via my social profiles:</p>
    <ul class="social-links">
      <li><a href="https://github.com/Extravenger" target="_blank" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a></li>
      <li><a href="https://www.linkedin.com/in/amitmorr/" target="_blank" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a></li>
    </ul>
  </div>
</div>

<!-- Font Awesome for Social Icons -->
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
