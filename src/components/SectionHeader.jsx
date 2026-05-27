export default function SectionHeader({ num, title }) {
  return (
    <div className="section-header">
      <span className="section-header__num mono">// {num}</span>
      <span className="section-header__title mono">{title}</span>
      <div className="section-header__line" />
    </div>
  );
}