let main = document.querySelector(`main`)
const testData = [
  {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  },
]

function app(obj) {
  return `<p>${obj.title}</p>
<form>
<input type="radio" name="browser"  onclick="this.value"
 value="1">${obj.options[0]}<br>
 <input type="radio" name="browser"  onclick="this.value"
 value="2">${obj.options[2]}<br>
 <input type="radio" name="browser" onclick="this.value"
 value="3">${obj.options[3]}<br>
 <input type="radio" name="browser"  onclick="this.value"
 value="4">${obj.options[4]}<br>
</form>
`
}

testData.forEach((day) => {
    main.innerHTML=app(day)

})

