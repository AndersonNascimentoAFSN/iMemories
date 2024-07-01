export class Links {
  static addActiveLink(linkId: string) {
    const allLinks = document.querySelectorAll('.link');
    allLinks.forEach((link) => {
      link.classList.remove('active');
    });
    const linkElement = document.getElementById(linkId) as HTMLElement;
    linkElement.classList.add('active');
  }
}