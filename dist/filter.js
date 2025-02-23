"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminsOfAge23 = exports.usersOfAge23 = exports.persons = void 0;
exports.logPerson = logPerson;
exports.filterPersons = filterPersons;
exports.persons = [
    { type: 'user', name: 'Odogwu malay', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'John Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Rhaenyra targaryen', age: 23, occupation: 'Queen of the andals' },
    { type: 'admin', name: 'Super Man', age: 64, role: 'World saver' },
    { type: 'user', name: 'Bronny james', age: 23, occupation: 'Basket Baller' },
    { type: 'admin', name: 'Night Agent', age: 23, role: 'saves people' }
];
function logPerson(person) {
    console.log(` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`);
}
function filterPersons(persons, personType, criteria) {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
        let criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every((fieldName) => {
            return person[fieldName] === criteria[fieldName];
        });
    });
}
exports.usersOfAge23 = filterPersons(exports.persons, 'user', { age: 23 });
exports.adminsOfAge23 = filterPersons(exports.persons, 'admin', { age: 23 });
console.log('Users of age 23:');
exports.usersOfAge23.forEach(logPerson);
console.log();
console.log('Admins of age 23:');
exports.adminsOfAge23.forEach(logPerson);
//# sourceMappingURL=filter.js.map