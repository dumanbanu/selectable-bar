import React from 'react';
import TabBarItem from '../tab-item/Index';
import { tabBarOptionsList } from '../../assets/options/items';

interface PropsI {
  keyI: number;
}
function Index({ keyI }: PropsI) {
  return (
    <div className={'bg-white d-flex col-12'}>
      {tabBarOptionsList.map((item) => {
        return (
          <>
            <TabBarItem
              key={keyI + item.id}
              id={item.id}
              title={item.title}
              iconActive={item.iconActive}
              iconPassive={item.iconPassive}
            />
          </>
        );
      })}
    </div>
  );
}

export default Index;
