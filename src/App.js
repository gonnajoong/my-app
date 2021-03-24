import React from 'react';

//layouts
import Header from './layouts/Header';
import Footer from './layouts/Footer';

//pages
import Main from './pages/Main';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
