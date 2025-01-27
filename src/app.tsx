import React, { useState } from 'react';
import ChildManager, { ChildType, ChildMap, CHILD_TYPES } from './childManager';
import TextInput from './textInput';
import SelectInput from './selectInput';

const ROOT_ID = 'root';

export default function Test() {
    const newElements: ChildMap = {
        [ROOT_ID]: {
            type: 'html',
            children: new Array<string>()
        }
    };
    const [elements, setElements] = useState(newElements);
    const [id, setId] = useState('');
    const [parentId, setParentId] = useState('');
    const [type, setType] = useState('div' as ChildType);

    let root = ROOT_ID;

    function addElement() {
        if (id in elements) {
            alert('Element already exists. Please choose a unique ID.');
            return;
        }

        let parent = elements[parentId];

        setElements({
            ...elements,
            [parentId]: {
                type: parent.type,
                children: [...parent.children, id]
            },
            [id]: {
                type,
                children: []
            }
        });
    }

    return (
        <>
            <div>
                {/* Virtual DOM */}
                <ChildManager key={root} id={root} elements={elements} />
            </div>
            <div>
                {/* Element addition form */}
                <TextInput label="Element ID" value={id} setValue={setId} />
                <TextInput
                    label="Parent Element ID"
                    value={parentId}
                    setValue={setParentId}
                />
                <SelectInput
                    label="Element Type"
                    value={type}
                    setValue={setType}
                    values={CHILD_TYPES}
                />
                <button type="button" onClick={addElement}>
                    Add Element
                </button>
            </div>
        </>
    );
}
