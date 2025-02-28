// styles.scss 파일을 임포트하여 스타일 시트를 적용합니다.
// 이 파일에는 프로젝트 전체의 SCSS/CSS 스타일이 포함되어 있습니다.
import "./styles.scss";

// parallax-js 라이브러리를 임포트합니다.
// 이 라이브러리는 마우스 움직임에 따른 패럴랙스 효과를 구현하는 데 사용됩니다.
import Parallax from "parallax-js";

// 별(stars)들을 생성하는 함수 generateStars를 임포트합니다.
// 이 함수는 별들을 화면에 랜덤하게 배치하고, 별들의 위치 배열을 반환합니다.
import { generateStars } from "../../../stars/stars";

// 별 중 하나에서 혜성 효과(cometa)를 생성하는 함수 generateCometaFromStar를 임포트합니다.
import { generateCometaFromStar } from "./cosmic/cosmic";

// HTML 문서 내에서 id가 "scene"인 요소를 선택합니다.
// 이 요소는 패럴랙스 효과가 적용될 주요 컨테이너입니다.
var scene = document.getElementById("scene");

// 선택한 scene 요소에 대해 새로운 Parallax 인스턴스를 생성하여 패럴랙스 효과를 적용합니다.
new Parallax(scene);

// generateStars 함수를 호출하여 별들을 생성하고, 반환된 별의 위치 배열을 저장합니다.
// 이 배열은 이후 혜성 효과를 적용할 별들의 좌표 정보로 사용됩니다.
var starsPosition = generateStars();

// 4번 반복하는 루프를 실행합니다.
// 각 반복에서 generateCometaFromStar 함수를 호출하여, 무작위 별에서 혜성 효과를 생성합니다.
for (let count = 0; count < 4; count++) {
  generateCometaFromStar(starsPosition);
}
