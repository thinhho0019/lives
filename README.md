🎯 Purpose
The main goal of this service is to stream content (pre-recorded videos or dynamic content) to YouTube Live via RTMP protocol, running 24/7 or on a scheduled basis. This setup is ideal for:

Automated live content (e.g., news, AI-generated content)

Replaying videos in loop

Running long-term YouTube livestreams

🚀 Features
🎥 Stream any video file or live source to YouTube Live

🔁 Loop streaming support

🛡️ Robust process management with PM2

📦 Lightweight Node.js implementation

💾 Easy configuration via .env or config.json

🔄 Auto-restart and log management via PM2

🛠️ Tech Stack
Node.js

FFmpeg (used to push video to RTMP endpoint)

PM2 for process monitoring and auto-restart

Optional: cron or node-schedule for timed streams
