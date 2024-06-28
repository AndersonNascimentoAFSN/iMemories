import "./reset.css";
import "./index.css";

import { Routes } from "./Routes";

import 'favorites/Favorites';
import 'movies/Movies';
import 'drawer/Drawer';

const app = document.getElementById("app") as HTMLElement

app.innerHTML = `
<div class="container">
  <main-drawer class="main-drawer"></main-drawer>
    <section class="content-page" id="content-page">
      <movies-page></movies-page>
    </section>
  </div>
`;

Routes()