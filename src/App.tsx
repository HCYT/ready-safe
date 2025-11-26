import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Supplies from './pages/Supplies';
import Responses from './pages/Responses';
import CasualtyCare from './pages/CasualtyCare';
import Misinformation from './pages/Misinformation';
import MentalPreparedness from './pages/MentalPreparedness';
import Contributions from './pages/Contributions';
import EmergencyContacts from './pages/EmergencyContacts';
import UnitedFront from './pages/UnitedFront';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="supplies" element={<Supplies />} />
          <Route path="responses" element={<Responses />} />
          <Route path="casualty-care" element={<CasualtyCare />} />
          <Route path="misinformation" element={<Misinformation />} />
          <Route path="mental" element={<MentalPreparedness />} />
          <Route path="contributions" element={<Contributions />} />
          <Route path="emergency-contacts" element={<EmergencyContacts />} />
          <Route path="united-front" element={<UnitedFront />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
