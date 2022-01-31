## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // The output is `Hello John` because this is point to an object.
console.log(user2.sayHello()); // The output is `Hello Arya` because this is point to an object.
console.log(user.sayHello.call(user2)); //The output is `Hello Arya` because we use Explicit binding.
console.log(user.sayHello.call(user2, 'Hey')); // The output is `Hey Arya` because we use Explicit binding and second argument that we pass inside call can update the value of message the parameter of function sayHello.
console.log(user.sayHello.apply(user2, ['Hey'])); // The output is `Hey Arya` because we use Explicit binding and second argument that we pass inside apply can update the value of message the parameter of function sayHello.
console.log(typeof user.sayHello.bind(user2)); // It is a typeOf function because bind create new function.
console.log(user.sayHello.bind(user2)()); // In this we use Explicit binding bind and it can create new function and after that we can call it that's why the output is `Hello Arya`.
console.log(userSayHello()); // The output is Hello undefined because sayHello function is store inside a userSayHello and there is no value of username.
console.log(typeof userSayHello.bind(user2)); // It is a typeOf function because bind create new function.
console.log(userSayHello.bind(user2)()); // In this we use Explicit binding bind and it can create new function and after that we can call it that's why the output is `Hello Arya`.
console.log(user3.sayHello()); // TypeError because sayHello is not defined inside in user3 object
console.log(userSayHello.apply(user3)); // The output is `Hello Bran` because we use Explicit binding apply
console.log(userSayHello.call(user3)); // The output is `Hello Bran` because we use Explicit binding call
console.log(typeof new MainUser()); // Object because new keyword create a new object
console.log(typeof new MainUser()); // Object because new keyword create a new object
console.log(new MainUser().sayHello()); // Hello Tyrion
console.log(new MainUser().sayHello.call(user2)); // The output is `Hello Arya` because we use Explicit binding.
console.log(new MainUser().sayHello.call(user)); //The output is `Hello John` because we use Explicit binding.
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // The output is `Welcome! John` because we use Explicit binding and second argument that we pass inside apply can update the value of message the parameter of function sayHello.
```
