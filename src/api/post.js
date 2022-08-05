import apiUrl from '../apiConfig'
import axios from 'axios'

export const createPost = (user, newPost) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/posts',
        headers: {
            Authorization: `Token token=${user.token}`,
        },
		data: {
			post: newPost
		},
	})
}