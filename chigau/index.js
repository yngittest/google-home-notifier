const googlehome = require('google-home-notifier')

const language = 'ja';
googlehome.device('リビング', language);
googlehome.ip('192.168.0.18');
googlehome.play('https://s3-ap-northeast-1.amazonaws.com/my-mp3-test-bucket/chigau-output.mp3', (res) => {
  console.log(res);
});
