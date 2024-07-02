import "./reset.css";
import "./index.css";

import './components/drawer/Drawer'

export const AppDrawer = (element: HTMLElement) => {
  element.innerHTML = `
    <main-drawer></main-drawer>
  `;
}

AppDrawer(document.getElementById("drawer") as HTMLElement);

import('mf_videos/AppVideosPage').then(({ AppVideosPage }) => {
  AppVideosPage(document.querySelector(`#main`))
}).catch((error) => {
  console.error(error)
})

import { Routes } from "./Routes";

Routes()