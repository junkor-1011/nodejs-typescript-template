const { pathsToModuleNameMapper } = require('ts-jest');

const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  'roots': [
    '<rootDir>/src/',
  ],
  transform: {
    '^.+\\.ts?$': [
      'esbuild-jest',
      {
        sourcemap: true,
      },
    ],
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testMatch: [
    '**/?(*.)+(spec|test).+(ts)',
    '**/__tests__/**/*.+(ts)',
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
};
