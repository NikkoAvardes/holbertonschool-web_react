interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Gosha",
	lastName: "Cuzenco",
	age: 35,
	location: "Moscow"
};
const student2: Student = {
	firstName: "Kokolino",
	lastName: "Jackershvili",
	age: 18,
	location: "Japon"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student) => {
	const row = table.insertRow();
	const cell1 = row.insertCell();
	cell1.innerHTML = student.firstName;
	const cell2 = row.insertCell();
	cell2.innerHTML = student.location;
});

document.body.appendChild(table);

console.log(table)