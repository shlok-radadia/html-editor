function font_size(){
    let html = document.getElementById("html")
    var selObj = document.getElementById("font_size");
    var selValue = selObj.options[selObj.selectedIndex].value;
    let change_here = document.getElementById("line_number")
    html.style.fontSize = selValue
    if(selValue === "15px"){
        change_here.style.fontSize = "15px"
    }
    else{
        change_here.style.fontSize = selValue
    }
}