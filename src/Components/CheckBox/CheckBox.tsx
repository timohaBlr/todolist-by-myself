import React from 'react';

type CheckBoxPropsType = {
    title: string
    callBack: () => void
}
export const CheckBox = (props: CheckBoxPropsType) => {
    return (
        <div>
<input type={"checkbox"}
checked={true}/>
        </div>
    );
};
