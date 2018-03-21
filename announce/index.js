const googlehome = require('google-home-notifier')

var args = process.argv.slice(2, process.argv.length);
var msg = args.length > 0 ? args.join(' ') : '通知内容が指定されませんでした';

var isJapanese = false;
for (var i = 0; i < msg.length; ++i) {
  if (msg.charCodeAt(i) >= 256) {
    isJapanese = true;
    break;
  }
}

const language = isJapanese ? 'ja' : 'en';
googlehome.device('リビング', language);
googlehome.ip('192.168.0.18');
googlehome.notify(msg, function(res) {
  console.log(res);
});
