import React from 'react';
import { Form, Button } from 'react-bootstrap';

import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

class Order extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            address: ''
        }
    }

    render () {
        return (
            <Form>
                <fieldset>
                    <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput"> input</Form.Label>
                    <Form.Control id="disabledTextInput" placeholder=" input" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect"> select menu</Form.Label>
                    <Form.Select id="disabledSelect">
                        <option>Disabled select</option>
                    </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="disabledFieldsetCheck"
                        label="Can't check this"
                    />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <AddressSuggestions token="cac1688a9d096f9d41f19559d9d69658e136f616" value={this.state.address}
                            onChange={(e) => {this.setState({address: e})}} />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </fieldset>
            </Form>
        );
    }
}

export default Order;