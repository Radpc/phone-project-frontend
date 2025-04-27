export type SuccessResponse<T> = {
  data: T;
  message: string;
};

export type SuccessPaginatedResponse<T> = SuccessResponse<{
  items: T[];
  total: number;
}>;
