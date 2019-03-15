import { transformData, getRelativeUrl } from "../components/NewsItems";

describe("transform data to proper format", () => {
  describe("get relative url", () => {
    it("should throw return original url if URL is invalid", () => {
      const url = getRelativeUrl(["abhebce"]);
      expect(url).toEqual("");
    });

    it("should return relative url", () => {
      const url = getRelativeUrl(
        "https://www.nytimes.com/2019/03/13/technology/facebook-data-subpoenas.html"
      );
      expect(url).toEqual("nytimes.com");
    });
  });
});
