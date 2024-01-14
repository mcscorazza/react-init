import React from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';

const App = () => {
  return (
    <Layout>
      <Home />
      {/* Outras páginas podem ser renderizadas aqui */}
    </Layout>
  );
};

export default App;