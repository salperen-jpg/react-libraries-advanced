import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import SharedLayouts from './pages/SharedLayouts';
import SingleProduct from './pages/SingleProduct';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayouts />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='products/:id' element={<SingleProduct />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
