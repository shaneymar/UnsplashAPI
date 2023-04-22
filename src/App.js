import React, { useState} from 'react';
import Header from './components/Header';
import Search from './components/Search';


const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {



  const [word, setWord] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(word);

    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(err => console.log(err));
    
  }



  return (
    <div>
      <Header title="Unsplash"/>
      <Search handleSubmit={handleSubmit} word={word} setWord={setWord} />
    </div>
  );
}

export default App;
