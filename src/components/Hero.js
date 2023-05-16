import React from 'react';
import { useFetchStoryblokData, url } from '../utilities/hooks/useFetchStoryblokData';

export const Hero = () => {
  const { data, error } = useFetchStoryblokData(url);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className='p-10'>
      <div className=''>
        <h1 className='text-3xl font-bold uppercase text-gray-800'>{data.headline}</h1>
        <h2 className=''>{data.subheadline}</h2>
      </div>
      <img
        src={data.background_image.filename}
        alt={data.background_image.filename}
        className=''
      />
    </div>
  );
};


