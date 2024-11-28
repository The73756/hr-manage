import { apiUrl } from ".";

export const getEmployees = async () => {
  try {
    if (apiUrl) {
      const res = await fetch(apiUrl + "/users", {
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: false,
          tags: ["employee"],
        },
      });
      if (!res.ok) {
        throw new Error("Failed get employees");
      }
      return res.json();
    }
  } catch (error) {
    console.error(error);
  }
};
