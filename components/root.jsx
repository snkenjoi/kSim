import { render, findDOMNode } from 'react-dom';
import { observer } from 'mobx-react';

import styles from './root.scss';
import '../solver/';

import CubeUI from './Cube/index.jsx';
import Menus from './Menus/index.jsx';

@observer
class Root extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let { cube } = this.props;

        return <main>

            <h1>kSim</h1>

            <Menus />

            <CubeUI />

        </main>;
    }

}

document.addEventListener('DOMContentLoaded', () => {
    let node = document.body.appendChild(document.createElement('section'));
    render(<Root cube={cube}/>, node);
    node.firstChild.removeAttribute('data-reactroot');
    document.body.replaceChild(node.firstChild, node);
});