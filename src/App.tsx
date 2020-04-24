import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

const App = () => {
  return (
    <>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </>
  );
};

export default App;
