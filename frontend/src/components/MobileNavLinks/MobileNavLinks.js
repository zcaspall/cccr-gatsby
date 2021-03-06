import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'


const MobileNavLinks = ({ open }) => {
    const displayMobileNavLinks = classNames('mobile-nav-wrapper', {
        open: open,
    });

    return (
        <nav aria-label="mobile-navigation" className={displayMobileNavLinks}>
            <Link className="mobile-link" activeClassName="active" to="/">
                Home
            </Link>
            <Link className="mobile-link" activeClassName="active" to="/about">
                About
            </Link>
            <Link className="mobile-link" activeClassName="active" to="/bulls">
                Bulls
            </Link>
            <Link className="mobile-link" activeClassName="active" to="/contact">
                Contact
            </Link>
        </nav>
    );
};

export default MobileNavLinks;