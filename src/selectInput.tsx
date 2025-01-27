import React, { ChangeEvent } from 'react';

interface SelectInputProps<T extends string> {
    label: string;
    value: T;
    setValue: (value: T) => void;
    values: T[];
}

export default function SelectInput<T extends string>({
    label,
    value,
    setValue,
    values
}: SelectInputProps<T>) {
    function updateValue(e: ChangeEvent<HTMLSelectElement>) {
        e.preventDefault();

        if (e.isTrusted) {
            setValue(e.target.value as T);
        }
    }

    return (
        <label>
            {label}
            <select onChange={updateValue} value={value}>
                {values.map((v) => (
                    <option key={v} value={v}>
                        {v}
                    </option>
                ))}
            </select>
        </label>
    );
}
