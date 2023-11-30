import Icons from '../../entities/Socials/Icons';
import Section from '../../shared/Layouts/Section/Section';
import Gallery from '../../widgets/Gallery/Gallery';
import styles from './Portfolio.module.scss';
import { PortfilioPagesInfo } from './PageData';

const Portfolio = () => {
  const pageUrl = window.location.pathname.split('/');
  const pageName = pageUrl[pageUrl.length - 1];
  const pageData = PortfilioPagesInfo.find(
    (item) => item.page == pageName[pageName.length - 1]
  )?.data;

  return (
    <main className="main">
      <Section classNames="portfolio">
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.title}>{pageData?.title}</h2>
            <div className={styles.description}>{pageData?.description}</div>
          </div>

          <Gallery images={pageData?.images} />

          <div className={styles.contacts}>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing.</h4>
            <div className={styles.socials}>
              <Icons textType={true} />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Portfolio;
