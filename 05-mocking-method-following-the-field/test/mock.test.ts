import { main } from "../src/main";

beforeEach(() => {
  jest.clearAllMocks();
});

// Mock the InnerClass
jest.mock('../src/inner-class', () => {
  return {
    InnerClass: jest.fn().mockImplementation(() => {
      return {
        acceptLambda: jest.fn(() => "mocked string"),
      };
    }),
  };
});

describe('main', () => {
  it('should return the input string', () => {
    // Act
    const result = main();

    // Assert
    expect(result).toBe("mocked string")
  });
});