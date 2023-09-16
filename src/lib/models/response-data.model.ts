export interface ResponseData<T> {
  success: boolean;
  data: T;
}

export interface ApiError {
  status: number;
  message: string;
}
