import { Links } from './utils/links'

export function Routes() {
  const routes = {
    '/': '<movies-page></movies-page>',
    '/favorites': '<favorites-page></favorites-page>',
  };

  const containerPageDiv = document.getElementById('content-page') as HTMLElement;

  const onNavigate = (pathname: string) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    );
    containerPageDiv.innerHTML = routes[pathname];
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
    containerPageDiv.innerHTML = routes[window.location.pathname];
  };
}
