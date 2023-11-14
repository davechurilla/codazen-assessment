import React from 'react';
import { useState } from 'react';
import './App.css';
import 'h8k-components';
import StockData from './components/stock-data/index.js';

const title = 'Stock Data';

function App() {
  const [stockData, setStockData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const getList = async (inputValue) => {
    // console.log(inputValue);
    const result = await fetch(
      `https://jsonmock.hackerrank.com/api/stocks?date=${inputValue}`
    ).then((data) =>
      data.json().then((data) => {
        setStockData(data);
      })
    );
    return result;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const stockDataObj = async () => await getList(inputValue);

    setStockData(stockDataObj);
    setInputValue('');
  };

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h8k-navbar header={title} />
      <StockData
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={onChangeHandler}
        stockDataObj={stockData}
        term={inputValue}
      />
    </div>
  );
}

export default App;
