export class Links {
  static addActiveLink(allLinks:  NodeListOf<Element>, elementToActive: HTMLElement) {
    allLinks.forEach((link) => {
      link?.classList?.remove('active');
    });

    elementToActive?.classList?.add('active');
  }
}