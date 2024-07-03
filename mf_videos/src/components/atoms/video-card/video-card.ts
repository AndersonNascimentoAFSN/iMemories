class VideoCard extends HTMLElement {
  static get observedAttributes() {
    return ['videoId', 'isFavorite'];
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    this.render()
  }

  render() {
    const videId = this.getAttribute('videoId') || ''
    const isFavorite = this.getAttribute('isFavorite') || 'false'

    const style = `
    .video-card {
      background-color:  rgb(236, 244, 251);
      padding: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 12px, rgba(0, 0, 0, 0.12) 0px 0px 12px;
      border-radius: 8px;
      min-height: 200px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.5rem;
    }

    .video-card-wrapper-iframe {
      iframe {
        width: 100%;
        height: 200px;
        border-radius: 8px;
      }
    }

    .favorite-button {
      background-color: rgb(144, 202, 249);
      padding: 0.5rem;
      border-color: transparent;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      font-size: 1rem;
      color: rgb(33, 33, 33);
    }
  `

    const template = `
    <style>${style}</style>
    <div class="video-card" id="video-card">
      <div
        class="video-card-wrapper-iframe"
        id="video-card-wrapper-iframe"
      >
        <iframe src="https://www.youtube.com/embed/${videId}" frameborder="0" allowfullscreen id="iframe"></iframe>
      </div>
      <button
        class="favorite-button"
        id="favorite-video-button"
      >
        <span></span>
        <span>
          ${isFavorite === 'true' ? '<span id="favorite-icon">⭐</span>' : '<span id="unfavorite-icon">☆</span>'}
        </span>
      </button>
    </div>
  `

    this.shadowRoot!.innerHTML = template
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'videId' && oldValue !== newValue) {
      this.render();
    }

    if (name === 'isFavorite' && oldValue !== newValue) {
      this.render();
    }
  }
}

if (!customElements.get('video-card')) {
  customElements.define('video-card', VideoCard)
}

export default VideoCard
