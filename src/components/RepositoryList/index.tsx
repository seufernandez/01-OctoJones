import './styles.scss'

import {RepositoryItem} from '../RepositoryItem/index'
import { FormEvent, useEffect, useState } from 'react'

// https://api.github.com/orgs/ahub-tech/repos

interface Repository {
  name: string,
  description: string,
  html_url: string

}

export function RepositoryList(){
  

  const [ repositories, setRepositories ] = useState<Repository[]>([])
  const [userOwner, setUserOwner] = useState('');
  
    // useEffect(()=>{
    //   // const userOwner = 'billgates'
    //   fetch(`https://api.github.com/users/${userOwner}/repos`)
    //   .then(response => response.json())
    //   .then(data => setRepositories(data))
    // },[userOwner])


    
    
    function GettingInfo(event:FormEvent){
      event.preventDefault();
      
      console.log(userOwner)
      // const userOwner = 'billgates'
      fetch(`https://api.github.com/users/${userOwner}/repos`)
      .then(response => response.json())
      .then(data => setRepositories(data))
  }


  return(
  <>
    <header>
      <h1>Type here the user which Repos will be listed below :)</h1>
      <form onSubmit={GettingInfo} >          
        <input 
        type="text" 
        placeholder="ex: billgates "
        onChange={event => setUserOwner(event.target.value)}
        // value=''
        />
        <button type="submit" >Search</button>
      </form>
    </header>
 
    <section className="repository-list" >

      <h1>Repository´s List</h1>
      <p>A simple list of repositories, project made to learn about getting information from API´s using React</p>
      
      <ul>
      {repositories.map(repository =>{
        return <RepositoryItem  key={repository.name} repository={repository}/>
      } 
      )}
      </ul>
    </section>
    </>
  )
}