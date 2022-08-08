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

export const getAllPosts = () => {
    return axios({
        method: 'GET',
        url: apiUrl + '/posts'  
    })
}

export const getAllMyPosts = (user) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/myPosts',
        headers: {
            Authorization: `Token token=${user.token}`,
        },  
    })
}

export const deletePost = (user, postId) => {
    return axios({
        method: 'DELETE',
        url: `${apiUrl}/posts/${postId}`,
        headers: {
            Authorization: `Token token=${user.token}`,
        },  
    })
}

export const editPost = (user, postId, editPost) => {
    return axios({
        method: 'PATCH',
        url: `${apiUrl}/posts/${postId}`,
        headers: {
            Authorization: `Token token=${user.token}`,
        },
        data: {
			post: editPost
		},
    })
}