import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import GeneralInfo from './components/info'
import Experience from './components/experience'
import Education from './components/education'

function App() {
  return (
    <>
      <div>
        <GeneralInfo />
      </div>

      <div>
        <Education />
      </div>

      <div>
        <Experience />
      </div>
    </>
  )
}

export default App
