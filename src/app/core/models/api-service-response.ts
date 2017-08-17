export class ApiServiceResponse<T> {
  public statusCode: number;
  public errorMessage: string;
  public content: T;
}
