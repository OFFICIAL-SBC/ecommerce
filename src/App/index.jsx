import  { BrowserRouter} from 'react-router-dom';
import { ShoppingCartProvider, initializeLocalStorage } from '../Context';
import { AppRoutes } from '../Navigation/AppRoutes';
import { NavBar } from '../Layout/NavBar';
import CheckoutSideMenu from '../Features/Store/CheckoutSideMenu';
import { SideNavigationBar, SideNavigationBarItem } from '../Layout/SideNavigationBar';
import {BuildingStorefrontIcon,PresentationChartLineIcon, ChatBubbleLeftRightIcon,HomeIcon} from "@heroicons/react/24/solid";
import './App.css';
import Layout from '../Layout';



function App() {

  initializeLocalStorage();

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
      <Layout css='flex'>
          <SideNavigationBar>
            <SideNavigationBarItem icon = {<HomeIcon className='w-6 h-6'/>} text={"Home"} url={'/home'} />
            <SideNavigationBarItem icon = {<BuildingStorefrontIcon className='w-6 h-6'/>} text={"Store"} url={'/store'} />
            <SideNavigationBarItem icon = {<PresentationChartLineIcon className='w-6 h-6'/>} text={"Statistics"} url={'/tracker'}/>
            <SideNavigationBarItem icon = {<ChatBubbleLeftRightIcon className='w-6 h-6'/> } text={"Hercules"} url={'/hercules'}/>
          </SideNavigationBar>
          <Layout css='flex flex-col flex-1'>
            <NavBar />
            <AppRoutes />
          </Layout>
        </Layout>
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
