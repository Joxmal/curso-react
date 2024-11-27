import { useState } from "react"
import { TwitterFollowCard } from "./TwitterFollowCard"


export function App() {

  const [name, setName] = useState('midudev')

  const formatedUserName = (userName) => `@${userName}`

  console.log('render witch name', name)

  return (
    <section>
      <TwitterFollowCard isFollowing formatedUserName={formatedUserName} userName={name}  >
        hola que tal
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing={false} formatedUserName={formatedUserName} userName='joxmal'  >
        hola que tal
      </TwitterFollowCard>


      <button onClick={() => {
        setName('predromichel')
      }} >Cambio el nombre </button>
    </section>
  )
}
