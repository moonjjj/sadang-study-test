import { Text } from "@olaf-design-ui/ui";
import HotelList from "@components/home/HotelList";
import { Suspense } from "react";
import ErrorBoundary from "@shared/components/ErrorBoundary";


function HomePage() {


  return (
    <>

        <HotelList/>

    <footer style={{height:300, backgroundColor:'#efefef'}}>footer</footer>
    </>
  );
}


export default HomePage;



// 관심사 분리 말씀하시는거 듣다가 궁금증이 생긴건데 - 사내 코딩 가이드이런거 있나요?

// promise, suspense 구현해보기

// 테스트 코드를 짜면? 관심사에 맞게 코드를 분리하는 능력이ㅇ 올라간다

// intersection observer / request animation frame - main에하기