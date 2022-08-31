import React, {MouseEvent} from 'react';



type ButtonPropsType = {
    title: string
    callBack: (event: MouseEvent<HTMLButtonElement>) => void
    className?: string
    value?: string
  }
export const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button className={props.className}
                    onClick={props.callBack}>
                {props.title}</button>
        </div>
    );
};

