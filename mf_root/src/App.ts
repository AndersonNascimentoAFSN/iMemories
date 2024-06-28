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
      <favorites-page></favorites-page>
    </section>
  </div>
`;

Routes()