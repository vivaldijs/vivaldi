import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

const outputConfigs = [
    {
        file: path.resolve('lib/vivaldi.cjs.js'),
        format: 'cjs',
    },
    {
        file: path.resolve('lib/vivaldi.global.js'),
        format: 'iife',
    },
    {
        file: path.resolve('lib/vivaldi.esm.js'),
        format: 'esm',
    },
];

export default {
    input: ['src/index.ts'],
    output: outputConfigs,
    plugins: [
        typescript({
            tsconfig: path.resolve(__dirname, './tsconfig.json'),
            useTsconfigDeclarationDir: true,
        }),
        resolve({
            mainFields: ['jsnext', 'main', 'browser'],
        }),
        commonjs(),
        terser(),
    ],
};