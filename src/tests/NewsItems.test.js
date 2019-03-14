import { transformData } from "../components/NewsItems";

describe("transform data to proper format", () => {
  const item = {
    by: "tysone",
    descendants: 182,
    id: 19384878,
    kids: [19388494],
    score: 709,
    time: 1552518353,
    title: "Facebook’s Data Deals Are Under Criminal Investigation",
    type: "story",
    url:
      "https://www.nytimes.com/2019/03/13/technology/facebook-data-subpoenas.html"
  };

  it("should format expect data to proper from", () => {
    const result = transformData(item);
    expect(result).toHaveProperty("relativeUrl", "nytimes.com");
  });
});
