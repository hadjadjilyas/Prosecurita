import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MacbookPro } from './screens/MacbookPro';
import { Expertise } from './screens/Expertise/expertise';
import { Prestation } from './screens/Prestations/prestation';
import { Contact } from './screens/contact/contact';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MacbookPro />} />
        <Route exact path="/expertise" element={<Expertise />} />
        <Route exact path="/prestation" element={<Prestation/>} />
        <Route exact path="/contact" element={<Contact/>} />
       
      </Routes>
    </Router>
  );
};

export default App; // Exportez le composant par défaut

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
