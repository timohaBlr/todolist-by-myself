import React from 'react';

type InputPropsType = {
    title: string
    callBack: () => void
}
export const Input = (props: InputPropsType) => {
    return (
        <div>
            <input value={props.title}
                   onKeyPress={props.callBack}
                   onChange={props.callBack}
            />
        </div>
    );
};

