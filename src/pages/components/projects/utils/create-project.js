export default async function CreateProject(project) {
  console.log(project)
     
      const response = await fetch('https://team6.onrender.com/api/Proyectos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
      });
    
      if (response.ok) {
        console.log('Data sent successfully!');
      } else {
        console.error('Error sending data.');
      }
    }
   

