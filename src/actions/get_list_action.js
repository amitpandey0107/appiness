import axios from 'axios';
import { GET_LIST_LOADING, GET_LIST_FAIL, GET_LIST_SUCCEED } from '../constants/redux_constant';
// import jsonData from '../../public/json/employee.json';



const apiLoading = () => ({
    type: GET_LIST_LOADING
});

const apiSucceed = payload => ({
    type: GET_LIST_SUCCEED,
    payload,
});

const apiError = (payload) => ({
    type: GET_LIST_FAIL,
    payload
});

const authExpire = () => ({
    type: 'AUTH_EXPIRE',

});


export const get_list_action = () => async (dispatchEvent) => {
    dispatchEvent(apiLoading());
    // AsyncStorage.getItem('Token').then((token) => {
        try {
            // axios.get('https://jsonplaceholder.typicode.com/users',
            axios.get('http://localhost:3000/json/employee.json',
                {
                    headers: {
                        // 'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            ).then((response) => {
                console.log('In Success Block =>', response )
                dispatchEvent(apiSucceed(response));
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

    // })
};
