export const Section = ({
  title = 'default section title',
  children = 'section',
  className,
}) => {
  return (
    <section className={className}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
