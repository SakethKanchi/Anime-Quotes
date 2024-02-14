import { useState, useEffect } from 'react'
import Header from './components/Header';
import Quote from './components/Quote';
import Footer from './components/Footer';

function App() {
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null,
  });

  const fetchQuote = async () => {
    return await fetch('https://animechan.xyz/api/random')
      .then(response => response.json());
  }

  const generateNewQuote = async () => {
    setQuote(await fetchQuote());
  }

  useEffect(() => {
    generateNewQuote();
  }, []);

  return (
    <div className='App'>
      <Header />
      <Quote quote={quote} />
      <button onClick={generateNewQuote}>Generate New Quote</button>
      <Footer />
    </div>
  )
}

export default App
