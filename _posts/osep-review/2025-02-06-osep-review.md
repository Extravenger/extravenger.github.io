---
layout: post
title:  OSEP Review
date:   2025-02-06 22:57:49 +0000
image: /assets/img/certs/OSEP.png
certificate: /assets/img/certs/OSEP.png
exampass: /assets/img/posts/osep-pass.png
---

# Course Overview

Offsec’s Offensive Security Experienced Penetration Tester (OSEP) certification is an advanced penetration testing course that builds on the knowledge and techniques taught in OSCP focusing specifcially on evasion techniques and bypassing defences within AD environments.

The course covers various topics, which some of them are:

- Client-Side Attacks.
- Process Injection and Migration.
- Antivirus Evasion.
- Application Allow-Listing.
- Bypassing Network Filters.
- Windows and Linux Lateral Movement.
- Active Directory Exploitation.
- Microsoft SQL Attacks.

Each topic is covered in depth, and Offsec has done a great job explaining each one.
Many people expect Red Teaming content in the course, which makes sense, but this is not a Red Team course. Instead, it's the next level of penetration testing after the OSCP.

# The Labs Modules

Each topic has its own dedicated lab setup. I highly recommend completing all the lab exercises for each module, as they provide hands-on practice that reinforces the material, allowing you to learn by doing rather than just watching videos. After all, the essence of this course is hands-on hacking.<br>
Each module also includes an extra mile section, which I strongly suggest you complete. These exercises go beyond the core curriculum, offering additional insights such as the basics of Win32 APIs. In my opinion, it's important to dive deeper and conduct research beyond the course's focus, as this will enhance your understanding and skills.

# The Challenges

Currently, there are 7 challenges in total, with Offsec recently adding a new one. The challenges are arranged in increasing order of difficulty, so challenge 7 will be the toughest. The first four challenges focus on specific topics, while challenges 5 through 7 offer the best simulation of the actual exam environment, providing the closest experience to the real thing.<br>
I encourage you to approach the labs from multiple angles rather than relying on just one method.<br>For example, if you solve a step on a Windows machine, make sure you also know how to do it on a Linux machine. This way, you'll always have a backup plan if something goes wrong.

# The Exam

Without exposing too much, I began the exam at 8 AM and gained initial foothold into the internal network within the first hour. However, I spent the next 8 hours stuck, overlooking something very obvious.<br>Once I realized that, things became much smoother, and from there, it felt pretty straightforward, In addition, I can confidently say that the exam environment remained very stable for me throughout the process.<br>
After 27 hours into the exam, I successfully completed one of the key objectives needed to pass. I then dedicated an additional 9 hours to finalizing the report.<br>
Two days later, I got the results:

<figure>
<img src="{{ page.exampass }}">
</figure>

# My Five Cents

### <u>Know your tools</u>:

You can achieve the same result with multiple tools, so it's important to always have a backup tool ready. Not every tool is suited for every situation, and having alternatives ensures you're prepared for anything that comes up.

### <u>Learn to read between the lines</u>:

Learning to read between the lines is key to understanding what’s happening behind the scenes, especially when the information isn't directly in front of you.<br>For example, when you ping a machine, you can often determine whether the target system is running Linux or Windows based on the TTL value. A TTL of 63 typically indicates Linux, while 127 suggests Windows—assuming there’s a router between you and the target.<br>
This is what I mean by learning to read between the lines: understanding the context behind the output of your tools, because the data they provide can tell you so much more than what’s immediately visible.

### <u>Take notes as you go</u>:

Take notes and write up your own detailed summary for every lab you exploit. This can serve as a valuable reference for similar situations you might encounter during the exam.

### <u>Make the process efficiently</u>

While working through the labs, I was always thinking about how to optimize processes to save valuable time, especially under exam time constraints. For instance, rather than manually adding IP addresses and hostnames to `/etc/hosts`, I automated the task with a one-liner using `netexec`:

```bash
netexec smb 172.16.149.0/24 --log hosts.txt && sed -i 's/x64//g' hosts.txt && cat hosts.txt | awk '{print $9,$11,$11"."$21}' | sed 's/(domain://g' | sed 's/)//g' | uniq | sort -u | tr '[:upper:]' '[:lower:]' | sudo tee -a /etc/hosts
```

This is just one example. Think about other time-consuming tasks and find ways to streamline them for more efficiency.

### <u>Simplicity Over Complexity</u>

If you are OSCP certified, you probably already know it, the rule of KISS, or "Keep It Simple Stupid".<br>
I can't tell you how much this is effective during advanced situations you might encounter, always try to keep it simple as much as you can.

# Final Thoughts

Overall, this course is an incredible resource that can significantly elevate your penetration testing skills. If you're willing to dedicate the time and effort to both learning and practicing the material, it will undoubtedly take you to the next level in the field.<br>
Bypassing Windows Defender is a valuable skill, but in most environments I've encountered, EDRs (Endpoint Detection and Response) present the real challenge. These defenses are far more complex and demand a higher level of expertise and skill to bypass effectively in today’s security landscape. I’m hopeful that, one day, OffSec will release a course focused on tackling these advanced defenses.

I've made my course GitHub repository public to help other students, but I still encourage you to create your own tools:

[OSEPlayground][OSEP-github]

<figure>
<img src="{{ page.certificate }}">
</figure>

Thanks for reading!

[OSEP-github]: https://github.com/Extravenger/OSEPlayground

