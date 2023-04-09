import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

import button from '../../components/button';
import link from '../../components/link';
import input from '../../components/input'
import editProfile from '../../layout/edit-profile'

Handlebars.registerPartial('edit-profile-page', tpl);

export default (props = {}) => {
    return tpl(props);
}
