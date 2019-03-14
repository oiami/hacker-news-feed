import axios from "axios";

const createRequest = () => {
  return axios.create({
    baseURL: `https://hacker-news.firebaseio.com/v0`
  });
};

export const getTopStories = async limit => {
  try {
    const request = createRequest();
    const { data } = await request.get("/topstories.json");
    return data.slice(0, limit);
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }
};

export const getStoryItem = async storyId => {
  try {
    const request = createRequest();
    const { data } = await request.get(`/item/${storyId}.json`);
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};
