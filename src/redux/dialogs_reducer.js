const SEND_MESSAGE = 'project_2/auth/SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Dima'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'hello'},
        {id: 5, message: 'Hi'}
    ]
};

const dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) =>( { type: SEND_MESSAGE, newMessageBody } );


export default dialogsReducer;