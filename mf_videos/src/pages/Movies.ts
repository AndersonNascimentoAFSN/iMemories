class Movies extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {

    this.innerHTML = `
      <div>
        <h1>Movies Page</h1>
      </div>
    `
  }
}

customElements.define('movies-page', Movies)