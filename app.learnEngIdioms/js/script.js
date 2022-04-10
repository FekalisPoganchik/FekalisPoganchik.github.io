(function() {
    var questions = [
    {
      question: "Finger lickin good. Что бы это могло значить?",
      choices: ['Голод не тётка', 'Пальчики оближешь', 'Дай ему палец, а он всю руку откусит'],
      img: ['img/1.jpg'],
      correctAnswer: 1 
    }, 
    {
      question: "Babe in the woods. Как это перевести?",
      choices: ['Чем дальше в лес, тем больше дров', 'Мал да удал', 'Прост как дрозд'],
      img: ['img/2.jpg'],
      correctAnswer: 1
    }, 
    {
      question: "А что об этом скажете? Colder than a witch's tits.",
      choices: ['Холодный, как айсберг в океане', 'Запретный плод сладок', 'Зуб на зуб не попадает'],
      img: ['img/3.jpg'],
      correctAnswer: 1
    }, 
    {
      question: "To make the air blue. Как насчёт такого выражения?",
      choices: ['Словить Макконахи', 'Поднять на воздух','Ругаться на чём свет стоит'],
      img: ['img/4.jpg'],
      correctAnswer: 2
    },
    {
      question: "Bad hair day. Как переведёте?",
      choices: ['День, когда впору рвать на себе волосы', 'Рок-вечеринка', 'Всё не так, как надо'],
      img: ['img/5.jpg'],
      correctAnswer: 2
    },
    {
      question: "Tie the knot. Что значит это выражение?",
      choices: ['Пойти под венец', 'Свернуть шею', 'Затянуть пояса'],
      img: ['img/6.jpg'],
      correctAnswer: 1
    },
    {
      question: "Последний вопрос. Переведите эту идиому — have a bone to pick.",
      choices: ['Иметь счёты с кем-то', 'Быть крепким орешком',  'Обладать широкой костью'],
      img: ['img/7.jpg'],
      correctAnswer: 0
    }
    ];
    
    var questionCounter = 0; //Отслеживает номер вопроса
    var selections = []; //Массив, содержащий выбор пользователя
    var quiz = $('#quiz'); //Quiz div объект
    
    // Показать начальный вопрос
    displayNext();
    
    // Обработчик кликов для кнопки «Далее»
    $('#next').on('click', function (e) {
      e.preventDefault();
      
      // Приостановить отслеживание кликов во время анимации затухания
      if(quiz.is(':animated')) {        
        return false;
      }
      choose();
      
      // Если нет выбора пользователя, прогресс останавливается
      if (isNaN(selections[questionCounter])) {
        alert('Пожалуйста сделайте выбор');
      } else {
        questionCounter++;
        displayNext();
      }
    });
    
    // Обработчик кликов для кнопки «предыдущий»
    $('#prev').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    });
    
    // Обработчик кликов для кнопки «Начать сначала»
    $('#start').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      displayNext();
      $('#start').hide();
    });
    
    // Анимирует кнопки при наведении
    $('.button').on('mouseenter', function () {
      $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
      $(this).removeClass('active');
    });
    
    // Создает и возвращает div, содержащий вопросы и
    // выбор ответов
    function createQuestionElement(index) {
      var qElement = $('<div>', {
        id: 'question'
      });
      
      var header = $('<h2>Вопрос ' + (index + 1) + ':</h2>');
      qElement.append(header);
      
      var question = $('<p>').append(questions[index].question);
      qElement.append(question);
      
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
      
      return qElement;
    }
    
    // Создает список вариантов ответа
    function createRadios(index) {
      var radioList = $('<ul>');
      var item;
      var img = `<img class="img" src="${questions[index].img}" alt="">`;
      var input = '';
      for (var i = 0; i < questions[index].choices.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questions[index].choices[i];
        item.append(input);
        radioList.append(item);
      }
      item.append(img)
      return radioList;
    }
    
    // Принимает выбор пользователя и помещает значение в массив
    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    
    // Отображает следующий запрошенный элемент
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
        
        if(questionCounter < questions.length){
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
          
          // Управляет отображением кнопки «предыдущая»
          if(questionCounter === 1){
            $('#prev').show();
          } else if(questionCounter === 0){
            
            $('#prev').hide();
            $('#next').show();
          }
        }else {
          var scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $('#next').hide();
          $('#prev').hide();
          $('#start').show();
        }
      });
    }
    
    // Вычисляет оценку и возвращает тег p для отображения
    function displayScore() {
      var score = $('<p>',{id: 'question'});
      var br = '<br>';
      var li = '<li>';
      
      var numCorrect = 0;
      for (var i = 0; i < selections.length; i++) {
        if (selections[i] === questions[i].correctAnswer) {
          numCorrect++;
        }
      }
      
      if (numCorrect === questions.length) { 
        score.append('Верных ответов ' + numCorrect + ' из ' + questions.length + '.' + br + 'Вы ответили на все вопросы верно, не стоит останавливаться на этом, продолжайте обучение!');
        score.append(`<img class="img" src="img/imgGoodEnd.jpg" alt="#">`)
      } else { 
        score.append('Верных ответов ' + numCorrect + ' из ' + questions.length + '.' + br + ' Рекомендуется ознакомиться с теоретическим материалом, представленным ниже, и пройти тест повторно.'+ br + 'Говоря простым языком, идиома (также используются названия: фразеологизм, идиоматическое выражение, устойчивое сочетание) - это фраза или выражение, в котором слова, употребленные вместе, имеют значение, отличное от того, которое приведено в словаре для каждого конкретного слова.' + 
        li + ' Учите идиомы, разбивая их по тематикам -' + br + 'Лучше всего выбрать группу выражений одной тематики, например: о еде, об одежде, о транспорте и т. п. Ведь когда мы хотим расширить словарный запас, тоже берем группу слов из одной темы — так запоминать информацию намного проще.' +
        li + 'Находите аналогии в родном языке -' + br + 'Нужно помнить, что есть английский аналог известного русского выражения. Но есть случаи когда аналоги нет или он отличается в таком случае лингвисты предлагают запоминать при помощи мнемонического метода' +
        li + 'Изучайте английские идиомы в контексте -' + br + 'Мы уже говорили, что новые слова лучше всего изучаются в контексте. Идиомы же без контекста не учатся вовсе. Вам нужно понимать и почувствовать, КАК и КОГДА уместно использовать то или иное выражение. Поэтому не тратьте время на изучение самого выражения без примеров.' +
        li + 'Найдите живые примеры использования -' + br + 'Чтобы точнее прочувствовать, в каком случае нужно употреблять ту или иную идиому, воспользуйтесь следующим приемом. Напечатайте идиому в поисковую строку Google (лучше взять выражение в кавычки) и посмотрите первые 10-20 результатов выдачи. Вы увидите естественные современные варианты использования изучаемого выражения.' +
        li + 'Придумывайте свои примеры использования идиомы -' + br + 'После того, как изучили идиому в контексте, придумайте свои примеры ее использования. Составьте несколько предложений или небольшой текст. При этом лучше «примерять» идиому на себя: говорите от первого лица.');
        score.append(`<img class="img" src="img/imgLearning.jpg" alt="#">`)
      }

      return score;
    }
  })();