const imageWidth =
  document.getElementsByClassName('carousel-image')[0].clientWidth;

console.log(imageWidth);

function showImage(id) {
  const offset = 12 + imageWidth;
  const boxes = document.getElementsByClassName('carousel-box');
  const images = document.getElementsByClassName('carousel-image');
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove('active');
    images[i].style.transform = `translateX(calc(-${offset * (id - 1)}px))`;
    if (boxes[i].id == id) {
      boxes[i].classList.add('active');
    }
  }
}
