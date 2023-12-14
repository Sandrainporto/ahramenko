import Section from '../../shared/Layouts/Section/Section';
import MyButtonLink from '../../shared/ui/Button-Link/ButtonLink';
import styles from './Erros.module.scss';
const Error = () => {
  return (
    <Section classNames="error-page">
      <div className={`${styles.heading + ' ' + 'heading'}`}>
        Простите, такой страницы не существует...
      </div>
      <MyButtonLink path="/" text="Вернуться на главную"></MyButtonLink>
    </Section>
  );
};

export default Error;
