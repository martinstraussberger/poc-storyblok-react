import { useEffect, useState } from 'react';
import StoryblokClient from 'storyblok-js-client';

//landing-page?version=draft 
const version = '';
const token = ''
//cv=1683875268 --> cache version
export const url = `https://api.storyblok.com/v2/cdn/stories/blog/entry-1?${version}&token=${token}&cv=1683875268`;

console.log(process.env.REACT_APP_STORYBLOK_API_KEY)
export const useFetchStoryblokData = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (isMounted) {
          setData(json.story.content);
        }
      } catch (error) {
        console.error('Error fetching data from Storyblok:', error);
        if (isMounted) {
          setError(error);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, error };
};
