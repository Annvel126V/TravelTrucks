const Icon = ({ id, w, h, className = "" }) => {
  return (
    <svg className={className} width={w} height={h} aria-hidden="true">
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
};
export default Icon;
