export default async function CreateUser(user) {
        const response = await fetch('https://team6.onrender.com/api/Usuarios/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        });
      
        if (response.ok) {
          console.log('Data sent successfully!');
        } else {
          console.error('Error sending data.');
        }
      }
     