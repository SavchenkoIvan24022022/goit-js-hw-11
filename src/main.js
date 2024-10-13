import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGallery } from './js/render-functions';

import { fetchImages } from './js/pixabay-api';
import { document } from 'postcss';
console.log(document);

const searchForm = document.querySelector(".form");
const galleryList = document.querySelector(".imagebox");

searchForm.addEventListener('submit', onSubmit);
function onSubmit(eve) {
  eve.preventDefault();
  const query = eve.target.elements.input.value.trim();
  fetchImages(query).then(response => {
    console.log(response);

    const markUp = createGallery(response.hits);
    // galleryList.innerHTML = markUp;
    console.log(markUp);
  });
}
