import React from "react";
import s from "./FormsControls.module.css";
import {Field} from "redux-form";

const FormControl = ({input, child, children, meta: {touched, error}, ...props})=> {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : " ") }>
            <div>
                {children}
            </div>
            { hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>
}


{/*    <Field placeholder={"Login"} name={"email"} component={Input} validate={[required, maxLengthCreator(30) ]}/>*/}
export const createField = (placeholder, name, validators, component, props= {})  =>  (
    <div>
    <Field placeholder={placeholder} name={name}
           validate={validators}
           component={component}
           {...props}
    />
    </div>
)
