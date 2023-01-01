console.log('----- First Task -----');
// Дізнатись суму всіх зарплат користувачів:
// Об'єкт може містити невідому кількість департаментів та співробітників

const company = {
    sales: [
        {
            name: 'John',
            salary: 1000
        },
        {
            name: 'Alice',
            salary: 600
        }
    ],
    development: {
        wev: [
            {
                name: 'Peter',
                salary: 2000
            },
            {
                name: 'Alex',
                salary: 1800
            }
        ],
        internals: [
            {
                name: 'Jack',
                salary: 1300
            }
        ]
    },

}

function getSalarySum(array) {
    let salarySum = 0;

    if (Array.isArray(array)) {
        for (let ell of array) {
            salarySum += ell.salary;
        }
    } else {
        for (let insideArray in array) {
            salarySum += getSalarySum(array[insideArray]);
        }
    }

    return salarySum;
}

console.log(getSalarySum(company));
