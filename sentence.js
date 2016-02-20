var store_sentence = new Array();
var store_meaning = new Array();
var number_of_sentence=10; // you can change the number of sentences 



store_sentence[0] = "Boys be ambitious"
store_meaning[0] = "소년이여 야망을 가져라"

store_sentence[1] = "Boys be ambitious"
store_meaning[1] = "소년이여 야망을 가져라"

store_sentence[2] = "Boys be ambitious"
store_meaning[2] = "소년이여 야망을 가져라"

store_sentence[3] = "Boys be ambitious"
store_meaning[3] = "소년이여 야망을 가져라"

store_sentence[4] = "Boys be ambitious"
store_meaning[4] = "소년이여 야망을 가져라"

store_sentence[5] = "Boys be ambitious"
store_meaning[5] = "소년이여 야망을 가져라"

store_sentence[6] = "Boys be ambitious"
store_meaning[6] = "소년이여 야망을 가져라"

store_sentence[7] = "Boys be ambitious"
store_meaning[7] = "소년이여 야망을 가져라"

store_sentence[8] = "Boys be ambitious"
store_meaning[8] = "소년이여 야망을 가져라"

store_sentence[9] = "Boys be ambitious"
store_meaning[9] = "소년이여 야망을 가져라"

store_sentence[10] = "123"
store_meaning[10] = "123"

store_sentence[11] = "Boys be ambitious"
store_meaning[11] = "소년이여 야망을 가져라"

store_sentence[12] = "Boys be ambitious"
store_meaning[12] = "소년이여 야망을 가져라"

store_sentence[13] = "Boys be ambitious"
store_meaning[13] = "소년이여 야망을 가져라"

store_sentence[14] = "Boys be ambitious"
store_meaning[14] = "소년이여 야망을 가져라"

store_sentence[15] = "Boys be ambitious"
store_meaning[15] = "소년이여 야망을 가져라"

store_sentence[16] = "Boys be ambitious"
store_meaning[16] = "소년이여 야망을 가져라"

store_sentence[17] = "Boys be ambitious"
store_meaning[17] = "소년이여 야망을 가져라"

store_sentence[18] = "Boys be ambitious"
store_meaning[18] = "소년이여 야망을 가져라"

store_sentence[19] = "19Boys be ambitious"
store_meaning[19] = "소년이여 야망을 가져라"

store_sentence[20] = "20Boys be ambitious"
store_meaning[20] = "소년이여 야망을 가져라"

store_sentence[21] = "21Boys be ambitious"
store_meaning[21] = "소년이여 야망을 가져라"

store_sentence[22] = "22Boys be ambitious"
store_meaning[22] = "소년이여 야망을 가져라"

store_sentence[23] = "23Boys be ambitious"
store_meaning[23] = "소년이여 야망을 가져라"

store_sentence[24] = "24Boys be ambitious"
store_meaning[24] = "소년이여 야망을 가져라"

var sentence = new Array();
var meaning = new Array();

var today = new Date();
var from = new Date(2016, 1, 18) // 기준이 되는 날짜 2016 / 2 /17
var day_passed = today.getTime() - from.getTime();
day_passed = day_passed/(60*60*24*1000);
day_passed = parseInt(day_passed);

var a;
var b=day_passed*10;


if (b>store_sentence.length) {
	b = 0;
}

if ((b+9)<=store_sentence.length) {
	for(a=0; a<number_of_sentence; a++) {  
	sentence[a] = store_sentence[b];
	meaning[a] = store_meaning[b];
	b++;
	}
}

else if ((b+9)>store_sentence.length) {
	for(a=0; a<(store_sentence.length%number_of_sentence); a++) {  
		sentence[a] = store_sentence[b];
		meaning[a] = store_meaning[b];
		b++;
	}
}
