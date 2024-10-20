import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGallery } from './js/render-functions';

import { fetchImages } from './js/pixabay-api';

console.log(document);

const searchForm = document.querySelector('.form');
const galleryList = document.querySelector('.imagebox');

searchForm.addEventListener('submit', onSubmit);
function onSubmit(eve) {
  eve.preventDefault();
  galleryList.innerHTML = '';
  const query = eve.target.elements.input.value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Hey',
      message: "It's alive! Congratulations!",
    });
    return;
}

  fetchImages(query).then(response => {
    if (response.hits.length === 0) {
      iziToast.error({
        title: 'Hey',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
    console.log(response);

    const markUp = createGallery(response.hits);
    galleryList.innerHTML = markUp;
    console.log(markUp);
  }
 ) .catch((error)=>{
    iziToast.error({
        title: 'Hey',
        message:
          `${error.message}`,
      });

 })
 


}
