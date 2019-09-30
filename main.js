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
                <button class="btn btn-primary" type="submit" id="sort">Sort!</button>
            </div>
            </div>
        
        </form>
    `;
    document.getElementById('sort').addEventListener('click', buttonClick);

}

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
};

const studentBuilder = (studArr) => {
    let domString = `
        <div class="row justify-content-center">
        <button type="button" class="btn btn-primary" id="sortHouse">Sort By House</button>
        </div>
        <div class="row justify-content-center" id="students">
        `;
    for (let i = 0; i < studArr.length; i++) {
        const studentCard = studArr[i];
        domString += `
            <div class="card text-center col-sm-3 ${studentCard.house}" id="studentCard">
                <div class="card-body">
                    <h5 class="card-title" id="name">${studentCard.name}</h5>
                    <p class="card-text" id="house">${studentCard.house}</p>
                    <button class="btn btn-primary" id="expel${i}">Expel</button>
                </div>
            </div>
        `;
    };
    domString += '</div>';
    printToDom(domString, 'studentZone');
    for (let i = 0; i < studArr.length; i++) {
        document.getElementById('expel' + i).addEventListener('click', buttonClick);
    };
    document.getElementById('sortHouse').addEventListener('click', buttonClick);

}


const buttonClick = (e) => {
    const type = e.target.id;

    if (type === 'sortMe') {
        studentForm();
    } else if (type === 'sort') {
        const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
        let number = Math.floor(Math.random() * Math.floor(4)); 
        let result = houses[number];

        const studentName = document.getElementById('formName').value;

        studentArray.push({name: studentName, house: result});

        const form = document.getElementById('studentForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            studentBuilder(studentArray);
        });

    } else if (type.includes('expel')) {
        let idSplit = type.split('l');
        const arrLocation = parseInt(idSplit[1]);
        studentArray.splice(arrLocation, 1);
        studentBuilder(studentArray);
    } else if (type === 'sortHouse') {
        studentArray.sort((a, b) => (a.house > b.house) ? 1 : -1)
        studentBuilder(studentArray);
    };
};      

const init = () => {
document.getElementById('sortMe').addEventListener('click', buttonClick);
};

init();