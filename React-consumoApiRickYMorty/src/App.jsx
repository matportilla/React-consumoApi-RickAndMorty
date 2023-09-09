import './App.css'
import MiApi from './components/MiApi'


function App() {
 

  return (
    <>
    <div>
      <header className='header'>
        <img className='img-fluid mb-4' src="https://occ-0-2433-990.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdlsO0LP022AtLRcPlik-5uWGqVS90oIr1Wy70ULe7-qyaW-Y3a9zUgndw6Q6KuHX2gH_Vd3Nxnl6EOU38_ep9ApNbNfn2Krr6hLj6fhs_eZ.png?r=976" alt="logo" />
      <h1>Buscador de Personajes</h1>
      </header>
      <div>
        <MiApi/>
      </div>
      <footer className='footer p-3 mb-2 bg-body-secondary'>
        <p className='m-4 text-body-secondary'>Desarrollo de MothWork para DesafioLatam</p>
      </footer>
    </div>
      
    </>
  )
}

export default App
