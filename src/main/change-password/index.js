import tpl from './tpl.hbs';
import './style.scss';
import changePassword from '../../pages/chnage-password-page';
import noContent from '../../layout/no-content';

const props = {};
document.getElementById('root').innerHTML = tpl(props);
