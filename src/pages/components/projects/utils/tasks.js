export default async function BringTasks() {
    try {
      const res = await fetch('https://team6.onrender.com/api/Tarea/');
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      // handle the error here
    }
  }
    