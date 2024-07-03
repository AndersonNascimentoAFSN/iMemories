export const UpdateFavoriteCount = (element: HTMLElement, count: number) => {
  element.innerHTML = `(${count})`;
}

// UpdateFavoriteCount(document.getElementById("favorite-count") as HTMLElement, 10);