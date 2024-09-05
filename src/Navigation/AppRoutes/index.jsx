import { useContext } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import Home from '../../Pages/Home';
import MyAccount from '../../Pages/MyAccount';
import MyOrder from '../../Pages/MyOrder';
import MyOrders from '../../Pages/MyOrders';
import SignIn from '../../Pages/SignIn';
import NotFound from '../../Pages/NotFound';

const AppRoutes = () => {
    const context = useContext(ShoppingCartContext);

    // Sign Out
    const signOutLocalStorage = localStorage.getItem('sign-out');
    const parsedSignOut = JSON.parse(signOutLocalStorage);
    const isUserSignOut = context.signOut || parsedSignOut;

    // Account
    const account = localStorage.getItem('account');
    const parsedAccount = JSON.parse(account);

    // Has an account?
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true;
    const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage;

    let routes = useRoutes([
        { path: '/', element: <Navigate replace to={'/store'} /> },
        { path: '/store', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
        { path: '/clothes', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
        { path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
        { path: '/jewelry', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
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

export {AppRoutes};