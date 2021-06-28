import './styles.scss'

import {RepositoryItem} from '../RepositoryItem/index'

const repository = {
  name: 'unform',
  description: 'Unform repository',
  link: 'https://github.com/unform/unform'
}


export function RepositoryList(){

  


  return(
    <>
    <section className="repository-list" >
      <h1>Repository´s List</h1>
      <ul>
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>

      </ul>
    </section>
    </>
  )
}