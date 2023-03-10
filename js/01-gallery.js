import { galleryItems } from "./gallery-items.js";
// Change code below this line


const galItemEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galItemEl.insertAdjacentHTML("beforeend", galleryMarkup);

galItemEl.addEventListener("click", onImageClick);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class ="gallery__container">
        <a class="gallery__link" href="${original}">
          <img loading="lazy" class="gallery__image" 
          src="${preview}"
          data-source="${original}"
          alt="${description}"/>
        </a>
        </div>`;
    })
    .join(``);
}

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  } 
  const instance = basicLightbox.create(
    `<img width="auto" height="auto" 
    src="${e.target.dataset.source}" 
    alt="${e.target.getAttribute("alt")}">`
  );
  instance.show();
  galItemEl.addEventListener("keydown", (e) => {
   
    if (e.key === "Escape") instance.close();
  });
}