const { build } = require('esbuild');
const glob = require('glob');

const tsconfig = 'tsconfig-esbuild.json';

const watch = process.argv[2] === '--watch';

const entryPoints = process.argv[2] === '--bundle' ? ['src/index.ts'] : glob.sync('src/**/*.ts');

const bundle = process.argv[2] === '--bundle';

build({
  entryPoints,
  bundle,
  minify: true,
  sourcemap: true,
  outbase: 'src',
  outdir: 'dist',
  platform: 'node',
  external: [],
  watch,
  tsconfig,
  format: 'cjs',
});
