export const Section = ({
  title = 'default section title',
  children = 'section',
}) => {
  return (
    <div className="container">
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    </div>
  );
};
