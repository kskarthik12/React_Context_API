import React from 'react';
import { CardProvider } from './assets/components/CardContext';
import CardPage from '././assets/components/CardPage';


const App = () => {
  return (
    <CardProvider>
      <div>
        
        <CardPage />
      </div>
    </CardProvider>
  );
};

export default App;
