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
        {data.map((index, aData)=><Card key={index} mydata={aData} />)
        }
      </section>
    </>
  );
};

export default Review;
