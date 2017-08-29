module.exports = function(fullText, cloze){
  this.fullText = fullText;
  this.cloze = cloze;
  this.partialText = "";
  this.removeCloze = function(){
    if(this.fullText.indexOf(this.cloze) != -1){
      this.partialText = this.fullText.replace(cloze, ' ... ');
    }
    else{
      console.log("Error! Not a valid Cloze card!");
    }
  };
}
