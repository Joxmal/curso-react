import { useState } from "react";
// 1:43

export function TwitterFollowCard({ children, formatedUserName, userName }) {

  const [isFollowing, setIsFollowing] = useState(false)



  const text = isFollowing ? 'Dejar de Seguir' : 'Seguir'
  const handleCLick = () => {
    setIsFollowing(!isFollowing)
  }

  console.log('child')

  return (
    <article className="tw-followCard" style={{ display: 'flex', alignItems: "center", color: '#fff' }}>
      <header>
        <img src={`https://unavatar.io/${userName}`} alt="" />
        <div>
          <strong>{children}</strong>
          <span> {formatedUserName(userName)} </span>
        </div>
      </header>

      <aside>
        <button onClick={() => {

          handleCLick()


          /* Añadir lógica de seguir/dejar de seguir aquí */
        }}>
          {text}
        </button>
      </aside>
    </article>
  );
}