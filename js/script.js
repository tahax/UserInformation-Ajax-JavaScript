//variables
const buttonAjax = document.querySelector('.ajax-button');
let html = new Html();

//event listeners
buttonAjax.addEventListener('click' , function (){
    html.loadTheAjax();
})

