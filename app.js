const container = document.getElementById("drawing-board");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-row', rows);
    container.style.setProperty('--grid-column', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        // cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseenter',function (){
            cell.style.backgroundColor = 'black';
        })
    };
};

function reset() {
    let array = document.getElementsByClassName("grid-item")
    
    for (let index = 0; index < array.length; index++) {
        array[index].style.backgroundColor = 'white';
        
    } 
}
function changeSize(num) {
    let array = document.getElementsByClassName("grid-item")
    const container = document.getElementById("drawing-board");
    
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    // for (let index = 0; index < array.length; index++) {
    //     array[index].removeChild;
    //     console.log("loop");
    // }
    makeRows(num,num);
}

makeRows(16, 16);