function routing () {
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
}

routing ()


const tasks = [];
  
  (function(arrOfTasks) {
      const objOfTasks = arrOfTasks.reduce ((acc, task) => {
        acc[task._id] = task;
        return acc;
      }, {});
      // ElementsUI
      const sectionContainer = document.querySelector('.task-progress')
      const form = document.forms['addTask'];
      const inputTitle = form.elements['title'];
      const inputBody = form.elements['body'];

      // Events
      renderAllTasks(objOfTasks);
      form.addEventListener('submit', onFormSubmitHandler);
      sectionContainer.addEventListener('click', onDeletehandler)

      function renderAllTasks(tasksList) {
        if (!tasksList) {
          console.log('Отсутствует список задач');
          return;
        }

        const fragment = document.createDocumentFragment()
        Object.values(tasksList).forEach(task => {
          const section = listItemTemplate(task);
          fragment.appendChild(section);
        });
        sectionContainer.appendChild(fragment)
      }

      function listItemTemplate({_id, title, body} = {}) {
        const section = document.createElement('div');
        section.classList.add('card', 'mb-3');
        section.setAttribute('data-task-id', _id)
        
        const div = document.createElement('div');
        div.classList.add('card-body')

        const ul = document.createElement('list-group')
        ul.classList.add('list-group')

        const li = document.createElement("li");
        li.classList.add('list-group-item');
        
        const span = document.createElement('span');
        span.textContent = title;
        span.classList.add('card-create-title');

        const wrapBtn = document.createElement('div')
        wrapBtn.classList.add('card-btn')

        const doneBtn = document.createElement('button');
        doneBtn.textContent  = "ГОТОВО";
        doneBtn.classList.add('card-btn-done');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent  = "УДАЛИТЬ";
        deleteBtn.classList.add('card-btn-del');

        const article = document.createElement('p');
        article.textContent = body;
        article.classList.add('card-create-descr')

        section.appendChild(div);
        div.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(span);
        li.appendChild(article);
        li.appendChild(wrapBtn);
        wrapBtn.appendChild(doneBtn);
        wrapBtn.appendChild(deleteBtn);

        return section;
      };

      function onFormSubmitHandler(e) {
        e.preventDefault();
        const titleValue = inputTitle.value;
        const bodyValue = inputBody.value;
        
        if (!titleValue || !bodyValue) {
          alert("Пожалуйста введите название и описание задачи.");
          return
        }
        const task = createNewTask(titleValue, bodyValue);
        const listItem = listItemTemplate(task);
        sectionContainer.insertAdjacentElement("beforeend", listItem)
        form.reset();
      }

      function createNewTask(title, body) {
        const newTask = {
          title,
          body,
          completed: false,
          _id: `task-${Math.random()}`
        };
        objOfTasks[newTask._id] = newTask;

        return { ...newTask };
        
      }

      function deleteTask(id) {
        const { title } = objOfTasks[id];
        const isConfirm = confirm(`Вы уверены что хотите удалить задачу: ${title} ?`);
        if (!isConfirm) return isConfirm;
        delete objOfTasks[id];
        return isConfirm;
      }

      function deleteTaskFromHtml (confirmed, el) {
        if(!confirmed) return;
        el.remove();
      }

      function onDeletehandler({ target }) {
        if(target.classList.contains('card-btn-del')) {
          const parent = target.closest('[data-task-id]');
          const id = parent.dataset.taskId;
          const confirmed = deleteTask(id);
          deleteTaskFromHtml(confirmed, parent)
        }
      }
  })(tasks);
  