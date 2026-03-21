import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const submit = document.querySelector('.form');

submit.addEventListener('submit', (e) => {
  e.preventDefault();

  const input = submit.querySelector('input[name="search-text"]');
  const query = input.value.trim();

  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search term!' });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (!data || data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: "topRight",
          backgroundColor: '#EF4040',
          titleColor: '#FFFFFF',
          messageColor: '#FFFFFF',
          iconColor: '#FFFFFF',
          color: '#FFFFFF',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({ message: 'Помилка при запиті!' });
    })
    .finally(() => {
      hideLoader();
    });
});