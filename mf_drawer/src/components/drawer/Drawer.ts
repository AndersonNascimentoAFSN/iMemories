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
      .drawer {
        width: 150px;
        padding: 20px;
        border-right: 1px solid var(--foreground-color-light);
        height: 100vh;
      }

      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        margin-top: 20px;
      }

      .link {
        text-decoration: none;
        color: var(--foreground-color-light);
        font-weight: 600;
        font-size: 1.2rem;
        transition: hover 2s ease-out;
        padding: 8px;
        display: block;
      }

      .link:hover {
        color: var(--hover-background-color);
      }

      .active {
        color: var(--hover-background-color);
      }

      @media (max-width: 600px) {
        .drawer {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: var(--background-color);
          box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
          height: 20px;
        }

        ul {
          display: flex;
          justify-content: space-around;
          margin: 0;
          padding: 0;
        }

        .link {
          font-size: 1rem;
          padding: 10px 0;
        }

        .active {
          color: white;
        }
      }
    `
    const template = `
      <style>${style}</style>
      <div class="drawer">
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
      <div>
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
