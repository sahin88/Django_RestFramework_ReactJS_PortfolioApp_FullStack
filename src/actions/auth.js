import  axios from 'axios';


import {
    LOGIN_SUCCESS,
 LOGIN_FAIL,
  USER_LOADED_SUCCESSS,
USER_LOADED_FAIL
} from './types';



export const load_user= ()=> async (dispatch)=>{
    if(localStorage.getItem('access')){
        const config={
            headers:{
                'Content-Type':'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`,
                
            }
        }

        try{
            const response = await  axios.get(`${process.env.REACT_APP_API_URL}/auth/user/me/`,config)
     
            dispatch({
                type:USER_LOADED_SUCCESSS,
                payload:response.data
            })
         }
         catch(error){
           
            dispatch({
                 type:USER_LOADED_FAIL
                 
             })
     
         }
    }

    else{
        dispatch({
            type:USER_LOADED_FAIL
            
        })
    }

}

// export const login = (email, password) => async (dispatch) => {

//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     const body = JSON.stringify({ email, password });
//     console.log("body", body)

//     try {
//         // `${process.env.REACT_APP_API_URL}/auth/jwt/create/`
//         const res = await axios.post('http://127.0.0.1:8000/auth/jwt/create/', body, config);
//         console.log("haygig",res)

//         dispatch({
//             type: LOGIN_SUCCESS,
//             payload: res.data
//         });

//         dispatch(load_user());
//     } catch (err) {
//         console.log("derdin ne", err)
//         dispatch({
//             type: LOGIN_FAIL
//         })
//     }
// };


export const login = (email, password) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const body = JSON.stringify({ email, password });
  
    try {
      // axios.defaults.headers = {
      //   "Content-Type": "application/json",
      // };
      const res = await axios.post(
        'http://127.0.0.1:8000/auth/jwt/create/',
        body,
        config
      );
      console.log("res",res)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      alert(" has beeen done ");
  
      // dispatch({
    } catch (err) {
        console.log("it  has not been submitted");
        console.log("error", err);
      dispatch({
        type: LOGIN_FAIL,
      });
  
      // dispatch({
    }
  };
  
// export const login=(email, password)=> async dispatch=>{
//     console.log("we are good to go backend sites")


//     const config={
//         headers: {
//             Accept: "application/json",
//             'Content-Type':'application/json'
//         }
//     }

//     const body=JSON.stringify({ email, password})


//     try{
//        const response= await  axios.post(`http://127.0.0.1:8000/auth/jwt/create/`, body, config)

//        dispatch({
//            type:LOGIN_SUCCESS,
//            payload:response.data
//        })
//        dispatch(load_user())
//     }
//     catch(error){
      
//         dispatch({
//             type:LOGIN_FAIL
            
//         })

//     }
// }