// import ManageDom from "./components/ManageDom.js";
// export default class Carousel extends ManageDom {
//     constructor(imageUrls, speed) {
//         super();
//         this.imageUrls = imageUrls;
//         this.speed = speed;
//         this.currentImageIndex = 0;
//         this.dom_elements = this.render();
//         this.animateSlideshow();
//     }

//     render() {
//         const section = this.createMarkup("section", "", document.body, [
//             { class: "style-container" },
//         ]);

//         this.imageUrls.forEach((imageUrl, index) => {
//             const slide = this.createMarkup("div", "", section, [
//                 { class: "slide" },
//             ]);
//             const img = this.createMarkup("img", "" , slide , [{"src" : "imageUrl"}]);

//         });

//         return {
//             section
//         };
//     }

//     animateSlideshow() {
//         const images = this.dom_elements.section.querySelectorAll(".slide");
//         let intervalId;
//         const l = images.length;

//         const startSlideshow = () => {
//             intervalId = setInterval(() => {
//                 images.forEach((image) => (image.style.display = "none"));
//                 images[this.currentImageIndex].style.display = "block";
//                 this.currentImageIndex = (this.currentImageIndex + 1) % l;
//             }, this.speed);
//         };

//         startSlideshow();

//         this.dom_elements.section.onclick = () => {
//             if (intervalId) {
//                 clearInterval(intervalId);
//                 intervalId = null;
//             } else {
//                 startSlideshow();
//             }
//         };
//     }
// }

// const imageUrls = [
//     "./assets/imgs/Devanture_Boutique_1.webp",
// ];

// new Carousel(imageUrls, 2000);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
