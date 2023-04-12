const youtubeDl = require('youtube-dl-exec');
const os = require('os');
const path = require('path');

function downloadVideo(url) {
    if (!url) {
      alert('Please enter a valid YouTube video URL');
      return;
    }
    const downloadDir = path.join(__dirname, 'yt'); // 'yt' folder in the same directory as the app
    const options = {
      'ignore-errors': true,
      'no-playlist': true,
      'output': path.join(downloadDir, '%(title)s.%(ext)s')
    };
    youtubeDl(url, options).then(output => {
      console.log('Video downloaded successfully', output);
      alert('Video downloaded successfully');
    }).catch(err => {
      console.error('Error downloading video', err);
      alert('Error downloading video');
    });
}
  