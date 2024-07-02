import '../../components/molecules/videos/Videos'

export const AppVideosPage = (element: HTMLElement) => {
  element.innerHTML = `
    <videos-page></videos-page>
  `;
}

AppVideosPage(document.getElementById("main") as HTMLElement);