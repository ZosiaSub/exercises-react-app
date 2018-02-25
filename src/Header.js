import React, { PureComponent } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { MuiThemeProvider, FlatButton } from 'material-ui';

class Header extends PureComponent {
    render() {
        return (
        <header>
                <div><h1>{this.props.title}</h1></div>
            <Link to="/contact">Kontakt</Link>
            <Link to="/about">O mnie</Link>
            <Link to="/">Home</Link>

            <MuiThemeProvider>
                <div>
                    <FlatButton label="Default" />
                    <FlatButton label="Primary" primary={true} />
                    <FlatButton label="Secondary" secondary={true} />
                    <FlatButton label="Disabled" disabled={true} />
                </div>
            </MuiThemeProvider>

        </header>
        )
    }
}

export default Header;