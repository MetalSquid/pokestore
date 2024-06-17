
import { Route, Routes } from 'react-router-dom';
import './App.styles.css';

import Home from './Routes/home/home.component';
import Shop from './Routes/shop/shop.component';
import Authentication from './Routes/authentication/authentication.component';
import Checkout from './Routes/checkout/checkout.component';
import AppLayout from './components/applayout/app-layout.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home/>} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
