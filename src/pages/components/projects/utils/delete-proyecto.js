import handleDelete from '../dashboard'

export default async function deleteProyecto(req, res) {
  const { id } = req.query;

  try {
    await handleDelete(id);
    res.status(200).json({ message: 'Proyecto eliminado exitosamente' });
  } catch (error) {
    console.error('Error eliminando el proyecto:', error);
    res.status(500).json({ message: 'Error eliminando el proyecto' });
  }
}