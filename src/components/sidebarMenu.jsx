import React from 'react';
import { SlideMenu } from 'primereact/slidemenu';


const items = [
    {
        separator:true
    },
    {
        label:'Menu',
        icon:'pi pi-fw pi-power-off'
    }
];

const SidebarMenu = (props) => {

    return (
        <SlideMenu model={items} />
    )
}

export default SidebarMenu;


