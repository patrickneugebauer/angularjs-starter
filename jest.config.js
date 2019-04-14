// Basic TypeScript + Jest setup taken from:
// https://basarat.gitbooks.io/typescript/docs/testing/jest.html

// Jest config documentation
// https://jestjs.io/docs/en/configuration

module.exports = {
  "rootDir": "./src",
  "roots": [],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "moduleNameMapper": {
    "@app": "<rootDir>/app.ts",
    "@components/(.*)": "<rootDir>/components/$1",
    "@services/(.*)": "<rootDir>/services/$1"
  },
  "setupFiles": [
    "./setup.ts"
  ]
}
