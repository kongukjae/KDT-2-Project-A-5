import React from "react";
import "@dotlottie/player-component";
import styles from "../../css/welcome.module.css";
import { Link } from "react-router-dom";

const explain =
  "마음에 드는 택시를 찾아 탑승하면 \n희망 매수가에 자동으로 매수합니다.";

export default function SecondAnimation() {
  return (
    <div className={styles.main}>
      <h1 className={styles.welcomeTitle}>스톡 투게더는...</h1>
      <div className={styles.welcomeContentsBox}>
        <dotlottie-player
          src="../../src/models/secondAnimation.lottie"
          autoplay
          style={{ width: "347px", height: "99px" }}
        />
      </div>
      <div className={styles.welcomeExplainText}>{explain}</div>
      <Link to="/welcome_3">
        <button className={styles.nextButton}>다음</button>
      </Link>
    </div>
  );
}
