interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Odogwu malay', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'John Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Rhaenyra targaryen', age: 23, occupation: 'Queen of the andals' },
    { type: 'admin', name: 'Super Man', age: 64, role: 'World saver' },
    { type: 'user', name: 'Bronny james', age: 23, occupation: 'Basket Baller' },
    { type: 'admin', name: 'Night Agent', age: 23, role: 'saves people' }
];

export function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

export function filterPersons<T extends 'user' | 'admin'>(
    persons: Person[],
    personType: T,
    criteria: Omit<Partial<T extends 'user' ? User : Admin>, 'type'>
): (T extends 'user' ? User : Admin)[] {
    return persons
        .filter((person): person is T extends 'user' ? User : Admin => person.type === personType)
        .filter((person) => {
            let criteriaKeys = Object.keys(criteria) as (keyof typeof criteria)[];
            return criteriaKeys.every((fieldName) => {
                return person[fieldName] === criteria[fieldName];
            });
        });
}

export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);

console.log();

console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);
