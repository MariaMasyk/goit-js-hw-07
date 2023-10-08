import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const container = document.querySelector('.gallery');
container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
function createMarkup(arr){
    return arr.map(({preview, original,description}) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      width="300"
    />
    
  </a>
</li>
`).join('')
}
const markup = createMarkup(galleryItems);
container.innerHTML = markup;

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  fadeSpeed: 250,
  captionSelector: "img",
  captionsData: "alt",
  captionsPosition: 'bottom',
});
