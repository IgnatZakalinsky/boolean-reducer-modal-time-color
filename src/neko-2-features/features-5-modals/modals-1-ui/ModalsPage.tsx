import React from 'react';
import ModalContainer from "./ModalContainer";
import ModalQuestionContainer from "./question/ModalQuestionContainer";
import ModalInputContainer from "./input/ModalInputContainer";

const ModalsPage: React.FC = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '180vh',
            }}
        >
            <ModalContainer/>
            <ModalQuestionContainer/>
            <ModalInputContainer/>
            <div style={{height: '100vh'}}/>
        </div>
    );
};

export default ModalsPage;
