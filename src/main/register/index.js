import tpl from './tpl.hbs';
import './style.scss';
import register from '../../pages/register-page';
import noContent from '../../layout/no-content';

const props = {};
document.getElementById('root').innerHTML = tpl(props);
