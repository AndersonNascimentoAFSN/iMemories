import './Movies'

export const AppVideosPage = (element: HTMLElement) => {
  element.innerHTML = `
    <movies-page></movies-page>
  `;
}

AppVideosPage(document.getElementById("main") as HTMLElement);