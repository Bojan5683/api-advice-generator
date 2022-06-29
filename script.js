window.addEventListener('DOMContentLoaded',function(){

const URL = 'https://api.adviceslip.com/advice';
const spremnik = document.getElementById('spremnik');
const button = document.getElementById('getApi');



function getAdviceApi(){
    fetch(URL)
    .then(response => response.json())
    .then(data => spremnik.innerHTML = data.slip.advice)
};


button.addEventListener('click',function(){
    getAdviceApi();
    spremnik.classList = 'quote';
});
});