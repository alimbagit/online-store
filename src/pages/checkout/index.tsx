import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CartState } from "redux/rootReducer";
import OneItemInCheckout from 'components/oneItemInCheckout';
/**
 * Страница оформления заказа
 */

enum inputsList {
  FIO = "FIO",
  Phone = "Phone",
  Email = "Email",
  Address = "Address",
  Date = "Date",
  Time = "Time"
}

const Checkout = () => {

  const checkoutItems = useSelector((state: CartState) => state.items);
  const totalItems = useSelector((state: CartState) => state.totalItems);
  const totalPriceItems = useSelector((state: CartState) => state.totalPrice);

  const [stateFIO, setStateFIO] = useState("");

  const ChangeInputs = (event: React.FormEvent<HTMLInputElement>) => {
    switch (event.currentTarget.name) {
      case inputsList.FIO:
        setStateFIO(event.currentTarget.value.toString());
        break;
      case inputsList.Address:
        console.log("ПОле ФИО отредакторовано");
        break;
      case inputsList.Date:
        console.log("ПОле ФИО отредакторовано");
        break;
      case inputsList.Email:
        console.log("ПОле ФИО отредакторовано");
        break;
      case inputsList.Phone:
        console.log("ПОле ФИО отредакторовано");
        break;
      case inputsList.Time:
        console.log("ПОле ФИО отредакторовано");
        break;
      default:
        console.log("Такого поля не существует");
        break;
    }
  }

  return (
    <div>
      <div>
        <div>
          <h2>Оформление заказа</h2>
          {checkoutItems.map((item, index) => (
            <OneItemInCheckout key={index} itemCheckout={item} />
          ))}
        </div>
        <div>Общее количество товаров: {totalItems}</div>
        <div>Общая стоимость товаров: {totalPriceItems}</div>
      </div>
      <div>
        <form action="/checkout">
          <div>
            <label htmlFor={inputsList.FIO}>ФИО:</label>
            <input
              name={inputsList.FIO}
              id={inputsList.FIO}
              type="text" required
              size={15}
              onChange={ChangeInputs} />
          </div>
          <div>
            <label htmlFor={inputsList.Phone}>Телефон:</label>
            <input id={inputsList.Phone} name={inputsList.Phone} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" required size={15} onChange={ChangeInputs} />
          </div>
          <div>
            <label htmlFor={inputsList.Email}>Email: </label>
            <input name={inputsList.Email} id={inputsList.Email} type="email" required size={15} onChange={ChangeInputs} />
          </div>
          <div>
            <label htmlFor={inputsList.Address}>Адрес доставки: </label>
            <input name={inputsList.Address} id={inputsList.Address} required type="text" size={15} onChange={ChangeInputs} />
          </div>
          <div>
            <label htmlFor={inputsList.Date}>Дата доставки: </label>
            <input name={inputsList.Date} id={inputsList.Date} required type="date" size={15} onChange={ChangeInputs} />
          </div>
          <div>
            <label htmlFor={inputsList.Time}>Время доставки: </label>
            <input name={inputsList.Time} id={inputsList.Time} required type="time" size={15} onChange={ChangeInputs} />
          </div>
          <input type="submit" value="Отправить" />
        </form>
      </div>
    </div>
  )
}
export default Checkout;
