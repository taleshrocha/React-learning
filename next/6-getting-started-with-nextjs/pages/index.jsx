import { useState } from 'react'

//function Header(props) {
function Header({ title }) { // Object destructuring
  console.log(title)
  return (
    <h1>{title ? title : "Default"}</h1>
  )
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
    console.log(`increment like count to: ${count + 1}`)
  }

  return (
    <div>
      { /* Nesting the Header component*/}
      <Header title="React 💙" />
      <Header title="Develop. Preview. Ship. 🚀" />
      <Header />

      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>{count} Likes</button>

    </div>
  )
}
