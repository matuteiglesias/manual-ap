import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Páginas curatoriales',
    description:
      'Cada artefacto fuente se presenta con frontmatter, síntesis y cuerpo limpio para lectura operativa.',
  },
  {
    title: 'Trazabilidad preservada',
    description:
      'IDs, fecha de resumen y nivel de confianza se mantienen en metadatos, fuera de la superficie principal de lectura.',
  },
  {
    title: 'Navegación por secciones',
    description:
      'La documentación está ordenada por diagnóstico, carriles, gobernanza, comunicación, seguridad, onboarding y datos.',
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
