// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

  // Automatically clear mock calls and instances between every test
  // clearMocks: false,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",
  transform: {
    '^.+\\.js$': '<rootDir>test/jest.transform.js',
  },
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "ts",
    "tsx",
    "node"
  ],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  // moduleNameMapper: {},
  moduleNameMapper: {
    "\\.(css|less|scss)$": "<rootDir>test/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>test/__mocks__/fileMock.js"
  },

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["<rootDir>test/test-setup.js"],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",
  
  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    "/node_modules/"
  ]
};
