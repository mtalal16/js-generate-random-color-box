function drawContainer(containerSize, childSize, numberOfChildren) {
    let infoDiv = document.getElementById('note');
    console.log(infoDiv)
    if(containerSize < childSize){
        infoDiv.innerText = "Childsize could not be greater than containersize";
        return false;
    }
    let parentDiv = document.createElement('div');
    parentDiv.id = 'parent';
    parentDiv.className = 'parent';
    parentDiv.setAttribute("style","width:"+containerSize+"px;height:"+containerSize+"px");

    let noOfBox = Math.floor(containerSize/childSize);
    let noOfChildsBoxes = noOfBox*noOfBox;
    for(let i=0; i<noOfChildsBoxes ; i++){
        let childDiv = document.createElement('div');
        childDiv.id = 'child_'+ i;
        childDiv.className = 'child';
        let randomColor = getRandomColor();
        childDiv.setAttribute("style","width:"+childSize+"px;height:"+childSize+"px;background:" + randomColor);
        parentDiv.appendChild(childDiv);
    }
    if(numberOfChildren > noOfChildsBoxes){
        infoDiv.innerText = "Only "+noOfChildsBoxes+" box will be rendered ";
    }else{
        infoDiv.innerText = noOfChildsBoxes+" box will be rendered ";
    }

    document.body.appendChild(parentDiv);
    addListeners(parentDiv);
}

/* return the random color*/
function getRandomColor() {
    let colorRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += colorRange[Math.floor(Math.random() * 16)];
    }
    return color;
}

/* return the random color*/
function addListeners(parentDiv){
    let timeout = null;
    parentDiv.onmouseover = function(e) {
        if (e.target !== e.currentTarget) {
            let targetDiv  = e.target;
            timeout = setTimeout(function(){
                targetDiv.remove();
            }, 3000);
        }
        e.stopPropagation();
    };

    parentDiv.onmouseout = function() {
        clearTimeout(timeout);

    }
}

drawContainer(100, 30,16);
