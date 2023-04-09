import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('app-link', tpl);

export default (props = {}) => {
    return tpl({props});
}

