import "./drawer.css";

class Drawer extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {

    this.innerHTML = `
      <nav class="drawer">
        <ul>
          <li><a href="/">Vídeos</a></li>
          <li><a href="/favorites">Favoritos</a></li>
        </ul>
      </nav>
    `
  }
}

customElements.define('main-drawer', Drawer)