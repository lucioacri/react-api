export default function Card({
  image,
  name,
  birthYear,
  nationality,
  biography,
  awards,
}) {
  return (
    <div className="col-4">
      <div className="card h-100">
        <img src={image} alt={name} className="card-img-top" />

        <div className="card-body">
          <div className="card-title">{name}</div>
          <div className="card-subtitle mb-2 text-body-secondary">
            {birthYear}
          </div>
          <div className="card-text">Nationality: {nationality}</div>
          <div className="card-text">Biography: {biography}</div>
          <div className="card-text">Awards: {awards}</div>
        </div>
      </div>
    </div>
  );
}
