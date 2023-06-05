import React, { useEffect, useState } from "react";
import Magic from "./contentsBoxLayout";
// 함수의 컴포넌트 타입을 명시하기 위해서이다.
// 프로퍼티의 키 값이 무엇이 들어 오든 다 받을수 있다.
interface MyComponentProps {
  [key: string]: string;
}

const MyComponent: React.FC<MyComponentProps> = (text) => {
  // const [showText, setShowText] = useState(true);
  //useState 함수의 제네릭 타입 매개변수로 JSX.Element[]를 지정하여 showLayout 상태의 타입을 JSX.Element 배열로 설정합니다.
  const [showLayout, setShowLayout] = useState<JSX.Element[]>([]);
  // const toggleText = () => {
  //   setShowText(!showText);
  // };

  // showLayout 상태에 원하는 태그를 추가하는 함수
  const addTagToLayout = (tag: JSX.Element) => {
    setShowLayout((prevLayout: JSX.Element[]) => [...prevLayout, tag]);
  };

  // 태그 추가 하는 곳
  useEffect(() => {
    addTagToLayout(<Magic />);
    addTagToLayout(<Magic />);
    addTagToLayout(<Magic />);
    addTagToLayout(<Magic />);
    addTagToLayout(<Magic />);
    addTagToLayout(<Magic />);
    addTagToLayout(<Magic />);
  }, []);
  return (
    <div className="contentsBoxLayout">
      <h2>{text.h2}</h2>
      <div className="contentsBoxScroll">
        <div className="contentsBoxes">{showLayout}</div>
      </div>
    </div>
  );
};


export default MyComponent;
