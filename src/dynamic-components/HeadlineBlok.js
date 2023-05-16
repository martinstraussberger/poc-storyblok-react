import React from 'react';

export const HeadlineBlok = (props) => (
  <div className='foo'>
    <hr />
    Hi I'm a Foo component with the headline:
    <h2>{props.blok.headline}</h2>
  </div>
);
