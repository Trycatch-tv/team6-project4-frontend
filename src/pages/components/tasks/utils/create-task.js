export default async function CreateTask(task) {
    console.log(task)
       
        const response = await fetch('https://team6.onrender.com/api/Tarea/', {
          method: 'POST',
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
     