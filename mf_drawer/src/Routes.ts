import { Links } from './utils/links'

export function Routes() {
  const routes = {
    '/': () => import('mf_videos/AppVideosPage').then(({ AppVideosPage }) => {
      AppVideosPage(document.querySelector(`#main`))
    }).catch((error) => {
      console.error(error)
    }),
    '/favorites':  () => import('mf_videos/AppFavoritesPage').then(({ AppFavoritesPage }) => {
      AppFavoritesPage(document.querySelector(`#main`))
    }).catch((error) => {
      console.error(error)
    }),
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
