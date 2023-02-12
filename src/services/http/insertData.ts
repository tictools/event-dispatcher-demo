interface InsertDataSettings {
  url: string;
  payload: {
    first_name: string;
    last_name: string;
    email: string;
  };
}
const insertData = async ({ url, payload }: InsertDataSettings) => {
  const insertDataOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application-json",
    },
    body: JSON.stringify(payload)
  };
  try {
    const insertRequest = await fetch(url, insertDataOptions);
    if (insertRequest.ok) {
      const response = await insertRequest.json()
      return response
    }
    else {
      throw new Error(insertRequest.statusText)
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default insertData;
