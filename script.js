// Nav-Bar

const ham = document.getElementById('ham');
const links = Array.from(document.getElementsByClassName('links'));
const navLinks = document.getElementById('nav-links');
let toggle = true;

function removeLinks(){
    links.forEach(link => {
        navLinks.removeChild(link);
        navLinks.style.width = '10%';
    });
}
removeLinks();

function appendLinks(){
    links.forEach(link=>{
        navLinks.appendChild(link);
        navLinks.style.width = '75%';
    })
}

const hamHead = document.getElementById('ham-head');
const hamMid = document.getElementById('ham-mid');
const hamEnd = document.getElementById('ham-end');

function close(){
    hamMid.style.display = 'none';
    hamHead.style.top = '10%';
    hamHead.style.rotate = '45deg';
    hamEnd.style.bottom = '10%';
    hamEnd.style.rotate = '-45deg';
}

function open(){
    hamMid.style.display = 'block';
    hamHead.style.top = '0%';
    hamHead.style.rotate = '0deg';
    hamEnd.style.bottom = '0%';
    hamEnd.style.rotate = '0deg';
}

ham.addEventListener('click',()=>{
        if(toggle){
            appendLinks();
            close();
            toggle = false;
        }
        else{
            removeLinks();
            open();
            toggle = true;
        }

})