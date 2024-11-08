import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import CardName from './component/CardName'

class AppClass extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'john Doe'
    }
  }

  changeName = () => {
    this.setState({
      name: 'Agus knalpot'
    })
  }


  render() {
    return (
      <>
        <CardName name={this.state.name}></CardName>
        <button onClick={this.changeName}>Click me</button>
      </>
    )
  }
}


function app() {
  const [data, setData] = useState([])

  useEffect(
    () => {
      fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=9aa0749d52c1490bbd61d252be335d42')
        .then(response => response.json())
        .then(result => {
          console.log(result)
          let rates = [
            {
              currency: 'CAD',
              exchange_rate: result.rates.CAD,
              we_buy: 1.05 * result.rates.CAD,
              we_sell: result.rates.CAD - 5 / 100 * result.rates.CAD,
            },
            {
              currency: 'IDR',
              exchange_rate: result.rates.IDR,
              we_buy: 1.05 * result.rates.IDR,
              we_sell: result.rates.IDR - 5 / 100 * result.rates.IDR,
            },
            {
              currency: 'JPY',
              exchange_rate: result.rates.JPY,
              we_buy: 1.05 * result.rates.JPY,
              we_sell: result.rates.JPY - 5 / 100 * result.rates.JPY,
            },
            {
              currency: 'CHF',
              exchange_rate: result.rates.CHF,
              we_buy: 1.05 * result.rates.CHF,
              we_sell: result.rates.CHF - 5 / 100 * result.rates.CHF,
            },
            {
              currency: 'EUR',
              exchange_rate: result.rates.EUR,
              we_buy: 1.05 * result.rates.EUR,
              we_sell: result.rates.EUR - 5 / 100 * result.rates.EUR,
            },
            {
              currency: 'GBP',
              exchange_rate: result.rates.GBP,
              we_buy: 1.05 * result.rates.GBP,
              we_sell: result.rates.GBP - 5 / 100 * result.rates.GBP,
            },
          ]

          setData(rates)
        })
    }, []
  )

  // const data = [
  //   {
  //     currency: 'USD',
  //     we_buy: 11,
  //     exhange_rate: 0,
  //     we_sell: 0,
  //   }
  // ]

  return (
    <>
      <div class="vh-100 d-flex justify-content-center
      align-items-center bg-warning text-dark">
        <table >
          <tr class="border-bottom border-danger">
            <th class="pe-2">Currency</th>
            <th class="pe-2">exchange_rate</th>
            <th class="pe-2">we_buy</th>
            <th class="pe-2">we_sell</th>
          </tr>
          {
            data.map((rate, index) => {
              return (
                <tr key={index}>
                  <td class="pe-2">{rate.currency}</td>
                  <td class="pe-2">{rate.exchange_rate}</td>
                  <td class="pe-2">{rate.we_buy}</td>
                  <td class="pe-2">{rate.we_sell}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </>
  )
}

export default app