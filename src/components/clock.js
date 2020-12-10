function clock() {
  return (
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  )
}

setInterval(clock, 1000);

export default clock