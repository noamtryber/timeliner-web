import { frameioData } from './frameio';
import { dropboxData } from './dropbox';
import { wipsterData } from './wipster';
import { vimeoData } from './vimeo';
import { clickupData } from './clickup';

import { frameioDataAr } from './ar/frameio';
import { dropboxDataAr } from './ar/dropbox';
import { wipsterDataAr } from './ar/wipster';
import { vimeoDataAr } from './ar/vimeo';
import { clickupDataAr } from './ar/clickup';

export const getCompetitorData = (language: string) => {
  if (language === 'ar') {
    return {
      frameio: frameioDataAr,
      dropbox: dropboxDataAr,
      wipster: wipsterDataAr,
      vimeo: vimeoDataAr,
      clickup: clickupDataAr,
    };
  }
  
  return {
    frameio: frameioData,
    dropbox: dropboxData,
    wipster: wipsterData,
    vimeo: vimeoData,
    clickup: clickupData,
  };
};