import React, { useState } from 'react';
import Form from 'react-jsonschema-form';
/* import { schemaJSON } from './schemaJSON'; */
import { uiSchema } from './uiSchema';
import { createTask } from './utilities';
import { addTasksToServer } from '../../DAL/goalFirebase';

const ModalAddTask = props => {
    const schemaJSON = {
        type: 'object',
        required: ['runtime', 'weight', 'category'],
        properties: {
            text: {
                type: 'string',
                minLength: 1,
                title: ' '
            },
            runtime: {
                type: 'integer',
                title:
                    'How much time a day would you devote for it? (15-600 min)',
                minimum: 15,
                maximum: 600
            },
            weight: {
                type: 'integer',
                title: 'Choose weight of your task',
                minimum: 1,
                maximum: 10,
                multipleOf: 1,
                default: 5
            },
            category: {
                type: 'string',
                title: 'Choose category of your task',
                enum: ['health', 'finance', 'career', 'leisure', 'relatives']
            }
        }
    };

    const [flag, setFlag] = useState(true);
    const [dataBase, setDataBase] = useState({});
    const [schema, setSchema] = useState(schemaJSON);
    const nameBtnToggle = flag ? 'Attach to Big Goal' : 'Cancel attaching';
    const { openCloseModal, day, addTask, bigGoals, setData } = props;

    const closeAddTaskModal = () => {
        openCloseModal(false, '');
        delete schemaJSON.properties.listBG;
        setSchema(schemaJSON);
    };
    const addNewTask = ({ formData }) => {
        addTasksToServer(createTask(day, formData, bigGoals), addTask, setData);
        delete schemaJSON.properties.listBG;
        setSchema(schemaJSON);
        closeAddTaskModal();
    };
    const addFields = e => {
        e.preventDefault();
        if (e.target.innerText === 'Cancel attaching') {
            delete schemaJSON.properties.listBG;
            setSchema(schemaJSON);
            setFlag(true);
        } else {
            schemaJSON.properties.listBG = {
                "type": 'string',
                "title": 'Choose Big Goal to attach task to it',
                "enum": bigGoals.map((goal)=>{
                    return goal.title
            })};
            setSchema(schemaJSON);
            setFlag(false);
        }
    };
    const showData = ({ formData }) => {
        setDataBase(formData);
    };
    return (
      <div className="modal-Add-Task">
          <div className="modal-content">
              <span className="close" onClick={closeAddTaskModal}>
                    &times;
                </span>
              <Form
                  schema={schema}
                  uiSchema={uiSchema}
                  onSubmit={addNewTask}
                  onChange={showData}
                  formData={dataBase}
                >
                  <button onSubmit={addNewTask}>Add task</button>
                  <button onClick={addFields}>{nameBtnToggle}</button>
                </Form>
            </div>
        </div>
    );
};

export default ModalAddTask;
