module.exports = {
  testEnvironment: "jsdom",
  testEnvironmentOptions: {},
  setupFiles: ["jest-canvas-mock"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
  collectCoverage: true,
  collectCoverageFrom: ["./src/components/**/*.tsx"],
  coveragePathIgnorePatterns: ["node_modules", ".stories.tsx", ".types.ts"],
  coverageThreshold: {
    global: {
      statements: 0,
      functions: 0,
      branches: 0,
      lines: 0,
    },
  },
};
