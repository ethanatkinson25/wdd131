const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');
const li = document.querySelector('li');
const deleteButton = document.querySelector('button');

li.textContent = input.value;
button.textContent = "X";
li.append(deleteButton);
list.append(li);