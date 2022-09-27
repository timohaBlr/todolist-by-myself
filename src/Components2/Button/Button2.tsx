import React, {MouseEvent} from 'react';



type Button2PropsType = {
    title: string
    callBack: (event: MouseEvent<HTMLButtonElement>) => void
    className?: string
    value?: string
  }
export const Button2 = (props: Button2PropsType) => {
    return (
        <div>
            <button className={props.className}
                    onClick={props.callBack}>
                {props.title}</button>
        </div>
    );
};

