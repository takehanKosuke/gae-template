//モジュール宣言
//==================================
// slackのWebhookURL
function targetSlack(){
  return "hogehoge";
}

function today() {
  return Utilities.formatDate(new Date(), "JST", "yyyy/MM/dd");
}

// 監視する対象のスプレッドシートを設定
function targetSheet(){
  //特定のシートを指定する時
  //var sheetURL = "hogehoge"
  //return SpreadsheetApp.getActive().getSheetByName(sheetURL);

  //現在のシートを使う時
  return SpreadsheetApp.getActiveSpreadsheet();
}

//ユーザー名をメンション付きの文字列に変換
//hogehogeにはuser_idが入る
function convertWorkerID(name) {
  if (name == "ユーザー名") {
    return "<@hogehoge>";
  } else if (name == "ユーザー名")  {
     return "<@hogehoge>"
  }　else {
    return "名無し"
  }
}

//↓デバッグする時に使えるやつ
//Browser.msgBox()
//==================================


//何かしらのアクションが起こった時に呼び出してslackに送る文字を設定する
function createText(e){
  var sheet = targetSheet()
  /*
  ~使えそうなメソッド~
  変更箇所の値を返す・・・e.range.getValue()
  変更箇所の行数を返す・・・e.range.getRow()
  変更箇所の列を数字で返す・・・e.range.getRow()
  */
  var postText = "hogehoge"


  postSlack(postText);
}


//引数の文字列をslackに投げる
function postSlack(text){
  var options = {
    "method" : "POST",
    "headers": {"Content-type": "application/json"},
    "payload" : JSON.stringify({
      // channel名を記述
      "channel" : "hogehoge",
      "text" : text,
      })
  };
  UrlFetchApp.fetch(targetSlack(), options);
}
