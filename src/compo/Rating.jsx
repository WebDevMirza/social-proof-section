import Star from "./Star";
import "./Rating.css";

const Rating = () => {
  return (
    <>
      <main>
        <div className="rating-body">
          <h1>10,000+ of our users love our products.</h1>
          <p>
            We only provide great products combined with excellent customer service. See what our satisfied customers
            are saying about our services.
          </p>
        </div>
        <div className="rating-stars">
          <div>
            <Star sn={5} /> <span className="rate"> Rated {5} Stars in Reviews</span>
          </div>
          <div>
            <Star sn={5} /> <span className="rate"> Rated {5} Stars in Report Guru</span>
          </div>
          <div>
            <Star sn={5} /> <span className="rate"> Rated {5} Stars in BestTech</span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Rating;
