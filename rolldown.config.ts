import { createRequire } from 'node:module';
import { basename, dirname } from 'node:path';
import { defineConfig, type RolldownOptions } from 'rolldown';
import { replacePlugin } from 'rolldown/plugins';
import { dts } from 'rolldown-plugin-dts';

const pkg = createRequire(import.meta.url)('./package.json');
const sourceFile = 'src/index.ts';
const tsconfig = './tsconfig.json';
const umdFile = pkg.main;
const esmFile = pkg.module;
const dtsFile = pkg.types;

const basePlugins = [
    replacePlugin(
        {
            __version__: pkg.version
        },
        {
            preventAssignment: true
        }
    )
];

const dtsConfig: RolldownOptions = {
    input: sourceFile,
    tsconfig,
    output: {
        codeSplitting: false,
        dir: dirname(dtsFile),
        format: 'es' as const
    },
    plugins: [dts({ emitDtsOnly: true })]
};

const jsConfigs: RolldownOptions[] = [
    {
        input: sourceFile,
        tsconfig,
        output: {
            codeSplitting: false,
            dir: dirname(umdFile),
            entryFileNames: basename(umdFile),
            format: 'umd' as const,
            name: 'Utils',
            minify: true
        },
        plugins: basePlugins
    },
    {
        input: sourceFile,
        tsconfig,
        output: {
            codeSplitting: false,
            dir: dirname(esmFile),
            entryFileNames: basename(esmFile),
            format: 'es' as const
        },
        plugins: basePlugins
    }
];

export default defineConfig([...jsConfigs, dtsConfig]);
