// Q1 Find all users who are interested in playing video games.


export function usersInterestedPlaying(users,str) {
    // let index = [];
    let result = [];
    let values = Object.values(users);
    let keys = Object.keys(users);
    // console.log(values);

    for (let i = 0; i < values.length; i++) {
        let flag = values[i].interests[0].includes(str);
        // console.log(flag)
        if(flag){
            result.push(keys[i])
        }
    }
    return  result
}


// Q2 Find all users staying in Germany.
export function userStaying(users,country) {
    let values = Object.values(users);
    let keys = Object.keys(users);
    let result = [];
    for (let i = 0; i < values.length; i++) {
        if(values[i].nationality === country){
            result.push(keys[i])
        }
    }
    return result
}

// Find all users with masters Degree.

export function usersMaster(users,degree) {
    let values = Object.values(users);
    let keys = Object.keys(users);
    let result = [];
    for (let i = 0; i < values.length; i++) {
        if(values[i].qualification === degree){
            result.push(keys[i])
        }
    }
    return result
}

// Q4 Group users based on their Programming language mentioned in their designation.

export function groupByProgrammingLanguage(users) {
    let group = {'Javascript': [], 'Golang':[], 'Python':[]};
    let values = Object.values(users);
    let keys = Object.keys(users);

    for (let i = 0; i < values.length; i++) {
        if(values[i].designation.includes('Javascript')){
            group['Javascript'].push(keys[i])
        }else if (values[i].designation.includes('Golang')) {
            group['Golang'].push(keys[i])
        }else if (values[i].designation.includes('Python')){
            group['Python'].push(keys[i])
        }
    }
    return group
}
