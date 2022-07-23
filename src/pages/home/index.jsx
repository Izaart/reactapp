import { useState, useEffect } from 'react'
import './index.css'
import {Card} from '../../components/card'

export function Home() {
  // const [count, setCount] = useState(0)
  const [studentName, setStudentName] = useState()
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({name: '', avatar: ''})

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };
    setStudents(prevState => [...prevState, newStudent]);
  }

  useEffect(() => {

  /*  fetch('https://api.github.com/users/Izaart')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.login,
        avatar: data.avatar_url
      })
    }) 
*/
    //forçando a utilização de async no useEffect

    async function fetchData() {
      const response = await fetch('https://api.github.com/users/Izaart')
      const data = await response.json();
      setUser({
        name: data.login,
        avatar: data.avatar_url
      }) 
    }
    fetchData();
  }, []);

  return (
    <div className='container'>
      <header>
        <h1>Lista de presença</h1>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="Foto de perfil" />
      </div>
      </header>
      <input type="text" placeholder='Digite o seu nome' onChange={e => setStudentName(e.target.value)}/>
      <button type='button' onClick={handleAddStudent}>Enviar</button>

      {
        students.map(student => (
        <Card 
          key={student.time}
          name={student.name} 
          time={student.time} />
        ))
      }
    </div>
  )
}

// export default Home
