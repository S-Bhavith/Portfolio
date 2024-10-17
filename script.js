// Nav-Bar

const links = Array.from(document.getElementsByClassName('links'));
const navLinks = document.getElementById('nav-links');
const logo = document.getElementById('logo');
let toggler = true;

function removeLinks(){
    links.forEach(link => {
        navLinks.removeChild(link);
        navLinks.style.width = '10%';
        navLinks.style.opacity = '0';
    });
}
removeLinks();

function appendLinks(){
    links.forEach(link=>{
        navLinks.appendChild(link);
        navLinks.style.width = '75%';
        navLinks.style.opacity = '1';
    })
}

logo.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
    if(toggler){
        appendLinks();
        toggler = false;
    }
    else{
        removeLinks();
        toggler = true;
    }
})

// Main
// Intro

let textSlider = document.getElementById('text-slider');
let tempText = Array.from(textSlider.innerText);
let text = Array.from("web developer");
let i=0,j=text.length;

let timer = setInterval(()=>{
    if(i < text.length){
        tempText.push(text[i]);
        textSlider.innerText = tempText.join('');
        i++;
    }
    else{
        tempText.pop();
        textSlider.innerText = tempText.join('');
        j--;
        if(j == 0){
            i = 0;
            text = text.join('') === 'web developer' ? Array.from('student') : Array.from('web developer');
            j=text.length;
        }
    }

},250)