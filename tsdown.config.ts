import { defineConfig, type UserConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'lib',
  format: 'esm',
  dts: true,
  clean: true,
  fixedExtension: false,
}) as UserConfig
