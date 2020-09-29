import React, { FormEvent, FormEventHandler, useRef, useState } from "react";
import "./checkoutForm.scss";

enum inputsList {
  FIO = "FIO",
  Phone = "Phone",
  Email = "Email",
  Address = "Address",
  Date = "Date",
  Time = "Time",
}

interface PropsCheckoutForm {
  callbackFormValues: (checkoutInfo: string[]) => void;
}

const CheckoutForm = ({ callbackFormValues }: PropsCheckoutForm) => {
  const myRef = useRef<HTMLInputElement>(null);
  const [stateFIO, setStateFIO] = useState("");
  const [stateAddress, setStateAddress] = useState("");
  const [stateEmail, setStateEmail] = useState("");
  const [statePhone, setStatePhone] = useState("");
  const [stateDate, setStateDate] = useState("");
  const [stateTime, setStateTime] = useState("");

  /**Событие редактирования полей формы */
  const ChangeInputs = (event: React.FormEvent<HTMLInputElement>) => {
    let validityText = "";
    event.currentTarget.setCustomValidity("");
    switch (event.currentTarget.name) {
      case inputsList.FIO:
        setStateFIO(event.currentTarget.value.toString());
        validityText = "Введите ФИО через пробел";
        break;
      case inputsList.Address:
        setStateAddress(event.currentTarget.value.toString());
        validityText = "Введите свой точный адрес. Не менее 10 символов";
        break;
      case inputsList.Email:
        setStateEmail(event.currentTarget.value.toString());
        break;
      case inputsList.Date:
        setStateDate(event.currentTarget.value.toString());
        break;
      case inputsList.Phone:
        setStatePhone(event.currentTarget.value.toString());
        validityText = "Введите номер телефона в формате 987-654-32-10";
        break;
      case inputsList.Time:
        setStateTime(event.currentTarget.value.toString());
        break;
      default:
        validityText = "";
        break;
    }
    event.currentTarget.validity.valid
      ? event.currentTarget.setCustomValidity("")
      : event.currentTarget.setCustomValidity(validityText);
  };
  /**Обработчик события отправки формы */
  const handleSubmit = (event: FormEvent) => {
    callbackFormValues([
      stateFIO,
      statePhone,
      stateEmail,
      stateAddress,
      stateDate,
      stateTime,
    ]);
    /**Отмена отправки формы */
    event.preventDefault(); 
  };

  return (
    <form
      /**Перехватывает событие отправки формы */
      onSubmit={handleSubmit}
    >
      <div className="form-wrapper">
        <div className="form-labels">
          <label htmlFor={inputsList.FIO}>ФИО:</label>
          <label htmlFor={inputsList.Phone}>Телефон:</label>
          <label htmlFor={inputsList.Email}>Email: </label>
          <label htmlFor={inputsList.Address}>Адрес доставки: </label>
          <label htmlFor={inputsList.Date}>Дата доставки: </label>
          <label htmlFor={inputsList.Time}>Время доставки: </label>
        </div>
        <div className="form-inputs">
          <input
            name={inputsList.FIO}
            id={inputsList.FIO}
            type="text"
            pattern="\S+\s{1,}\S.+"
            required
            size={15}
            autoComplete="name"
            onChange={ChangeInputs}
          />

          <input
            id={inputsList.Phone}
            name={inputsList.Phone}
            type="tel"
            inputMode="tel"
            placeholder="***-***-**-**"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
            required
            size={15}
            maxLength={13}
            onChange={ChangeInputs}
            title="(Введите номер телефона в формате 987-654-32-10)"
            ref={myRef}
          />

          <input
            required
            name={inputsList.Email}
            id={inputsList.Email}
            type="email"
            size={15}
            onChange={ChangeInputs}
            title="Введите свой Email"
            ref={myRef}
          />

          <input
            name={inputsList.Address}
            id={inputsList.Address}
            required
            type="text"
            size={15}
            minLength={10}
            onChange={ChangeInputs}
          />

          <input
            name={inputsList.Date}
            id={inputsList.Date}
            type="date"
            required
            size={15}
            onChange={ChangeInputs}
            title="Выберите удобную вам дату доставки"
          />
          
          <input
            name={inputsList.Time}
            id={inputsList.Time}
            type="time"
            size={15}
            required
            onChange={ChangeInputs}
            title="Выберите удобное вам время"
          />
        </div>
      </div>
      <input id="submit" type="submit" value="Отправить" />
    </form>
  );
};

export default CheckoutForm;
