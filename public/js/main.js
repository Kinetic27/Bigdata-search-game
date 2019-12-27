var questions = [];

questions[0] = ['욕할머니 국밥 위치는?, 10331'];
questions[1] = ['닛케이 지수 장중 사상 최고치는?', '20204'];
questions[2] = ['소니 코리아 오디오 전속모델은?', '20329'];
questions[3] = ['압둘알리 과로사의 남동생 이름은?', '20524'];
questions[4] = ['와나나 작가의 레진코믹스 연제작 이름은?', '10832'];
questions[5] = ['동탄 예당고등학교 빅데이터 기장 이름은?', '10311'];
questions[6] = ['무구정광대다나리경 국보번호는?', '10821'];
questions[7] = ['BJ 보겸 시골집 주소는?', '20527'];
questions[8] = ['챔피언스리그 최연소 해트트릭은?', '10504'];
questions[9] = ['2019년 발롱도르 22위는?', '10506'];
questions[10] = ['동탄 예당고등학교의 교화는?', '20528'];
questions[11] = ['동탄 예당고등학교의 교목은?', '20528'];

var number = Math.floor(Math.random() * (questions.length));
var img_num = Math.floor(Math.random() * 7) + 1;

document.getElementById("text").innerHTML = "<h1>" + questions[number][0] + ' <br /><br /> - ' + questions[number][1] + "-</h1>";

document.getElementById("img").src = "img/" + img_num + ".jpg";
