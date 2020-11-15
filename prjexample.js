//event , event should be your first argument.
function showModal(){
   let modal=document.getElementsByClassName('moda')[0];
   modal.style.display="block";
   
}

function hidemodal(event){                      //to hide click anywhere on screen except white box
// event.stopPropagation();
if(event.target.className!="modalchild"){
    let modal=document.getElementsByClassName('moda')[0];
    modal.style.display="none";
}
}