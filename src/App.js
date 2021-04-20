import React from 'react';

//layouts
import Header from './layouts/Header';
import Footer from './layouts/Footer';

//pages
import Main from './pages/Main';

//modals
import ModalMainPage from './components/modals/MainPageModal';
import Alert from './components/Alert';

//Providers
import {MainPageModalProvider} from './contexts/modal/mainPageModal';
import {AlertProvider} from './contexts/alert';

const AppProvider = ({contexts, children}) => contexts.reduce(
  (prev, context) => React.createElement(context, {
      children: prev
}),
  children
);

const App = () => {
  return (
    <AppProvider contexts={[
      AlertProvider,
      MainPageModalProvider
    ]}>
      <div className="App">
        <Alert/>
        <ModalMainPage/>

        
      </div>
    </AppProvider>
  );
}

export default App;
