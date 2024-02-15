// import logo from './logo.svg';
import "./App.css";
import Table from "./Table";
import { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const countPerPage = 10

  const clickHandler = (value) => {
    setPage((page) => page + value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Employee Data Table</h1>
      <div className="tableSection">

      {data ? <Table data={data.slice((page-1)*countPerPage,((page-1)*countPerPage)+countPerPage)}/> : <p>Loading...</p>}
      </div>
      
      <button
        onClick={() => {
          if (page !== 1) {
            clickHandler(-1);
          }
        }}
      >
        Previous
      </button>
      <button className="circle">{page}</button>
      <button
        onClick={() => {
          if (page !== Math.ceil(data.length/10)) {
            clickHandler(1);
          }
        }}
      >
        Next
      </button>
    </div>
  );
}

export default App;
