import React from "react";
import loginStyle from "../../src/views/css/login.module.css";
import titleStyle from "../../src/views/css/stockTogetherTitle.module.css";

export default function stockTogetherTitle() {
  return (
    <div className={titleStyle.stockTogetherContentsBox}>
      <div className={titleStyle.stockTogether}>
        <div className={titleStyle.stockTogetherSubTitle}>
          함께 투자하는 즐거움
        </div>
        <div className={titleStyle.stockTogetherMainTitle}>stock together</div>
      </div>
    </div>
  );
}
