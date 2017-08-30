module.exports = function(fullText, cloze) {
  this.fullText = fullText;
  this.cloze = cloze;
  this.removeCloze = function() {
    var newString = "";
    if (this.fullText.indexOf(this.cloze) != -1) {
      newString = this.fullText.replace(cloze, ' ... ');
      return newString;
    } else {
      newString = "Error! Not a valid Cloze card!";
      return newString;
    }
  };
  this.partialText = this.removeCloze();
}