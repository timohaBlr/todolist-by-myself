import React, {ChangeEvent, KeyboardEvent, MouseEvent, useState} from 'react';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import s from './AddItemForm.module.css'

type AddItemFormPropsType = {
    className?: string
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
    error?: string | null
    addTask?: (title: string) => void
}
const AddItemForm: React.FC<AddItemFormPropsType> = ({addTask, className, error, ...restProps}) => {
  const [input, setInput] = useState<string>('')

    const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value as string)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTask && addTask(input.trim())
            setInput('')
        }
    }
    const buttonOnClickAddHandler = () => {
        addTask && addTask(input.trim())
        setInput('')
    }
    const finalClassname = error ? s.itemForm + s.error : s.itemForm
    return (
        <div className={finalClassname}>
            <Input
                onChange={inputOnChangeHandler}
                onKeyPress={onKeyPressHandler}
                value={input}
                className={className}/>

            <Button onClick={buttonOnClickAddHandler}>{restProps.children}</Button>
        </div>
    );
};

export default AddItemForm;