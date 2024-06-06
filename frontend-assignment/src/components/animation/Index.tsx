import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';
import './style.css';

interface PropsI {
  imageSource?: string;
  externalClass?: string;
  delay?: number;
}
const Animation = ({ imageSource, externalClass, delay = 0 }: PropsI) => {
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
    <div className={`slide-up-animation z-index ${externalClass}`} key={key}>
      <img src={imageSource} className={'w-100'} />
    </div>
  );
};

export default Animation;
