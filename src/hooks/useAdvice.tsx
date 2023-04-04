import { Advice } from '../types';

const useAdvice = () => {
  async function fetchAdvice(): Promise<Advice | undefined> {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');

      const json = await response.json();

      return json.slip;
    } catch (error) {
      console.log(error);
    }
  }

  return { fetchAdvice };
};

export default useAdvice;
