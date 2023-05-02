
export default async function DeleteProyecto(id) {

    try {
      const response = await fetch(
        `https://team6.onrender.com/api/Proyectos/${id}`,
        {
          method: 'DELETE',
        }
      );
      
      

    } catch (error) {
      console.error('Error eliminando el recurso 222:', error);
    }
   
}