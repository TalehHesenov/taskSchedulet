let task = document.querySelector("#task");
        let priority = document.querySelector("#priority");
        let deadline = document.querySelector("#deadline");
        let btn = document.querySelector("#add-task");
        let divContainer = document.querySelector("#task-list");
        let addList = document.querySelector("#addList");

        btn.addEventListener("click", function () {
            let arrObj = [];
            let date = new Date(deadline.value);
            let today = new Date();

            arrObj.push({
                id: Date.now(),
                options: priority.options[priority.selectedIndex].text,
                input: task.value,
                date: deadline.value,
                complete: false
            });

            

            if (today.getTime() > date.getTime() || deadline.value == "") {

                alert("Tarix səhvdir");

            } else {
                for (let i = 0; i < arrObj.length; i++) {
                   
                    let html = `
                         <div class="task" id="${arrObj[i].id}">
                            <p>${arrObj[i].input}</p>
                            <p>Priority: ${arrObj[i].options}</p>
                            <p>Deadline: ${arrObj[i].date}</p>
                            <button class="mark-done">Mark Done</button>
                            <button class="delete-task">Delete</button>
                        </div>
                    `;
                    
                    divContainer.insertAdjacentHTML("beforeend", html);
                }

                

                task.value = "";
                deadline.value = "";



let deleteButtons = divContainer.querySelectorAll(".delete-task");
                deleteButtons.forEach(function (button) {
                    button.addEventListener("click", function () {
                        this.parentElement.remove();
                    });
                });

                let markButtons = divContainer.querySelectorAll(".mark-done");

                markButtons.forEach(function (button) {
                    button.addEventListener("click", function (e) {
                        let taskDiv = e.target.parentElement;
                        taskDiv.classList.add("task-mark");
                       for (let i = 0; i < arrObj.length; i++) {
                    
                        if (arrObj[i].id==taskDiv.id) {

                            arrObj[i].complete=true
                        }

                        
                       }
                    });
                   
                });



                addList.addEventListener("change", function () {
                    let selectedOption = addList.value;
                
                    let taskDivs = divContainer.querySelectorAll(".task");
                
                    taskDivs.forEach(function (taskDiv) {
                
                        if (selectedOption === "allList") {
                            taskDiv.style.display = "flex";
                        } 
                        else if (selectedOption === "clickList") {
                                for (let i = 0; i < arrObj.length; i++) {
                                    if (arrObj[i].complete==false&&arrObj[i].id==taskDiv.id) {
                                     taskDiv.style.display = "none";
                                    }
                                    
                                }
                            
                                
                        }
                    });
                });

            }
        });



