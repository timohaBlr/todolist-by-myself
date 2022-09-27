import React, {ChangeEvent} from 'react';

type CheckBox2PropsType = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    checked: boolean
}
export const CheckBox2 = (props: CheckBox2PropsType) => {
    return (
        <div>
            <input type={'checkbox'}
                   onChange={props.onChange}
                   checked={props.checked}/>
        </div>
    );
};
