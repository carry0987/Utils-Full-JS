import Heading from '@theme/Heading';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Single Surface, Familiar API',
        description: (
            <>
                Reach object helpers, fetch wrappers, DOM tools, storage helpers, and event utilities from the same
                default export.
            </>
        ),
    },
    {
        title: 'Extend Instances When Needed',
        description: (
            <>
                Create <code>new Utils(extension)</code> when you want project-specific helpers, while keeping the upstream static
                methods on <code>Utils</code> itself.
            </>
        ),
    },
    {
        title: 'Made for Browser Delivery',
        description: (
            <>
                Use the npm package in ESM builds or load the minified UMD bundle directly when you want a global
                <code>window.Utils</code> style workflow.
            </>
        ),
    },
];

function Feature({ title, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className={styles.sectionHeading}>
                    <Heading as="h2">What Utils-Full-JS gives you</Heading>
                    <p>
                        This package wraps the full browser-ready utility layer and keeps the integration model simple.
                    </p>
                </div>
                <div className="row">
                    {FeatureList.map((props) => (
                        <Feature key={props.title} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
