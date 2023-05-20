// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

// Change code below this line
const imageContainer = document.querySelector('.gallery');
const imageMarkup = createGaleryImgMarkup(galleryItems);

imageContainer.insertAdjacentHTML('beforeend', imageMarkup);

imageContainer.addEventListener('click', onImageContainerClick);

function createGaleryImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item"> 
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `;
    })
    .join('');
}

function onImageContainerClick(event) {
  event.preventDefault();
  const isGalleryImageEl = event.target.classList.contains('gallery__image');
  if (!isGalleryImageEl) {
    return;
  }
}

const gallery = new SimpleLightbox('.gallery a');
