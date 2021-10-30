import Shop from './Pages/Shop.js';
import Checkout from './Pages/Checkout.js';
import Myorders from './Pages/Myorders.js';

var routes = [
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    // layout: '/store',
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    // layout: '/store',
  },
  {
    path: '/myorders',
    name: 'My Orders',
    component: Myorders,
    // layout: '/store',
  },
];

export default routes;
