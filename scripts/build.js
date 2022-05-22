const { build } = require('esbuild');

const tsconfig = 'tsconfig-esbuild.json';

let watch = false;
if (process.argv[2] === '--watch') {
  watch = true;
}
const entryPoints = ['src/index.ts'];

build({
  entryPoints,
  bundle: true,
  minify: true,
  sourcemap: true,
  outbase: 'src',
  outdir: 'dist',
  platform: 'node',
  external: [],
  watch,
  tsconfig,
});
