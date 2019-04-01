import axios, { AxiosRequestConfig } from "axios";

const ApiService = axios.create({
  baseURL: "https://conduit.productionready.io/api",
  headers: {
    "Content-type": "application/json"
  }
});

export default ApiService;

export const CommentsService = {
  get(slug: string) {
    return ApiService.get(`/articles/${slug}/comments`);
  },

  post(slug: string, payload) {
    return ApiService.post(`/articles/${slug}/comments`, {
      comment: { body: payload }
    });
  },

  delete(slug: string, commentId: string) {
    return ApiService.delete(`/articles/${slug}/comments/${commentId}`);
  }
};
