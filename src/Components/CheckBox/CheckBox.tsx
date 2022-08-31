import React, {ChangeEvent} from 'react';

type CheckBoxPropsType = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    checked: boolean
}
export const CheckBox = (props: CheckBoxPropsType) => {
    return (
        <div>
            <input type={'checkbox'}
                   onChange={props.onChange}
                   checked={props.checked}/>
        </div>
    );
};
