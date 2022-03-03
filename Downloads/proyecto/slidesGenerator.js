// src="multimedia/slide1.jpg"
let slidesContainer = document.getElementById("slides");

let slideDivContainer;
let slideDiv;
let slide;

const path1 = "multimedia/slide";
const path2 = ".jpg";
/**
 <div class="mySlides">
      <div class="numbertext">13 / 14</div>
      <img src="multimedia/slide13.jpg" style="width:75%">
         
    </div>
 */
for (let i = 0; i < 14; i++) {
    let finalPath = path1 + (i+1).toString() + path2;

    slideDivContainer = document.createElement("div");
    slideDivContainer.setAttribute("class", "mySlides");
    slidesContainer.appendChild(slideDivContainer);

    slideDiv = document.createElement("div");
    

    slide = document.getElementById("slideImg");
    slide.setAttribute("class", "slide");
    slide.src = ("multimedia/slide1.jpg");

    slideDivContainer.appendChild(slideDiv);
    slideDivContainer.appendChild(slide);
}
