class Favorites extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {

    this.innerHTML = `
      <div>
        <h1>Favorites Page</h1>
      </div>
    `
  }
}

customElements.define('favorites-page', Favorites)