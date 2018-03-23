var firebase = require("firebase");

var firebaseConfig = require('./firebase-config');
firebase.initializeApp(firebaseConfig);

//jsonからvalueに一致する値取得
const getJsonData = (value, json) => {
  for (var word in json)  if (value == word) return json[word]
  return json["default"]
}

//database更新時
const path = "/googlehome";
const key = "word";
const db = firebase.database();
db.ref(path).on("value", function(changedSnapshot) {
  const value = changedSnapshot.child(key).val();
  if (value) {
    const words = value.split(" ");
    const command = getJsonData(words[0], {
      //読み上げ
      "announce": () => {
        const command = "sh /usr/src/app/announce/index.sh ";
        const content = words.slice(1, words.length).join(" ");
        return command + content.replace(/'/g,"\\'");
      },

      "chigau": () => {
        const command = "sh /usr/src/app/chigau/index.sh ";
        return command;
      }
    })();

    if (command) {
      console.log(command);
      const exec = require('child_process').exec;
      exec(command);

      db.ref(path).set({[key]: ""});
    }
  }
});
