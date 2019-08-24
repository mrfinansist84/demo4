import React, { useState, useEffect } from 'react';
import Form, {
    validateJsonSchema,
    mergeErrorSchema
} from 'react-jsonschema-form';
import { getWeekNumber } from './utils';
import { schemaSignIn } from './schemaSignIn';
import { schemaSignUp } from './schemaSignUp';
import './Form.scss';

const DynamicForm = props => {
    const [errorLoginFlag, setErrorLoginFlag] = useState(false);
    const [errorPasswordFlag, setErrorPasswordFlag] = useState(false);
    const [errorRepasswordFlag, setErrorRepasswordFlag] = useState(false);
    const errorLogin = errorLoginFlag ? 'Incorrect email or User exists' : ' ';
    const errorPassword = errorPasswordFlag
        ? 'Password should contain at least 1 special character & 1 uppercase letter & 1 digit'
        : ' ';
    const errorRepassword = errorRepasswordFlag ? 'Passwords don`t match' : ' ';
    const uiSchema = {
        login: {
            'ui:widget': 'email',
            'ui:placeholder': 'Email',
            'ui:help': errorLogin
        },
        password: {
            'ui:widget': 'password',
            'ui:placeholder': 'Password',
            'ui:help': errorPassword
        },
        repassword: {
            'ui:widget': 'password',
            'ui:placeholder': 'Repeat password',
            'ui:help': errorRepassword
        }
    };
    const [flag, setFlag] = useState(false);
    const { signUpUser, signInUser } = props;
    const handleSubmitSignUp = ({ formData }) => {
        const data = {
            ...formData,
            id: Date.now(),
            testDone: false,
            validate: true,
            weekNumber: getWeekNumber()
        };
        return signUpUser(data, setErrorLoginFlag, setErrorPasswordFlag, setErrorRepasswordFlag);
    };
    const handleSubmitSignIn = ({ formData }) => {
        return signInUser(formData, setErrorLoginFlag, setErrorPasswordFlag);
    };

    const schema = flag ? schemaSignIn : schemaSignUp;
    const handleSubmit = flag ? handleSubmitSignIn : handleSubmitSignUp;
    const text = flag ? 'In' : 'Up';

    useEffect(() => {
        setFlag(document.URL.includes('signin'));
    });

    return (
      <div className="FormView">
          <div className="FormView-main-container">
              <div className="FormView-left-side">
                  <span>Sign</span>
                  <span>{text}</span>
                </div>
              <div className="FormView-right-side">
                  <Form
                      schema={schema}
                      onSubmit={handleSubmit}
                      uiSchema={uiSchema}
                    >
                      <button
                          type="submit"
                          onSubmit={handleSubmit}
                          className="FormView-button-submit"
                        >Sign
                          {' '}
                          {text}
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default DynamicForm;
