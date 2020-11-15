function show(){
    let modal=document.getElementsByClassName('moda')[0];
    modal.style.display="block";
  
    
 }
 
 function hide(event){                      //to hide click anywhere on screen except white box
 // event.stopPropagation();
 if(event.target.className!="modalchild"){
     let modal=document.getElementsByClassName('moda')[0];
     modal.style.display="none";
 }
    
 }