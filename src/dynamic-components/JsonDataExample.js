// dynamic components with json data
import { DynamicComponentsBlok } from './DynamicComponents';
import { data } from './data/data';

export const JsonDataExample = () => {
  return (
    <div className='dynamicApp'>
      <h1>Dynamic Components Example</h1>
      {data.content.body.map((blok) => DynamicComponentsBlok(blok))}
    </div>
  );
};
