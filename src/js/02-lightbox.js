import { galleryItems } from './gallery-items.js';
// Change code below this line
const imageContainer = document.querySelector(".gallery");
const imageMarkup = createGaleryImgMarkup(galleryItems);

imageContainer.insertAdjacentHTML("beforeend", imageMarkup);

function createGaleryImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li> `;
    })
    .join("");
}


  var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

console.log(galleryItems);
