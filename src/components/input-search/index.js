import Handlebars from 'handlebars'
import tpl from './tpl.hbs';
import './style.scss';


Handlebars.registerPartial('app-input-search', tpl);

export default (props = {}) => {
    return tpl({props});
}
