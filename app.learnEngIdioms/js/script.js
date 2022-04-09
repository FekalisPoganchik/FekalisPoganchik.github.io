(function() {
    var questions = [{
      question: "Finger lickin good. Что бы это могло значить?",
      choices: ['Голод не тётка', 'Пальчики оближешь', 'Дай ему палец, а он всю руку откусит'],
      img: ['img/1.jpg'],
      correctAnswer: 1
    }, {
      question: "Babe in the woods. Как это перевести?",
      choices: ['Чем дальше в лес, тем больше дров', 'Мал да удал', 'Прост как дрозд'],
      img: ['img/2.jpg'],
      correctAnswer: 1
    }, {
      question: "А что об этом скажете? Colder than a witch's tits.",
      choices: ['Холодный, как айсберг в океане', 'Запретный плод сладок', 'Зуб на зуб не попадает'],
      img: ['img/3.jpg'],
      correctAnswer: 1
    }, {
      question: "To make the air blue. Как насчёт такого выражения?",
      choices: ['Ругаться на чём свет стоит' ,'Словить Макконахи', 'Поднять на воздух'],
      img: ['img/4.jpg'],
      correctAnswer: 0
    }, {
        question: "Bad hair day. Как переведёте?",
        choices: ['Всё не так, как надо', 'День, когда впору рвать на себе волосы', 'Рок-вечеринка'],
        img: ['img/5.jpg'],
        correctAnswer: 0
      },
      {
        question: "Tie the knot. Что значит это выражение?",
        choices: ['Свернуть шею', 'Пойти под венец',  'Затянуть пояса'],
        img: ['img/6.jpg'],
        correctAnswer: 0
      },
      {
        question: "Последний вопрос. Переведите эту идиому — have a bone to pick.",
        choices: ['Иметь счёты с кем-то', 'Быть крепким орешком',  'Обладать широкой костью'],
        img: ['img/7.jpg'],
        correctAnswer: 0
      }];
    
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
      
      var numCorrect = 0;
      for (var i = 0; i < selections.length; i++) {
        if (selections[i] === questions[i].correctAnswer) {
          numCorrect++;
        }
      }
      
      score.append('Верных ответов ' + numCorrect + ' из ' + questions.length);
      return score;
    }
  })();