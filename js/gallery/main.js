import {renderFilters} from './filters.js';
import {renderThumbnails} from './thumbnails.js';
import {renderPopupDetails} from './popup.js';
import {applyRandomFilter, applyDiscussedFilter} from './data.js';

const DEFAULT_FILTER = 'filter-default';
const RANDOM_FILTER = 'filter-random';
const DISCUSSED_FILTER = 'filter-discussed';

const renderGallery = (picturesData, reduceFrequency) => {
  renderFilters();
  renderThumbnails(picturesData);

  document.addEventListener('filterSelect', reduceFrequency((event) => {
    switch (event.detail) {
      case DEFAULT_FILTER:
        renderThumbnails(picturesData);
        break;
      case RANDOM_FILTER:
        renderThumbnails(applyRandomFilter(picturesData));
        break;
      case DISCUSSED_FILTER:
        renderThumbnails(applyDiscussedFilter(picturesData));
        break;
    }
  }));

  document.addEventListener('thumbnailSelect', (event) => {
    renderPopupDetails(event.detail);
  });
};

export {renderGallery};
