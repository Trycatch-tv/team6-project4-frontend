export default async function AssignProject(project) {
     
    const response = await fetch('https://team6.onrender.com/api/Proyectos_Asignacion/', {
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