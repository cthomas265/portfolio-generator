// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('==========');

    //is the same as:
    profileDataArr.forEach(profileItem => console.log(profileItem));
    
};