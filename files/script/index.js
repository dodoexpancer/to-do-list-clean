var ul = document.getElementById("list-to-do")
var li;
var idItem;
var item;
addTask = function(){
    if(document.getElementById('task').value != ''){
        item = document.getElementById('task') 
        idItem = ul.childElementCount;
        li = createElem(item.value, idItem);
        li.appendChild(removeTaskBtn(idItem))
        ul.appendChild(li)
        item.value = '';
    }
}

removeTask = function(itemId){
    for(i = 0; i < ul.children.length; i++){
        if(ul.children[i].getAttribute("index") == itemId){
            ul.children[i].remove()
        }
    }
}

createElem = function(itemValue, itemId){
    let li = document.createElement('li');
    li.setAttribute('index', itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;
}

removeTaskBtn = function(itemId){
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removeTask("+itemId+")");
    btn.innerHTML = "X"
    return btn;
}

