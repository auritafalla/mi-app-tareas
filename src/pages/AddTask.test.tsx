import { render, screen, fireEvent } from "@testing-library/react";
import AddTask from "./AddTask";
import { useTaskContext } from "../context/TaskContext";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

// Mock del hook useTaskContext
jest.mock("../context/TaskContext", () => ({
  useTaskContext: jest.fn(),
}));

test('should render the AddTask form', () => {
  // Mock función addTask
  (useTaskContext as jest.Mock).mockReturnValue({
    addTask: jest.fn(),
  });

  render(
    <MemoryRouter>
      <AddTask />
    </MemoryRouter>
  );

  
  expect(screen.getByPlaceholderText("Nueva tarea")).toBeInTheDocument();
  expect(screen.getByText("Agregar")).toBeInTheDocument();
});

test('should update input value when typing', () => {
  (useTaskContext as jest.Mock).mockReturnValue({
    addTask: jest.fn(),
  });

  render(
    <MemoryRouter>
      <AddTask />
    </MemoryRouter>
  );

  const input = screen.getByPlaceholderText("Nueva tarea");

  
  fireEvent.change(input, { target: { value: 'Nueva tarea' } });

  
  expect(input).toHaveValue('Nueva tarea');
});
