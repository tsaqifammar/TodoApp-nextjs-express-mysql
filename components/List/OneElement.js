import React from "react";

const OneElement = (props) => (
	<div>
		<input
			type="checkbox"
			checked={props.todo.is_done}
			onChange={(e) => props.toggleComplete(props.todo.id, e)}
		/>
		<p style={{ textDecoration: props.todo.is_done ? "line-through" : "" }}>
			{props.todo.task_name}
		</p>
	</div>
);

export default OneElement;
