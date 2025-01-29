import React, { useState } from 'react';
import ChildManager, { CHILD_TYPES, ChildMap, ChildType } from './childManager';
import SelectInput from './selectInput';
import TextInput from './textInput';

const ROOT_ID = 'root';

export default function App() {
    const newElements: ChildMap = {
        [ROOT_ID]: {
            type: 'html',
            children: new Array<string>()
        }
    };
    const [elements, setElements] = useState<ChildMap>(newElements);
    const [id, setId] = useState<string>('');
    const [parentId, setParentId] = useState<string>('');
    const [type, setType] = useState<ChildType>('div');

    let root = ROOT_ID;

    function addElement() {
        if (id in elements) {
            alert('Element already exists. Please choose a unique ID.');
            return;
        } else if (!(parentId in elements)) {
            alert(
                "Parent element doesn't exist. Please choose an existing ID."
            );
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
