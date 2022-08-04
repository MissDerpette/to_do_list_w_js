


document.querySelector('#push').onclick = function (){
        // if no value, a msg will pop up
    if(
        document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }


    else{
        // to add new list
        const value =  document.querySelector('#newtask input').value
        document.querySelector('#tasks').innerHTML
        +=`   
        <div class="task">
            <span id="taskname">
                ${value}
            </span>
            <button class="delete">
                 <i class="far fa-trash-alt"></i>

            </button>
        </div>
        `;

        // to delete listed task
        var current_tasks = document.querySelectorAll(".delete");
        for (var i=0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        
        // to cross out existing list
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i < tasks.length; i++){
            tasks[i].onclick = function(){
                console.log(this)
                this.classList.toggle('completed');
                

            }
        
        }

        // to clear input field
        document.querySelector('#newtask input').value = "";
    }
}

