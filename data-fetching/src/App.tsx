import { useFetch } from "./hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;  
}

function App() {
  const { data: repositories, isFetching } 
    = useFetch<Repository[]>('users/GildoSavior/repos');
  return (
    <ul>
      {isFetching && <p>Carregando ...</p>}
      {repositories?.map(repo => {
         return  ( 
           <li key={repo.full_name}>
             <strong>{repo.full_name}</strong> 
             <strong>{repo.description}</strong>
           </li>
         )
      })}
    </ul>
  )
}

export default App
