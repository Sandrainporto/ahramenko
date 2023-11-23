import './Section.scss';
type SectionProps = {
  classNames: string;
  children: JSX.Element[] | JSX.Element;
};

const Section = ({ classNames, children }: SectionProps) => {
  const classes = 'section ' + classNames;

  return (
    <section className={classes}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
