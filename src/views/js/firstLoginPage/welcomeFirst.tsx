import React from "react";
import "@dotlottie/player-component";
import styles from "../../css/welcome.module.css";
import { Link } from "react-router-dom";

export default function FirstAnimation() {
  return (
    <div className={styles.main}>
      <h1>스톡 투게더는...</h1>
      <dotlottie-player
        src="../../src/models/firstAnimation.lottie"
        autoplay
        style={{ width: "347px", height: "99px" }}
      />
      <p>주식을 다른 사람들과</p>
      <p>같이 구매할 수 있는 서비스에요.</p>
      <Link to="/welcome_2">
        <button>다음</button>
      </Link>
    </div>
  );
}
