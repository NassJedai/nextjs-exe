import React from 'react'

export default function contact(props) {

  
  return (
    <div>
        <h1>contact</h1>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const quote = await fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,INR,EUR')
    const data = await quote.json()
    return {
      props: {
        data: data
      }
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        data: {}
      }
    }
  }
}



//https://goquotes-api.herokuapp.com/api/v1/random?count=1