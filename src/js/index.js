// Import our custom CSS
import '../sass/main.scss';

// import boostrap for utils
import 'bootstrap';

// Components
import './components/index';

// Import javascript file as needed
import HomePage from './pages/home-page';
import AddPage from './pages/add-page';
import ProfilePage from './pages/profile-page';

import * as bootstrap from 'bootstrap';

const routes = {
  '/': HomePage,
  '/add-page.html': AddPage,
  '/profile-page.html': ProfilePage,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${
      header.clientHeight + footer.clientHeight
    }px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  route.init();
});
