function theme(){
    let html111 = document.getElementById("html")
    var selObj111 = document.getElementById("theme");
    var selValue111 = selObj111.options[selObj111.selectedIndex].value;
    if(selValue111 === "#ffffff"){
        html111.style.backgroundColor = selValue111
        html111.style.color = "#000000"
    }
    else{
        html111.style.backgroundColor = selValue111
        html111.style.color = "#ffffff"
    }
}