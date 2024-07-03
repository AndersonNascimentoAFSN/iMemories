import './components/molecules/favorites/Favorites';
import './components/molecules/videos/Videos';

const routes = {
  '/': '<videos-page></videos-page>',
  '/favorites': '<favorites-page></favorites-page>'
}

const path = window.location.pathname as keyof typeof routes;

const page = routes?.[path] ? routes[path] : '<title-heading text="Página não encontrada!"></title-heading>';

export const AppVideos = (element: HTMLElement) => {
  element.innerHTML = `
    ${page}
  `;
}

AppVideos(document.getElementById("main") as HTMLElement);
