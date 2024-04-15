import React, { useState, useCallback } from "react";
import PrintComponent from "./PrintComponent";

function App() {
	// State for student information and submitted information
	const [studentInfo, setStudentInfo] = useState({
		name: "",
		course: "BTech", // Default course is BTech
	});
	const [submittedInfo, setSubmittedInfo] = useState({
		name: "",
		course: "BTech", // Default course is BTech
	});

	// Function to update student details
	const setStudentDetail = useCallback((value, valueType) => {
		setStudentInfo((prev) => ({
			...prev,
			[valueType]: value,
		}));
	}, []);

	// Function to handle form submission
	const handleSubmit = useCallback(
		(e) => {
			e.preventDefault(); // Prevent default form submission behavior
			setSubmittedInfo(studentInfo); // Update submitted info with current student info
		},
		[studentInfo] // Dependency: studentInfo
	);

	// Function to handle printing
	const handlePrint = useCallback(() => {
		window.print(); // Print the window
	}, []);

	return (
		<>
			{/* Form section is not visible in client */}
			<div id="client-visible">
				<form action="" onSubmit={handleSubmit}>
					<label htmlFor="name">Name</label>
					<input
						value={studentInfo.name}
						type="text"
						name="name"
						id="name"
						onChange={(e) => setStudentDetail(e.target.value, "name")}
					/>
					<label htmlFor="course">Course</label>
					<select
						value={studentInfo.course}
						name="course"
						id="course"
						onChange={(e) => setStudentDetail(e.target.value, "course")}>
						<option value="BTech">BTech</option>
						<option value="MTech">MTech</option>
					</select>
					<div className="btn-group">
						<button type="submit">Submit</button>
						<button
							disabled={submittedInfo?.name === ""}
							type="button"
							onClick={handlePrint}>
							Generate Pdf
						</button>
					</div>
				</form>
			</div>
			{/* Print area */}
			<div className="printArea">
				{/* Render PrintComponent if submittedInfo.name is not empty */}
				{submittedInfo?.name !== "" && (
					<PrintComponent studentInfo={submittedInfo} />
				)}
			</div>
		</>
	);
}

export default App;
