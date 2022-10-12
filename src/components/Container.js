import React from 'react'
import { connect } from 'react-redux'
import { buyChocolate, buyIceCream, buyCake } from '../redux/Actions'
import { mapStateToDispatch, mapStateToProps } from '../redux/ReduxStates'

function Container(props) {
  const [cakes, setCakes] = React.useState()
  const [iceCreams, setIceCreams] = React.useState()
  const [chocolates, setChocolates] = React.useState()

  //Common function to call desired reduer
  const handleChange = (value, type) => {
    switch (type) {
      case 'cakes':
        if (value) {
          if (value < 0) {
            alert('Quantity should be a positive number')
          }
          else {
            setCakes('');
            props.buyCake(value)
          }
        }
        break;
      case 'iceCreams':
        if (value) {
          if (value < 0) {
            alert('Quantity should be a positive number')
          }
          else {
            setIceCreams('')
            props.buyIceCream(value)
          }
        }
        break;
      case 'chocolates':
        if (value) {
          if (value < 0) {
            alert('Quantity should be a positive number')
          }
          else {
            setChocolates('')
            props.buyChocolate(value)
          }
        }
        break;
      default: return
    }
  }
  return (
    <div>
      {/* Cakes Section */}
      <div>
        <h2>Number of Cakes: {props.cake.no_of_cakes}</h2>
        {props.cake.no_of_cakes ?
          <>
            <input type='number' placeholder='Enter quantity to buy '
              value={cakes} onChange={(e) => { setCakes(e.target.value) }}
            />
            <button onClick={() => handleChange(cakes, 'cakes')}>Buy Cake</button>
          </> :
          <h3 style={{ color: 'red' }}>Ran Out of Stock</h3>
        }
      </div>
      {/* Ice-Cream Section */}
      <div>
        <h2>Number of Ice-Creams: {props.iceCream.no_of_iceCream}</h2>
        {props.iceCream.no_of_iceCream ?
          <>
            <input type='number' placeholder='Enter quantity to buy '
              value={iceCreams} onChange={(e) => { setIceCreams(e.target.value) }}
            />
            <button onClick={() => handleChange(iceCreams, 'iceCreams')}>Buy Cake</button>
          </> :
          <h3 style={{ color: 'red' }}>Ran Out of Stock</h3>
        }
      </div>
      {/* Chocolate Section */}
      <div>
        <h2>Number of Chocolate: {props.chocolate.no_of_chocolate}</h2>
        {props.chocolate.no_of_chocolate ?
          <>
            <input type='number' placeholder='Enter quantity to buy '
              value={chocolates} onChange={(e) => { setChocolates(e.target.value) }}
            />
            <button onClick={() => handleChange(chocolates, 'chocolates')}>Buy Cake</button>
          </> :
          <h3 style={{ color: 'red' }}>Ran Out of Stock</h3>
        }
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapStateToDispatch)(Container)