import React, {useState}from 'react'

function Auth(props){
    const [val , setVal] = useState('')
    
    return(
        <div className = 'main'>
            <div className="container m-auto item-center
                bg-color animate__animated animate__backInDown">
                    <div className="content m-auto">
                        <div className="answers login">
                            <input 
                                type="number" 
                                className="loginInput" 
                                placeholder="Номер АЗС" 
                                min="0" 
                                onChange={
                                    (e)=>{setVal(e.target.value)
                                            props.setMessage('')
                                        }
                                    }
                                />
                            <button className="authBtn" onClick={()=>{
                                props.funcLogin(val)
                            }   
                            }>Войти</button>
                        </div>
                        <p className="error">{props.message}</p>
                  </div>
            </div>
        </div>
            
        
    )
}

export default Auth