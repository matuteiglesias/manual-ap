import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Manual de práctica',
    description:
      'Cada página está escrita como documento interno: propósito, criterios y uso organizativo.',
  },
  {
    title: 'Memoria institucional',
    description:
      'Las memorias por período y las lecciones permiten estudiar decisiones sin perder continuidad política.',
  },
  {
    title: 'Navegación por secciones',
    description:
      'La documentación está ordenada en manual operativo, memorias del chat, lecciones, referencia y anexos.',
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
