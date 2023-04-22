import React, {useState} from 'react';
import Header from './components/Header';
import Search from './components/Search';


function App() {

  const [word, setWord] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  }
  console.log(word);
  return (
    <div>
      <Header title="Unsplash"/>
      <Search handleSubmit={handleSubmit} word={word} setWord={setWord} />
    </div>
  );
}

export default App;
