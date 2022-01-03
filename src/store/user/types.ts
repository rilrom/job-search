export type UserState = {
  email: string;
  status: "idle" | "pending" | "succeeded" | "failed";
  error: object | null;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  email: string;
};
