export default async function BringStatus() {
    try {
      const res = await fetch('https://team6.onrender.com/api/Proyectos_Estado/');
      const data = await res.json();

      return data;
    } catch (error) {
      console.error(error);
      // handle the error here
    }
  }
    