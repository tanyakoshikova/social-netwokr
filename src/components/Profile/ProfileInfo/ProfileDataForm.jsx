import React from "react";
import {createField} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import s from './ProfileInfo.module.css';
import style from "./../../common/FormsControls/FormsControls.module.css"




const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <div><button>save</button></div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <b>Full name</b>: {createField("Full name", "fullName", [], Input) }
            </div>
            <div>
                <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"}) }
            </div>
            <div>
                    <b>My professional skills</b>: {createField("My professional skills", "lookingForAJobDescription", [], Textarea, {type: "checkbox"}) }
            </div>
            <div>
                <b>About me</b>:
                {createField("About Me", "aboutMe", [], Textarea, {type: "checkbox"}) }
            </div>

            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key} : {createField(key, "contacts." + key, [], Input) }</b>
                </div>
            }) }
            </div>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;