'use strict';

import infiniteScroll from 'infinite-scroll/';
import imageTamplate from './../templates/image-tamplate.hbs';
import lightBoxTamplate from './../templates/lightbox-tamplate.hbs';
import * as basicLightbox from 'basiclightbox';
import PNotify from 'pnotify/dist/es/PNotify.js';
import { debounce } from 'debounce';

const refs = {
  searchForm: document.querySelector('#search-form'),
  searchOutput: document.querySelector('.js-gallery'),
};

const actions = {
  currentSearchQuery: '',
  newRequest(searchQuery) {
    if (!searchQuery) return;
    if (this.currentSearchQuery !== searchQuery) {
      this.currentSearchQuery = searchQuery;
      refs.searchOutput.innerHTML = '';
      infiniteScrollInstance.pageIndex = 1;
      infiniteScrollInstance.loadNextPage();
    }
  },
  openModalWindow(currentImg) {
    const imageInstance = basicLightbox.create(lightBoxTamplate(currentImg));
    imageInstance.show();
  },
};

const infiniteScrollInstance = new infiniteScroll(refs.searchOutput, {
  path() {
    return 
  },
  responseType: 'text',
  history: false,
  status: '.loader-ellips',
  scrollThreshold: 0,
});

infiniteScrollInstance.on('load', response => {
  const data = JSON.parse(response);
  if (data.hits.length < 1) {
    window.scrollBy(0, -40);
    return PNotify.error({
      text: 'Sorry, we could not find anything',
      delay: 2000,
    });
  }
  const itemsHTML = data.hits.map(item => imageTamplate(item)).join('');
  const proxyElem = document.createElement('div');
  proxyElem.innerHTML = itemsHTML;
  const items = proxyElem.querySelectorAll('.gallery__item');
  infiniteScrollInstance.appendItems(items);
});

refs.searchForm.addEventListener(
  'input',
  debounce(e => actions.newRequest(e.target.value), 500),
);
refs.searchOutput.addEventListener('click', e => {
  if (e.target.dataset.bigphoto) return actions.openModalWindow(e.target);
  return;
});

document.addEventListener('DOMContentLoaded', () => {
  return infiniteScrollInstance.loadNextPage();
});