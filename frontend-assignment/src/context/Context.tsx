import React, { createContext, ReactNode, useState } from 'react';

interface IContext {
  activeOption: number | null;
  setActiveOption: (option: number | null) => void;
}

const defaultValues: IContext = {
  activeOption: null,
  setActiveOption: () => {},
};
export const Context = createContext(defaultValues);
interface Props {
  children: ReactNode;
}
const ContextProvider: React.FC<Props> = ({ children }) => {
  const [activeOption, setActiveOption] = useState<number | null>(1);

  return (
    <Context.Provider
      value={{
        activeOption,
        setActiveOption,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
