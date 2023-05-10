export default async function UpdateTask(id, task) {

   
      const response = await fetch(`https://team6.onrender.com/api/Tarea/${id}`,  {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      });
    
      if (response.ok) {
        console.log('Data sent successfully!');
      } else {
        console.error('Error sending data.');
      }
    }