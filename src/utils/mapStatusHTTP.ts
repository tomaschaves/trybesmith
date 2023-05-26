export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    SUCCESS: 200,
  };
  return statusHTTPMap[status] ?? 500;
}