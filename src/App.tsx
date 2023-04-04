import { useEffect, useState } from 'react';

import './App.css';

import useAdvice from './hooks/useAdvice';

import { Advice } from './types';

function App() {
  const [advice, setAdvice] = useState<Advice | undefined>();

  const { fetchAdvice } = useAdvice();

  useEffect(() => {
    fetchAdvice().then((advice) => {
      setAdvice(advice);

      console.log(advice);
    });
  }, []);

  return <div className="App">{advice?.advice}</div>;
}

export default App;
