import React from 'react';
import { Menubar } from 'primereact/menubar';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";

const Menu = (props) => {

    return (
        <Menubar
            model={items}
            start={<InputText placeholder="Search" type="text"/>}
            end={<Button label="Logout" icon="pi pi-power-off"/>}
        />
    )
}

export default Menu;

const items = [
    {
        label:'Quit',
        icon:'pi pi-fw pi-power-off'
    }
];
