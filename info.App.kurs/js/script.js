const mainLink = document.querySelector('#mainbtn'),
      logoMainLink = document.querySelector('#logomainbtn'),
      tasksLink = document.querySelector('#tasksbtn'),
      main = document.querySelector('.timetable'),
      tasks = document.querySelector('.tasks');

mainLink.addEventListener('click', (event) => {
    event.preventDefault();
if (main.classList.contains('hidden')) {
        tasksLink.classList.remove("linkDecoration")
        mainLink.classList.add("linkDecoration")
        main.classList.add("show")
        main.classList.remove("hidden")
        tasks.classList.add("hidden")
        tasks.classList.remove("show")
    }  
});

logoMainLink.addEventListener('click', (event) => {
    event.preventDefault();
if (main.classList.contains('hidden')) {
        tasksLink.classList.remove("linkDecoration")
        mainLink.classList.add("linkDecoration")
        main.classList.add("show")
        main.classList.remove("hidden")
        tasks.classList.add("hidden")
        tasks.classList.remove("show")
    }
});

tasksLink.addEventListener('click', (event) => {
    event.preventDefault();
 if (tasks.classList.contains('hidden')) {
        mainLink.classList.remove("linkDecoration")
        tasksLink.classList.add("linkDecoration")
        tasks.classList.add("show")
        tasks.classList.remove("hidden")
        main.classList.add("hidden")
        main.classList.remove("show")
    }
});