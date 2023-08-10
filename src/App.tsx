import { Box, Container, Stack } from '@mui/material';
import './App.scss';
import Aside from './components/Aside';
import Header from './components/Header';
import ProductList from './components/ProductList';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './components/Product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  }, 
  {
    path: "/product/:productId",
    element: <Product />,
  }
]);

function App() {
  return (
    <Box>
      <Header />
      <Container maxWidth='xl'>
        <Stack direction="row" justifyContent="space-between" sx={{paddingTop: '100px'}}>
          <Aside />
          <RouterProvider router={router} />
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
