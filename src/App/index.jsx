import  { BrowserRouter} from 'react-router-dom';
import { ShoppingCartProvider, initializeLocalStorage } from '../Context';
import { AppRoutes } from '../Navigation/AppRoutes';
import { NavBar } from '../Layout/NavBar';
import CheckoutSideMenu from '../Features/Store/CheckoutSideMenu';
import { SideNavigationBar, SideNavigationBarItem } from '../Layout/SideNavigationBar';
import {BuildingStorefrontIcon,PresentationChartLineIcon, ChatBubbleLeftRightIcon} from "@heroicons/react/24/solid";
import './App.css';



function App() {

  initializeLocalStorage();

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
        <CheckoutSideMenu />
        <SideNavigationBar>
          <SideNavigationBarItem icon = {<BuildingStorefrontIcon className='w-6 h-6'/>} text={"Store"} url={'/store'} />
          <SideNavigationBarItem icon = {<PresentationChartLineIcon className='w-6 h-6'/>} text={"Statistics"} url={'/tracker'}/>
          <SideNavigationBarItem icon = {<ChatBubbleLeftRightIcon className='w-6 h-6'/> } text={"Hercules"} url={'/hercules'}/>
        </SideNavigationBar>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
