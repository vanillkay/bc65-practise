const obj = {
    name: 'Peter',
    age: 31,
    salary: '22222',
    weight: 75
}


function logUserInfo(obj){
    console.log(obj.name + obj.age + obj.salary)
}

function logUserInfo({ name: patientName, age, salary }){
    console.log(patientName)
}

const [first, second] = [1,2,3,4]


