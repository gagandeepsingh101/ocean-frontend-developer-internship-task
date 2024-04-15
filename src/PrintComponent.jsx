const PrintComponent = ({ studentInfo }) => {
	// Function to get the current date and time
	const getFormattedDate = () => {
		const date = new Date();
		// Formatting date
		return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
	};

	// Get current date
	const offerDate = getFormattedDate();

	return (
		<>
			{/* Displaying reference based on the course */}
			<p>Ref : {studentInfo?.course === "BTech" ? "A101" : "B101"}</p>
			{/* Displaying student name */}
			<p>Name : {studentInfo?.name}</p>
			{/* Displaying course */}
			<p>Course : {studentInfo?.course}</p>
			{/* Displaying date of offer */}
			<p>Date of Offer : {offerDate}</p>
			{/* Displaying fee table */}
			<table>
				{/* Table header */}
				<tr>
					<th>Year</th>
					<th>One Time Fee</th>
					<th>Tuition Fee</th>
				</tr>
				{/* Table rows */}
				<tr>
					<td>1</td>
					{/* Displaying fees based on the course */}
					<td>{studentInfo?.course === "BTech" ? "500" : "600"}</td>
					<td>{studentInfo?.course === "BTech" ? "160" : "260"}</td>
				</tr>
				<tr>
					<td>2</td>
					<td>-</td>
					<td>{studentInfo?.course === "BTech" ? "160" : "260"}</td>
				</tr>
			</table>
		</>
	);
};

export default PrintComponent;
