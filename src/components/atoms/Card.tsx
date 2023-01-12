interface ICardProps {
  title: string;
  description: string;
}
export const Card: React.FunctionComponent<ICardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};
