'use strict';

const express = require('express');
const line = require('@line/bot-sdk');
const PORT = process.env.PORT || 3000;

const config = {
    channelAccessToken: '8ig40ARfS9ZLo0SW+o/7uZqhjjDxLN0HN/5Ol9wD0SaHhdeRGt+OHM9VTXOGck5wuzXSfa65DkgTrRTkacbaVWJh+MEgri+TF8Vw0k4tApZ7HJNcqnmBYJCJwbt8p/T6LHf4O5LTJNhuJ9uYpdUS1AdB04t89/1O/w1cDnyilFU=',
    channelSecret: 'f0c2a541842142aa9666a5895acb80a6'
};

const app = express();

app.post('/webhook', line.middleware(config), (req, res) => {
    console.log(req.body.events);
    Promise
      .all(req.body.events.map(handleEvent))
      .then((result) => res.json(result));
});

const client = new line.Client(config);

function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }
  let replyText = '';
  let songs = event.message.text
  switch(songs) {
    case "七級":
        replyText = '1st：quick master(reform version)(NORMAL)' + '\n' + '2nd：中華急行(NORMAL)' + '\n' + '3rd：Eternal Tears(NORMAL)' + '\n' + 'Final：CALL(NORMAL)'; 
        break;
    case "六級":
        replyText = '1st：I\'m so Happy(NORMAL)' + '\n' + '2nd：Wuv U(NORMAL)' + '\n' + '3rd：diagra(NORMAL)' + '\n' + 'Final：Element of SPADA(NORMAL)'; 
        break;
    case "五級":
        replyText = '1st：I\'m Screaming LOVE(NORMAL)' + '\n' + '2nd：突撃!ガラスのニーソ姫!(NORMAL)' + '\n' + '3rd：avant-guerre(NORMAL)' + '\n' + 'Final：バビロニア(NORMAL)'; 
        break;
    case "四級":
        replyText = '1st：Fly you to the star(NORMAL)' + '\n' + '2nd：ƒƒƒƒƒ(NORMAL)' + '\n' + '3rd：サヨナラ・ヘヴン(NORMAL)' + '\n' + 'Final：She is my wife(NORMAL)'; 
        break;
    case "三級":
        replyText = '1st：alla turca con passione(NORMAL)' + '\n' + '2nd：405nm(Ryu☆mix)(NORMAL)' + '\n' + '3rd：SigSig(NORMAL)' + '\n' + 'Final：REINCARNATION(HYPER)'; 
        break;
    case "二級":
        replyText = '1st：sync(NORMAL)' + '\n' + '2nd：satfinal(NORMAL)' + '\n' + '3rd：sakura storm(NORMAL)' + '\n' + 'Final：ライオン好き(HYPER)'; 
        break;
    case "一級":
        replyText = '1st：Red. by Full Metal Jacket(NORMAL)' + '\n' + '2nd：MENDES(NORMAL)' + '\n' + '3rd：BREATH(NORMAL)' + '\n' + 'Final：With your Smile(HYPER)'; 
        break;
    case "初段":
        replyText = '1st：Blind Justice～Torn souls, Hurt Faiths～(NORMAL)' + '\n' + '2nd：Funny shuffle(HYPER)' + '\n' + '3rd：GOLD RUSH(NORMAL)' + '\n' + 'Final：I Was The One(80\'s EUROBEAT STYLE)(HYPER)'; 
        break;
    case "二段":
        replyText = '1st：Monkey Dance(HYPER)' + '\n' + '2nd：Zenius -I- vanisher(HYPER)' + '\n' + '3rd：Drive Me Crazy(HYPER)' + '\n' + 'Final：Abyss(HYPER)'; 
        break;
    case "三段":
        replyText = '1st：かげぬい～Ver.BENIBOTAN～(HYPER)' + '\n' + '2nd：Presto(HYPER)' + '\n' + '3rd：BRIDAL FESTIVAL!!!(HYPER)' + '\n' + 'Final：CaptivAte～裁き～(HYPER)'; 
        break;
    case "四段":
        replyText = '1st：era (nostalmix)(HYPER)' + '\n' + '2nd：虹色(HYPER)' + '\n' + '3rd：TA・DA☆YO・SHI(HYPER)' + '\n' + 'Final：R5(HYPER)'; 
        break;
    case "五段":
        replyText = '1st：Follow Tomorrow(HYPER)' + '\n' + '2nd：Mermaid girl(HYPER)' + '\n'+ '3rd：Todestrieb(HYPER)' + '\n'+ 'Final：NEW GENERATION -もう、お前しか見えない-(HYPER)';
        break;
    case "六段":
        replyText = '1st：quasar(HYPER)' + '\n' + '2nd：バンブーソード・ガール(HYPER)' + '\n'+ '3rd：DIAVOLO(HYPER)' + '\n'+ 'bloomin\' feeling(HYPER)';
        break;
    case "七段":
        replyText = '1st：ANDROMEDA II(HYPER)' + '\n' + '2nd：アルストロメリア(ANOTHER)' + '\n'+ '3rd：V(HYPER)' + '\n'+ 'Final：THE SAFARI(HYPER)';
        break;
    case "八段":
        replyText = '1st：NO LIMIT-オレ達に限界は無い-(ANOTHER)' + '\n' + '2nd：革命(HYPER)' + '\n'+ '3rd：KAMIKAZE(ANOTHER)' + '\n'+ 'Final：gigadelic(HYPER)';
        break;
    case "九段":
        replyText = '1st：Line 4 Ruin(ANOTHER)' + '\n' + '2nd：Golden Palms†(LEGGENDARIA)' + '\n'+ '3rd：four pieces of heaven(ANOTHER)' + '\n'+ 'Final：Scripted Connection⇒ A mix(ANOTHER)';
        break;
    case "十段":
        replyText = '1st：紫陽花 -AZISAI-(ANOTHER)' + '\n' + '2nd：IMPLANTATION(ANOTHER)' + '\n'+ '3rd：FIRE FIRE(ANOTHER)' + '\n'+ 'Final：Broken Sword(ANOTHER)';
        break;
    case "中伝":
        replyText = '1st：Godspeed(ANOTHER)' + '\n' + '2nd：轟け！恋のビーンボール！！(ANOTHER)' + '\n'+ '3rd：Reflux(ANOTHER)' + '\n'+ 'Final：MENDES(ANOTHER)';
        break;
    case "皆伝":
        replyText = '1st：嘆きの樹(ANOTHER)' + '\n' + '2nd：灼熱Beach Side Bunny(ANOTHER)' + '\n'+ '3rd：卑弥呼(ANOTHER)' + '\n'+ 'Final：冥(ANOTHER)';
        break;
        default:
        replyText = '調べたい段位を、漢字で入力して下さい' ;
    };

  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: replyText //実際に返信の言葉を入れる箇所
  });
}

app.listen(PORT);
console.log(`Server running at ${PORT}`);