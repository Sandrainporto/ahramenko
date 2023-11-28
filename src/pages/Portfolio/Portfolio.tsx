import Icons from '../../entities/Socials/Icons';
import Section from '../../shared/Layouts/Section/Section';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <main className="main">
      <Section classNames="portfolio">
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.title}>
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <div className={styles.description}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              totam repellat ab at aliquam reiciendis voluptas distinctio
              placeat accusantium odit. Delectus, similique ratione. Consectetur
              dolores quaerat, velit cupiditate doloribus est similique adipisci
              a numquam soluta! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Culpa autem asperiores optio deserunt magnam
              deleniti nulla excepturi commodi ut! Dignissimos.
            </div>
          </div>
          <div className={styles.gallery}>
            <div className={styles.item + ' ' + styles.item_big}>
              <img
                src="https://media.istockphoto.com/id/1062947134/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B1%D0%BE%D1%80-%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D1%8F-%D0%B1%D0%BB%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B8-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B5-%D0%BB%D1%83%D1%87%D0%B8-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=rSRPoCl78qvsYxaRhOa0xS_z10jDDnJvhteWLM5w8yo="
                alt=""
              />
            </div>
            <div className={styles.item}>
              <img src="src\assets\tiles\colored.jpg" alt="" />
            </div>
            <div className={styles.item}>
              <img src="src\assets\tiles\colored.jpg" alt="" />
            </div>
            <div className={styles.item}>
              <img src="src\assets\tiles\colored.jpg" alt="" />
            </div>
            <div className={styles.item + ' ' + styles.item_big}>
              <img
                src="https://i.pinimg.com/736x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg"
                alt=""
              />
            </div>
            <div className={styles.item}>
              <img src="src\assets\tiles\colored.jpg" alt="" />
            </div>
            <div className={styles.item + ' ' + styles.item_big}>
              <img
                src="https://i.pinimg.com/736x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg"
                alt=""
              />
            </div>
            <div className={styles.item}>
              <img src="src\assets\tiles\colored.jpg" alt="" />
            </div>
            <div className={styles.item + ' ' + styles.item_big}>
              <img
                src="https://i.pinimg.com/736x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg"
                alt=""
              />
            </div>
            <div className={styles.item}>
              <img
                src="https://i.pinimg.com/736x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg"
                alt=""
              />
            </div>
            <div className={styles.item + ' ' + styles.item_big}>
              <img
                src="https://media.istockphoto.com/id/1062947134/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B1%D0%BE%D1%80-%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D1%8F-%D0%B1%D0%BB%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B8-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B5-%D0%BB%D1%83%D1%87%D0%B8-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=rSRPoCl78qvsYxaRhOa0xS_z10jDDnJvhteWLM5w8yo="
                alt=""
              />
            </div>
            <div className={styles.item}>
              <img src="src\assets\tiles\colored.jpg" alt="" />
            </div>
            <div className={styles.item}>
              <img src="src\assets\tiles\colored.jpg" alt="" />
            </div>{' '}
            <div className={styles.item}>
              <img src="src\assets\tiles\colored.jpg" alt="" />
            </div>{' '}
            <div className={styles.item}>
              <img src="src\assets\tiles\colored.jpg" alt="" />
            </div>
          </div>
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
