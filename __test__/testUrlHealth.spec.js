import "babel-polyfill";
import { isValidURL } from "../src/client/js/urlChecker";

describe("Testing the submit functionality", () => {
  test("Testing the isValidURL() function", () => {
    expect(isValidURL).not.toBeDefined();
  });
});


