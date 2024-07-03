import "./reset.css";
import "./index.css";

import './components/drawer/Drawer'
import './components/dynamic-content-route/dynamic-content-route'

export const AppDrawer = (element: HTMLElement) => {
  element.innerHTML = `
    <dynamic-content-route></dynamic-content-route>
    <main-drawer></main-drawer>
  `;
}

AppDrawer(document.getElementById("drawer") as HTMLElement);
