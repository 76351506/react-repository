import React from "react";

class Header extends React.Component {
    static defaultProps = {
        title: "888"
    }
    render() {
        const { title } = this.props;
        return <header className="header">
            <h3 className="mt10">{title}</h3>
        </header>
    }
}
// Header.defaultProps = {
//     title: "888"
// }

export default Header;