let sentence = "The movie is not that bad, I like it";
let wordNot = sentence.indexOf("not")

console.log(wordNot);

let wordbad = sentence.indexOf("bad")

console.log(wordbad);


if (wordNot<wordbad){
let new_sentence = sentence.slice(0,wordNot) + " good " + sentence.slice(wordbad+3)
console.log(new_sentence);

}

if (wordNot>wordbad){
    console.log(sentence);
    }