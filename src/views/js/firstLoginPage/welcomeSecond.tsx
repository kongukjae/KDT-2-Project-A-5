import React from "react";
import "@dotlottie/player-component";
import styles from "../../css/welcome.module.css";
import { Link } from "react-router-dom";

export default function SecondAnimation() {
  return (
    <div className={styles.main}>
      <h1>스톡 투게더는...</h1>
      <dotlottie-player
        src="../../src/models/secondAnimation.lottie"
        autoplay
        style={{ width: "347px", height: "99px" }}
      />
      <p>마음에 드는 택시를 찾아 탑승하면</p>
      <p>희망 매수가에 도달했을 시 자동으로 매수합니다.</p>
      <Link to="/welcome_3">
        <button>다음</button>
      </Link>
    </div>
  );
}
