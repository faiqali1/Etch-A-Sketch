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

makeRows(16, 16);