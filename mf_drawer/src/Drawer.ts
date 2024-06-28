import "./drawer.css";

class Drawer extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const pathname = window.location.pathname
    this.innerHTML = `
      <nav class="drawer">
        <ul>
          <li><a href="/" id="page-movies" class='link'>Vídeos</a></li>
          <li><a href="/favorites" id="page-favorites" class='link'>Favoritos</a></li>
        </ul>
      </nav>
    `
  }
}

customElements.define('main-drawer', Drawer)
