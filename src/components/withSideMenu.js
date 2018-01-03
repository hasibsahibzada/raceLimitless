import React, { Component } from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';

const withSideMenu = (WrappedComponent) => {
    class WithSideMenu extends Component {
        constructor(props) {
            super(props);

            this.toggle = this.toggle.bind(this);
            this.onMenuItemSelected = this.onMenuItemSelected.bind(this);
            this.state = {
                isOpen: false,
                selectedItem: 'About',
            };
        }

        toggle() {
            this.setState({
                isOpen: !this.state.isOpen,
            });
        }

        updateMenuState(isOpen) {
            this.setState({ isOpen });
        }

        onMenuItemSelected(item) {
            const { navigation } = this.props;
            const { navigate } = navigation;

            navigate(item);
            this.setState({
                isOpen: false,
                selectedItem: item,
            });
        }

        render() {
            const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

            return (
                <SideMenu
                    menu={menu}
                    isOpen={this.state.isOpen}
                    onChange={isOpen => this.updateMenuState(isOpen)}
                >
                    <WrappedComponent {...this.props} />
                </SideMenu>
            );
        }
    }

    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    WithSideMenu.displayName = `withSideMenu(${wrappedComponentName})`;

    return WithSideMenu;

};

export default withSideMenu;
