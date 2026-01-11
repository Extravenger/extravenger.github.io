---
layout: page
title: "Contact"
permalink: /contact/
---

<style>
  /* General Reset */
  body, html {
    height: 100%;
    overflow-x: hidden;
  }

  /* Animated particles background */
  .particles-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(255, 100, 100, 0.25);
    border-radius: 50%;
    animation: float 20s infinite;
  }

  .particle:nth-child(1) { left: 8%; animation-delay: 0s; animation-duration: 25s; }
  .particle:nth-child(2) { left: 20%; animation-delay: 2s; animation-duration: 20s; }
  .particle:nth-child(3) { left: 35%; animation-delay: 4s; animation-duration: 28s; }
  .particle:nth-child(4) { left: 50%; animation-delay: 1s; animation-duration: 22s; }
  .particle:nth-child(5) { left: 65%; animation-delay: 3s; animation-duration: 26s; }
  .particle:nth-child(6) { left: 80%; animation-delay: 5s; animation-duration: 24s; }

  @keyframes float {
    0%, 100% {
      transform: translateY(100vh) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
      transform: translateY(90vh) scale(1);
    }
    90% {
      opacity: 1;
      transform: translateY(10vh) scale(1);
    }
    100% {
      transform: translateY(-10vh) scale(0);
      opacity: 0;
    }
  }

  /* Page Title */
  .contact-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff !important;
    opacity: 0;
    animation: titleReveal 1s ease-out 0.2s forwards;
    text-shadow: 0 0 40px rgba(255, 100, 100, 0.4),
                 0 4px 20px rgba(0, 0, 0, 0.5);
    margin: 40px 0 10px;
    letter-spacing: 10px;
  }

  @keyframes titleReveal {
    0% {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
      letter-spacing: 20px;
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
      letter-spacing: 5px;
    }
  }

  /* Subtitle */
  .contact-subtitle {
    text-align: center;
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 1rem;
    color: #888;
    margin-bottom: 50px;
    opacity: 0;
    animation: fadeIn 0.8s ease-out 0.6s forwards;
  }

  .contact-subtitle span {
    color: #ff6464;
  }

  @keyframes fadeIn {
    to { opacity: 1; }
  }

  /* Container for the cards */
  .contact-page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 30px 20px 80px;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    z-index: 1;
  }

  /* Card Container */
  .contact-card {
    perspective: 1000px;
    width: 220px;
    height: 220px;
    flex-shrink: 0;
    opacity: 0;
    transform: translateY(30px);
    animation: cardFadeIn 0.6s ease-out forwards;
  }

  .contact-card:nth-child(1) { animation-delay: 0.8s; }
  .contact-card:nth-child(2) { animation-delay: 1.0s; }
  .contact-card:nth-child(3) { animation-delay: 1.2s; }

  @keyframes cardFadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Inner Wrapper for 3D Flip */
  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
    border-radius: 20px;
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
    border-radius: 20px;
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
    border: 2px solid rgba(255, 100, 100, 0.2);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4),
                0 0 60px rgba(255, 100, 100, 0.05);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .contact-card:hover .card-front {
    border-color: rgba(255, 100, 100, 0.5);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5),
                0 0 80px rgba(255, 100, 100, 0.1);
  }

  /* Front overlay gradient */
  .card-front::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .contact-card:hover .card-front::after {
    opacity: 1;
  }

  /* Platform icon on front */
  .card-front .platform-icon {
    width: 80px;
    height: 80px;
    z-index: 1;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5));
    transition: transform 0.3s ease;
    color: #fff;
  }

  .contact-card:hover .platform-icon {
    transform: scale(1.15);
  }

  .card-back {
    background: linear-gradient(145deg, 
      rgba(30, 30, 50, 0.95) 0%, 
      rgba(20, 20, 35, 0.98) 100%
    );
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    border: 2px solid rgba(255, 100, 100, 0.3);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4),
                0 0 60px rgba(255, 100, 100, 0.08);
  }

  /* Platform name on back */
  .card-back .platform-name {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: #64ffda;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  /* Styling for Links */
  .card-back a {
    color: #ff6464;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 12px 24px;
    border: 2px solid rgba(255, 100, 100, 0.3);
    border-radius: 30px;
    background: rgba(255, 100, 100, 0.1);
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .card-back a:hover {
    background: rgba(255, 100, 100, 0.2);
    border-color: #ff6464;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 100, 100, 0.25);
  }

  .card-back a .arrow {
    transition: transform 0.3s ease;
  }

  .card-back a:hover .arrow {
    transform: translateX(4px);
  }

  /* Username display (for Discord) */
  .card-back .username {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem;
    color: #eee;
    padding: 12px 20px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    user-select: all;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .card-back .username:hover {
    background: rgba(255, 100, 100, 0.1);
    border-color: rgba(255, 100, 100, 0.3);
  }

  .card-back .copy-hint {
    font-size: 0.7rem;
    color: #666;
    margin-top: 8px;
  }

  /* Glow effect ring around cards */
  .contact-card::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: conic-gradient(
      from 0deg,
      transparent,
      rgba(255, 100, 100, 0.3),
      transparent,
      rgba(255, 100, 100, 0.3),
      transparent
    );
    border-radius: 22px;
    z-index: -1;
    opacity: 0;
    animation: rotateGlow 4s linear infinite;
    transition: opacity 0.3s ease;
  }

  .contact-card:hover::before {
    opacity: 1;
  }

  @keyframes rotateGlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Platform-specific colors */
  .contact-card.github .card-front {
    background: linear-gradient(145deg, #24292e 0%, #1a1e22 100%);
  }

  .contact-card.linkedin .card-front {
    background: linear-gradient(145deg, #0077b5 0%, #005885 100%);
  }

  .contact-card.discord .card-front {
    background: linear-gradient(145deg, #5865F2 0%, #4752c4 100%);
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .contact-title {
      font-size: 2rem;
    }

    .contact-page-container {
      gap: 30px;
      padding: 20px 15px 60px;
    }

    .contact-card {
      width: 180px;
      height: 180px;
    }

    .card-front .platform-icon {
      width: 60px;
      height: 60px;
    }

    .card-back a {
      font-size: 1rem;
      padding: 10px 20px;
    }
  }

  @media (max-width: 480px) {
    .contact-title {
      font-size: 1.6rem;
      letter-spacing: 5px;
    }

    .contact-subtitle {
      font-size: 0.85rem;
    }

    .contact-page-container {
      flex-direction: column;
      gap: 25px;
    }

    .contact-card {
      width: 200px;
      height: 200px;
    }

    .card-back a {
      font-size: 0.95rem;
    }

    .card-back .username {
      font-size: 0.9rem;
    }
  }
</style>

<!-- Animated background particles -->
<div class="particles-container">
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
</div>

<h2 class="contact-title">Get In Touch</h2>
<p class="contact-subtitle">Hover over the cards to <span>connect</span></p>

<div class="contact-page-container">
  <!-- GitHub Card -->
  <div class="contact-card github">
    <div class="glow-ring"></div>
    <div class="card-inner">
      <div class="card-front">
        <svg class="platform-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </div>
      <div class="card-back">
        <span class="platform-name">GitHub</span>
        <a href="https://github.com/Extravenger" target="_blank">
          Extravenger <span class="arrow">→</span>
        </a>
      </div>
    </div>
  </div>

  <!-- LinkedIn Card -->
  <div class="contact-card linkedin">
    <div class="card-inner">
      <div class="card-front">
        <svg class="platform-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </div>
      <div class="card-back">
        <span class="platform-name">LinkedIn</span>
        <a href="https://www.linkedin.com/in/amitmorr/" target="_blank">
          Amit Mor <span class="arrow">→</span>
        </a>
      </div>
    </div>
  </div>

  <!-- Discord Card -->
  <div class="contact-card discord">
    <div class="card-inner">
      <div class="card-front">
        <svg class="platform-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
        </svg>
      </div>
      <div class="card-back">
        <span class="platform-name">Discord</span>
        <span class="username">Extravenger#8538</span>
        <span class="copy-hint">Click to select</span>
      </div>
    </div>
  </div>
</div>
