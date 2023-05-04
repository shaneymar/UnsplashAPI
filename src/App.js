import React, { useState} from 'react';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';

function App() {

//const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=mEJmF_uDqL_kF-6NJugs_xH1JPLz9J_jPOsEkRVMOJU`)
    .then((res) => res.json())
    .then((data) => {
      setImages([{...data, title: word}, ...images]);
      console.log(images);
    })
    .catch(err => console.log(err));
    
    setWord('');
  }



  return (
    <div>
      <Header title="Unsplash"/>
      <Search handleSubmit={handleSubmit} word={word} setWord={setWord} />
      {
      !images.length && 
      <ImageCard image={images}/>
      }
    </div>
  );
}

export default App;
