class Title extends HTMLElement {
  static get observedAttributes() {
    return ['text'];
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'text' && oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const text = this.getAttribute('text') || 'Título'

    const style = `
      .title {
        color: var(--foreground-color);
        font-size: 2rem;
      }
    `

    const template = `
      <style>${style}</style>
      <h1 class="title">${text}</h1>
    `

    this.shadowRoot!.innerHTML = template
  }
}

if (!customElements.get('title-heading')) {
  customElements.define('title-heading', Title)
}

export default Title