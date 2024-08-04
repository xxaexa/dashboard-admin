import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Transaction from "./pages/Transactions/Transaction"
import AddTransaction from './pages/Transactions/AddTransaction';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Transaction />} />
      <Route path="/add" element={<AddTransaction />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
