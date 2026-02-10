// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { MyCart } from './mycart'
import { AppProvider } from './AppContext';

function App() {

  return (
    <>
    <AppProvider>

      <MyCart />
    </AppProvider>
    </>
  );
}

export default App
