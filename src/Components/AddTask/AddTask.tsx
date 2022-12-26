import React from 'react';

import {AddItemForm} from "../AddItemForm/AddItemForm";

type AddTaskPropsType = {
    onClick?: (title: string) => void
}
export const AddTask: React.FC<AddTaskPropsType> = ({
                                                        children,
                                                        onClick,
                                                        ...restProps
                                                    }) => {


    return (

        <div>
            <AddItemForm
                onClick={onClick}>{children}</AddItemForm>
        </div>

    );
};

