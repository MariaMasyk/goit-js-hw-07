import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
const container = document.querySelector('.gallery');
container.insertAdjacentHTML('afterbegin',createMarkup(galleryItems));
container.addEventListener('click', onImageClick);
function createMarkup(arr){
    return arr.map(({preview, original,description}) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      width="300"
    />
  </a>
</li>
`).join('')
}
function onImageClick(event){
    event.preventDefault();
    const target = event.target;
  if (event.target.nodeName !== "img")
  return;
    const originalImageUrl = target.dataset.source;
    const modal = basicLightbox.create(`<img src="${originalImageUrl}" width="800" height="600">`);
    modal.show();
  
    document.addEventListener('keydovn',keyDown);
  }
