import "./drawer.css";

class Drawer extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
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
    `
  }
}

if (!customElements.get('main-drawer')) {
  customElements.define('main-drawer', Drawer);
}

export default Drawer;
