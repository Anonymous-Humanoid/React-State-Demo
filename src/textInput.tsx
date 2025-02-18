import React, { ChangeEvent } from 'react';

interface TextInputProps {
    label: string;
    value: string;
    setValue: (value: string) => void;
}

export default function TextInput({ label, value, setValue }: Readonly<TextInputProps>) {
    function updateValue(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();

        if (e.isTrusted) {
            setValue(e.target.value);
        }
    }

    return (
        <label>
            {label}
            <input type="text" onChange={updateValue} value={value} />
        </label>
    );
}
