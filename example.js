var googlehome = require('google-home-notifier');
var language = 'ja'; // if not set 'us' language will be used

googlehome.device('リビング', language); // Change to your Google Home name
// or if you know your Google Home IP
googlehome.ip('192.168.0.18');

googlehome.play('https://s3-ap-northeast-1.amazonaws.com/my-mp3-test-bucket/chigau-output.mp3', (res) => {
// googlehome.notify('あいうえお', function(res) {
  console.log(res);
});
