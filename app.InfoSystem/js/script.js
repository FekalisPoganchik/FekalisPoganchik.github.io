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
// Массив задач в который поступают/выводятся задачи 
// Одна задача это один объект состаящий из полей: _id, comleted(выполнена или нет), body (текст задачи), title (заголовок задачи)
  
  (function(arrOfTasks) {
    // Самовызывающая функция который передаются задачи
      const objOfTasks = arrOfTasks.reduce ((acc, task) => {
        // к масиву arrOfTasks.reduce (применяет функцию к каждому элементу масива слева - направо), на каждой итерации получаем acc(аккамулятор), task(текущую задачу)
        // Результатом будет объект объектов ключ = id значение (id comleted body title)
        acc[task._id] = task;
        // Создаем ключ по id задачи и под ключом id поле в объекте в которую будем записывать саму задачу
        return acc;
        // возвращаем acc
      }, {});
      // ElementsUI
      const sectionContainer = document.querySelector('.task-progress'),
            form = document.forms['addTask'],
            inputTitle = form.elements['title'],
            inputBody = form.elements['body'];

      // Events
      renderAllTasks(objOfTasks);
      // Вызов функции renderAllTasks(objOfTasks) (передаем в неё объект с задачей)
      form.addEventListener('submit', onFormSubmitHandler);
      // Добавление события подтверждения формы
      sectionContainer.addEventListener('click', onDeletehandler);
      // Объект события, с обработчиком клика

      function renderAllTasks(tasksList) {
        // Функция для вывода задач на страницу
        // Для добавления в DOM менее затратно, генерируется объект с задачами, а потом весь этот объект будет добавлен в список
        if (!tasksList) {
          console.log('Отсутствует список задач');
          return;
        }
        // If для проверка передачи объекта с задачами

        const fragment = document.createDocumentFragment()
        //  Создание фрагмента для наполнения 
        Object.values(tasksList).forEach(task => {
          // Принимает в качестве аргумента объект и возвращает его значения в виде массива для того что бы перебрать forEach на каждой его итерации мы получаем отдельную задачу 
          const section = listItemTemplate(task);
          // Отдельная функция для создания карточки в дом объекте, равна результату вызова функции listItemTemplate передаем одну заачу.
          fragment.appendChild(section);
          // Добавляем карточку во фрагмент 
        });
        sectionContainer.appendChild(fragment)
      }

      function listItemTemplate({_id, title, body} = {}) {
        // Функция для отрисовки карточки в дом дереве получает деструктурированый task = _id, title, body, эта функция вызывается на каждой итерации 
        const section = document.createElement('div');
        section.classList.add('card', 'mb-3');
        section.setAttribute('data-task-id', _id)
        // Вешаем атрибут с id
        
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

        // const doneBtn = document.createElement('button');
        // doneBtn.textContent  = "ГОТОВО";
        // doneBtn.classList.add('card-btn-done');

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
        // wrapBtn.appendChild(doneBtn);
        wrapBtn.appendChild(deleteBtn);

        return section;
        // Возвращаем для того что бы воспользоваться снаружи
      };

      function onFormSubmitHandler(e) {
        // функция для отправки формы
        e.preventDefault();
        const titleValue = inputTitle.value;
        // Получение значения Title
        const bodyValue = inputBody.value;
        // Получение значение Body
        
        if (!titleValue || !bodyValue) {
          alert("Пожалуйста введите название и описание задачи.");
          return
        }
        const task = createNewTask(titleValue, bodyValue);
        const listItem = listItemTemplate(task);
        // Передаем объект в эту функцию для генерации задачи
        sectionContainer.insertAdjacentElement("beforeend", listItem)
        // позволяет вставить элемент в одну из 4 позиций
        form.reset();
        // Очищает форму
      }

      function createNewTask(title, body) {
        // Создание задачи и добавление в DOM
        const newTask = {
          // На основе переданных значений создается нвоый объект задачи который можно добавить в список задач
          title,
          body,
          completed: false,
          _id: `task-${Math.random()}`
        };
        objOfTasks[newTask._id] = newTask;

        return { ...newTask };
        
      }

      function deleteTask(id) {
        // Принимает id задачи котору нужно удалить так же она спрашивает точно ли нужно это сделать 
        const { title } = objOfTasks[id];
        // Достается заголовок определнной задачи для того что бы вставить его в isConfirm
        const isConfirm = confirm(`Вы уверены что хотите удалить задачу: ${title} ?`);
        // В переменной хранится true/false
        if (!isConfirm) return isConfirm;
        // Если задача не подтверждена то не будет никаких дальнейших действий Иначе
        delete objOfTasks[id]; 
        // Удаление из объекта задачи под переданым id
        return isConfirm;
        // Возващаем isConfirm для того что бы 
      }

      function deleteTaskFromHtml (confirmed, el) {
        // Функция для удаления задачи из HTML разметки
        if(!confirmed) return;
        // Если confirmed false то прекращаем работу функции иначе
        el.remove();
        // Удаляем задачу из разметки
      }

      function onDeletehandler({ target }) {
        // Обработчик удаления таски
        if(target.classList.contains('card-btn-del')) {
          // проверка наличия класса у таргета
          const parent = target.closest('[data-task-id]');
          // У кнопки будем искать ближайшего родителя с атрибутом data-task-id
          const id = parent.dataset.taskId;
          // Получение id 
          const confirmed = deleteTask(id);
          // В переменную помещается значение true/false

          deleteTaskFromHtml(confirmed, parent)
        }
      }
  })(tasks);
  