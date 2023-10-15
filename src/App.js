import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

function App() {
  return (
    <div>
      <head>
    　　
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HZ0PSM326S"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HZ0PSM326S');
        </script>
   　 </head>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
