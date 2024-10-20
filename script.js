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