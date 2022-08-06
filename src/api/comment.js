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