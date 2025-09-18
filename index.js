//for kick

let kick= new Audio("sounds/kick-bass.mp3");
document.getElementsByClassName("w drum")[0].addEventListener('click',function(){
    kick.play();
    this.classList.add("pressed");
     setTimeout( () =>{
   this.classList.remove("pressed");
     },100);
});

//for crash

let crash=new Audio("sounds/crash.mp3");

document.getElementsByClassName("a drum")[0].addEventListener('click',function(){
    crash.play();
      
    this.classList.add("pressed");

    setTimeout( () =>{
        this.classList.remove("pressed")
    },100);
});

// for snare 

let snare= new Audio("sounds/snare.mp3");
document.getElementsByClassName("s drum")[0].addEventListener('click',function(){
    snare.play();

    this.classList.add("pressed");

    setTimeout( () =>{
        this.classList.remove("pressed");
    },100);
});

// for tom-1

let tom_1 = new Audio("sounds/tom-1.mp3");
document.getElementsByClassName("d drum")[0].addEventListener('click',function(){
    tom_1.play();

    this.classList.add("pressed");

    setTimeout( ()=>{
        this.classList.remove("pressed");
    },100);
});

// for tom-2

let tom_2 = new Audio("sounds/tom-2.mp3");
document.getElementsByClassName("j drum")[0].addEventListener('click',function(){
   tom_2.play();

   this.classList.add("pressed");


setTimeout( ()=>{
    this.classList.remove("pressed");
},100);

});



// for tom-3

let tom_3 = new Audio("sounds/tom-3.mp3");
document.getElementsByClassName("k drum")[0].addEventListener('click',function(){
 tom_3.play();

 this.classList.add("pressed");


setTimeout( ()=>{
    this.classList.remove("pressed");
},100);

});

// for tom-4

let tom_4 = new Audio("sounds/tom-4.mp3");
document.getElementsByClassName("l drum")[0].addEventListener('click',function(){
    tom_4.play();

    this.classList.add("pressed");


setTimeout( ()=>{
    this.classList.remove("pressed");
},100);

});
 
// for keyboard

document.addEventListener("keydown",(event)=> {

      let alldrum=document.querySelectorAll(".drum");

       for(let i=0;i<alldrum.length;i++){
        let element= alldrum[i];

    if(event.key==element.innerHTML){ 
       

    if(event.key=="w"){
        kick.play();
        
    } else if(event.key=="a"){
        crash.play();

    }
    else if(event.key=="s"){
        snare.play();
    }
    else if(event.key=="d"){
        tom_1.play();
    }
    else if(event.key=="j"){
        tom_2.play();
    }
    else if(event.key=="k"){
        tom_3.play();
    }
    else if(event.key=="l"){
        tom_4.play();
    }
    //animation
    
    element.classList.add("pressed");

        setTimeout(()=>{
            element.classList.remove("pressed");
        },100);
    
}
       }

});

