import React, { useContext } from 'react';
import { Context } from '../../context/Context';

interface Props {
  id: number;
  title: string;
  iconActive: string;
  iconPassive: string;
}

const Index = ({ id, title, iconActive, iconPassive }: Props) => {
  const { activeOption, setActiveOption } = useContext(Context);

  const handleClickedOption = () => {
    setActiveOption(id);
  };

  const isThisOptionActive = activeOption === id;

  return (
    <div
      className={`tab-item-container ${isThisOptionActive ? 'bg-blue' : 'bg-white'}`}
      onClick={handleClickedOption}
    >
      <img
        src={activeOption === id ? iconPassive : iconActive}
        alt={`${title} icon`}
      />
      <div className={'tab-item-title'}>{title}</div>
    </div>
  );
};

export default Index;
