const studentForm = () => {

    document.getElementById('jumboInterior').innerHTML = `
        <form id="studentForm">
            <div class="form-row">
                <h1>Enter First Year's Name</h1>
            </div>
            <div class="form-inline">
            <div class="form-group">
                <label for="validationDefault01">Student: </label>
                <input type="text" class="form-control" id="validationDefault01" placeholder="student name" value="Lilly Potter" required>
                <button class="btn btn-primary" type="submit" id="sort">Sort!</button>
            </div>
            </div>
        
        </form>
    `;

}

const buttonClick = (e) => {
    const type = e.target.id;
    if (type === 'sortMe') {
        studentForm();
    } else if (type === "sort") {

    } else if (type === "expel") {
        
    }
}

document.getElementById('sortMe').addEventListener('click', buttonClick);