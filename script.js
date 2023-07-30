
function changeAspects(){
    const h1Elements = document.getElementsByTagName('h1');
    const panelTitle = h1Elements[0];
    const formTitle = h1Elements[1];

    panelTitle.textContent = 'Nice to see you'; 
    formTitle.textContent = 'Register';

    const aElement = document.getElementsByTagName('a');
    passwordQuestion = aElement[0];
    passwordQuestion.textContent = '';

    const pElements = document.getElementsByTagName('p');
    const panelMessage = pElements[0];
    const registerButton = pElements[1];
    panelMessage.textContent = 'Join in the club, make your register to receive the news from ours website, try its is free';
    registerButton.textContent = 'Sign in'
}

const registerButton = document.getElementById('register-button');

registerButton.addEventListener('mousedown', (event)=>{
    const panel = document.getElementById('panel');
    const form = document.getElementById('form');
    panel.classList.add('transitionPanel');
    form.classList.add('transitionForm');
    changeAspects();
});