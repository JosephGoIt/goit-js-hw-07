// import * as basicLightbox from 'basiclightbox';
import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

// Create gallery markup
const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
  let li = `
  <li class="gallery__item">
    <a class="gallery__link" href="">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>
  `;  
  gallery.innerHTML += li;
  });

// Event delegation to open modal
  gallery.addEventListener('click', event => {
    event.preventDefault(); // Prevent default behavior of anchor tag

    if (event.target.classList.contains('gallery__image')) {
      const imageUrl = event.target.dataset.source;
      const instance = basicLightbox.create(`<img src="${imageUrl}" alt="Image">`);
       instance.show();
    }
  });

