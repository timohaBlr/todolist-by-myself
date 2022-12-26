import React from 'react';

import {AddItemForm} from "../../AddItemForm/AddItemForm";



type CreateTodoListPropsType = {
    callBack: (title: string)=> void
}

export const CreateTodoList: React.FC<CreateTodoListPropsType> = ({callBack,

                                                                      ...restProps
                                                                  }) => {

    return (
        <div>
<AddItemForm onClick={callBack}>New</AddItemForm>
        </div>
    );
};

