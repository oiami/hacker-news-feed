import * as hackernews from "../apis/hackernews";

describe("Send request to HackerNews API", () => {
  it("should return list of top stotories", async () => {
    const result = await hackernews.getTopStories(30);
    expect(result).toHaveLength(30);
  });

  it("should return an item of a story", async () => {
    const result = await hackernews.getStoryItem("19384878");
    expect(Object.keys(result)).toEqual(
      expect.arrayContaining([
        "by",
        "descendants",
        "id",
        "kids",
        "score",
        "time",
        "title",
        "type",
        "url"
      ])
    );
  });
});
