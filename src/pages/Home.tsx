import { Text } from "@olaf-design-ui/ui";
import useHotels from "../hooks/useHotels";
import ErrorBoundary from "@shared/components/ErrorBoundary";

function HomePage() {
  const { data } = useHotels({
    onSuccess: () => {
      console.log("request log...");
    },
  });

  console.log("data ", data);

  return (
    <div>
      <ErrorBoundary fallback={() => <Text>A 에러 발생</Text>}>
        <A />
      </ErrorBoundary>
      <ErrorBoundary fallback={() => <Text>B 에러 발생</Text>}>
        <B />
      </ErrorBoundary>
      <ErrorBoundary fallback={() => <Text>C 에러 발생</Text>}>
        <C />
      </ErrorBoundary>
    </div>
  );
}

function A() {
  return <Text>A</Text>;
}

function B() {
  throw new Error("B error");
  return <Text>B</Text>;
}

function C() {
  return <Text>C</Text>;
}

export default HomePage;
