import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./HeroSixSection.module.css";

const HeroSixSection = () => {
  //Rendering the Testimonial Section
  return (
    <section id="testimonials">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Testimonios</h2>
              <p>Esto es lo que dicen nuestros clientes</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_content}>
          <Col
            lg={4}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="150"
          >
            <div className={`${classes.text_div} px-2`}>
              <h4 className={classes.header_text}>Sebstian perez</h4>
              <p className={classes.text_location}>Globot</p>
              <p className={classes.text_content}>
              Con una comida de Food APP, puedes servir comidas caseras y deliciosas a tus familiares y amigos en cualquier lugar,
               a cualquier hora. ¡Todos los días!
              </p>
            </div>
          </Col>

          <Col
            lg={4}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <div className={`${classes.text_div} px-2`}>
              <h4 className={classes.header_text}>Heidy Garcia</h4>
              <p className={classes.text_location}>Toki max</p>
              <p className={classes.text_content}>
                {" "}
                Ya sea una pequeña reunión de amigos o un gran evento con cientos de personas, 
                siempre estarás preparado,
                 ya sea que estés en casa o de viaje..{" "}
              </p>
            </div>
          </Col>

          <Col
            lg={4}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="450"
          >
            <div className={`${classes.text_div} px-2`}>
              <h4 className={classes.header_text}>Laura Redondo</h4>
              <p className={classes.text_location}>Sistemas tech</p>
              <p className={classes.text_content}>
              Con tu app, ya no tendrás que preocuparte por nada. Food App
              Eats se prepara con ingredientes de la más alta calidad para ti y tu familia.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  //ENd
};

export default HeroSixSection;
