import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGallery } from './js/render-functions';

import { fetchImages } from './js/pixabay-api';

const instanceSimpleLightbox = new SimpleLightbox('.imagebox a', {});
const searchForm = document.querySelector('.form');
const galleryList = document.querySelector('.imagebox');

searchForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  galleryList.innerHTML = '';
  const query = event.target.elements.input.value.trim();
  if (!query) {
    iziToast.warning({
      message: 'Try to enter the desired value',
      position: 'topRight'
    });
    return;
  }
  fetchImages(query)
    .then(response => {
      if (response.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            maxWidth: 400,
            backgroundColor: "#ef4040",
            messageColor: "#fff",
        });
        return;
      }
      const markUp = createGallery(response.hits);
      galleryList.innerHTML = markUp;
      instanceSimpleLightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        title: 'Hey',
        message: `${error.message}`,
      });
    });
}
