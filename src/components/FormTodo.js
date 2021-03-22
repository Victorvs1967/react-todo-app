import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap-v5';

const FormTodo = ({ addTodo }) => {
    const [ value, setValue ] = useState("");
    const handleSubmit = event => {
        event.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Add Todo</Form.Label>
                <Form.Control
                    type="text"
                    className="input mb-1 p-4"
                    value={value}
                    onChange={event => setValue(event.target.value)} 
                    placeholder="Add new todo"
                />
            </Form.Group>
            <Button variant="primary mb-3 px-4" type="submit">Submit</Button>
        </Form>
    );
};

export default FormTodo;