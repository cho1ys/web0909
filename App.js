import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Product from './Pages/Product';
import Root from './Pages/Root';
import ProductInfo from './Pages/ProductInfo';
const router = createBrowserRouter([
  {
    path : '/',
    element : <Root/>,
    errorElement : <NotFound/>,
    children : [
      {index : true, element : <Home/>},
      {path : 'product', element : <Product/>},
      {path : 'product/:productId', element : <ProductInfo/>}
    ]
  },
  {
    path : '/product',
    element : <Product/>,
    errorElement : <NotFound/>
  }
])
function App() {
  return (
    <>
      <RouterProvider router = {router}/>
    </>
  );
}

export default App;
