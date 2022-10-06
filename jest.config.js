module.exports = {
  moduleDirectories: ["node_modules", "src"],
  roots: ["src"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
