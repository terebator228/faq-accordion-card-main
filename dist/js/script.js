const question = document.querySelectorAll('.faq__question'),
      title = document.querySelectorAll('.faq__title'),
      answer = document.querySelectorAll('.faq__answer'),
      arrow = document.querySelectorAll('.faq__arrow');

function hideAnswers() {
    title.forEach(item => {
        item.classList.remove('faq__title_active')
    }) 
    answer.forEach(item => {
        item.classList.remove('faq__answer_active')
    })
    arrow.forEach(item => {
        item.classList.remove('faq__arrow_active')
    })
}

function showAnswer(i) {
    hideAnswers();
    answer[i].classList.add('faq__answer_active')
    title[i].classList.add('faq__title_active')
    arrow[i].classList.add('faq__arrow_active')
}

question.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (answer[i].classList.contains('faq__answer_active')) {
            hideAnswers();
            return
        } 
        showAnswer(i);
    })
})