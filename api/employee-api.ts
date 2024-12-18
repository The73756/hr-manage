import {apiUrl} from ".";

export const getEmployees = async () => {
  try {
    if (apiUrl) {
      const res = await fetch(apiUrl + "/users", {
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 0,
          tags: ["employee"],
        },
      });

      if (!res.ok) {
        console.log("Failed to get employees");
        return;
      }

      const employees = await res.json();

      const scheduleRes = await fetch(apiUrl + "/schedule", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!scheduleRes.ok) {
        console.log("Failed to get schedules");
        return;
      }

      const schedules = await scheduleRes.json();

      return {employees, schedules};
    }
  } catch (error) {
    console.error(error);
  }
};

export const createEmployee = async (
  surname: string,
  name: string,
  patronymic: string,
  phone: string,
  email: string,
  password: string,
  salaryRate: number,
  workStart: string,
  workEnd: string,
) => {
  try {
    if (apiUrl) {
      const res = await fetch(apiUrl + "/users", {
        method: "POST",
        body: JSON.stringify({
          surname,
          name,
          patronymic,
          phone,
          email,
          password,
          salaryRate
        }),
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 0,
          tags: ["employee"],
        },
      });

      if (!res.ok) {
        console.log("Failed to create employee");
        return;
      }

      const newUser = await res.json();

      const scheduleRes = await fetch(apiUrl + "/schedule", {
        method: "POST",
        body: JSON.stringify({
          userId: newUser.id,
          startWork: workStart,
          endWork: workEnd
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!scheduleRes.ok) {
        console.log("Failed to create schedule");
      }

      return {newEmployee: newUser, schedule: await scheduleRes.json()};
    }
  } catch (error) {
    console.error(error);
  }
};