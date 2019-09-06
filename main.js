const studentArray = [];
const studentForm = () => {

    document.getElementById('jumboInterior').innerHTML = `
        <form id="studentForm">
            <div class="form-row">
                <h1>Enter First Year's Name</h1>
            </div>
            <div class="form-inline">
            <div class="form-group">
                <label for="validationDefault01">Student: </label>
                <input type="text" class="form-control" id="formName" placeholder="student name" value="Lilly Potter" required>
                <button class="btn btn-primary" type="button" id="sort">Sort!</button>
            </div>
            </div>
        
        </form>
    `;

}

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
};

const studentBuilder = (studArr) => {
    let domString = '<div class="row">';
    for (let i = 0; i < studArr.length; i++) {
        const studentCard = studArr[i];
        domString += `
            <div class="card text-center col-sm-4" id="studentCard">
                <div class="card-body">
                    <h5 class="card-title" id="name">${studentCard.name}</h5>
                    <p class="card-text" id="house">${studentCard.house}</p>
                    <button class="btn btn-primary" id="expel">Expel</button>
                </div>
            </div>
        `;
    };
    domString += '</div>';
    printToDom(domString, 'studentZone');
}


const buttonClick = (e) => {
    const type = e.target.id;
    if (type === 'sortMe') {
        studentForm();
        document.getElementById('sort').addEventListener('click', buttonClick);
    } else if (type === "sort") {
        const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
        let number = Math.floor(Math.random() * Math.floor(4)); 
        let result = houses[number];
        const studentName = document.getElementById('formName').value
        studentArray.push({name: studentName, house: result});
        studentBuilder(studentArray);

    } else if (type === "expel") {
        
    }
}       


document.getElementById('sortMe').addEventListener('click', buttonClick);
