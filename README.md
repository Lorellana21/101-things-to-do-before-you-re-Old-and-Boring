# 101-things-to-do-before-you-are-Old-and-Boring

## What is this? 👀

Just an exercise done in the Bootcamp (about halfway through the Javascript module) which consists of an application to manage a list of tasks. ✔

The objective is to learn how to paint lists in HTML from a literal object with a list of tasks and their status.

It is necessary to:

1. Paint all the tasks on screen.
1. Cross out the ones already done.
1. Allow to mark a task as 'complete' or 'incomplete'.

Let's start from this array of data in our JavaScript file:

```
const tasks = [
  { name: 'Send a message in a bottle', completed: true },
  { name: 'Run up an escalator the wrong way', completed: true },
  { name: 'Make and origami crane', completed: true },
  {
    name: 'Learn how to tell when someone likes you (and when they don’t)',
    completed: false
  }
  ....
  .....
  ....
];
```

To tackle an exercise of this kind, where I have to bring together many of the concepts I have learned so far, organisation is key:

a) **List of tasks**: paint on the screen all the tasks in the list, each completed task must be crossed out

b) **Completed tasks must be crossed out**: with a class that modifies each task, so if it´s a completed task ``completed: true``, the text will appear crossed out.

c) **Make it dynamic**: add the necessary logic to complete tasks. A checkbox input should be added to each task. When the user marks the task as completed by checking the checkbox, several things should happen:

- the task must be shown as completed (crossed out)
- it´s possible to modify its status (completed property) in the tasks array.

d) **Total tasks**. A sentence saying: "You have ``X`` tasks. ``Y`` completed and ``Z`` to be done". Every time a task is checked/unchecked this information should update.

## Why the title?🙄

Because I have adapted the exercise to my taste. I have been inspired by a **book** that I bought on one of my trips to London and that has always fed the _Peter Pan_ in me.

The book's title says it all.📕

![](https://images-na.ssl-images-amazon.com/images/I/4109V59AF+L.jpg)

There is nothing worse than being boring, apart from being old and boring. So what are you waiting for? 👅 

Here are 101 Things to Do to keep you busy at the weekend, in the holidays or if you are just bored.😎

