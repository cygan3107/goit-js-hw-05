"use strict";

const allUser = [
    {
        name: "Moore Hensley",
        gender: "male",
        balance: 2811,
    },
    {
        name: "Sharlene Bush",
        gender: "female",
        balance: 3821,
    },
    {
        name: "Ross Vazquez",
        gender: "male",
        balance: 3793,
    },
    {
        name: "Elma Head",
        gender: "female",
        balance: 2278,
    },
    {
        name: "Carey Barr",
        gender: "male",
        balance: 3951,
    },
    {
        name: "Blackburn Dotson",
        gender: "male",
        balance: 1498,
    },
    {
        name: "Sheree Anthony",
        gender: "female",
        balance: 2764,
    },
];

const getTotalBalanceByGender = (allUser, gender) => {
    return allUser
        .filter((user) => user.gender === gender)
        .reduce((firstUser, user) => {
            return firstUser + user.balance;
        }, 0);
};

console.log(getTotalBalanceByGender(allUser, "male")); // 12053

console.log(getTotalBalanceByGender(allUser, "female")); // 8863
