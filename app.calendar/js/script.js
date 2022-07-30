const date = new Date()

const renderCalendar = () => {
    
    date.setDate(1)

    const calendar = document.querySelector('#calendar')

    const lastDay = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDate()


    const prevLastDay = new Date(date.getFullYear(),date.getMonth(), 0).getDate()


    const firstDayIndex = date.getDay() - 1

    const lastDayIndex = new Date(
    date.getFullYear(), 
    date.getMonth() + 1, 
    0
    ).getDay()

    const nextDays = 7 - lastDayIndex




    const month = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ]

    const dayWeek = [
        "Понедельник, ",
        "Вторник, ",
        "Среда, ",
        "Четверг, ",
        "Пятница, ",
        "Суббота, ",
        "Воскресенье, ",
        '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''
    ]

    document.querySelector('.date').innerHTML = `${month[date.getMonth()]}, ${date.getFullYear()}`

    let days = ``
    let count = -1

    for(let x = firstDayIndex; x > 0; x--) {
        count += 1
        days += `<div class="day prev-date">
                    <div class="numberDay">${dayWeek[count]}${prevLastDay - x + 1}</div>
                    <div class="title"></div>
                    <div class="descr"></div>
                </div>`
    }

    for(let i = 1; i <= lastDay; i++) {
        count += 1
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="day today">
                        <div class="numberDay">${dayWeek[count]}${i}</div>
                        <div class="title"></div>
                        <div class="descr"></div>
                    </div>`
        } else {
            days += `<div class="day">
                        <div class="numberDay">${dayWeek[count]}${i}</div>
                        <div class="title"></div>
                        <div class="descr"></div>
                    </div>`
        }
    }

    

    for (let j = 1; j <= nextDays; j++) {
        if (nextDays < 7) {
            days += `<div class="day next-date">
                        <div class="numberDay">${j}</div>
                        <div class="title"></div>
                        <div class="descr"></div>
                    </div>`
        }
    }
    calendar.innerHTML = days

    
}


document.querySelector('.prev').addEventListener('click',() => {
    date.setMonth(date.getMonth() - 1)
    renderCalendar()
})

document.querySelector('.right').addEventListener('click',() => {
    date.setMonth(date.getMonth() + 1)
    renderCalendar()
})
 
renderCalendar()