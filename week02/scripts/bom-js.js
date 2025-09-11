const button = document.querySelector('button');
const input = document.querySelector('#favchap');
document.getElementById("button").innerText = "Enter a chapter";
const list = document.querySelector('#list');



button.addEventListener("click", function(){
    if (input.value.trim() !== ""){
        const li = document.querySelector('li');
        li.textContent = input.value;
        button.textContent = "X";
        li.append(deleteButton);
        list.append(li);
    }
})
const deleteButton = document.querySelector('button');
deleteButton.addEventListener("click", function(){
    list.removeChild(li);
    input.focus();
    input.value = "";
    input.focus();
})

