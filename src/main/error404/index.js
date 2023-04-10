import tpl from './tpl.hbs';
import './style.scss';
import errorPage from '../../pages/error-page'
import noContent from '../../layout/no-content'

const props = {
    number: '404',
    message: 'Не туда попали'
};
document.getElementById('root').innerHTML = tpl(props);
