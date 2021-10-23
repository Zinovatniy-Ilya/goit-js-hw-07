import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery')
const images = galleryItems.map(({preview, original, description}) => {
    return `
        <div class="gallery__item">
            <a class="gallery__link" href=${original}>
                <img
                    class="gallery__image"
                    src=${preview}
                    data-source=${original}
                    alt=${description}
                />
            </a>
        </div>`
}).join('')
gallery.innerHTML = images

const galleryClick = gallery.addEventListener('click', handleClick)

function handleClick(e) {
    e.preventDefault();

    const instance = basicLightbox.create(`
  <div class="modal">
  <img src="${e.target.dataset.source}" width="800" height="600">
  </div>
// `, {
  onShow: (instance) => {
    window.addEventListener("keydown", keyboardClick);
    function keyboardClick(e) {
      if (e.code === 'Escape') { 
          instance.close();
          window.removeEventListener('keydown', keyboardClick);
        };
    };
    },
}).show();
}