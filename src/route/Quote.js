import React, { useState, useEffect } from 'react';
import getMathQuote from '../components/MathQuote';

const Quote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    getMathQuote().then((data) => setQuote(data));
  }, []);

  return <p>{quote}</p>;
};

export default Quote;
