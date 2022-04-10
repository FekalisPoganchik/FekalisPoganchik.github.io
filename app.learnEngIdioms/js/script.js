(function() {
    var questions = [
      {
      question: "Finger lickin good. Что бы это могло значить?",
      choices: ['Голод не тётка', 'Пальчики оближешь', 'Дай ему палец, а он всю руку откусит'],
      img: ['img/1.jpg'],
      correctAnswer: 1 
  }, 
  // {
    //   question: "Babe in the woods. Как это перевести?",
    //   choices: ['Чем дальше в лес, тем больше дров', 'Мал да удал', 'Прост как дрозд'],
    //   img: ['img/2.jpg'],
    //   correctAnswer: 1
    // }, {
    //   question: "А что об этом скажете? Colder than a witch's tits.",
    //   choices: ['Холодный, как айсберг в океане', 'Запретный плод сладок', 'Зуб на зуб не попадает'],
    //   img: ['img/3.jpg'],
    //   correctAnswer: 1
    // }, {
    //   question: "To make the air blue. Как насчёт такого выражения?",
    //   choices: ['Словить Макконахи', 'Поднять на воздух','Ругаться на чём свет стоит'],
    //   img: ['img/4.jpg'],
    //   correctAnswer: 2
    // }, {
    //     question: "Bad hair day. Как переведёте?",
    //     choices: ['День, когда впору рвать на себе волосы', 'Рок-вечеринка', 'Всё не так, как надо'],
    //     img: ['img/5.jpg'],
    //     correctAnswer: 2
    //   },
    //   {
    //     question: "Tie the knot. Что значит это выражение?",
    //     choices: ['Пойти под венец', 'Свернуть шею', 'Затянуть пояса'],
    //     img: ['img/6.jpg'],
    //     correctAnswer: 1
    //   },
      // {
      //   question: "Последний вопрос. Переведите эту идиому — have a bone to pick.",
      //   choices: ['Иметь счёты с кем-то', 'Быть крепким орешком',  'Обладать широкой костью'],
      //   img: ['img/7.jpg'],
      //   correctAnswer: 0
      // }
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
      
      var numCorrect = 0;
      for (var i = 0; i < selections.length; i++) {
        if (selections[i] === questions[i].correctAnswer) {
          numCorrect++;
        }
      }
      
      if (numCorrect === questions.length) { 
        score.append('Верных ответов ' + numCorrect + ' из ' + questions.length);
      } else { 
        score.append('Верных ответов ' + numCorrect + ' из ' + questions.length + ' Рекомендуется ознакомиться с теоретическим материалом, представленным ниже, и пройти тест повторно.'+ br + 'Говоря простым языком, идиома (также используются названия: фразеологизм, идиоматическое выражение, устойчивое сочетание) - это фраза или выражение, в котором слова, употребленные вместе, имеют значение, отличное от того, которое приведено в словаре для каждого конкретного слова. По этой причине английские идиомы бывает так сложно понять. Нельзя научиться разбирать английские идиомы, их можно только выучить. Хотя некоторые идиомы английского языка имеют аналоги в русском языке (например, "take the bull by the horn" дословно переводится как "взять быка за рога" и имеет тот же смысл), и их значение понятно, все же многие английские идиомы не имеют аналогов в русском языке. Иногда не составляет труда догадаться о значении фразеологизма, хотя в русском языке та же мысль, скорее всего, была бы выражена иначе. Например, английский фразеологизм "get up on the wrong side of bed" дословно означает "встать не с той стороны кровати", и не составит труда понять его смысл, взяв за аналогию русский фразеологизм "встать не с той ноги". Однако, такие случаи являются, скорее, исключениями, и, как уже было сказано, большинство английских идиом и фразеологизмов дословно не разобрать. Например, не зная заранее, что означает фраза "wear more than one hat", можно попасть впросак, услышав ее в речи или увидев на письме, и начав переводить ее дословно - "носить больше одной шляпы", в то время как на самом деле она означает "выполнять несколько обязанностей".');
        score.append(`<img class="img" src="img/imgLearning.jpg" alt="#">`)
      }

      return score;
    }
  })();