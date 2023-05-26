export type ServiceResponseError = {
  status: 'INVALID_DATA' | 'UNAUTHORIZED', 
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESS', 
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;