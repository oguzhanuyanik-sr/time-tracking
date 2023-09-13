'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

interface ContextProps {
  time: string;
  setTime: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<ContextProps>({
  time: '',
  setTime: (): string => '',
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [time, setTime] = useState('daily');

  return (
    <GlobalContext.Provider value={{ time, setTime }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
