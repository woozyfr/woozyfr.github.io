/*
 /$$      /$$ /$$ /$$       /$$       /$$$$$$$$              /$$                 /$$       /$$             /$$    
| $$  /$ | $$|__/| $$      | $$      |__  $$__/             | $$                | $$      |__/            | $$    
| $$ /$$$| $$ /$$| $$  /$$$$$$$         | $$  /$$$$$$   /$$$$$$$  /$$$$$$       | $$       /$$  /$$$$$$$ /$$$$$$  
| $$/$$ $$ $$| $$| $$ /$$__  $$         | $$ /$$__  $$ /$$__  $$ /$$__  $$      | $$      | $$ /$$_____/|_  $$_/  
| $$$$_  $$$$| $$| $$| $$  | $$         | $$| $$  \ $$| $$  | $$| $$  \ $$      | $$      | $$|  $$$$$$   | $$    
| $$$/ \  $$$| $$| $$| $$  | $$         | $$| $$  | $$| $$  | $$| $$  | $$      | $$      | $$ \____  $$  | $$ /$$
| $$/   \  $$| $$| $$|  $$$$$$$         | $$|  $$$$$$/|  $$$$$$$|  $$$$$$/      | $$$$$$$$| $$ /$$$$$$$/  |  $$$$/
|__/     \__/|__/|__/ \_______/         |__/ \______/  \_______/ \______/       |________/|__/|_______/    \___/  
*/


let number_task = 0;
let version = "1.5.3";


console.log("Welcome to Wild Todo List v"+version);

if (localStorage.getItem("wildeTodoList") === null) { // in it
    init_wildeTodoList();
}

load_tasklist();

// init wildeTodoList
function init_wildeTodoList(){
    console.log("Init localStorage");
    initObj = {
        count : 0,
        tasks : [],
    }
    localStorage.setItem('wildeTodoList', JSON.stringify(initObj));
}


// load all tasks
function load_tasklist(){
    console.log("Load all tasks");
    var tmp = JSON.parse(localStorage.getItem('wildeTodoList'));
    if(tmp.tasks.length > 0){
        tmp.tasks.forEach(function(item, index, object){
            create_task_bloc(item.uuid,item.title,item.date,item.message);
        });
    }
}


// Submit forms
document.getElementById( "newTaskForms").onsubmit = function() {
    let title = document.getElementById("title").value;
    let message = document.getElementById("message").value;
    let date = Date.now();
    let error_msg = "";
    let uuid = uuidv4(); // generate uuid

    if( isEmpty(message) ) {
        error_msg += "Please fill message\n";
    }

    if( isEmpty(title) ) {
        error_msg += "Please fill title\n";
    }

    if( !isEmpty(error_msg) ) {
        alert(error_msg);
        return false;
    }

    create_task_bloc(uuid,title,date,message);
    addTaskToDatabase({
                        "uuid":uuid,
                        "title":title,
                        "msg": message,
                        "date":date
                    });
    title = document.getElementById("title").value = '';
    message = document.getElementById("message").value ='';
    return false;

};


// add to database
function addTaskToDatabase(input){
    var tmp = JSON.parse(localStorage.getItem('wildeTodoList'));
    tmp.tasks.push(input);
    tmp.count = tmp.tasks.length;
    localStorage.setItem('wildeTodoList', JSON.stringify(tmp));
}


// delete to database
function deleteTaskToDatabase(uuid){
    var tmp = JSON.parse(localStorage.getItem('wildeTodoList'));

    tmp.tasks.forEach(function(item, index, object){
        if(item.uuid === uuid){
            object.splice(index, 1);
        }
    });
    localStorage.setItem('wildeTodoList', JSON.stringify(tmp));
    console.log("Task removed :"+uuid);
}

/* Check if var is empty*/
function isEmpty(str) {
    return !str.trim().length;
}

/* Create bloc HTML*/
function create_task_bloc(uuid,title,date=null,message=""){

    //Create Container
    let container_html = document.createElement('div');
    container_html.setAttribute("class", "wtl-panel");
    container_html.setAttribute("id", "task-id-"+uuid);

    //Create title
    let title_html = document.createElement('div');
    title_html.setAttribute("class", "wtl-task-title");
    title_html.innerHTML =  title;

    //Create delete button
    let delete_button_html = document.createElement('a');
    delete_button_html.setAttribute("class", "btn-wtl-delete");
    delete_button_html.innerHTML =  "Supprimer";
    delete_button_html.setAttribute('href', 'javascript:delete_task_bloc(\''+uuid+'\')');
    title_html.appendChild(delete_button_html);
    container_html.appendChild(title_html);

    // //Create date
    let date_html = document.createElement('div');
    date_html.setAttribute("class", "wtl-task-date");
    formated_date = new Intl.DateTimeFormat('fr-FR').format(date);
    date_html.innerHTML = "Created on  : " + formated_date;
    container_html.appendChild(date_html);

    // //Create date
    let message_html = document.createElement('div');
    message_html.setAttribute("class", "wtl-task-msg");
    message_html.innerHTML = message;
    container_html.appendChild(message_html);

    // Finish push the result
    document.getElementById('wtl-task-container').appendChild(container_html);
    
}
// delete block
function delete_task_bloc(uuid){
    deleteTaskToDatabase(uuid);
    document.getElementById('task-id-'+uuid).remove();
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }