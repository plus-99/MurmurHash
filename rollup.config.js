import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.umd.js',
    format: 'umd',
    name: 'MurmurHash',
    exports: 'named'
  },
  plugins: [
    typescript({
      target: 'ES2020',
      module: 'ES2020',
      declaration: false,
      declarationMap: false,
      outDir: 'dist/umd'
    })
  ]
};