import { Button, Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navegacion = useNavigate();
  const onSubmit = () => {
    reset();
    navegacion("/*");
  };
  return (
    <Container fluid className="my-3 fade-up">
      <Row>
        <h1 className="fw-bold text-center titular">Contacto</h1>
        <Col
          xs={{ span: 12 }}
          md={{ span: 8, offset: 2 }}
          className="p-3 bg-white mt-5"
        >
          <h4 className="text-center fw-bold titular mt-1 fs-2">
            Formulario de contacto
          </h4>
          <Form
            className="p-3 bg-white border rounded"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Row className="mb-3">
              <Col xs={12} md={6} lg={6} className="mt-3">
                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre"
                    {...register("nombre", {
                      required: "El nombre es un dato obligatorio",
                      minLength: {
                        value: 2,
                        message:
                          "La cantidad minima de caracteres es de 2 digitos",
                      },
                      maxLength: {
                        value: 30,
                        message:
                          "La cantidad maxima de caracteres es de 30 digitos",
                      },
                      pattern: {
                        value: /^[A-Z][a-zA-Z0-9]*(?: [A-Z][a-zA-Z0-9]*)?$/,
                        message:
                          "No debe contener caracteres especiales (Pj. @#:;) y cada nombre debe comenzar con mayuscula",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.nombre?.message}
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6} className="mt-3">
                <Form.Group>
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su apellido"
                    {...register("apellido", {
                      required: "El apeliido es un dato obligatorio",
                      minLength: {
                        value: 2,
                        message:
                          "La cantidad minima de caracteres es de 2 digitos",
                      },
                      maxLength: {
                        value: 30,
                        message:
                          "La cantidad maxima de caracteres es de 30 digitos",
                      },
                      pattern: {
                        value: /^[A-Z][a-zA-Z0-9]*$/,
                        message:
                          "No debe contener caracteres especiales(Pj. @#:;) y debe comenzar con mayuscula",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.apellido?.message}
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6} className="mt-3">
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@email.com"
                    {...register("email", {
                      required: "El email es un dato obligatorio",
                      pattern: {
                        value:
                          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                        message:
                          "El email debe tener el siguiente formato: mail@dominio.com",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={6} className="mt-3">
                <Form.Group>
                  <Form.Label>Nombre de mascota</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre de la mascota"
                    {...register("nombreMasco", {
                      required:
                        "El nombre de la mascota es un dato obligatorio",
                      minLength: {
                        value: 2,
                        message:
                          "La cantidad minima de caracteres es de 2 digitos",
                      },
                      maxLength: {
                        value: 30,
                        message:
                          "La cantidad maxima de caracteres es de 30 digitos",
                      },
                      pattern: {
                        value: /^[a-zA-Z][a-zA-Z0-9]*$/,
                        message:
                          "No debe contener caracteres especiales ni espacios en blanco",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.nombreMasco?.message}
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col xs={12} md={12} lg={6} className="mt-3">
                <Form.Label>Telefono</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="telefono">+54</InputGroup.Text>
                  <Form.Control
                    type="number"
                    placeholder="3816262746"
                    aria-describedby="telefono"
                    {...register("telefono", {
                      required: "El telefono es un dato obligatorio",
                      pattern: {
                        value: /^\d{10}$/,
                        message:
                          "El telefono debe tener el siguiente formato: 3816262746",
                      },
                      minLength: {
                        value: 10,
                        message: "Debe ser un numero de telefono verdadero",
                      },
                      maxLength: {
                        value: 10,
                        message: "Debe ser un numero de telefono verdadero",
                      },
                    })}
                  />
                  <Form.Text className="text-danger mx-2">
                    {errors.telefono?.message}
                  </Form.Text>
                </InputGroup>
              </Col>
              <Col xs={12} md={12} lg={12} className="mt-3">
                <Form.Group>
                  <Form.Label>Describa su consulta</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Describa su inconveniente / consulta"
                    style={{ height: "100px" }}
                    {...register("consulta", {
                      required: "La consulta es un dato obligatorio",
                      minLength: {
                        value: 2,
                        message:
                          "La cantidad minima de caracteres es de 2 digitos",
                      },
                      maxLength: {
                        value: 400,
                        message:
                          "La cantidad maxima de caracteres es de 30 digitos",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.consulta?.message}
                  </Form.Text>
                </Form.Group>
                <Button
                  className="primary mt-3 btn btn-secondary"
                  type="submit"
                >
                  Enviar
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
