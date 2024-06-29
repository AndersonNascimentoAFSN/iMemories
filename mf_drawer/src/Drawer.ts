import "./drawer.css";

class Drawer extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    // const isFavoriteCount = window.localStorage.getItem('@iMemories-isFavorite-count')
    // const favoriteCount = isFavoriteCount ? parseInt(isFavoriteCount) : '0'

    this.innerHTML = `
      <nav class="drawer">
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

customElements.define('main-drawer', Drawer)
