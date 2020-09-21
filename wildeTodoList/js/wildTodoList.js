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



// Submit forms
document.getElementById( "newTaskForms").onsubmit = function() {
    let title = document.getElementById("title").value;
    let message = document.getElementById("message").value;
    let date = Date.now();

    // console.log(title);
    // console.log(message);
    create_task_bloc(title,date,date);
    title = document.getElementById("title").value = '';
    message = document.getElementById("message").value ='';
    return false;
};



function create_task_bloc(title,date=null,message=""){
    let el = document.createElement('div');
	el.innerHTML = "Nouvelle task : " + title;
    document.getElementById('wtl-task-container').appendChild(el);
    
    //Create Container
    let container = document.createElement('div');
    let html;
    //Create Checkbox
    let checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    container.appendChild(checkbox);


        //Create title
        let title_html = document.createElement('span');
        title_html.setAttribute("class", "wtl-task-title");
        checkbox.appendChild(title_html);

        // <span class="wtl-task-title">Task</span>


    // Finish push the result
    document.getElementById('wtl-task-container').appendChild(container);
    
}

/*

                <div>
                  <div><input type="checkbox"><span class="wtl-task-title">Task</span></div>
                  <div class="wtl-task-date">Created on 14/12/1980</div>
                  <div class="wtl-task-msg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sunt, vel quibusdam facere nesciunt.</div>
                </div>
                */



