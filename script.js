let currentIndex = 0;
const boxes = document.querySelectorAll('.text-box');

function showBox(index) {
  boxes.forEach(box => box.style.display = 'none');
  boxes[index].style.display = 'block';
}

function changeText(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = boxes.length - 1;
  } else if (currentIndex >= boxes.length) {
    currentIndex = 0;
  }

  showBox(currentIndex);
}

// Show the initial box
showBox(currentIndex);

hamburger=document.querySelector('.hamburger');
hamburger.onclick=function(){
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active")
}