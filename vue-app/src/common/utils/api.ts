import { objectToFormData } from "./form";

export async function jsonFetch(url: RequestInfo, method: "GET" | "POST" = "POST", body: {} = {}): Promise<any> {
  const fetchParams = {
    method,
    body: objectToFormData(body),
  };

  const response = await fetch(url, fetchParams);
  const data = await response.json();
  if (response.ok) {
    return data;
  }

  return {};
}
