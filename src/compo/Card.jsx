const Card = (props) => {
  return (
    <>
      <div className="review-card">
        <div className="review-card__profile">
          <div className="profile-img">
            <img src={props.mydata?.img} width={60} height={60} alt={props.mydata?.name + "'s image"} />
          </div>
          <div className="profile-name">
            <h5>{props.mydata?.name}</h5>
            <p>{props.mydata?.info}</p>
          </div>
        </div>
        <div className="review-card__text">
          <p>" {props.mydata?.review} "</p>
        </div>
      </div>
    </>
  );
};

export default Card;
