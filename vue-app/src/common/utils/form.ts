export function objectToFormData(obj: { [key: string]: any }) {
  const formData = new FormData();
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let value = obj[key];
      if (typeof value === "object") {
        value = JSON.stringify(value);
      }
      formData.append(key, value);
    }
  }
  return formData;
}
