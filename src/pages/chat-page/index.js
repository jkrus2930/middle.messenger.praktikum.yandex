import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

import link from '../../components/link';
import inputSearch from '../../components/input-search';
import input from '../../components/input';
import button from '../../components/button';
import enterButton from '../../components/enter-button';
import chat from '../../layout/chat';


Handlebars.registerPartial('chat-page', tpl);

export default (props = {}) => {
    return tpl(props);
}
