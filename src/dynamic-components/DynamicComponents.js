import React from 'react';
import {DivBlok} from './DivBlok';
import { HeadlineBlok } from './HeadlineBlok';

const DynamicComponents = {
  headline: HeadlineBlok,
  divblok: DivBlok,
};

export const DynamicComponentsBlok = (blok) => {
  if (typeof DynamicComponents[blok.component] !== 'undefined') {
    return React.createElement(DynamicComponents[blok.component], {
      key: blok._uid,
      blok: blok,
    });
  }
  return React.createElement(
    () => <div>The component {blok.component} has not been created yet.</div>,
    { key: blok._uid }
  );
};


