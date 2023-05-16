import React from 'react';
import { useFetchStoryblokData, url } from '../utilities/hooks/useFetchStoryblokData';
import StoryblokClient from 'storyblok-js-client';
import './StoryblokComponent.css';

// consumes data attributes from page --> Storyblok (title, description, image)
export const StoryblokComponent = ({ onChange, value }) => {
  const { data, error } = useFetchStoryblokData(url);

  const Storyblok = new StoryblokClient({
    accessToken: process.env.REACT_STORYBLOK_TOKEN,
    version: process.env.REACT_STORYBLOK_VERSION,
    cache: {
      clear: 'auto',
      type: 'memory',
    },
  });

  const createMarkup = (storyblokHTML) => {
    return {
      __html: Storyblok.richTextResolver.render(storyblokHTML),
    };
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {/* <div>
        Data from Storyblok:
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div> */}
      <div className='custom-component p-12'>
        <h1 className='text-3xl font-bold text-gray-900 my-5 uppercase'>{data.title}</h1>
        <figure className=''>
          <img src={data.image} alt='example' />
        </figure>
        <div
          className='text-gray-800 py-6'
          dangerouslySetInnerHTML={createMarkup(data.details)}
        />
        <textarea
          className='block text-sm font-medium text-gray-700 my-5 p-2 rounded'
          onChange={onChange}
          placeholder={data.description}
          value={value}
        />
      </div>
    </div>
  );
};
