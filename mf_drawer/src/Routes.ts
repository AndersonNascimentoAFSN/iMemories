import { Links } from './utils/links'
import { loadingModules } from './utils/loading-modules';

export async function Routes() {
  const modules = await loadingModules()

  modules?.AppVideosPage(document.querySelector(`#main`))

  const routes = {
    '/': () => modules?.AppVideosPage(document.querySelector(`#main`)),
    '/favorites': () => modules?.AppFavoritesPage(document.querySelector(`#main`)),
  };

  const onNavigate = (pathname: string) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    );
    routes[pathname]()
  };

  const linkToMovies = document.getElementById('page-movies') as HTMLElement;
  const linkToFavorites = document.getElementById('page-favorites') as HTMLElement;

  linkToMovies.addEventListener('click', (event) => {
    event.preventDefault();
    Links.addActiveLink('page-movies');
    onNavigate('/');
  })

  linkToFavorites.addEventListener('click', (event) => {
    event.preventDefault();
    Links.addActiveLink('page-favorites');
    onNavigate('/favorites');
  })

  window.onload = () => {
    window.history.pushState(
      {},
      '',
      window.location.origin + '/'
    );
    Links.addActiveLink('page-movies');
  }

  window.onpopstate = () => {
    routes[window.location.pathname];
  };
}
