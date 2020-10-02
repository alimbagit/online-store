import React from 'react';
import "./modalWindow.scss"

interface PropsModalWIndow {
    shown: boolean;
    textInWindow: string[];
    closeWindow:()=>void;
}

/**
 * Модальное окно
 * 
 * @param shown - Флаг отображения модального окна
 * @param textInWindow - Текст, который будет отоброжаться в модальном окне
 * @param closeWindow - callback функция, которая будет запускаться при событии закрытия модального окна
 */
const ModalWindow = ({ shown, textInWindow, closeWindow }: PropsModalWIndow) => {
    if (shown)
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <h4>Ваш заказ принят. Мы перенаправим вас на главную страницу каталога.</h4>
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