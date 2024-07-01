import "./reset.css";
import "./index.css";
import "./drawer.css";

export const AppDrawer = (element: HTMLElement) => {
  element.innerHTML = `
    <nav class="nav">
      <ul>
        <li><a href="/" id="page-movies" class='link'>Vídeos</a></li>
        <li>
          <a href="/favorites" id="page-favorites" class='link'>
            Favoritos
            <span id="favorite-count"></span>
          </a>
        </li>
      </ul>
    </nav>
  `;
}

AppDrawer(document.getElementById("drawer") as HTMLElement);

import('mf_videos/AppVideosPage').then(({ AppVideosPage }) => {
  AppVideosPage(document.querySelector(`#main`))
}).catch((e) => {
  console.log(e)
})

import { Routes } from "./Routes";

Routes()