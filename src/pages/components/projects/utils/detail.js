export default async function Details(id) {
    try {
      const res = await fetch(`https://team6.onrender.com/api/Proyectos/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      // handle the error here
    }
  }