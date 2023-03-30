import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = state.messages.map( m => <Message message={m.message}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
       <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               {dialogsElements}
           </div>
           <div className={s.massages}>
               <div> {messagesElements} </div>
               </div>
           <AddMessageFormRedux onSubmit={addNewMessage} />
           </div>
    )
}

const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
           <div>
                   <Field component={Textarea}
                          validate={[required, maxLengthCreator(50) ]}
                          name={"newMessageBody"} placeholder="Enter your message" />
           </div>
           <div>
            <button className={s.send}>Send</button>
           </div>
      </form>
)
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm);

export default Dialogs;
