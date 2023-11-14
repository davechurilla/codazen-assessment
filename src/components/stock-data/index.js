import React from 'react';
import './index.css';

export default function StockData({
  onSubmitHandler,
  onChangeHandler,
  stockDataObj,
  term,
}) {
  function RenderedData() {
    if (stockDataObj.data) {
      const data = stockDataObj.data[0];
      if (typeof data === 'undefined') {
        return (
          <div className="mt-50 mx-auto w-50 slide-up-fade-in styled">
            This resulted in an error. The date entered either has no data, or
            the incorrect date format was entered. Please try again using the
            correct date format.
          </div>
        );
      } else {
        return (
          <ul
            className="mt-50 slide-up-fade-in styled"
            id="stockData"
            data-testid="stock-data"
          >
            <h2>Stock Data for {data.date}</h2>
            <li>
              <strong>Open: </strong> {data.open}
            </li>
            <li>
              <strong>High: </strong>
              {data.high}
            </li>
            <li>
              <strong>Low: </strong>
              {data.low}
            </li>
            <li>
              <strong>Close: </strong>
              {data.close}
            </li>
          </ul>
        );
      }
    }
  }

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <form onSubmit={onSubmitHandler}>
          <input
            value={term}
            onChange={onChangeHandler}
            type="text"
            className="large"
            placeholder="5-January-2000"
            id="app-input"
            data-testid="app-input"
          />
          <button
            type="submit"
            className=""
            id="submit-button"
            data-testid="submit-button"
          >
            Search
          </button>
        </form>
      </section>
      <RenderedData />
      <div
        className="mt-50 slide-up-fade-in"
        id="no-result"
        data-testid="no-result"
      ></div>
    </div>
  );
}
