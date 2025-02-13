---
layout: page
title: "Contact"
permalink: /contact/
---

<style>
  /* Ensure the body and html elements are set to prevent scrolling */
  body, html {
    height: 100%;
    margin: 0;
    overflow: hidden; /* Prevent scrolling */
  }

  /* Use Flexbox for the layout of the page */
  .page-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%; /* Full page height */
  }

  /* Center the contact-container in the viewport */
  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;  /* Center horizontally */
    justify-content: center;  /* Center vertically */
    text-align: center;
    flex-grow: 1;  /* Makes sure content grows to fill available space */
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

<div class="page-wrapper">
  <div class="contact-container">
    <h1>Contact Me</h1>
    <p>Feel free to reach out via my social media profiles:</p>

  <ul class="social-links">
    <li><a href="https://github.com/Extravenger" target="_blank">GitHub</a></li>
    <li><a href="https://www.linkedin.com/in/amitmorr/" target="_blank">LinkedIn</a></li>
    <!-- Add more social links as needed -->
  </ul>
  </div>
</div>
