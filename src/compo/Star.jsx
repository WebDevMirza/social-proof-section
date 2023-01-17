import StarImg from "../assets/images/icon-star.svg";
const Star = (props) => {
  const number_of_star = getArray(props.sn);
  return (
    <>
      <>
        {number_of_star.map((i, v) => {
          return (
            <span key={i}>
              <img src={StarImg} alt="" role={"presentation"} />
            </span>
          );
        })}
      </>
    </>
  );
};

function getArray(val) {
  const myarray = [];
  for (let i = 0; i < val; i++) {
    myarray.push(i);
  }
  return myarray;
}

export default Star;
