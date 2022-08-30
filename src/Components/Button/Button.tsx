import React from 'react';

type ButtonPropsType = {
    title: string
    callBack: () => void
}
export const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button type={"button"}
                    onChange={props.callBack}>
                {props.title}</button>
        </div>
    );
};

