import React from 'react';
import Form from 'react-jsonschema-form';
import { getWeekNumber } from './utils';

const schema = {
    title: 'Todo',
    type: 'object',
    required: ['login'],
    properties: {
        login: { type: 'string', title: 'User', default: 'User' },
        password: { type: 'string', title: 'Pass', default: 'Pass' }
    }
};

const uiSchema = {
    email: {
        'ui:widget': 'email'
    }
};

const log = type => console.log.bind(console, type);

const DynamicForm = props => {
    const { signUpUser } = props;
    const handleSubmit = ({ formData }) => {
        const data = {
            ...formData,
            id: Date.now(),
            testDone: false,
            validate: true,
            weekNumber: getWeekNumber()
        };

        return signUpUser(data);
    };

    return (
        <Form schema={schema} onSubmit={handleSubmit} onError={log('errors')} />
    );
};

export default DynamicForm;
