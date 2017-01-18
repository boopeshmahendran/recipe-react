import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col from 'react-bootstrap/lib/Col';

class EditForm extends Component {
    submitHandler(e) {
        e.preventDefault();
        
        var recipe = {
            name: ReactDOM.findDOMNode(this.refs.name).value,
            ingredients: ReactDOM.findDOMNode(this.refs.ingredients).value,
            directions: ReactDOM.findDOMNode(this.refs.directions).value,
        };
        
        var editData = this.props.editData;
        if (editData) {
            this.props.updateRecipe(recipe, editData.index);
        }
        else {
            this.props.addRecipe(recipe);
        }
        
        this.props.closeEditForm();
    }
        
    render() {
        var editData = this.props.editData;
        return (
                <Modal show={this.props.showEditForm} onHide={() => this.props.closeEditForm()}>
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
                            <FormControl ref="name" type="text" placeholder="Name" defaultValue={editData?editData.name:""}/>
                          </Col>
                        </FormGroup>
                        <FormGroup controlId="ingredients">
                          <Col componentClass={ControlLabel} sm={2}>
                              Ingredients
                          </Col>
                          <Col sm={10}>
                            <FormControl componentClass="textarea" ref="ingredients" type="text" placeholder="Ingredients" defaultValue={editData?editData.ingredients:""}/>
                          </Col>
                        </FormGroup>

                        <FormGroup controlId="directions">
                          <Col componentClass={ControlLabel} sm={2}>
                              Directions
                          </Col>
                          <Col sm={10}>
                            <FormControl componentClass="textarea" ref="directions" type="text" placeholder="Directions" defaultValue={editData?editData.directions:""}/>
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
                    <Button onClick={() => this.props.closeEditForm()}>Close</Button>
                  </Modal.Footer>
                </Modal>
        );
    }
}

export default EditForm;