import { useState } from "react";
import InputForm from "./components/InputForm";
import Output from "./components/Output";
import './css/default.css'
import { Receipt } from "./types/Objects";

const App = () => {

  let [receipt, setReceipt] = useState<Receipt>({
    server: {
      model: 'Selecione um Servidor',
      brand: '',
      price: 0
    },
    cpu: {
      model: '',
      price: 0,
      amount: 2
    },
    memory: {
      size: 0,
      price: 0
    },
    storage: [{
      id: 0,
      model: '',
      price: 0,
      amount: 0
    }]
  });

  let [price, setPrice] = useState<number>(0);

  return (
    <>
      <InputForm setReceipt={setReceipt} setPrice={setPrice} />
      <Output receipt={receipt} price={price} />
    </>
  );
}

export default App;
