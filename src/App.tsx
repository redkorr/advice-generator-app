import { useEffect, useState } from 'react';

import useAdvice from './hooks/useAdvice';

import { Advice } from './types';

import Devider from './assets/pattern-divider-mobile.svg';

import Dice from './assets/icon-dice.svg';

function App() {
  const [advice, setAdvice] = useState<Advice | undefined>();

  const { fetchAdvice } = useAdvice();

  useEffect(() => {
    fetchAdvice().then((advice) => {
      setAdvice(advice);
    });
  }, []);

  return (
    <div className="flex content-center justify-center items-center h-[100svh]">
      <div className="flex flex-col justify-center rounded-2xl bg-darkGrayishBlue p-6 mx-4 relative sm:w-[500px] sm:mx-0 sm:px-8">
        <span className="flex content-center justify-center text-neonGreen text-xs font-semibold tracking-[0.3em] my-6">
          ADVICE #{advice?.id}
        </span>
        <span className="flex content-center justify-center text-lightCyan mx-auto text-center">
          „{advice?.advice}”
        </span>
        <div className="mt-6 mb-10 mx-auto">
          <img src={Devider} />
        </div>
        <div>
          <button className="transition-[0.2s_ease] flex content-center justify-center p-5 rounded-full bg-neonGreen absolute left-[50%] bottom-0 translate-y-1/2 -translate-x-1/2 hover:shadow-[0_0_30px_-3px_rgba(81,255,168,1)]">
            <img src={Dice} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
