import tpl from './tpl.hbs';
import './style.scss';

import chatPage from '../../pages/chat-page'
import chatcontent from '../../layout/chat-content'

const props = {};
document.getElementById('root').innerHTML = tpl(props);
