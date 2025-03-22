import React, { useRef, forwardRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroSevenSection.module.css";
import TheButton from "../Ui/TheButton";
import Input from "../Ui/Input";
import Swal from "sweetalert2";

const HeroSevenSection = forwardRef<HTMLInputElement>((_, ref) => {
  const emailRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formValue = emailRef.current?.value || "";

    if (
      formValue.trim().length > 0 &&
      formValue.includes("@") &&
      formValue.includes(".") &&
      !formValue.includes(" ")
    ) {
      Swal.fire({
        title: "Successful!",
        text: "Your email has been added to our list.",
        icon: "success",
      });
      event.currentTarget.reset();
    } else {
      Swal.fire({
        title: "OOPS!",
        text: "Please input a valid email address.",
        icon: "error",
      });
    }
  };

  return (
    <section id="subscribe">
      <Container>
        <Row
          className={classes.row}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Suscríbete a nuestro boletín informativo</h2>
              <p>Introduce tu dirección de correo electrónico para recibir ofertas y novedades diarias</p>
            </div>
          </Col>
        </Row>
        <Row
          className={classes.row_content}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <div className={classes.input_group}>
            <form onSubmit={onSubmitHandler}>
              <Input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className={`${classes.input} me-2`}
                ref={emailRef}
                input={{ value: "", onChange: () => {} }} // 🔹 Agregamos la prop `input`
              />
              <TheButton className={classes.button} type="submit">
                Subscribe
              </TheButton>
            </form>
          </div>
        </Row>
      </Container>
    </section>
  );
});

export default HeroSevenSection;