## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)
```js
class Person{
    constructor(name,age,gender){
this.name=name;
this.age=age;
this.gender=gender;
    }
    eat(food){
return food
    }
    sleep(time){
return time
    }
    walk(steps){
return steps
    }
}

class Player extends Person{
    constructor(name,age,gender,sportName){
        super(name,age,gender)
this.sportName=sportName
    }
    play(){
retrun this.sportName
    }
}
class Teacher extends Person{
    constructor(name,age,gender,instituteName){
         super(name,age,gender)
    this.instituteName=instituteName
    }
    teach(){
        return this.instituteName
    }
}
class Artist extends Person{
    constructor(name,age,gender,kind){
         super(name,age,gender)
   this.instituteName=instituteName
    }
    createArt(){
        return this.instituteName
    }
}
class Cricketer extends Person{
    constructor(name,age,gender,teamName){
         super(name,age,gender)
this.teamName=instituteName
    }
    playCricket(){
        return this.teamName
    }
}

```