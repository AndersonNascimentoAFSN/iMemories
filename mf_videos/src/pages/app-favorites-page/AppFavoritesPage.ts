import '../../components/molecules/favorites/Favorites'

export const AppFavoritesPage = (element: HTMLElement) => {
  element.innerHTML = `
    <favorites-page></favorites-page>
  `;
}

AppFavoritesPage(document.getElementById("main") as HTMLElement);