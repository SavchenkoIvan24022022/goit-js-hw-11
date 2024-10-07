import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import {createGallery} from "./js/render-functions";



import {fetchImages} from "./js/pixabay-api";


const searchForm = document.querySelector('.form')
searchForm.addEventListener('submit', onSubmit )
function onSubmit (eve) {
    eve.preventDefault();
    const query = eve.target.elements.input.value.trim();
fetchImages(query)
.then(res =>console.log(res))
}