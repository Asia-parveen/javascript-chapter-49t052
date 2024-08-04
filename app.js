// 1. Create a signup form and display form data in your web
// page on submission.

document.getElementById("form").addEventListener("submit", (event)=>{
    event.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

let formData = document.getElementById("formData");
formData.textContent = `Name: ${name } Email:${ email}`  
});

//  Q2- Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.
document.getElementById("readMoreBtn").addEventListener("click",function() {
    let moreText = document.querySelector('#more-text');
    moreText.style.display = "inline";
    this.style.display = "none";

});

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

const studentForm = document.getElementById('studentForm');
        const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
        const editForm = document.getElementById('editForm');
        const updateStudentForm = document.getElementById('updateStudentForm');

        studentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const grade = document.getElementById('grade').value;
            addStudentToTable(name, age, grade);
            studentForm.reset();
        });

        function addStudentToTable(name, age, grade) {
            const row = studentTable.insertRow();
            row.innerHTML = `
                <td>${name}</td>
                <td>${age}</td>
                <td>${grade}</td>
                <td>
                    <button onclick="editStudent(this)">Edit</button>
                    <button onclick="deleteStudent(this)">Delete</button>
                </td>
            `;
        }

        function deleteStudent(button) {
            const row = button.parentElement.parentElement;
            studentTable.deleteRow(row.rowIndex - 1);
        }

        function editStudent(button) {
            const row = button.parentElement.parentElement;
            document.getElementById('editIndex').value = row.rowIndex;
            document.getElementById('editName').value = row.cells[0].innerText;
            document.getElementById('editAge').value = row.cells[1].innerText;
            document.getElementById('editGrade').value = row.cells[2].innerText;
            editForm.style.display = 'block';
        }

        updateStudentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const index = document.getElementById('editIndex').value;
            const name = document.getElementById('editName').value;
            const age = document.getElementById('editAge').value;
            const grade = document.getElementById('editGrade').value;
            const row = studentTable.rows[index - 1];
            row.cells[0].innerText = name;
            row.cells[1].innerText = age;
            row.cells[2].innerText = grade;
            editForm.style.display = 'none';
        });


