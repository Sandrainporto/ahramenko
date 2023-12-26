import { MSection } from '../../shared/Layouts/Section/Section';
import Gallery from '../../widgets/Gallery/Gallery';
import styles from './Portfolio.module.scss';
import { PortfilioPagesInfo } from './PageData';
import { motion } from 'framer-motion';
import { textAnimationUpDown } from '../../shared/Animations/animations';

const Portfolio = () => {
  const pageUrl = window.location.pathname.split('/');
  const pageName = pageUrl[pageUrl.length - 1];
  const pageData = PortfilioPagesInfo.find((item) => item.page == pageName)
    ?.data;

  return (
    <MSection
      classNames="portfolio"
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true }}
    >
      <div className={styles.content}>
        <motion.h2
          className="heading"
          custom={1}
          variants={textAnimationUpDown}
        >
          {pageData?.title}
        </motion.h2>
        <motion.div
          className={styles.description}
          custom={2}
          variants={textAnimationUpDown}
        >
          {pageData?.description}
        </motion.div>
        <Gallery images={pageData?.images} />
      </div>
    </MSection>
  );
};

export default Portfolio;
