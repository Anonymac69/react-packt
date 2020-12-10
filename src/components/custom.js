import React from 'react'

const forms = () => {
  // javascript ES6 higher order function
  const nums = [1, 3, 22, 4, 69]
  const db_nums = nums.map(num => { return num * 2; })
  console.log(db_nums)


  const name = 'Michael'
  // babel compiles this piece into proper jsx
  const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world'
  )


  let date = new Date()
  let hours = date.getHours()
  let timeOfDay;

  if (hours < 12) { timeOfDay = 'Morning' }
  else if (hours >= 12 && hours < 17) { timeOfDay = 'Afternoon' }
  else if (hours > 17) { timeOfDay = 'Night' }

  // these styles are still javascript as objects
  let style = {
    color: 'purple',
    fontSize: '14px'
  }


  return (
    // inline styles
    <div>
      <h3 style={style}>Hello World</h3>
      <p style={{color:'#ff4500', fontSize:'.8rem', fontWeight:'600'}}> Hi {name}, welcome this beautiful {timeOfDay}</p>
      <small>{time}</small>
      <small>{element}</small>
    </div>
  )
}

export default forms
