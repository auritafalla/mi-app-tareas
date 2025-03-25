
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete }: { tasks: { id: number; title: string }[], onDelete: (id: number) => void }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TaskList;
