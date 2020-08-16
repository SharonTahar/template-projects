const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// fill listner
fill.addEventListener('dragstart', dragstart);
fill.addEventListener('dragend', dragend); 

//drag functions 
function dragStart() {
  this.className += 'hold';
  this.className = 'invisible';
}

function dragEnd() {
  console.log('end');
}