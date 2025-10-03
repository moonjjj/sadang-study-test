// high order component란? - 만약 요구사항이 페이지에 진입할 때마다 로그를 찍어주세요.
// 공통된 로직을 상위로 올린다. 함수형 프로그래밍의 하이오더 펑션이라는 개념이 있다.
// 테스트 케이스를 짜다보면, 아마 알거다!
import { type ComponentProps, type ComponentType, Suspense } from "react";
import ErrorBoundary from "@shared/components/ErrorBoundary";

type ErrorBoundaryProps = ComponentProps<typeof ErrorBoundary>;

type SuspenseProps = ComponentProps<typeof Suspense>;

type AsyncBoundaryProps = {
  rejectedFallback: ErrorBoundaryProps["fallback"];
  pendingFallback: SuspenseProps["fallback"];
};

function withAsyncBoundary<Props = Record<string, never>>(
  WrappedComponent: ComponentType<Props>,
  { rejectedFallback, pendingFallback }: AsyncBoundaryProps
) {
  return (props: Props) => {
    return (
      <ErrorBoundary fallback={rejectedFallback}>
        <Suspense fallback={pendingFallback}>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <WrappedComponent {...(props as any)} />
        </Suspense>
      </ErrorBoundary>
    );
  };
}

export default withAsyncBoundary;