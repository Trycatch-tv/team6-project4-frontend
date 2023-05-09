
export default async function DeleteTarea(id) {

    try {
      const response = await fetch(
        `https://team6.onrender.com/api/Tarea/${id}`,
        {
          method: 'DELETE',
        }
      );
      
      

    } catch (error) {
      console.error('Error eliminando el recurso 222:', error);
    }
   
}