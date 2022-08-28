const refs = {
    bottomStart:document.querySelector("[data-start]"),
    bottomStop:document.querySelector("[data-stop]"),
    body:document.body
}

let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

refs.bottomStart.addEventListener("click",onClick)

refs.bottomStop.addEventListener("click", onRemove)


function onClick (){
    timerId = setInterval(()=>{
        refs.body.style.background=getRandomHexColor() 
    },1000)
    console.log(timerId)
   
    refs.bottomStart.disabled= true;
}

function onRemove(){
 
    refs.bottomStart.disabled= false;
    clearInterval(timerId)
}