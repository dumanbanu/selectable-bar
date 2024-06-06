import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import { Context } from '../../context/Context';
import TabBarItem, { tabBarOptionsList } from '../../assets/options/items';

const Index = () => {
  const { activeOption } = useContext(Context);

  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey((prevState) => prevState + 1);
  }, [activeOption]);

  const selectedDescription: TabBarItem | undefined = tabBarOptionsList.find(
    (option) => option.id === activeOption,
  );
  return (
    <div className={'fade-in'} key={key}>
      <div className="desc-container">
        <div className="title">{selectedDescription?.title.toUpperCase()} </div>
        <h3 className="sub-title">{selectedDescription?.subtitle}</h3>
        <p className="desc">{selectedDescription?.description}</p>
        <button type="button" className="btn-desc btn-light">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Index;
