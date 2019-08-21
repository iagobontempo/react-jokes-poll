import React from 'react';

import GlobalStyles from './styles/global'
import JokeList from './components/JokeList/JokeList';

function App() {
  return (
    <div className="App">
      <JokeList />
      <GlobalStyles />
    </div>
  );
}

export default App;
