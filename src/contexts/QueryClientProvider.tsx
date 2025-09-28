"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { isDev } from "@utils/env";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ms from "ms";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: ms("3s"),
    },
  },
});

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {isDev === true ? <ReactQueryDevtools /> : null}
    </QueryClientProvider>
  );
}

export default Provider;
