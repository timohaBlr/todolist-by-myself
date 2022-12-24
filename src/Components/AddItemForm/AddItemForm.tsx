import React, {ChangeEvent, KeyboardEvent, MouseEvent, useState} from 'react';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import s from './AddItemForm.module.css'

type AddItemFormPropsType = {
    className?: string
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
    //error?: string | null
    addTask?: (title: string) => void
}
const AddItemForm: React.FC<AddItemFormPropsType> = ({addTask,
                                                         className, ...restProps}) => {
    const [input, setInput] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value as string)
        setError(null)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (input === '') {
            setError('Field is required!');
            return;
        }
        if (event.key === 'Enter') {
            addTask && addTask(input.trim())
            setInput('')
        }
    }
    const buttonOnClickAddHandler = () => {
        if (input === '') {
            setError('Field is required!');
            return;
        }
        addTask && addTask(input.trim())
        setInput('')
    }
    const finalClassname = error ? s.itemForm + s.error : s.itemForm
    return (
        <div className={s.itemForm}>
            <Input
                onChange={inputOnChangeHandler}
                onKeyPress={onKeyPressHandler}
                value={input}
                className={error? s.error : ''}/>

            <Button onClick={buttonOnClickAddHandler}>{restProps.children}</Button>
        </div>
    );
};

export default AddItemForm;