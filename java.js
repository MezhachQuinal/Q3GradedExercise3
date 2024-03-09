function generate(){
    var num = Math.floor(Math.random() * 1001);
    var thousands0 = Math.floor(num/1000);
    var thousands = thousands0 * 1000;
    var hundreds0 = Math.floor(num/100);
    var hundreds = hundreds0 * 100;
    var tens0 = Math.floor((num - hundreds)/10);
    var tens = tens0 * 10;
    var ones = Math.floor(num - hundreds - tens);

    document.getElementById("number").innerHTML = "Randomly generated number: " + num;
    if(num === 1000){
        document.getElementById("downbreak").innerText = "Breakdown: " + thousands + ", " + hundreds + ", " + tens + ", " + ones;
    } else if(num < 1000 && num >= 100){
        document.getElementById("downbreak").innerText = "Breakdown: " + hundreds + ", " + tens + ", " + ones;
    } else if(num < 100 && num >= 10){
        document.getElementById("downbreak").innerText = "Breakdown: " + tens + ", " + ones;
    } else if(num < 10 && num >= 1){
        document.getElementById("downbreak").innerText = "Breakdown: " + ones;
    }
    var generation = "Generated on: ";
    var date = new Date();
    var formatDate = date.toLocaleDateString('en', { timeZoneName: 'short'});
    var sentenceofdate = generation.concat(innerHTML = formatDate, ".");
    document.getElementById("date").innerHTML = sentenceofdate;
}