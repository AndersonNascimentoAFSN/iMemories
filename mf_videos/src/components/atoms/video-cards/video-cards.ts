class VideoCards extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    const style = `
      .videos-cards {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }
    `

    const template = `
      <style>${style}</style>
      <div class="video-cards" id="video-cards"></div>
    `

    this.shadowRoot!.innerHTML = template
  }
}

if (!customElements.get('video-cards')) {
  customElements.define('video-cards', VideoCards)
}

export default VideoCards