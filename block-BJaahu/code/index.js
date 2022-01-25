// Prototypal pattern
// let methods={
//     isAnswerCorrect:function(index){
//         return index=== this.correctAnswerIndex
//     },
//     getCorrectAnswer:function(){
//         return this.options[this.correctAnswerIndex]
//     }
// }

// function Question(title,options,correctAnswerIndex){
//     let obj = Object.create(methods)
// obj.title=title;
// obj.options=options;
// obj.correctAnswerIndex=correctAnswerIndex;
// return obj
// }




// Pseudoclassical Pattern
// Question.prototype={
//     isAnswerCorrect:function(index){
//         return index=== this.correctAnswerIndex
//     },
//     getCorrectAnswer:function(){
//         return this.options[this.correctAnswerIndex]
//     }
// }

// function Question(title,options,correctAnswerIndex){
// this.title=title;
// this.options=options;
// this.correctAnswerIndex=correctAnswerIndex;
// }

// class
class Question{
    constructor(title,options,correctAnswerIndex){
        this.title=title;
        this.options=options;
        this.correctAnswerIndex=correctAnswerIndex;
    }
    isAnswerCorrect(index){
        return index=== this.correctAnswerIndex
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex]
    }
}



let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );