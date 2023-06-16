import React from "react";
import "@dotlottie/player-component";
import styles from "../../css/welcome.module.css";
import { Link } from "react-router-dom";

export default function ThirdAnimation() {
  return (
    <div className={styles.main}>
      <h1>스톡 투게더는...</h1>
      <div className={styles.welcomeContentsBox}>
        <dotlottie-player
          src="../../src/models/thirdAnimation.lottie"
          autoplay
          style={{ width: "347px", height: "99px" }}
        />
      </div>
      <p>목표 금액에 도달했다면</p>
      <p>자동으로 매도되어 거래가 종료됩니다.</p>
      <Link to="/home">
        <button>확인했어요</button>
      </Link>
    </div>
  );
}
