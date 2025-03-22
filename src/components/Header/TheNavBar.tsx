import React from "react";
import NavCartButton from "./NavCartButton";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import classes from "./TheNavbar.module.css";
import Logo from "../../assets/Logo/logoFood.png";

interface TheNavBarProps {
    onShowCart: () => void;
}

const TheNavBar: React.FC<TheNavBarProps> = (props) => {
    return(
        <>
            <Navbar
                expand="xl"
                className={`${classes.navbar} fixed-top`}
                data-aos="fade-down"
                data-aos-easing="ease-out"
                data-aos-duration="2000"
            >
                <Navbar.Brand className={classes.navbar_brand}>
                    <Link to="hero" spy={true} smooth={true} offset={-50} duration={500}>
                        <img src={Logo} alt="Logo de la pagina"></img>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className={classes.toggle}
                />
               
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`${classes.nav__linkgroup} ms-auto`}>
                        <Nav.Link
                        className={`${classes.nav__link} ${classes.firstnav__link} me-4`}
                    >
                    <Link
                    activeClass={classes.active}
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                     >
                    Home
                    </Link>
                </Nav.Link>
                <Nav.Link className={`${classes.nav__link} me-4`}>
                <Link
                    activeClass={classes.active}
                    to="why"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    Por que elegirnos
                </Link>
                </Nav.Link>
                <Nav.Link className={`${classes.nav__link} me-4`}>
                <Link
                    activeClass={classes.active}
                    to="dishes"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                   Nuestros platos
                </Link>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
                <Link
                    activeClass={classes.active}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    Hacerca de nosotros
                </Link>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
                <Link
                    activeClass={classes.active}
                    to="testimonials"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    Testimonios
              </Link>
            </Nav.Link>
            <Nav.Link href="#buttons" className={`${classes.nav__link}`}>
                <NavCartButton onShowCart={props.onShowCart} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        </>
    )
}

 export default TheNavBar;