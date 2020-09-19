module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "\\.(ts|tsx)?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
};
