export class DynamicContentRoute extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.handleRouteChange = this.handleRouteChange.bind(this);
  }

  connectedCallback() {
    this.render();
    window.addEventListener('popstate', this.handleRouteChange);
    window.addEventListener('hashchange', this.handleRouteChange);
  }

  disconnectedCallback() {
    window.removeEventListener('popstate', this.handleRouteChange);
    window.removeEventListener('hashchange', this.handleRouteChange);
  }

  handleRouteChange() {
    this.render();
  }

  async render() {
    const path = window.location.pathname as keyof typeof routes;
    const modules = await this.loadingModules()

    modules?.AppVideosPage(document.querySelector(`#main`))

    const routes = {
      '/': () => modules?.AppVideosPage(document.querySelector(`#main`)),
      '/favorites': () => modules?.AppFavoritesPage(document.querySelector(`#main`)),
    };

    if (routes?.[path]) {
      routes[path]()
    } else {
      document.getElementById("main")!.innerHTML = `
        <title-heading text="Página não encontrada!"></title-heading>
      `;
    }

  }

  async loadingModules() {
    try {
      const modules = await Promise.all([
        import('mf_videos/AppVideosPage'),
        import('mf_videos/AppFavoritesPage')
      ]);
  
      return {
        AppVideosPage: modules?.[0]?.AppVideosPage ?? null,
        AppFavoritesPage: modules?.[1]?.AppFavoritesPage ?? null
      }
  
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

if (!customElements.get('dynamic-content-route')) {
  customElements.define('dynamic-content-route', DynamicContentRoute);
}