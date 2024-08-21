import  {useRoutes, BrowserRouter, Navigate} from 'react-router-dom';
import { ShoppingCartContext, ShoppingCartProvider, initializeLocalStorage } from '../../Context';
import { useContext } from 'react';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import { NavBar } from '../../Components/NavBar';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';
import './App.css';

const AppRoutes = () => {

  const context = useContext(ShoppingCartContext);

  //Sign Out
  const signOutLocalStorage = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOutLocalStorage);
  const isUserSignOut = context.signOut || parsedSignOut;

  // Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);

  //Has an account?
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0: true;
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0: true;
  const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage;

  let routes = useRoutes([
    { path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/> }, 
    { path: '/clothes', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/> }, 
    { path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/> }, 
    { path: '/jewelry', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'}/> }, 
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },

  ]);

  return routes;
};

function App() {

  initializeLocalStorage();

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
