module.exports = {
  out: 'docs',
  exclude: ['**/node_modules/**', '**/*.(test|spec).ts', '**/__tests__/*', '**/*.json', '**/jest.config.(js|ts)'],
  entryPoints: ['./src'],
  entryPointStrategy: 'expand',
};
