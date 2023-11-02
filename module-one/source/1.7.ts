{
// spread operator
// rest operator
// destructuring

// learn spread operator
const bros1: string[] = ['habib', 'polash', 'labib', 'nahid', 'khalid']
const bros2: string[] = ['jahid', 'hasan', 'sujoy', 'rakib', 'fahim']
bros1.push(...bros2)

const mentors1 = {
    typescript: 'mizba',
    redux: 'mir',
    dbms: 'mizan'
}
const mentors2 = {
    prisma: 'firoz',
    next: 'tonmoy',
    cloud: 'nahid'
}

const mentorList  = {
    ...mentors1,
    ...mentors2,
}

// rest operator
const greetFriends = (...friends: string[]) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    friends.forEach((friend: string) => console.log(`Hi ${friend}`))
}
greetFriends("abul", "babul", "khalid", "bulbul")

}