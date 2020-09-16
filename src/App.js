  import React, { useState, useEffect } from 'react';
  import './App.css';
  import Questions from './components/Questions/Questions';
  import {API_URL, CORS} from './config/Url';


  function App() {
    const [questions, setQuestions] = useState([])
    useEffect(()=>{
      getQuestion()
    },[])

    const getQuestion = async () =>{
      let resp = await fetch(`${CORS}${API_URL}api/ServiceQuize`)
      let qest = await resp.json()
      setQuestions(qest)
    }
    return(
      <div className="App">
        <Questions data={questions}/>
      </div>
    );
  }

  export default App;
