import React, {ChangeEvent, KeyboardEvent} from 'react';

type Input2PropsType = {
    type?: string
    checked?: boolean
    value?: string
    className?: string
    callBackClick?: () => void
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void

}
export const Input2 = (props: Input2PropsType) => {
    return (
        <div>
            <input type={props.type}
                   checked={props.checked}
                   value={props.value}
                   className={props.className}
                   onKeyPress={props.onKeyPress}
                   onChange={props.onChange}
                   onClick={props.callBackClick}
            />
        </div>
    );
};

