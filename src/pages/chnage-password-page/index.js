import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

import button from '../../components/button';
import link from '../../components/link';
import input from '../../components/input'
import changePassword from '../../layout/change-password'

Handlebars.registerPartial('change-password-page', tpl);

export default (props = {}) => {
    return tpl(props);
}
