import React, { useEffect, useContext} from 'react'
import Headroom from 'react-headroom'
import { Link } from 'gatsby'
import classNames from 'classnames'
import MobileNavLinks from '../MobileNavLinks/MobileNavLinks'
import MobileNavContext from '../../context/MobileNavContext'
import Logo from '../../images/Logo.svg'
import './Header.scss'

const Header = () => {
    const mobileNavContext = useContext(MobileNavContext);

    const active = classNames('mobile-menu', {
        open: mobileNavContext.mobileNavOpen,
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
                mobileNavContext.toggleMobileNav(false);
                mobileNavContext.toggleMobileNavView(false);
            } else if (window.innerWidth < 767) {
                mobileNavContext.toggleMobileNavView(true);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [mobileNavContext]);
    
    return(
        <>
            <Headroom>
                <header className="header-container">
                    <div className="logo-container">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="main-nav">
                        <div className="nav-links">
                            {mobileNavContext.showMobileNavMenu ? (
                                <button 
                                    aria-label="Toggle Mobile Menu Button"
                                    className={active}
                                    onClick={() => {
                                        mobileNavContext.toggleMobileNav(
                                            !mobileNavContext.mobileNavOpen,
                                        );
                                    }}
                                >
                                    <div className="bar-one"></div>
                                    <div className="bar-two"></div>
                                    <div className="bar-three"></div>
                                </button>
                            ) : (
                                <nav aria-label="desktop navigation">
                                    <Link className="link" activeClassName="active" to="/">
                                        Home
                                    </Link>
                                    <Link className="link" activeClassName="active" to="/about">
                                        About
                                    </Link>
                                    <Link className="link" activeClassName="active" to="/bulls">
                                        Bulls
                                    </Link>
                                    <Link className="link" activeClassName="active" to="/contact">
                                        Contact
                                    </Link>
                                </nav>
                            )}
                        </div>
                    </div>
                </header>
            </Headroom>
            {mobileNavContext.showMobileNavMenu ? (
                <MobileNavLinks open={mobileNavContext.mobileNavOpen} />
            ) : null}
        </>
    );
};

export default Header;