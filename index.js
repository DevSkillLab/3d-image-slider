const bgImage = document.getElementById("bgImage");
const card = document.getElementById("card");
const imageFront = document.getElementById("imageFront");
const imageBack = document.getElementById("imageBack");
const paginations = document.querySelector(".paginations");

const images = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg",
  "./images/image4.jpg",
  "./images/image5.jpg",
  "./images/image6.jpg",
  "./images/image7.jpg",
  "./images/image8.jpg",
];

let currentImageIndex = 0;
let previousImageIndex = currentImageIndex - 1;
let nextImageIndex = currentImageIndex + 1;
let currentRotation = 0;

imageFront.src = images[currentImageIndex];
imageBack.src = images[nextImageIndex];
bgImage.src = images[currentImageIndex];

images.forEach((image) => {
  const pagiBtn = document.createElement("div");
  pagiBtn.classList.add("pagi-btn");

  paginations.appendChild(pagiBtn);
});

function updatePaginations() {
  const pagiButtons = document.querySelectorAll(".pagi-btn");

  if (pagiButtons) {
    pagiButtons.forEach((pagiBtn, index) => {
      if (currentImageIndex - 2 === index || currentImageIndex + 2 === index) {
        pagiBtn.style.transform = "scale(1.5)";
      } else if (
        currentImageIndex - 1 === index ||
        currentImageIndex + 1 === index
      ) {
        pagiBtn.style.transform = "scale(2)";
      } else {
        pagiBtn.style.transform = "scale(1)";
      }

      if (currentImageIndex === index) {
        pagiBtn.classList.add("active");
        pagiBtn.style.transform = "scale(3)";
      } else {
        pagiBtn.classList.remove("active");
      }
    });
  }
}

updatePaginations();

function updateImages(index) {
  if (currentImageIndex % 2 === 0) {
    imageFront.src = images[index];
  } else {
    imageBack.src = images[index];
  }

  bgImage.src = images[currentImageIndex];
}

function next() {
  if (currentImageIndex !== images.length - 1) {
    nextImageIndex = currentImageIndex + 1;
    currentImageIndex++;
    updateImages(nextImageIndex);
    updatePaginations();
    currentRotation -= 180;
    card.style.transform = `rotateY(${currentRotation}deg)`;
  }
}

function back() {
  if (currentImageIndex !== 0) {
    previousImageIndex = currentImageIndex - 1;
    currentImageIndex--;
    updateImages(previousImageIndex);
    updatePaginations();
    currentRotation += 180;
    card.style.transform = `rotateY(${currentRotation}deg)`;
  }
}
