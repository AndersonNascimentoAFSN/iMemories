import { Links } from "../../utils/links";

class Drawer extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render()

    const mainDrawerShadowRoot = document.querySelector('main-drawer')?.shadowRoot;

    const linkToMovies = mainDrawerShadowRoot?.getElementById('page-movies') as HTMLElement;
    const linkToFavorites = mainDrawerShadowRoot?.getElementById('page-favorites') as HTMLElement;
    const links = mainDrawerShadowRoot?.querySelectorAll('.link') as NodeListOf<Element>;

    linkToMovies.addEventListener('click', (event) => {
      event.preventDefault();
      const elementToActive = mainDrawerShadowRoot?.getElementById('page-movies') as HTMLElement;
      Links.addActiveLink(links, elementToActive);
      this.navigate(event)
    })

    linkToFavorites.addEventListener('click', (event) => {
      event.preventDefault();
      const elementToActive = mainDrawerShadowRoot?.getElementById('page-favorites') as HTMLElement;
      Links.addActiveLink(links, elementToActive);
      this.navigate(event)
    })
  }

  render() {
    const path = window.location.pathname;
    const style = `
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      .link {
        text-decoration: none;
        color: var(--foreground-color-light);
        font-weight: 400;
        font-size: 1.8rem;
        font-weight: 1.2222;
        transition: hover 2s ease-out;
      }

      .link:hover {
        color: var(--hover-background-color);
      }

      .active {
        color: var(--hover-background-color);
      }
    `
    const template = `
      <style>${style}</style>
      <nav class="nav">
          <ul>
            <li><a href="/" id="page-movies" class="${path === "/" && "active"} link">Vídeos</a></li>
            <li>
              <a href="/favorites" id="page-favorites" class="${path === "/favorites" && "active"} link">
                Favoritos
                <span id="favorite-count"></span>
              </a>
            </li>
          </ul>
        </nav>
    `
    this.shadowRoot!.innerHTML = template
  }


  navigate(event: MouseEvent) {
    event.preventDefault();
    const target = event?.target as HTMLAnchorElement;
    const href = target.getAttribute('href');

    if (target) {
      window.history.pushState({}, '', href);
      window.dispatchEvent(new Event('popstate'));
    }
  }
}

if (!customElements.get('main-drawer')) {
  customElements.define('main-drawer', Drawer);
}

export default Drawer;
