import { useState, useEffect } from 'react';
import axios from 'axios';
import './currency.css';

export const Currency = () => {

  const [currency, setCurrency] = useState({ loading : false })

  useEffect(() => {
    setCurrency({ loading : true })
    axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
    .then(resp => {
      setCurrency({ loading : false, USD : resp.data.Valute.USD.Previous})
    })
  }, [setCurrency])

  if (currency.loading || currency.USD === undefined) {
    return <span>Loading</span>
  } return (
      <div className='currency__wrapper'>
        <div className='valute__container'>
        <div className='valute__description'>
         <span>{currency.USD.toFixed(2)} ₽</span>
         <span>USD</span>
        </div>
        </div>
      </div>
    )
}
