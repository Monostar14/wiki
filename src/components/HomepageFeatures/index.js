import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '更新迅速',
    Svg: require('@site/static/img/furnace.svg').default,
    description: (
      <>
        E......我猜你不会看这个..?
      </>
    ),
  },
  {
    title: '简单易懂',
    Svg: require('@site/static/img/grass.svg').default,
    description: (
      <>
        其实我也不知道这个是什么
      </>
    ),
  },
  {
    title: '超级省钱',
    Svg: require('@site/static/img/crafting-table.svg').default,
    description: (
      <>
        由 Vercel 提供计算服务，因为没钱所以用免费的
        这是实话
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
