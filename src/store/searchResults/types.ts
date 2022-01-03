export type SearchResultsState = {
  payload: SearchResultsResponse | null;
  status: "idle" | "pending" | "succeeded" | "failed";
  isLoading: boolean;
  error: object | null;
};

export type SearchResultsRequest = {
  keyword: string;
};

export type SearchResultsResponse<T extends TypeWithID = any> = {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
};

type TypeWithID = {
  id: string | number;
}