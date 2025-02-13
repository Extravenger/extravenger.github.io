---
layout: page
title: "Contact"
permalink: /contact/
---

<style>
  /* Make sure the contact-container is positioned in the middle of the page */
  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
    justify-content: center; /* Center vertically */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Adjust position to truly center */
    text-align: center;
  }

  /* Style the social links to look neat */
  .social-links {
    list-style: none;
    padding: 0;
  }

  .social-links li {
    margin: 10px 0;
  }

  .social-links a {
    text-decoration: none;
    font-size: 18px;
    color: #333;
    transition: color 0.3s ease;
  }

  .social-links a:hover {
    color: #0073e6;
  }
</style>

<div class="contact-container">
  <h1>Contact Me</h1>
  <p>Feel free to reach out via my social media profiles:</p>

  <ul class="social-links">
    <li><a href="https://github.com/Extravenger" target="_blank"><i class="fab fa-github"></i> GitHub</a></li>
    <li><a href="https://www.linkedin.com/in/amitmorr/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
    <!-- Add more social links as needed -->
  </ul>
</div>
