import apiUrl from '../apiConfig'
import axios from 'axios'

export const createComment = (user, postId, note) => {
	return axios({
		method: 'POST',
		url: apiUrl + `/${postId}`,
        headers: {
            Authorization: `Token token=${user.token}`,
        },
		data: {
			note
		},
	})
}

export const deleteComment = (user, postId, commId) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + `/delete/${postId}/${commId}`,
        headers: {
            Authorization: `Token token=${user.token}`,
        }
	})
}