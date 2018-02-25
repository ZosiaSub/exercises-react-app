import React, { PureComponent } from 'react';

class Footer extends PureComponent {
    render() {
        return <footer>
            <div><p>{this.props.name}</p></div>
        </footer>
    }
}

export default Footer;