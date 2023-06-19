const questionreponse = document.querySelector("#questionreponse");
/*const question = document.querySelector("#questionreponse");
const reponse = document.querySelector("#questionreponse");*/
const inputqa = document.querySelector("#inputqa");

fetch("https://apiblaguecarambar.onrender.com/api/v1/getRandomJoke")
.then((response) => response.json())
.then((response) =>{
    questionreponse.innerHTML += `<div class="question">${response.result.question}</div>`
    questionreponse.innerHTML += `<div class="answer">${response.result.answer}</div>`
    console.log(response.result);
})