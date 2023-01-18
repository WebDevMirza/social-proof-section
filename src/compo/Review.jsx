import { useEffect, useState } from "react";
import Card from "./Card";
import ReviewData from "../ReviewData.json";
import "./Review.css";

const Review = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(ReviewData);
  }, []);

  return (
    <>
      <section className="review">
        {
          data.map((aData, index) => (
            <Card key={index} mydata={aData} />
          ))
          // <>
          //   <Card mydata={data[0]} />
          //   <Card mydata={data[1]} />
          //   <Card mydata={data[2]} />
          // </>
        }
      </section>
    </>
  );
};

export default Review;
