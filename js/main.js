'use strict';

const tasks = [
    { name: 'Send a message in a bottle', completed: false },
    { name: 'Run up an escalator the wrong way', completed: false },
    { name: 'Make and origami crane', completed: false },
    {
      name: 'Learn how to tell when someone likes you (and when they don’t)',
      completed: false
    },
    { name: 'Keep a dream diary', completed: false },
    { name: 'Touch these creatures: Mouse, butterfly, worm, bird, spider, snake, frog, fish, bug', completed: false },
    { name: 'Prepare yourself for fame', completed: false },
    { name: 'Learn to play an instrument', completed: false },
    { name: 'Play a computer game to the end', completed: false },
    { name: 'Have an embarrassing moment and get over it', completed: false },
    { name: 'Get your school involved in a world record attempt', completed: false },
    { name: 'Paint a picture good enough to hang on a wall', completed: false },
    { name: 'Learn to whistle', completed: false },
    { name: 'See a ghost', completed: false },
    { name: 'Fart and Burp in hilariously inappropriate places', completed: false },
    { name: 'Make a swear box', completed: false },
    { name: 'Act in a play', completed: false },
    { name: 'Win Something', completed: false },
    { name: 'Make a t-shirt', completed: false },
    { name: 'Stay up all night', completed: false },
    { name: 'Sleep all day', completed: false },
    { name: 'Invent a secret code', completed: false },
    { name: 'Learn to do a card trick', completed: false },
    { name: 'Grow something from a seed', completed: false },
    { name: 'Start a collection', completed: false },
    { name: 'Help save the planet', completed: false },
    { name: 'Turn back time', completed: false },
    { name: 'Learn to do a party trick', completed: false },
    { name: 'Climb to the top of a mountain', completed: false },
    { name: 'Make a one-minute movie', completed: false },
    { name: 'Host a party', completed: false },
    { name: 'Visit: A safari park, a carnival, a fort, a theme park, a farm, an aquarium, the countryside, another country, a capitol city', completed: false },
    { name: 'Learn to bake a cake', completed: false },
    { name: 'Hide a treasure and leave a map for friends to find', completed: false },
    { name: 'Learn how to ask someone out (and how to dump them)', completed: false },
    { name: 'Start your own blog', completed: false },
    { name: 'Write lyrics for a song', completed: false },
    { name: 'Make a time capsule', completed: false },
    { name: 'Be a genius', completed: false },
    { name: 'Take care of an animal', completed: false },
    { name: 'Learn to like (or at least try): broccoli, shellfish, lettuce, brussel sprouts, carrots, smelly cheese, coconut, peas', completed: false },
    { name: 'April Fool someone', completed: false },
    { name: 'Do something charitable', completed: false },
    { name: 'Teach you grandparents something new', completed: false },
    { name: 'Invent a new game', completed: false },
    { name: 'Go as fast as you can', completed: false },
    { name: 'Make your own buttons', completed: false },
    { name: 'Watch these films: attach link to other post', completed: false },
    { name: 'Read these books: attach link here', completed: false },
    { name: 'Pretend to be ill convincingly', completed: false },
    { name: 'Save your allowance (or paycheck) for a month and spend it all at once', completed: false },
    { name: 'Learn to swim', completed: false },
    { name: 'Succeed at something you’re bad at', completed: false },
    { name: 'Be a daredevil', completed: false },
    { name: 'Invent a new trend', completed: false },
    { name: 'Know who your friends are', completed: false },
    { name: 'Plant a Tree (to climb when you’re older)', completed: false },
    { name: 'Start a band', completed: false },
    { name: 'Camp out in the back yard', completed: false },
    { name: 'Learn to live without something you love for a week', completed: false },
    { name: 'Join a club', completed: false },
    { name: 'Cook a meal', completed: false },
    { name: 'List the things your parents said they’d tell you when you’re older', completed: false },
    { name: 'Make your bike look cool', completed: false },
    { name: 'Learn to juggle', completed: false },
    { name: 'Have a snowball fight', completed: false },
    { name: 'Build the ultimate sandcastle', completed: false },
    { name: 'Take part in a TV show', completed: false },
    { name: 'Make a scene in a public place', completed: false },
    { name: 'Spend Christmas in another country', completed: false },
    { name: 'Do something nice without being asked', completed: false },
    { name: 'See your music idol perform live', completed: false },
    { name: 'Have a sleepover', completed: false },
    { name: 'Become a spy', completed: false },
    { name: 'Watch a tadpole grow to a frog', completed: false },
    { name: 'Learn to say useful phrases in other languages', completed: false },
    { name: 'Make your own greeting cards', completed: false },
    { name: 'Hold a garage sale', completed: false },
    { name: 'Build an igloo', completed: false },
    { name: 'Start your own secret society', completed: false },
    { name: 'Research your family tree', completed: false },
    { name: 'Learn to skip stones', completed: false },
    { name: 'Dye your hair', completed: false },
    { name: 'Lobby your local representative', completed: false },
    { name: 'Write a story and get it published', completed: false },
    { name: 'Sing in front of an audience', completed: false },
    { name: 'Learn to use long words (and drop them in everyday conversation)', completed: false },
    { name: 'Blame someone else', completed: false },
    { name: 'Learn to stick up for yourself', completed: false },
    { name: 'Get from A to B using a map', completed: false },
    { name: 'Send a Valentine', completed: false },
    { name: 'Have your own plot in a garden', completed: false },
    { name: 'Build your own website', completed: false },
    { name: 'See your name in print', completed: false },
    { name: 'Make a unique milkshake', completed: false },
    { name: 'Glue coins to the floor (and trick people in to trying to pick them up)', completed: false },
    { name: 'Learn to take great photos', completed: false },
    { name: 'Drive something', completed: false },
    { name: 'Be vegetarian for a week', completed: false },
    { name: 'Meet someone famous', completed: false },
    { name: 'Decide what you want to be when you grow up', completed: false },
  ];

const listElement = document.querySelector ('.js-list');
const textElement = document.querySelector(".js-text");

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
    html += `  ${task.name}</li>`
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

for(let i = 0; i < clicked.length; i++){
  const results = `Tienes ${tasks.length} tareas. ${clicked.length} completadas y ${clicked.length} por realizar`;
textElement.innerHTML = `<p>${results}</p>`;
}
paintTasks();
refreshNumbers();
}

paintTasks();

function refreshNumbers() {
  const total = tasks.length;
  const completed = document.querySelectorAll('.completed-task').length;
  const left = total - completed;
  const results = `Tienes ${total} tareas. ${completed} completadas y ${left} por realizar`;
  textElement.innerHTML = `<p>${results}</p>`;
}
  