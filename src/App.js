import './App.css';
import Table from './components/Table';
import Header from './components/Header'
import data from './data.json';
import { useEffect, useState } from 'react';
import Form from './components/Form'

function App() {
  const [productList, setProductList] = useState(data.productList);
  const [sepet, setSepet] = useState([]);

  function onDelete(index) {
    const filteredList = productList.filter((item, i) => i !== index);

    setProductList(filteredList);
  }

  function onAdd(product) {
    setProductList([...productList, product])
  }

  function sepeteEkle(productName) {
    setSepet([...sepet, productName]);
  }

  // useEffect(() => {
  //   console.log('TEST', sepet)
  // });

  useEffect(() => {
    console.log('Component Köşeli Parantez');

    return () => {
      console.log('Sayfadan çıkıyorum')
    }
  }, []);
  
  useEffect(() => {
    if (sepet.length > 0) {

      console.log('Sepet Güncellendi', sepet);
    }


  }, [sepet])

  return (
    <div className="App">
      <Header />
      <Table data={productList} onDelete={onDelete} sepeteEkle={sepeteEkle} />
      <Form onSubmit={onAdd} />
    </div>
  );
}

export default App;
