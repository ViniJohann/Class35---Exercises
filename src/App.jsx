import './App.css'
import Counter from './components/counter'
import MirrorText from './components/MirrorText'
import Navigation from './components/Navigation'
import ToDoList from './components/ToDoList'

function App() {
  return (
    <div>
      <Counter/>
      <hr />
      <MirrorText/>
      <hr />
      <ToDoList />
      <hr />
      <Navigation />
    </div>
  )
}

export default App
