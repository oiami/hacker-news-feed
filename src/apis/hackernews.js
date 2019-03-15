import axios from "axios";

const createRequest = () => {
  return axios.create({
    baseURL: `https://hacker-news.firebaseio.com/v0`
  });
};

const enpoints = {
  hackerNews: "topstories",
  newest: "newstories",
  show: "showstories"
};

export const getTopStories = async activePage => {
  try {
    const request = createRequest();
    const { data } = await request.get(`/${enpoints[activePage]}.json`);
    return data;
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
