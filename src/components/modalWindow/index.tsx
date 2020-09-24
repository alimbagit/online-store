import React from 'react';
import "./style.scss"

interface PropsModalWIndow {
    shown: boolean;
    textInWindow: string[];
    closeWindow:()=>void;
}

const ModalWindow = ({ shown, textInWindow, closeWindow }: PropsModalWIndow) => {
    if (shown)
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    {/* <span className="close">&times;</span> */}
                    <p>Some text in the Modal..</p>
                    <div>{textInWindow.map((str, index) => {
                        return (
                            <p key={index}>{str}</p>
                        )
                    })}</div>
                    <button onClick={closeWindow}>OK</button>
                </div>
            </div>
        )
    else return <></>
}

export default ModalWindow;