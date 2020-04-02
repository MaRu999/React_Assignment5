import * as React from 'react';
import {ChangeEvent, FormEvent, useState} from 'react';
import {func} from "prop-types";
import {StyledBtn, StyledInput, StyledTextArea} from "./styledComponents";



export const FormArea = (props: FormProp): JSX.Element => {

    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    const [formProp] = useState(props);

    function submitForm(e: FormEvent): void {
        e.preventDefault();
        formProp.addToList(name.toString(), value.toString());
        formProp.switchToMessages();
    }

    return (
        <>
            <h1>Add new Message</h1>
            <form onSubmit={submitForm}>

                    <StyledInput type="text" name={name} id="titlefield"
                                 onChange={(e: ChangeEvent): void => setName((e.target as HTMLInputElement).value)}/>
                    <br/>

                <label>Message:
                    <StyledTextArea value={value} id="msgField"
                           onChange={(e: ChangeEvent): void => setValue((e.target as HTMLInputElement).value)}/>
                </label>
                <StyledBtn>Add message!</StyledBtn>
            </form>

        </>
    )
};

FormArea.propTypes = {
    addToList: func.isRequired,
    switchToMessages: func.isRequired,
    updateCount: func.isRequired
};

type FormProp = {
    addToList: Function;
    switchToMessages: Function;
    updateCount: Function;

}