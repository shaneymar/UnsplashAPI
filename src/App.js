import React, { useState} from 'react';
import Header from './components/Header';
import Search from './components/Search';

function App() {

//const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

  const [word, setWord] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=mEJmF_uDqL_kF-6NJugs_xH1JPLz9J_jPOsEkRVMOJU`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(err => console.log(err));
    
    setWord('');
  }



  return (
    <div>
      <Header title="Unsplash"/>
      <Search handleSubmit={handleSubmit} word={word} setWord={setWord} />
    </div>
  );
}

export default App;
