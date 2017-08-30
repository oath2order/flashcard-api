var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var senaCardCa = new BasicCard("Who are the Senators of California?", "Dianne Feinstein and Kamala Harris");
var senaCardMa = new BasicCard("Who are the Senators of Massachusetts?", "Elizabeth Warren and Edward Markey");
var senaCardTx = new BasicCard("Who are the Senators of Texas?", "John Cornyn and Ted Cruz");
var presClozeCard = new ClozeCard("The 44th president of the United States was Barack Obama.", "Barack Obama") 
var brokeClozeCard = new ClozeCard("This cloze card is broken and will not work at all", "Donald Trump");

console.log(senaCardCa.front);
console.log(senaCardCa.back);
console.log(senaCardMa.back);
console.log(presClozeCard.fullText);
console.log(presClozeCard.cloze);
console.log(presClozeCard.partialText);
console.log(brokeClozeCard.partialText);
