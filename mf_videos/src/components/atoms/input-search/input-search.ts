class InputSearch extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open', delegatesFocus: true });
  }

  async connectedCallback() {
    const style = `
      .search-video {
        color: rgb(33, 33, 33);
        font-size: 1rem;
        padding: 0.5rem;
        margin-bottom: 1rem;
        width: 50%;
      }

      @media (max-width: 600px) {
        .search-video {
          width: 80%;
        }
      }
  `

    const template = `
      <style>${style}</style>
      <input type="text" id="search-video" class="search-video" placeholder="Pesquisar por nome">
    `

    this.shadowRoot!.innerHTML = template
  }
}

if (!customElements.get('input-search')) {
  customElements.define('input-search', InputSearch)
}

export default InputSearch