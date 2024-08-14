let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("hablemos").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("hablemos").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    document.getElementById("hablemos").classList = "";
    menuVisible = false;
}


