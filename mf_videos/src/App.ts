import './Favorites';
import './Movies';

const routes = {
  '/': '<movies-page></movies-page>',
  '/favorites': '<favorites-page></favorites-page>'
}

const page = routes[window.location.pathname]

export const AppVideos = (element: HTMLElement) => {
  element.innerHTML = `
    ${page}
  `;
}

AppVideos(document.getElementById("main") as HTMLElement);
