$("body").ready(function(){

    $(".button").click(function(){
  let inputText = $(".input").val();
  let lowerCase = inputText.toLowerCase();  
  let splitWord = lowerCase.split(" ");
  splitWord.forEach(function(word){
    let wordSplit = word.split("");
    var removed = wordSplit.splice(0, 1);
    wordSplit.push(removed);
    wordSplit.push("ay");
    $(".output").text(wordSplit.join([]));
  });
});


});