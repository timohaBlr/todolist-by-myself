import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type EditableSpanPropsType = {
    callBack: (input: string) => void
}

export const EditableSpan: React.FC<EditableSpanPropsType> = ({callBack, children, ...restProps}) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [input, setInput] = useState<string>('');

    const activateEditMode = () => {
        setInput(children as string)
        setEditMode(true)
    }
    const activateViewMode = () => {
        setEditMode(false)
        callBack(input)
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            activateViewMode()
        }
    }
    return (editMode ?
            <input
                onChange={onChangeHandler}
                onBlur={activateViewMode}
                value={input}
                autoFocus
                onKeyPress={onKeyPressHandler}
            />
            : <span onDoubleClick={activateEditMode}>{children}</span>
    );
};

