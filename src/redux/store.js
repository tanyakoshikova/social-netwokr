import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 'like: 10'},
                {id: 2, message: 'Its my first post', likesCount: 'like: 5'},
                {id: 3, message: 'My project', likesCount: 'like: 2'},
            ],
            newPostText: 'it.com'
        },
        dialogsPage: {
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
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state change');
    },

    getState() {
     return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export const addPostActionCreator = () =>( { type: ADD_POST } );
export const updateNewPostTextActionCreator = (text) => ( { type: UPDATE_NEW_POST_TEXT, newText: text } );


export const sendMessageCreator = () =>( { type: SEND_MESSAGE } );
export const updateNewMessageBodyCreator = (body) => ( { type: UPDATE_NEW_MESSAGE_BODY, body: body } );

export default store;
window.store = store;
