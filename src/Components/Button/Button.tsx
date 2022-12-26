import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonPropsType = DefaultButtonPropsType & {

         }

export const Button: React.FC<ButtonPropsType> = ({  onClick,className,...restProps}) => {
    return (
        <div>
            <button className={className}
                    onClick={onClick}
                    {...restProps}
                            />
        </div>
    );
};

