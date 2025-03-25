//una función que se ejecutará cuando el usuario haga clic en el botón "Eliminar". Esta función recibe como parámetro el `id (task.id)` de la tarea que se quiere eliminar.
function TaskItem({ task, onDelete }: { task: { id: number; title: string }, onDelete: (id: number) => void }) {
    return (
      <li>
        {task.title}
        <button onClick={() => onDelete(task.id)}>Eliminar</button>
      </li>
    );
  }
  
  export default TaskItem;
