export function createGallery(images) {
  const markUp = images
    .map(image => {
      return `<li class="gallery-item">
    <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      data-source="${image.largeImageURL}"
      alt="${image.tags}"
    />
    <ul class="descr-list">
  <li class="descr-item-likes">
    <h3 class="descr-title">Likes</h3>
    <p class="descr-num">${image.likes}</p>
  </li>
  <li class="descr-item-views">
    <h3 class="descr-title">Views</h3>
    <p class="descr-num">${image.views}</p>
  </li>
  <li class="descr-item-comments">
    <h3 class="descr-title">Comments</h3>
    <p class="descr-num">${image.comments}</p>
  </li>
  <li class="descr-item-downloads">
    <h3 class="descr-title">Downloads</h3>
    <p class="descr-num">${image.downloads}</p>
  </li>
</ul>
    </a>
    </li>`;
    })
    .join('');
  return markUp;
}
