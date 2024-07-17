import "./index.css";

import './components/drawer/Drawer'

export const AppDrawer = (element: HTMLElement) => {
  element.innerHTML = `
    <main-drawer></main-drawer>
  `;
}

AppDrawer(document.getElementById("drawer") as HTMLElement);
