export default function Sticky({ title, children }) {
  return (
    <div className={`animation-sticky relative`} id={title}>
      {children}
    </div>
  );
}
