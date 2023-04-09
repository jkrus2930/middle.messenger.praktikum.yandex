import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';
import '../../main.scss';

Handlebars.registerPartial('login-layout', tpl);

export default (props = {}) => {
	return tpl(props);
}
