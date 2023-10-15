import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
/* global dataLayer */


function App() {
  return (
    <div>
      <Header>
    　　
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HZ0PSM326S"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());

          gtag('config', 'G-HZ0PSM326S');
        </script>
   　 </Header>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
