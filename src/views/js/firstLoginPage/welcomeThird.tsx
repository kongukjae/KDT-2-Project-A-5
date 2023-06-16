import React from "react";
import "@dotlottie/player-component";
import styles from "../../css/welcome.module.css";
import { Link } from "react-router-dom";

const explain = "목표 금액에 도달했다면 \n자동으로 매도되어 거래가 종료됩니다.";

export default function ThirdAnimation() {
  return (
    <div className={styles.main}>
      <h1 className={styles.welcomeTitle}>스톡 투게더는...</h1>
      <div className={styles.welcomeContentsBox}>
        <dotlottie-player
          src="../../src/models/thirdAnimation.lottie"
          autoplay
          style={{ width: "347px", height: "99px" }}
        />
      </div>
      <div className={styles.welcomeExplainText}>{explain}</div>
      <Link to="/home">
        <button>확인했어요</button>
      </Link>
    </div>
  );
}
