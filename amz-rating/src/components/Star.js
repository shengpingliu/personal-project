import "./Star.css";

const Star = ({ rating, starId, onMouseEnter, onMouseLeave, onClick }) => {
  let styleClass = "star-rating-blank";
  if (rating >= starId) {
    styleClass = "star-rating-fill";
  }
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className={styleClass}>
        <i className="star-icon"></i>
      </div>
    </div>
  );
};
export default Star;
