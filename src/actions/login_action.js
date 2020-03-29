import axios from 'axios';
import { LOGIN_LOADING, LOGIN_FAIL, LOGIN_SUCCEED } from '../constants/redux_constant';

const apiLoading = () => ({
    type: LOGIN_LOADING
});

const apiSucceed = payload => ({
    type: LOGIN_SUCCEED,
    payload,
});

const apiError = (payload) => ({
    type: LOGIN_FAIL,
    payload
});

const authExpire = () => ({
    type: 'AUTH_EXPIRE',

});


export const login_action = (email, password) => async (dispatchEvent) => {    
    dispatchEvent(apiLoading());    
        try {
            axios.get('http://localhost:3000/json/login.json',
                {
                    headers: {
                        // 'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            ).then((response) => {
                console.log('In Success Block =>', response )
                console.log(email, '===',  response.data.username )
                if (email === response.data.username && password ===response.data.password) {
                    dispatchEvent(apiSucceed(response));
                } else{
                    dispatchEvent(apiError(response));
                }
                // dispatchEvent(apiSucceed(response));
                // if (response.data.status_code === 200) {
                    // if (response.data.username===email && response.data.password===password){
                    //     console.log('TRUE');
                    //     dispatchEvent(apiSucceed(response));
                    // } else {
                    //     console.log('FALSE');
                    //     dispatchEvent(apiError(response));
                    // }
                // } else {
                //     dispatchEvent(apiError(response));
                // }

                // if (response.data.status_code === 200) {
                //     dispatchEvent(apiSucceed(response));
                // } else {
                //     dispatchEvent(apiError(response));
                // }
            }).catch((error) => {
                console.log('Error in login', error)
                dispatchEvent(apiError(error));
            })

        } catch (error) {
            console.log('error received on farm list action page')
            dispatchEvent(apiError(error));
        }

   
};
