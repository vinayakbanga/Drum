function handleclick(){ // this function handels the button click 
    var buttonInnerHTML=this.innerHTML;//this detect the text written inside the button
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
    
    //alert("I Got Clicked");
}

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);//this will check for mouse click and return function  
}
//Tjis is how we play a audio inside a js
// var <object name> = new Audio('sounds/tom-2.mp3');
//     <object name>.play();


//This is how we triger the function on keyboard click

document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});



function makesound(key){
    switch (key) {
        case "w":var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
        case "a":var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
        case "s":var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
        case "d":var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
        case "j":var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
        case "k":var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
        case "l":var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
    
    
    
        default:alert("select the appropiate key");
    

}
}
function buttonAnimation(currentKey){
   var activeButton= document.querySelector("."+currentKey)
   activeButton.classList.add("pressed");//classlist se class aa jati hai jo bhi us element se related ho aur add se ek class add ho jati hai

   setTimeout(function(){// this to done so that after ths specifies sec the function mentioned(remove in this case should work)
       activeButton.classList.remove("pressed");
   },100);// time is in milli sec

}


