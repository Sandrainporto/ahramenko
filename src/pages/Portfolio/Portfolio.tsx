import { MSection } from '../../shared/Layouts/Section/Section';
import Gallery from '../../widgets/Gallery/Gallery';
import styles from './Portfolio.module.scss';
import { PortfilioPagesInfo } from './PageData';
import { motion } from 'framer-motion';

const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom * 0.3 },
  }),
};

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
      viewport={{ amount: 0.2, once: true }}
    >
      <div className={styles.content}>
        <motion.h2 className="heading" custom={1} variants={textAnimation}>
          {pageData?.title}
        </motion.h2>
        <motion.div
          className={styles.description}
          custom={2}
          variants={textAnimation}
        >
          {pageData?.description}
        </motion.div>
        <Gallery images={pageData?.images} />
      </div>
    </MSection>
  );
};

export default Portfolio;
