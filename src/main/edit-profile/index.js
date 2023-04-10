import tpl from './tpl.hbs';
import './style.scss';
import editProfile from '../../pages/edit-profile-page';
import noContent from '../../layout/no-content';

const props = {};
document.getElementById('root').innerHTML = tpl(props);
