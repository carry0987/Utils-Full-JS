import { Highlight, themes } from 'prism-react-renderer';
import type { ReactNode } from 'react';

import styles from './styles.module.css';

const code = `import Utils from '@carry0987/utils-full';

const helper = new Utils({
    label(value) {
        return \`Request: \${value}\`;
    },
});

const requestId = Utils.generateUUID();
const payload = Utils.deepMerge(
    { published: false, meta: { source: 'docs' } },
    { published: true, requestId }
);

Utils.setLocalValue('latest-request', payload);
console.log(helper.label(requestId));`;

export default function HeroCodeBlock(): ReactNode {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.filename}>utils-full-example.ts</span>
            </div>
            <Highlight code={code} language="ts" theme={themes.vsDark}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => {
                    const lineCounts = new Map<string, number>();

                    return (
                        <pre className={`${className} ${styles.pre}`} style={style}>
                            {tokens.map((line, index) => {
                                const lineSignature = line
                                    .map((token) => `${token.types.join('.')}:${token.content}`)
                                    .join('|');
                                const lineOccurrence = (lineCounts.get(lineSignature) ?? 0) + 1;
                                lineCounts.set(lineSignature, lineOccurrence);

                                const lineKey = `${lineSignature}:${lineOccurrence}`;
                                const lineProps = getLineProps({ line });
                                const tokenCounts = new Map<string, number>();

                                return (
                                    <div
                                        key={lineKey}
                                        {...lineProps}
                                        className={`${lineProps.className} ${styles.line}`}>
                                        <span className={styles.lineNumber}>{index + 1}</span>
                                        <span className={styles.lineContent}>
                                            {line.map((token) => {
                                                const tokenSignature = `${token.types.join('.')}:${token.content}`;
                                                const tokenOccurrence = (tokenCounts.get(tokenSignature) ?? 0) + 1;
                                                tokenCounts.set(tokenSignature, tokenOccurrence);

                                                return (
                                                    <span
                                                        key={`${tokenSignature}:${tokenOccurrence}`}
                                                        {...getTokenProps({ token })}
                                                    />
                                                );
                                            })}
                                        </span>
                                    </div>
                                );
                            })}
                        </pre>
                    );
                }}
            </Highlight>
        </div>
    );
}
