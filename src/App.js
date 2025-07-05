import React from 'react';
import Page1 from './pages/Page1'; // Importing Page1 component
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import ScrollButton from './components/ScrollButton';

function App() {
  return (
    <div className="App">
      <Page1 />  {/* Rendering Page1 */}
      <Page2 />  
      <Page3 /> 
      <Page4 /> 
      <ScrollButton />
    </div>
  );
}

export default App;
