var htmlokokok = document.getElementById("html");
htmlokokok.addEventListener("keydown", function(event) {
  if (event.keyCode === 13 && !event.shiftKey) {
    if(htmlokokok.value.trim() === "!"){
        htmlokokok.value = `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Document</title>\n</head>\n<body>\n</body>\n</html>`
       htmlokokok.setSelectionRange(172, 172);
    }

    else if(htmlokokok.value === "!!!"){
      htmlokokok.value = `<!DOCTYPE html>`
    }

    else if(htmlokokok.value === "html"){
      htmlokokok.value = `<html>\n</html>`
      htmlokokok.setSelectionRange(6, 6);
    }

    else if(htmlokokok.value === "body"){
      htmlokokok.value = `<body>\n</body>`
      htmlokokok.setSelectionRange(6, 6);
    }

    else if(htmlokokok.value === "head"){
      htmlokokok.value = `<head>\n</head>`
      htmlokokok.setSelectionRange(6, 6);
    }

    else if(htmlokokok.value === "script"){
      htmlokokok.value = `<script>\n</script>`
      htmlokokok.setSelectionRange(8, 8);
    }

    else if(htmlokokok.value === "style"){
      htmlokokok.value = `<style>\n</style>`
      htmlokokok.setSelectionRange(7, 7);
    }

    else{
        return
    }
  }

  else{
      return
  }
});