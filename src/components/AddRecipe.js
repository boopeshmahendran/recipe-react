import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col from 'react-bootstrap/lib/Col';

class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }
    
    close() {
        this.setState({ showModal: false });
    }
    
    open() {
        this.setState({ showModal: true });
    }
    
    render() {
        return (
            <div>
                <Button bsStyle="primary" block onClick={() => this.open()}> Add Recipe </Button>
                <Modal show={this.state.showModal} onHide={() => this.close()}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Recipe</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form horizontal>
                        <FormGroup controlId="name">
                          <Col componentClass={ControlLabel} sm={2}>
                              Name
                          </Col>
                          <Col sm={10}>
                            <FormControl type="text" placeholder="Name" />
                          </Col>
                        </FormGroup>
                        <FormGroup controlId="ingredients">
                          <Col componentClass={ControlLabel} sm={2}>
                              Ingredients
                          </Col>
                          <Col sm={10}>
                            <FormControl type="text" placeholder="Ingredients" />
                          </Col>
                        </FormGroup>

                        <FormGroup controlId="directions">
                          <Col componentClass={ControlLabel} sm={2}>
                              Directions
                          </Col>
                          <Col sm={10}>
                            <FormControl type="text" placeholder="Directions" />
                          </Col>
                        </FormGroup>


                        <FormGroup>
                          <Col smOffset={2} sm={10}>
                            <Button type="submit">
                                Submit
                            </Button>
                          </Col>
                        </FormGroup>
                      </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => this.close()}>Close</Button>
                  </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default AddRecipe;