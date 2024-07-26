import UserInterface from './components/UserInterface'
import CVHolder from './components/CVHolder'

function App() {
  return (
    <div className="relative box-border flex min-h-screen bg-[#131313] font-roboto">
      <UserInterface />
      <CVHolder />
    </div>
  )
}

export default App
