import './pages/Favorities'
import './pages/Movies'

const app = document.getElementById("app")

export const router = () => {
  const path = window.location.pathname;

  if (app) {
    if (path === '/') {
      app.innerHTML = `
        <div class="container">
          <main-drawer class="main-drawer"></main-drawer>
          <section class="content-page">
            <movies-page></movies-page>
          </section>
        </div>
      `;
    }
    if (path === '/favorites') {
      app.innerHTML = `
        <div class="container">
          <main-drawer class="main-drawer"></main-drawer>
          <section class="content-page">
            <favorites-page></favorites-page>
          </section>
        </div>
    `;
    }
  }


}