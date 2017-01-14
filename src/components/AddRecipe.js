import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    
    submitHandler(e) {
        e.preventDefault();
        
        this.props.addRecipe({
            name: ReactDOM.findDOMNode(this.refs.name).value,
            ingredients: ReactDOM.findDOMNode(this.refs.ingredients).value,
            directions: ReactDOM.findDOMNode(this.refs.directions).value,
        });
        
        this.close();
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
                    <Form horizontal onSubmit={(e) => this.submitHandler(e)}>
                        <FormGroup controlId="name">
                          <Col componentClass={ControlLabel} sm={2}>
                              Name
                          </Col>
                          <Col sm={10}>
                            <FormControl ref="name" type="text" placeholder="Name" />
                          </Col>
                        </FormGroup>
                        <FormGroup controlId="ingredients">
                          <Col componentClass={ControlLabel} sm={2}>
                              Ingredients
                          </Col>
                          <Col sm={10}>
                            <FormControl componentClass="textarea" ref="ingredients" type="text" placeholder="Ingredients" />
                          </Col>
                        </FormGroup>

                        <FormGroup controlId="directions">
                          <Col componentClass={ControlLabel} sm={2}>
                              Directions
                          </Col>
                          <Col sm={10}>
                            <FormControl componentClass="textarea" ref="directions" type="text" placeholder="Directions" />
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