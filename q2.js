let recs = [

    {

        ID: 1,

        NAME: 'John',

        EMAIL: 'john@example.com',

        SSN: '123'

    }, {

        ID: 2,

        NAME: 'Sally',

        EMAIL: 'sally@example.com',

        SSN: '456'

    }, {

        ID: 3,

        NAME: 'Angie',

        EMAIL: 'angie@example.com',

        SSN: '789'

    }

];

//Question 2

var noSSN = (array) => {
    let modobj = []
    for (let i = 0; i < array.length; i++) {
        const person = array[i];
        const mod = {
            ID:person.ID,
            NAME: person.NAME,
            EMAIL: person.EMAIL,

        }
        modobj.push(mod)
    }
    return modobj
}

console.log(noSSN(recs))


pdf = {

    printBackground: true,

    margin: {

        top: "30px",

        right: "0px",

        bottom: "30px",



    }

};

//Question 4

var parse_margin = (pdf) => {
    let margins = (pdf.margin)
    if (!margins.top) margins.top = undefined
    if (!margins.right) margins.right = undefined
    if (!margins.bottom) margins.bottom = undefined
    if (!margins.left) margins.left = undefined
    return margins
}

console.log(parse_margin(pdf))