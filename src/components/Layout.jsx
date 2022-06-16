import React from 'react';
import Menu from "./menu";
import SidebarMenu from "./sidebarMenu";
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {

    return (
        <div>
         <Menu/>
            <SidebarMenu />
            <div className="main" style={{ marginTop: "100px" }}>
                <Outlet />
            </div>
        </div>
    )
}
export default Layout;
