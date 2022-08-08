import apiUrl from '../apiConfig'
import axios from 'axios'

export const increaseLike = (user, postId) => {
	console.log('In API')
	return axios({
		method: 'POST',
		url: apiUrl + `/like/${postId}`,
        headers: {
            Authorization: `Token token=${user.token}`,
        },
		data: {
		},
	})
}

export const decreaseLike = (user, postId) => {
	console.log('In API')
	return axios({
		method: 'DELETE',
		url: apiUrl + `/like/${postId}`,
        headers: {
            Authorization: `Token token=${user.token}`,
        },
		data: {
		},
	})
}