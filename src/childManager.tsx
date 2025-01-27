import React, { Fragment } from 'react';

export type ChildType = 'html' | 'div' | 'span';

export const CHILD_TYPES: ChildType[] = ['html', 'div', 'span'];

export type ChildMap = {
    [id: string]: {
        type: ChildType;
        children: Array<string>;
    };
};

interface ChildManagerProps {
    id: string;
    elements: ChildMap;
}

export default function ChildManager({ id, elements }: ChildManagerProps) {
    let current = elements[id];

    let type = current.type;
    let children = current.children.map((id) => (
        <ChildManager key={id} id={id} elements={elements} />
    ));

    if (children.length < 1) {
        return (
            <div className="element">
                <div className="children" />
                {`<${type} id="${id}" />`}
                <div className="children" />
            </div>
        );
    }

    return (
        <div className="element">
            {`<${type} id="${id}">`}
            <div className="children">{children}</div>
            {`</${type}>`}
        </div>
    );
}
