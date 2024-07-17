import "./reset.css";
import "./index.css";

import './router'

import('mf_drawer/AppDrawer').then((module) => {
  module.AppDrawer(document.querySelector(`#drawer`))
}).catch((error) => {
  console.error(error)
})

export const Router = (element: HTMLElement) => {
  element.innerHTML = `
    <browser-route></browser-route>
  `;
}

Router(document.getElementById("main") as HTMLElement);
