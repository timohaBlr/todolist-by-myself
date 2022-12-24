import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type InputPropsType = DefaultInputPropsType & {}


export const Input: React.FC<InputPropsType> = ({className, ...restProps}) => {
    return (
        <div>
            <input className={className}
                   {...restProps}
            />
        </div>
    );
};

