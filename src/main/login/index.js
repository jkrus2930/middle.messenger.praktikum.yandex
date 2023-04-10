import tpl from './tpl.hbs';
import './style.scss';
import errorPage from '../../pages/login-page';
import noContent from '../../layout/no-content';

const props = {};
document.getElementById('root').innerHTML = tpl(props);
