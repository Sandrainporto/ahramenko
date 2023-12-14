import Section from '../../shared/Layouts/Section/Section';
import Gallery from '../../widgets/Gallery/Gallery';
import styles from './Portfolio.module.scss';
import { PortfilioPagesInfo } from './PageData';

const Portfolio = () => {
  const pageUrl = window.location.pathname.split('/');
  const pageName = pageUrl[pageUrl.length - 1];
  const pageData = PortfilioPagesInfo.find((item) => item.page == pageName)
    ?.data;

  return (
    <Section classNames="portfolio">
      <div className={styles.content}>
        <h2 className="heading">{pageData?.title}</h2>
        <div className={styles.description}>{pageData?.description}</div>
        <Gallery images={pageData?.images} />
      </div>
    </Section>
  );
};

export default Portfolio;
