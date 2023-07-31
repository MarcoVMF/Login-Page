const registerButton = document.getElementById('register-button');

registerButton.addEventListener('mousedown', (event)=>{
    const panel = document.getElementById('panel');
    const form = document.getElementById('form');
    const hidden = document.getElementById('panel-hidden');
    if(hidden.classList.replace('defaultPanel', 'transitionPanel')){
        hidden.classList.replace('hide', 'show');
        panel.classList.replace('defaultPanel', 'transitionPanel');
        panel.classList.replace('show', 'hide');
        form.classList.replace('defaultForm', 'transitionForm');
    }else{
        hidden.classList.add('transitionPanel');
        hidden.classList.add('show');
        panel.classList.add('transitionPanel');
        panel.classList.add('hide');
        form.classList.add('transitionForm');
    }
    setTimeout(function(){
        const title = document.getElementById('title');
        title.textContent = 'Register';
    }, 500);
});

const signButton = document.getElementById('sign-button');

signButton.addEventListener('mousedown', (event)=>{
    const panel = document.getElementById('panel');
    const form = document.getElementById('form');
    const hidden = document.getElementById('panel-hidden');
    hidden.classList.replace('transitionPanel', 'defaultPanel');
    hidden.classList.replace('show', 'hide');
    panel.classList.replace('transitionPanel', 'defaultPanel');
    panel.classList.replace('hide', 'show');
    form.classList.replace('transitionForm', 'defaultForm');
    setTimeout(function(){
        const title = document.getElementById('title');
        title.textContent = 'Sign In';
    }, 500);
});