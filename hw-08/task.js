'use strict';

import gallery from './gallery-items.js';

const createGallaryItem = function (gallery) {
    gallery.forEach(image => {
      const row = `
      <li class="gallery__item">
      <a
        class="gallery__link"
        href="${image.original}"
      >
        <img
          class="gallery__image"
          src=""
          data-source="${image.original}"
          data-lazy="${image.original}"
          alt="${image.description}"
        />
      </a>
    </li>`;
      document.querySelector('.gallery').insertAdjacentHTML('beforeend', row);
    });
  };
  createGallaryItem(gallery);
  
  const imagesList = document.querySelector('.js-gallery');
  const modal = document.querySelector('.js-lightbox');
  const modalImage = document.querySelector('.lightbox__image');
  const closeButton = document.querySelector('.lightbox__button');
  const overlay = document.querySelector('.lightbox__content');
  const images = document.querySelectorAll('.gallery__image');
  
  const actions = {
    openModal(event) {
      event.preventDefault();
      if (event.target === event.currentTarget) return;
      const currentImage = event.target;
      modal.classList.add('is-open');
      modalImage.src = currentImage.dataset.source;
      modalImage.alt = currentImage.alt;
  
      window.addEventListener('keydown', actions.closeByESC.bind(actions));
      window.addEventListener('keydown', actions.slideLeft);
      window.addEventListener('keydown', actions.slideRight);
    },
    closeModal() {
      modal.classList.remove('is-open');
      modalImage.src = '';
      modalImage.alt = '';
      window.removeEventListener('keydown', actions.closeByESC.bind(actions));
    },
    closeByOverlay(event) {
      if (event.target === event.currentTarget) this.closeModal();
    },
    closeByESC(event) {
      if (event.code !== 'Escape') return;
      this.closeModal();
    },
    currentImg: 0,
    slideLeft(event) {
      if (modal.classList.contains('is-open') && event.code === 'ArrowLeft') {
        gallery.forEach((num, idx) => {
          if (modalImage.src === num.original && idx !== 0) {
            this.currentImg = idx - 1;
          }
        });
        modalImage.src = gallery[this.currentImg].original;
      }
    },
    slideRight(event) {
      if (modal.classList.contains('is-open') && event.code === 'ArrowRight') {
        let currentImg = 0;
        gallery.forEach((num, idx) => {
          if (modalImage.src === num.original && idx < gallery.length - 1) {
            this.currentImg = idx + 1;
          }
        });
        modalImage.src = gallery[this.currentImg].original;
      }
    },
    lazyLoad: function (target) {
  
      const options = {
        rootMargin: '60px',
      };
  
      const io = new IntersectionObserver((entries, obserer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const imageUrl = img.dataset.lazy;
            img.setAttribute('src', imageUrl)
            obserer.disconnect();
          }
        });
      }, options);
  
      io.observe(target);
    }
  };
  
  
  images.forEach(image => actions.lazyLoad(image));
  imagesList.addEventListener('click', actions.openModal);
  closeButton.addEventListener('click', actions.closeModal);
  overlay.addEventListener('click', actions.closeByOverlay.bind(actions));