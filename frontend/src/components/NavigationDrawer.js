import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants';
import AppBar from 'material-ui/AppBar';

export default class NavigationDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        const { categories } = this.props;

        return (
            <div>
                <AppBar
                    onClick={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <Link to={ROUTES.ROOT}>
                        <MenuItem onClick={this.handleClose}>Home</MenuItem>
                    </Link>
                    <MenuItem disabled={true} style={{color: "black;"}}><strong>Categories:</strong></MenuItem>
                    {categories.map((category =>
                        <Link to={category.path}>
                            <MenuItem onClick={this.handleClose}>{category.name}</MenuItem>
                        </Link>
                    ))}
                </Drawer>
            </div>
        );
    }
}