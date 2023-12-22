import { MSection } from '../../shared/Layouts/Section/Section';
import styles from './Conditions.module.scss';
import { motion } from 'framer-motion';
import { textAnimationUpDown } from '../../shared/Animations/animations';

const Conditions = () => {
  const conditionList: string[] = [
    'Фотографии не ретушируются. Проводится только цветокоррекция.',
    'Готовность фото - 3 недели. По необходимости можно быстрее.',
    'Отбор фотографий провожу самостоятельно. Исходники не высылаю.',
    ' Возможна цветокоррекция в черно-белых тонах.',
    'Возможна фотосессия за пределами города, с условием, что Вы сможете довезти и увезти меня, если общественный транспорт туда не ходит.',
    'Съемка проходит в стиле "лайвстайл". Запечатлю Ваши эмоции и жизнь такую, какая она есть.',
    'Возможно проведение конфиденциальной съемки.',
  ];

  return (
    <MSection
      classNames="about-conditions"
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="conditions">
        <motion.h2
          custom={1}
          variants={textAnimationUpDown}
          className="heading"
        >
          Условия фотосъемки
        </motion.h2>
        <div className={styles.condition_list}>
          <ul className="list">
            {conditionList.map((condition, index) => (
              <li key={index} className={styles.condition}>
                {condition}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MSection>
  );
};

export default Conditions;
