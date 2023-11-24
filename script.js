for (let i = 0; i< 4; i++) {
    const button = document.createElement("button");
    const body = document.querySelector("body");
    body.appendChild(button);
    button.style.height = ("100px");
    button.style.fontSize = ("40px");
    button.innerText = (i +1);
    button.style.backgroundColor = ("#888");
    button.style.border = "5px solid black";
    button.style.borderRadius = "15px";
    button.style.color = "white";
   
    if (i<3){
        button.style.width = ("200px")
        button.style.marginRight = "5px"
    
        
    }
    else {
        button.style.width = ("606px")
    }

}