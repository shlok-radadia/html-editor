function saveTextAsFile()
{
    var textToWrite = document.getElementById('html').value;
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    
    let filename1 = prompt("Please enter name of the File to be saved", "index")
    if(filename1 === null){
    return
    }
    else if(filename1 === ""){
        filename = "index"
    }
    else{
        filename = filename1
    }
    var fileNameToSaveAs = `${filename}.html`

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null){
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else{
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    
    downloadLink.click();
}

var button = document.getElementById('save');
button.addEventListener('click', saveTextAsFile);