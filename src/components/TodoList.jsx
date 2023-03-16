import { Draggable, Droppable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(dropableProvider) => (
                <div
                    ref={dropableProvider.innerRef}
                    {...dropableProvider.droppableProps}
                    className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4"
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            index={index}
                            draggableId={`${todo.id}`}
                        >
                            {(draggableProvider) => (
                                <TodoItem
                                    {...draggableProvider.draggableProps}
                                    ref={draggableProvider.innerRef}
                                    {...draggableProvider.dragHandleProps}
                                    todo={todo}
                                    removeTodo={removeTodo}
                                    updateTodo={updateTodo}
                                />
                            )}
                        </Draggable>
                    ))}
                    {dropableProvider.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TodoList;
