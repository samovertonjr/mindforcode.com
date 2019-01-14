---
title: Primitive Values vs Reference Values
date: '2019-01-10'
thumbnail: '../../assets/blog-icons/js-logo.png'
---

This year I have a goal of understanding how to build complex applications using the correct programming patterns. I don't have a programming pattern that I am knowingly using when I build anything. I use React in some projects at home and at work and I just follow the patterns used by the framework. This is fine but I want to explore how to build complex applications with the proper use of design patterns. To dive deeper into design pattern I need to learn and understand is how JavaScript objects work. Before we get into breaking down objects we have to understand what are **Primative Types** and **Reference Types**.

## Primitives Types

```js
// Number
const num = 22;

//String
const str = 'string';

//Boolean: true or false
const bool = false;

//Undefined
const undef = undefined;

//Null
const nullable = null;

//Symbol
const sym = Symbol();
```

_Primative Types are stored by value._ This is the key principle to understanding primitives.

What does stored by value mean?

It means when you give a variable a primitive value ex. `const num = 24;` the variable has a copy of the value. Lets think of primitve values like a phone(variable) and an app(value) . We both can put the same app(value) on our phones(variables) but we both have our own separate copy of the app(value). So if I manually changed the app's name on my phone it wouldn't affect your app(value) because we are storing separate copies of it.

Lets see an example:

```js
let yourApp = 'Happy Birds';
let myApp = yourApp;

console.log(yourApp); // 'Happy Birds'
console.log(myApp); // 'Happy Birds'

//Now I want to be sneaky and change the app's name so yu can't reconize
myApp = 'Mad Birds';

console.log(myApp); // 'Mad Birds'
console.log(yourApp); // 'Happy Birds'

//It didn't work!!
```

Did you see what happened?

This is how it all went down. You found a new app and put it on your phone `let yourApp = 'Happy Birds';` I was so excited to play the game and I asked you to send it to my phone `let myApp = yourApp;` When we did a console.log() we saw that we had the same copy of the app or so I thought. I wanted to be sneaky and change our app's name to 'Mad Birds' to get a good laugh but it was you who had the last laugh. You knew that we stored separate copies of the app on our phone so any changes I made to my app wouldn't affect your app. You are so smart and now we know what _stored by value_ means.

## Reference Types

Reference Types are objects. That's it! Mic Drop 🎤.

I'm joking about being done but it is half the battle. I am not going into a lot of detail about objects just yet I have a post coming soon that will go over major details of an object. In this moment I want you to get a good idea why objects are consider reference types.

First lets see how to create an object.

```js
let obj = {};
```

There are a few other ways to create an object but this would be one of the most commom ways you'll see it created.

Now we need to understand how reference types works.

Reference types or objects are stored in memory and the variable just gives us access to that location in memory.

I need an example to see what is going on:

```js
let person = {
  name: 'Sam',
};
```

The variable `let person =` does not store the value `{name: 'Sam'}` it is just shows us it's location in memory. Reference types can't be stored in a variable because they already occupy memory space. Since it is already stored, the variable just says 'I know where this thing is!' and shows us the way or the more specifically the value in memory.

Let us think about reference types or objects like a document that we both can edit in real-time like Google Docs. Our devices are variables and the document is a reference value. I create a new document(reference value) that has my essay that I share with you and ask for your feedback. On both of our devices(variables) we see the same exact essay because we are referencing the same document(reference value). You were a little angry about the trick I tried to play on you earlier so you delete the entire essay only on your device(variable). But on both of our devices(variables) we see the essay that you deleted. This is because we are not storing the information on each device(variable) we are storing it in memory on the document. Our devices(variables) are pointing us to the same place where the document(reference value) lives.

Let me show you.

```js
let myDoc = {
  liveDoc: 'This is the Essay',
};
let yourDoc = myDoc;

console.log(myDoc.liveDoc); // 'This is the Essay'
console.log(yourDoc.liveDoc); // 'This is the Essay'

//Now you delete my essay
yourDoc.liveDoc = 'nothing';

console.log(myDoc.liveDoc); // 'nothing'
console.log(yourDoc.liveDoc); // 'nothing'
```

`myDoc` and `yourDoc` are showing the same thing because they are pointing to the same reference value in memory. This can be tough to get your head around and it may take a few times for you to look at this and understand what is going on. It took me a while to fully get how Reference types works. If you run into any trouble hit me up on twitter and I'll help.

## Summary

- Primative types are stored by value.

- Reference types or objects are stored in memory and the variable just gives us access to that location in memory.
