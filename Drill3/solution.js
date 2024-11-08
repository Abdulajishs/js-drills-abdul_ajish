// Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

export function hobbiesIndividuals(array) {
    let hobbies = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].age === 30) {
            hobbies.push(...array[i].hobbies)
        }
    }
    return hobbies
}


//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

export function studentsOnly(array) {
    let names = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].isStudent && array[i].country === "Australia") {
            names.push(array[i].name)
        }
    }
    return names
}

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

export function nameCity(array, index) {
    return { name: array[index].name, city: array[index].city }
}

//    Implement a loop to access and print the ages of all individuals in the dataset.

export function agesIndividuals(array) {
    let age = []
    for(let i = 0; i < array.length; i++){
        age.push(array[i].age)
    }
    return age
}


//    Create a function to retrieve and display the first hobby of each individual in the dataset.

export function firstHobbies(array) {
    let firstHobby = [];
    for (let i = 0; i < array.length; i++) {
        firstHobby.push(array[i].hobbies[0])
    }
    return firstHobby
}

//    Write a function that accesses and prints the names and email addresses of individuals aged 25.

export function specificNameEmail(array,age) {
    let nameEmail = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i].age === age){
            nameEmail.push({name:array[i].name, email: array[i].email})
        }
    }
    return nameEmail
}

//    Implement a loop to access and log the city and country of each individual in the dataset.

export function cityCountryIndividuals(array) {
    let cityCountry = [];
    for (let i = 0; i < array.length; i++) {
        cityCountry.push({city : array[i].city, country : array[i].country})
    }
    return cityCountry
}