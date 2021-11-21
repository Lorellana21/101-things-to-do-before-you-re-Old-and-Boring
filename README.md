# 101-things-to-do-before-you-re-Old-and-Boring

I have created an application to manage a list of tasks. It consist of a literal object with the list of tasks and their status.

My goal is:

1. Display a sentence indicating how many tasks there are.
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

a) **First step**. I have prepared a class that modifies each task so that if it is a completed task `completed: true`, the text will appear crossed out.

b) **List of tasks**. I am going to paint on the screen all the tasks in the list, each completed task must be crossed out

c) **Let's make it dynamic**. I am going to add the necessary logic to complete tasks. Adding a checkbox input to each task. The checkbox for completed tasks must be checked. In addition, when the user marks the task as completed by checking the checkbox, several things should happen:

- the task must be shown as completed (crossed out)
- we can modify its status (completed property) in the tasks array.

d) **Total tasks**. A sentence saying: You have X tasks. Y completed and Z to be done. Every time a task is checked/unchecked this information should update.
