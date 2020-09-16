import React, {useState, useEffect}from "react"
import "../Questions.css"
import Auth from "../Auth/Auth"


function Questions(props){

    const [count, setCount] = useState(0)
    const [auth, setAuth] = useState(false)
    const [message, setMessage] = useState('')
    const data = props.data
    
    const go =()=>{
        setCount(0)    
    }
    const logins = (val)=>{
        if(val.length > 8){
                setMessage("ID не должен превышать 8 знаков")
        }else{
            // fetch('URL_GOES_HERE', { 
            //     method: 'post', 
            //     headers: new Headers({
            //       'Authorization': 'Basic', 
            //       'Content-Type': 'application/x-www-form-urlencoded'
            //     }), 
            //     body: 'Azs:'+val
            //   });
            setAuth(true)
        }
    }
    return(
        <div>
           {auth &&
        
            <div className = 'main'>
            <div className="container m-auto item-center
                bg-color animate__animated animate__backInDown">
                    <div className="content m-auto">
                        <div className="answer text-center">
                            {count<data.length && 
                                <p id={data[count].id}>{data[count].question}</p> ||
                                <p>СПАСИБО ЗА ОТВЕТЫ</p>
                            }
                           
                        </div>
                        
                        {count<data.length  &&
                            <div className="answers">
                                <button onClick={()=>{setCount(count+1)}}>Нет</button>
                                <button onClick={()=>{setCount(count+1)}}>Да</button>
                            </div> ||
                            <div className="answers">
                                <button onClick={()=>{go()}}>OK</button>
                            </div>
                        }
                        
                        
                  </div>
            </div>
        </div>
        } 
        {!auth && <Auth funcLogin={logins} message={message} setMessage={setMessage}/> }
        </div>
        

    )
}














//     const [data] = useState(["Заехали к нам, когда стрелка была уже «на нуле»?",
//                                     "Заглянули за стаканчиком вашего любимого кофе?",
//                                     "Оператор был вежлив и улыбчив?",
//                                     "Хорошо помыли авто на мойке?",
//                                     "Спасибо за ваши ответы"])
//     const [count, setCount] = useState(0)
//     const [oneQuestion, setOnequsetion] = useState('')
//     const [show, setShow] = useState(false)
//     const [auth, setAuth] = useState(false)
//     const [message, setMessage] = useState('')
//     useEffect(()=>{
//         if(count==data.length-1){
//             setOnequsetion(data[count])
//             setShow(true)
//         }else if(count<data.length){
//             setOnequsetion(data[count])
//         }
//         else{
//             setCount(0)
//             setShow(false)
//         }
//     })

//     const logins = (val)=>{
//         if(val.length > 8){
//                 setMessage("ID не должен превышать 8 знаков")
//         }else{
//             // fetch('URL_GOES_HERE', { 
//             //     method: 'post', 
//             //     headers: new Headers({
//             //       'Authorization': 'Basic', 
//             //       'Content-Type': 'application/x-www-form-urlencoded'
//             //     }), 
//             //     body: 'Azs:'+val
//             //   });
//             setAuth(true)
//         }
//     }
//     return(
//         <div>
//            {auth &&
        
//             <div className = 'main'>
//             <div className="container m-auto item-center
//                 bg-color animate__animated animate__backInDown">
//                     <div className="content m-auto">
//                         <div className="answer text-center">
//                             <p>{oneQuestion}</p>
//                         </div>
                        
//                         {!show  &&
//                             <div className="answers">
//                                 <button onClick={()=>setCount(count+1)}>Нет</button>
//                                 <button onClick={()=>setCount(count+1)}>Да</button>
//                             </div>
                            
//                         }{show &&
//                             <div className="answers">
//                                 <button onClick={()=>setCount(count+1)}>OK</button>
//                             </div>
//                         }
                        
                        
//                   </div>
//             </div>
//         </div>
//         } 
//         {!auth && <Auth funcLogin={logins} message={message} setMessage={setMessage}/> }
//         </div>
        

//     )
// }


export default Questions