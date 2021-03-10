import { GiArcTriomphe } from 'react-icons/gi';
import {LOGIN_SUCCESS,LOGIN_FAIL,USER_LOADED_SUCCESSS,USER_LOADED_FAIL} from '../actions/types';





const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
};



export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            console.log("LOGIN_SUCCESS")
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.refresh);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }
            
            case LOGIN_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }
    
            case USER_LOADED_FAIL: 
            return {
                ...state,
                user: null
            }

            case USER_LOADED_SUCCESSS :
            return{
                ... state,
                user:payload

            }
            default:
                return state;

    }
}      





// const initialState = {
//     token: localStorage.getItem("token"),
//     isAuthenticated: null,
//     loading: false,
//   };
  
//   export default function (state = initialState, action) {
//     const { type, payload } = action;
  
//     switch (type) {
//       case LOGIN_SUCESS:
//         localStorage.setItem("token", payload.tokens.token);
//         return {
//           ...state,
//           isAuthenticated: true,
//           loading: false,
//           token: payload.tokens.token,
//         };
//       case SIGNUP_SUCESS:
//         return {
//             case LOGOUT:
//                 localStorage.removeItem("token");
//                 return {
//                   ...state,
//                   isAuthenticated: false,
//                   loading: false,
//                   token: null,
//                 };
//               default:
//                 return state;
//             }
//           } case LOGOUT:
//         localStorage.removeItem("token");
//         return {
//           ...state,
//           isAuthenticated: false,
//           loading: false,
//           token: null,
//         };
//       default:
//         return state;
//     }
//   }