import React, {ChangeEvent, KeyboardEvent, useState, MouseEvent} from 'react';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import s from './AddItemForm.module.css'

type AddItemFormPropsType = {
    onClick?: (title: string) => void
    title?: string
}
export const AddItemForm: React.FC<AddItemFormPropsType> = ({
                                                                title, onClick,
                                                                children,
                                                                ...restProps
                                                            }) => {

    const [input, setInput] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const addItem = (title: string) => {
        if (input === '') {
            setError('Field is required!');
            return;
        }
        onClick && onClick(input.trim())
        setInput('')
    }
    const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value)
        setError(null)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addItem(input)
        }
    }
    const buttonOnClickAddHandler = () => {
        addItem(input);
    }

    return (
        <div>
            <div>
                <div className={s.itemForm}>
                    <Input onChange={inputOnChangeHandler}
                           onKeyPress={onKeyPressHandler}
                           value={input}
                           className={error ? s.error : ''}
                    />
                    <Button onClick={buttonOnClickAddHandler}>{children}</Button>
                </div>
                <div className={s.errorMessage}>{error}</div>

            </div>

        </div>
    );
};
