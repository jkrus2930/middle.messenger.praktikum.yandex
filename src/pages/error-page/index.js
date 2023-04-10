import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';
import errorContainer from '../../components/error'

Handlebars.registerPartial('error-page', tpl);

export default (props = {}) => {
    return tpl(props);
}
