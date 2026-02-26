---
layout: post
title:  "Scorpion C2: Building a Command & Control Framework from Scratch - Part 1"
date:   2025-02-26 19:00:00 +0000
image: /assets/img/posts/scorpion-logo.png
tags: [c2, red-team, development, offensive-security]
---

> *"The scorpion strikes not out of malice, but because it is its nature. In the shadows, patience is the deadliest weapon."*

# Introduction

It all started while scrolling through X (formerly Twitter), diving deep into the offensive security community's discussions. Post after post, I kept seeing developers sharing their journey of building custom Command & Control (C2) frameworks. The more I read, the more I asked myself: **why not develop one myself?**

The idea was both exciting and terrifying. Building a C2 framework from scratch isn't just about writing code—it's about understanding the intricate dance between attacker and defender, the cat-and-mouse game that defines modern cybersecurity. But that's exactly what made it appealing.

Thus, **Scorpion** was born.

# Why "Scorpion"?

The name wasn't chosen randomly. Like the arachnid it's named after, this C2 framework embodies several key characteristics:

- **Patient** – Waits silently for the right moment to strike
- **Precise** – Delivers payloads with surgical accuracy
- **Resilient** – Survives in harsh environments
- **Deadly** – When it strikes, it's effective

A scorpion doesn't chase its prey—it waits, blends into its environment, and strikes when the time is right. That's the philosophy behind this project.

# Architecture Overview

Before writing a single line of code, I spent considerable time designing the architecture. A C2 framework is only as good as its foundation, and cutting corners here would lead to problems down the road.

## High-Level Design

Scorpion follows a classic three-tier architecture:

```
                    ┌───────────────────────────────┐
                    │         OPERATOR (UI)         │
                    │  WPF Desktop Application .NET │
                    └───────────────┬───────────────┘
                                    │
                           WebSocket (Secure)
                                    │
                                    ▼
                    ┌───────────────────────────────┐
                    │         TEAM SERVER           │
                    │  Cross-Platform .NET 8.0 App  │
                    │                               │
                    │  Listeners | Tasks | Profiles │
                    └───────────────┬───────────────┘
                                    │
                            HTTPS (Encrypted)
                                    │
                                    ▼
                    ┌───────────────────────────────┐
                    │           AGENTS              │
                    │    C++ Implants (Windows)     │
                    └───────────────────────────────┘
```

Let me break down each component.

## The Team Server

The Team Server is the brain of the operation. Built with **.NET 8.0 as a cross-platform console application**, it can run on Windows, Linux, or macOS. The server handles:

- **Agent Registration** – When an agent checks in for the first time, it registers with the server, providing system information like hostname, username, process ID, architecture, AV product, integrity level, and more
- **Task Management** – Operators queue tasks through the UI, and the server distributes them to the appropriate agents via a concurrent task queue
- **Listener Management** – Supports multiple listeners with separate ports for agent traffic (HTTPS) and operator connections (WebSocket)
- **Multi-Operator Support** – Multiple operators can connect simultaneously via WebSocket, sharing access to all agents with session management and authentication
- **Profile System** – Malleable C2-style profiles for configuring agent behavior (sleep times, jitter, user agents, injection settings)

I chose .NET 8.0 for several reasons:
- **Cross-platform** – Deploy the server anywhere
- **Performance** – Modern .NET is incredibly fast with low memory footprint
- **Async/Await** – Native async support is perfect for handling multiple concurrent agent connections
- **Single Binary** – Can be compiled to a single self-contained executable

## The Operator UI

The Operator interface is a **WPF (Windows Presentation Foundation) desktop application**. Why WPF over a web interface? Several reasons:

- **Responsiveness** – Native desktop apps feel snappier than web applications
- **Rich Interactions** – Complex features like file browsers and process managers are easier to implement
- **Offline Capabilities** – The UI can cache data and remain functional during brief disconnections

The UI connects to the Team Server via WebSocket, providing real-time updates when agents check in or tasks complete. Key features include:

- Agent management with detailed system information (OS, AV, integrity level, architecture)
- Interactive console for each agent with command history
- Tabbed interface for managing multiple agents simultaneously
- Split-view for monitoring two agents side by side
- File browser for remote file system navigation
- Process manager for viewing and manipulating remote processes
- Pivot graph for visualizing network relationships

## The Agent (Implant)

This is where things get interesting. The agent is written entirely in **C++** for several critical reasons:

- **Performance** – Native code executes faster and uses less memory
- **Flexibility** – Direct access to Windows APIs without runtime dependencies
- **Evasion** – Easier to implement anti-detection techniques at a low level
- **No Dependencies** – Unlike .NET or Python, no runtime installation required
- **Small Footprint** – Compiled binary is compact and efficient

The agent communicates with the Team Server over HTTPS, blending in with normal web traffic. Each check-in follows a simple flow:

1. Agent sends a beacon request with its unique identifier
2. Server responds with any queued tasks (JSON format)
3. Agent executes tasks and sends results on the next check-in
4. Rinse and repeat with configurable sleep intervals and jitter

# Design Decisions

## Communication Protocol

I opted for **HTTPS** as the primary communication channel. While it's not the stealthiest option (dedicated C2 detection tools can still identify patterns), it offers several advantages:

- **Ubiquity** – HTTPS traffic is everywhere; one more connection rarely raises alarms
- **Encryption** – TLS provides confidentiality out of the box
- **Proxy Support** – Most corporate environments allow HTTPS through their proxies

The communication is **JSON-based**, making it easy to debug during development while remaining flexible enough for complex data structures. For binary data like shellcode, I implemented **Base45 encoding** which is more compact than Base64 and adds an extra layer of obfuscation.

## Agent Identification

Each agent is identified by a unique **hardware-derived ID (HWID)** combined with the process ID. This ensures:

- Persistence across reboots (HWID remains constant)
- No duplicate registrations from the same machine
- Reliable agent tracking even if the process restarts
- Unique identification when multiple agents run on the same host

## Profile System

Inspired by Cobalt Strike's Malleable C2, Scorpion implements a **profile system** that allows operators to customize agent behavior:

```json
{
  "name": "stealth",
  "injector": {
    "spawn-to": "c:\\windows\\system32\\rundll32.exe",
    "parent-process": "explorer.exe",
    "use-rwx": false
  },
  "network": {
    "sleep-seconds": 60,
    "jitter-percent": 25,
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)..."
  },
  "evasion": {
    "unhook-ntdll": true,
    "block-dlls": true,
    "amsi-bypass": true
  }
}
```

Profiles can be switched on-the-fly, allowing operators to adapt to different environments and detection capabilities.

## Tasking Model

Scorpion uses an **asynchronous tasking model**. The operator queues a task, and the agent picks it up on its next check-in. This approach:

- Reduces the agent's network footprint
- Allows the agent to operate even when temporarily disconnected
- Makes timing-based detection more difficult
- Supports configurable sleep and jitter for unpredictable beaconing

# What's Coming in Part 2

In the next part of this series, I'll dive deep into the agent development, covering:

- Windows API integration for system enumeration
- Process injection techniques
- In-process command execution (BOF-style operations)
- EDR evasion strategies (NTDLL unhooking, BlockDLLs, AMSI bypass)
- The cat-and-mouse game with security solutions

Building Scorpion has been an incredible learning experience, pushing me to understand Windows internals at a level I never had before. Every feature implemented, every detection bypassed, adds another tool to the arsenal.

Stay tuned for Part 2, where the real fun begins.

---

*The Scorpion C2 project is developed for educational purposes and authorized security testing only. Always obtain proper authorization before conducting any security assessments.*
