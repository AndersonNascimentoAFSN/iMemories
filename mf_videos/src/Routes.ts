import './pages/Favorities'
import './pages/Movies'

class Route extends HTMLElement {
  constructor() {
    super()
  }

  static observedAttributes = ["path"];

  connectedCallback() {
    const path = window.location.pathname

    const contentSection = document.getElementById("content-page")
    if (!contentSection) return
  
    if (path === '/') {
      contentSection.innerHTML = `
        <movies-page></movies-page>
      `
      // this.append(contentSection)
    }
  
    if (path === '/favorites') {
      contentSection.innerHTML = `
        <favorites-page></favorites-page>
      `;
      // this.append(contentSection)
    }
  }

  disconnectedCallback() {
    console.log('disconnected')
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('name', name)
    console.log('oldValue', oldValue)
    console.log('newValue', newValue)
  }
  
}

customElements.define('main-page', Route)