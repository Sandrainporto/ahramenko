import Section from '../../shared/Layouts/Section/Section';
import styles from './Conditions.module.scss';

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
    <Section classNames="about-conditions">
      <div className="conditions">
        <h2 className="heading">Условия фотосъемки</h2>
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
    </Section>
  );
};

export default Conditions;
