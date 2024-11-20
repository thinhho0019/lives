const ffmpeg = require('fluent-ffmpeg');
// YouTube RTMP server URL and stream key (replace with your stream key)
const rtmpUrl = 'rtmp://a.rtmp.youtube.com/live2'; // YouTube RTMP server URL
const streamKey = '';  // Replace with your YouTube stream key
// Video file path (you can replace this with webcam input or another video source)
const videoPath = "./1119.mp4"  // Replace with your video path
// Construct the full RTMP URL
const fullRtmpUrl = `${rtmpUrl}/${streamKey}`;
// Start the FFmpeg command to stream the video
ffmpeg()
  .input(videoPath)  // Input video file
  .inputOptions('-stream_loop -1')
  .inputOptions('-re')  // Read input at native frame rate (real-time)
  .videoCodec('libx264')  // Video codec: H.264
  .audioCodec('aac')      // Audio codec: AAC
  .audioFrequency(44100)  // Audio sample rate
  .audioChannels(2)       // Audio channels (stereo)
  .audioBitrate('192k')   // Audio bitrate
  .videoBitrate('3000k')  // Video bitrate (adjust based on your requirements)
  .output(fullRtmpUrl)     // Output to the RTMP server
  .outputOptions('-r 30')  // Đặt tần suất khung hình là 30fps
  .outputOptions('-g 120')
  .outputOptions([
    '-preset veryfast', // Encoding speed (balance between speed and compression)
    '-f flv'            // Output format: FLV (required for RTMP)
  ])
  .on('start', function(commandLine) {
    console.log('FFmpeg process started with command:', commandLine);
  })
  .on('error', function(err, stdout, stderr) {
    console.error('Error:', err.message);
    console.error('FFmpeg STDERR:', stderr);
  })
  .on('end', function() {
    console.log('Streaming finished.');
  })
  .run();