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

// Submit forms
document.getElementById( "newTaskForms").onsubmit = function() {
    let title = document.getElementById("title").value;
    let message = document.getElementById("message").value;
    let date = Date.now();
    let error_msg = "";

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
    
    create_task_bloc(title,date,message);
    title = document.getElementById("title").value = '';
    message = document.getElementById("message").value ='';
    return false;
};


/* Check if var is empty*/
function isEmpty(str) {
    return !str.trim().length;
}

/* Create bloc HTML*/
function create_task_bloc(title,date=null,message=""){
    number_task++;

    //Create Container
    let container_html = document.createElement('div');
    container_html.setAttribute("class", "wtl-panel");
    container_html.setAttribute("id", "task-id-"+number_task);

    //Create title
    let title_html = document.createElement('div');
    title_html.setAttribute("class", "wtl-task-title");
    title_html.innerHTML =  title;

    //Create delete button
    let delete_button_html = document.createElement('a');
    delete_button_html.setAttribute("class", "btn-wtl-delete");
    delete_button_html.innerHTML =  "Supprimer";
    delete_button_html.setAttribute('href', 'javascript:delete_task_bloc('+number_task+')');
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

function delete_task_bloc(id){
    document.getElementById('task-id-'+id).remove();
}




