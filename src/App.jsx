import "../src/styles/global.scss"
import { RepositoryList } from "./components/RepositoryList"
import {Counter} from "./components/Counter"

export function App(){
  return (
    <>
    <h1>Hello my Consagrated</h1>
    <RepositoryList/>
    <Counter/>
    </>
  )
}