// Responsive nav bar
let toggle = true;
let hamStart = document.getElementById('ham-start');
let hamMidFirst = document.getElementById('ham-mid-first');
let hamMidSecond = document.getElementById('ham-mid-second');
let hamEnd = document.getElementById('ham-end');

document.getElementById("hamburger").addEventListener('click',()=>{
    document.getElementById('nav-links').classList.toggle('active-nav-bar');
    if(toggle){
        hamStart.style.opacity = '0';
        hamEnd.style.opacity = '0';
        hamMidFirst.style.rotate = '45deg';
        hamMidSecond.style.rotate = '-45deg';
        toggle = false;
    } else {
        hamStart.style.opacity = '1';
        hamEnd.style.opacity = '1';
        hamMidFirst.style.rotate = '0deg';
        hamMidSecond.style.rotate = '0deg';
        toggle = true;
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