import React from "react";

const OneElement = (props) => (
	<div>
		<label
			style={{
				textDecoration: props.todo.is_done ? "line-through" : "",
			}}
		>
			<input
				type="checkbox"
				checked={props.todo.is_done}
				onChange={(e) => props.toggleComplete(props.todo.id, e)}
				style={{ width: "25px", height: "25px" }}
			/>
			{props.todo.task_name}
		</label>
	</div>
);

export default OneElement;
