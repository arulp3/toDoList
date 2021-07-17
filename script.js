var button = document.querySelector('.btn');

var inputValue = document.querySelector('.items')

var listContainer  = document.querySelector('.toDoList')

var n = new Date()

document.querySelector('.time').innerText = n.toLocaleDateString()


button.addEventListener('click', function(){
    var list = document.createElement("p");

    listContainer.appendChild(list)
    
    
     
    list.innerText = inputValue.value
    inputValue.value=""

    list.addEventListener("click", function(){
        list.style.textDecoration = "line-through"
    })
    list.addEventListener("dblclick", function(){
        listContainer.removeChild(list);
    })
})

