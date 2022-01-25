question.prototype={
    isAnswerCorrect:function(index){
        return index=== this.correctAnswerIndex
    },
    getCorrectAnswer:function(){
        return this.options[this.correctAnswerIndex]
    }
}

function question(title,options,correctAnswerIndex){
this.title=title;
this.options=options;
this.correctAnswerIndex=correctAnswerIndex;
}



let firstQuestion = new question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );