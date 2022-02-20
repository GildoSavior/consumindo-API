import axios from "axios";
import {useQuery} from "react-query";
import { Link } from "react-router-dom";

export type Repository = {
  full_name: string;
  description: string;  
}

export function Repos() {
  const { data, isFetching } = useQuery<Repository[]>('repos', async   () => {
      const response = await axios.get('http://api.github.com/users/GildoSavior/repos');

      return response.data;
  }, {
      staleTime: 1000 * 60 // 1 minute
  })
  return (
    <ul>
      {isFetching && <p>Carregando ...</p>}
      {data?.map(repo => {
         return  ( 
           <li key={repo.full_name}>
             <Link to={`repo/${repo.full_name}`}>
                 {repo.full_name}
            </Link> 
             <strong>{repo.description}</strong>
           </li>
         )
      })}
    </ul>
  )
}

