import {ChevronDoubleLeftIcon, ChevronDoubleRightIcon, EllipsisVerticalIcon} from "@heroicons/react/24/solid"
import PropTypes from 'prop-types';
import { createContext, useContext, useState } from "react";
import { NavLink } from "react-router-dom";


const SideNavigationBarContext = createContext();

const SideNavigationBar = ( { children } ) => {

    const [expanded, setExpanded]= useState(true);

    return(
        <aside className="h-screen fixed top-0 left-0">
            <nav className="h-full flex flex-col bg-white shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <figure className={`overflow-hidden transition-all ${expanded ? "w-32":"w-0"}`}>
                        <img src="https://img.logoipsum.com/243.svg" alt="temporal logo" />
                    </figure>
                    <button onClick={()=>setExpanded( curr => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        {expanded ? <ChevronDoubleLeftIcon className="w-6 h-6"/> : <ChevronDoubleRightIcon className="w-6 h-6"/>}
                    </button>
                </div>

                <SideNavigationBarContext.Provider value={{
                    expanded
                }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SideNavigationBarContext.Provider>
                

                <div className="border-t flex p-3 justify-between items-center">
                    <figure className="h-10 w-10 rounded-md">
                        <img src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true" alt="" />
                    </figure>
                    <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52  ml-3":"w-0"}`}>
                        <h4 className="font-semibold">sebas bonilla</h4>
                        <span className="text-xs text-gray-600">sebas@hotmail.com</span>
                    </div>
                    <EllipsisVerticalIcon className={`${expanded ? "w-6 h-6 ml-3":"w-0 h-0"}`}/>
                </div>
            </nav>
        </aside>
    );
}

const SideNavigationBarItem = ({icon, text,url}) => {
    const {expanded} = useContext(SideNavigationBarContext);

    return(
        <li className="w-auto">
            <NavLink
                to={url}
                className={({isActive}) => `relative w-auto flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${isActive ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-700": "hover:bg-indigo-50 text-gray-600"}`}
                >
                {icon}
                <span className={`overflow-hidden ${expanded ? "w-52 ml-3":"w-0"    } `}>{text}</span>
                {!expanded && <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>{text}</div>}
            </NavLink>
        </li>
    );
}

SideNavigationBar.propTypes = {
    children: PropTypes.node
}

SideNavigationBarItem.propTypes = {
    icon: PropTypes.node,
    text: PropTypes.string,
    url: PropTypes.string
}

export { SideNavigationBar,SideNavigationBarItem };