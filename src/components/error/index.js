import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

import link from "../link"

Handlebars.registerPartial('app-error', tpl);

export default (props = {}) => {
    return tpl({props});
}
