import "./reset.css";
import "./index.css";

import './components/drawer/Drawer'
import { Routes } from "./Routes";

export const AppDrawer = (element: HTMLElement) => {
  element.innerHTML = `
    <main-drawer></main-drawer>
  `;
}

AppDrawer(document.getElementById("drawer") as HTMLElement);

Routes()