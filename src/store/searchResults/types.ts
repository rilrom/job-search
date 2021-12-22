export type SearchResultsState = {
  results: Array<{
    title: string;
  }>;
  status: "idle" | "pending" | "succeeded" | "failed";
  isLoading: boolean;
  error: object | null;
};

export type SearchResultsRequest = {
  keyword: string;
};

export type SearchResultsResponse = {
  title: string;
};
