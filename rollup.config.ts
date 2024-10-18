import { RollupOptions } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import nodeResolve from '@rollup/plugin-node-resolve';
import { dts } from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import { createRequire } from 'module';

const pkg = createRequire(import.meta.url)('./package.json');
const isDts = process.env.BUILD === 'dts';
const sourceFile = 'src/index.ts';

const jsConfig: RollupOptions = {
    input: sourceFile,
    output: [
        {
            file: pkg.main,
            format: 'umd',
            name: 'Utils',
            plugins: !isDts ? [terser()] : []
        },
        {
            file: pkg.module,
            format: 'es'
        }
    ],
    plugins: [
        typescript(),
        nodeResolve(),
        replace({
            preventAssignment: true,
            __version__: pkg.version
        })
    ]
};

// Configuration for generating the type definitions
const dtsConfig: RollupOptions = {
    input: sourceFile,
    output: {
        file: pkg.types,
        format: 'es'
    },
    plugins: [
        dts(),
        del({ hook: 'buildEnd', targets: 'dist/dts' }) // Clean up the d.ts file afterwards
    ]
};

export default isDts ? dtsConfig : jsConfig;
