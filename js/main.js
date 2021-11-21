'use strict';
/*
Proceso 1:
1- Cuando arranque la página pinto el listado de tareas.
2- Escuchar un evento sobre las tareas pintadas
Proceso 2:
1. Una vez que la usuaria ha clicado:
- recoger en qué elemento ha hecho click
- modificar datos (estado de la tarea)
- volver a pintar mis tareas
- escuchar evento
*/

const listElement = document.querySelector ('.js-list');

const tasks = [
    { name: 'Send a message in a bottle', completed: true },
    { name: 'Run up an escalator the wrong way', completed: true },
    { name: 'Make and origami crane', completed: true },
    {
      name: 'Learn how to tell when someone likes you (and when they don’t)',
      completed: false
    },
    { name: 'Keep a dream diary', completed: true },
    { name: 'Touch these creatures: Mouse, butterfly, worm, bird, spider, snake, frog, fish, bug', completed: true },
    { name: 'Prepare yourself for fame', completed: true },
    { name: 'Learn to play an instrument', completed: true },
    { name: 'Play a computer game to the end', completed: true },
    { name: 'Have an embarrassing moment and get over it', completed: true },
    { name: 'Get your school involved in a world record attempt', completed: true },
    { name: 'Paint a picture good enough to hang on a wall', completed: true },
    { name: 'Learn to whistle', completed: true },
    { name: 'See a ghost', completed: true },
    { name: 'Fart and Burp in hilariously inappropriate places', completed: true },
    { name: 'Make a swear box', completed: true },
    { name: 'Act in a play', completed: true },
    { name: 'Win Something', completed: true },
    { name: 'Make a t-shirt', completed: true },
    { name: 'Stay up all night', completed: true },
    { name: 'Sleep all day', completed: true },
    { name: 'Invent a secret code', completed: true },
    { name: 'Learn to do a card trick', completed: true },
    { name: 'Grow something from a seed', completed: true },
    { name: 'Start a collection', completed: true },
    { name: 'Help save the planet', completed: true },
    { name: 'Turn back time', completed: true },
    { name: 'Learn to do a party trick', completed: true },
    { name: 'Climb to the top of a mountain', completed: true },
    { name: 'Make a one-minute movie', completed: true },
    { name: 'Host a party', completed: true },
    { name: 'Visit: A safari park, a carnival, a fort, a theme park, a farm, an aquarium, the countryside, another country, a capitol city', completed: true },
    { name: 'Learn to bake a cake', completed: true },
    { name: 'Hide a treasure and leave a map for friends to find', completed: true },
    { name: 'Learn how to ask someone out (and how to dump them)', completed: true },
    { name: 'Start your own blog', completed: true },
    { name: 'Write lyrics for a song', completed: true },
    { name: 'Make a time capsule', completed: true },
    { name: 'Be a genius', completed: true },
    { name: 'Take care of an animal', completed: true },
    { name: 'Learn to like (or at least try): broccoli, shellfish, lettuce, brussel sprouts, carrots, smelly cheese, coconut, peas', completed: true },
    { name: 'April Fool someone', completed: true },
    { name: 'Do something charitable', completed: true },
    { name: 'Teach you grandparents something new', completed: true },
    { name: 'Invent a new game', completed: true },
    { name: 'Go as fast as you can', completed: true },
    { name: 'Make your own buttons', completed: true },
    { name: 'Watch these films: attach link to other post', completed: true },
    { name: 'Read these books: attach link here', completed: true },
    { name: 'Pretend to be ill convincingly', completed: true },
    { name: 'Save your allowance (or paycheck) for a month and spend it all at once', completed: true },
    { name: 'Learn to swim', completed: true },
    { name: 'Succeed at something you’re bad at', completed: true },
    { name: 'Be a daredevil', completed: true },
    { name: 'Invent a new trend', completed: true },
    { name: 'Know who your friends are', completed: true },
    { name: 'Plant a Tree (to climb when you’re older)', completed: true },
    { name: 'Start a band', completed: true },
    { name: 'Camp out in the back yard', completed: true },
    { name: 'Learn to live without something you love for a week', completed: true },
    { name: 'Join a club', completed: true },
    { name: 'Cook a meal', completed: true },
    { name: 'List the things your parents said they’d tell you when you’re older', completed: true },
    { name: 'Make your bike look cool', completed: true },
    { name: 'Learn to juggle', completed: true },
    { name: 'Have a snowball fight', completed: true },
    { name: 'Build the ultimate sandcastle', completed: true },
    { name: 'Take part in a TV show', completed: true },
    { name: 'Make a scene in a public place', completed: true },
    { name: 'Spend Christmas in another country', completed: true },
    { name: 'Do something nice without being asked', completed: true },
    { name: 'See your music idol perform live', completed: true },
    { name: 'Have a sleepover', completed: true },
    { name: 'Become a spy', completed: true },
    { name: 'Watch a tadpole grow to a frog', completed: true },
    { name: 'Learn to say useful phrases in other languages', completed: true },
    { name: 'Make your own greeting cards', completed: true },
    { name: 'Hold a garage sale', completed: true },
    { name: 'Build an igloo', completed: true },
    { name: 'Start your own secret society', completed: true },
    { name: 'Research your family tree', completed: true },
    { name: 'Learn to skip stones', completed: true },
    { name: 'Dye your hair', completed: true },
    { name: 'Lobby your local representative', completed: true },
    { name: 'Write a story and get it published', completed: true },
    { name: 'Sing in front of an audience', completed: true },
    { name: 'Learn to use long words (and drop them in everyday conversation)', completed: true },
    { name: 'Blame someone else', completed: true },
    { name: 'Learn to stick up for yourself', completed: true },
    { name: 'Get from A to B using a map', completed: true },
    { name: 'Send a Valentine', completed: true },
    { name: 'Have your own plot in a garden', completed: true },
    { name: 'Build your own website', completed: true },
    { name: 'See your name in print', completed: true },
    { name: 'Make a unique milkshake', completed: true },
    { name: 'Glue coins to the floor (and trick people in to trying to pick them up)', completed: true },
    { name: 'Learn to take great photos', completed: true },
    { name: 'Drive something', completed: true },
    { name: 'Be vegetarian for a week', completed: true },
    { name: 'Meet someone famous', completed: true },
    { name: 'Decide what you want to be when you grow up', completed: true },
  ];

function paintTasks(){
  let html = ""; //variable que contiene los li
  let className = "";
  let checked = "";

  for(let i = 0; i < tasks.length; i++){
    let task = tasks[i];
     
    if(task.completed === true){
      className = "completed-task";
      checked = "checked";
    }
    else{
      className = "";
      checked = "";
    }
    //Se pinta en tres líneas por mejor visualización, pero puede ir perfectamente en una sola.
    html += `<li class="${className}">`
    html += `<input class="js-checkbox" type="checkbox" value="${i}" ${checked}/>`
    html += `${task.name}</li>`
  }
  listElement.innerHTML = html;
  listenClick();
}

function listenClick(){
  const checkboxElements = document.querySelectorAll ('.js-checkbox');//Aqui se crea un array
//Ahora tengo que escuchar un evento sobre cada uno de los elementos del array, por eso hay que recorrerlo.
for(let i = 0; i < checkboxElements.length; i++){
  checkboxElements[i].addEventListener("change", handlerCheck);
}
}

function handlerCheck(event){
console.log(event.target.value);
const clicked = event.target.value;
tasks[clicked].completed = !tasks[clicked].completed;//Le pone el valor contrario a lo que tiene. Solo sirve para booleanos
//Volver a pintar:
paintTasks();

}



paintTasks();