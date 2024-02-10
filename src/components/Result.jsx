/* eslint-disable react/prop-types */
import CountUp from "react-countup";
import styles from "./Result.module.css";

function Result({ years, months, days }) {
  return (
    <div>
      <div className={styles.res}>
        <p>
          <span>{(years && <CountUp start={0} end={years} />) || "- -"}</span>{" "}
          years
        </p>
      </div>
      <div className={styles.res}>
        <p>
          <span>{(months && <CountUp start={0} end={months} />) || "- -"}</span>{" "}
          months
        </p>
      </div>
      <div className={styles.res}>
        <p>
          <span>{(days && <CountUp start={0} end={days} />) || "- -"}</span>{" "}
          days
        </p>
      </div>
    </div>
  );
}

export default Result;
