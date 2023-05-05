export default async function BringUsers() {
    try {
      const res = await fetch('https://team6.onrender.com/api/Usuarios/');
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      // handle the error here
    }
  }
    