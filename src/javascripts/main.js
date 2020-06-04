
import '../styles/styles.scss';
import 'bootstrap';
import images from './components/imageHolder';
import register from './helpers/data/buttonListeners';

const init = () => {
  images.imagePrinter();
  register.registerSelects();
  register.clearMe();
};
init();
