import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import { Context } from '../../context/Context';

interface PropsI {
  imageSource?: string;
  externalClass?: string;
  delay?: number;
}

const Index = ({ imageSource, externalClass, delay }: PropsI) => {
  const { activeOption } = useContext(Context);
  const [key, setKey] = useState(1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setKey((prevState) => prevState + 1);
  }, [activeOption]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return null;

  return (
    <div className={`fade-in ${externalClass}`} key={key}>
      <img src={imageSource} className={'w-100'} />
    </div>
  );
};

export default Index;
