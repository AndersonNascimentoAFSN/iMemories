import './components/favorites/Favorites';
import './components/videos/Videos';

const routes = {
  '/': '<videos-page></videos-page>',
  '/favorites': '<favorites-page></favorites-page>'
}

const page = routes[window.location.pathname]

export const AppVideos = (element: HTMLElement) => {
  element.innerHTML = `
    ${page}
  `;
}

AppVideos(document.getElementById("main") as HTMLElement);
