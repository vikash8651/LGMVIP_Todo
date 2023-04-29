document.getElementById('add').onclick = () => {    
    document.getElementById('paste').innerHTML += `
        <div class="task_added">
            <span id="task_name">
                <input type="checkbox" name="done" style= "margin:10px; height:20px; width:20px;">
                ${document.getElementById('todo').value}
            </span>
            <button class="remove curs">
                X
            </button>
        </div>
        `;
       
        var current_tasks = document.querySelectorAll(".remove");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
           
        }
}
