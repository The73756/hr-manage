import { apiUrl } from ".";

interface loginProps {
  email: string;
  password: string;
}

export async function login({ email, password }: loginProps) {
  console.log(apiUrl);

  try {
    if (apiUrl) {
      const res = await fetch(apiUrl + "/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: false,
          tags: ["user"],
        },
      });
      if (!res.ok) {
        throw new Error("Failed login");
      }
      return res.json();
    }
  } catch (error) {
    console.error(error);
  }
}
