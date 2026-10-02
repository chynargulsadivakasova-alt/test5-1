export default function InfoCard({ title, text }) {
  return (
    <div className="infoCard">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}