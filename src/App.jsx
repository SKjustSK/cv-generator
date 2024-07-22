import UserInterface from './components/UserInterface'
import CVholder from './components/CVholder'

function App() {
  return (
    <div className="relative box-border flex min-h-screen bg-[#131313] font-roboto">
      <UserInterface />
      <CVholder />
    </div>
  )
}

export default App
