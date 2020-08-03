import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export const instance = axios.create({
    baseURL: '/api',
    timeout: 1000,
});

const user = '/user/0'
const accounts = '/accounts'
const transactions = '/transactions'
const authenticate = '/authenticate'


const mock = new MockAdapter(instance, { delayResponse: 350 })
const fakeData = {
    id: '0',
    firstName: 'Ivan',
    lastName: 'Petrov',
    bankAccs: [
        {
            id: '0',
            name: 'Personal Payments Account',
            balance: '302.77‬',
            iban: 'BG18RZBB91550123456789',
            currency: 'BGN',
            transactions: [
                {
                    id: '2bda2b26-66bc-4340-be76-76035f960655',
                    date: '1.1.2020',
                    reason: 'Salary',
                    amount: '666',
                    type: 'deposit',
                },
                {
                    id: 'af1879c5-0191-4995-afc8-8f04751db070',
                    date: '1.1.2020',
                    reason: 'Groceries',
                    amount: '30.23',
                    type: 'withdraw',
                },
                {
                    id: '31c531e5-0959-4c4f-bf79-f20d9afbdeb5',
                    date: '13.2.2020',
                    reason: 'Rent',
                    amount: '333',
                    type: 'withdraw',
                }
            ]
        },
        {
            id: '1',
            name: 'Personal Savings Account',
            balance: '1200‬',
            iban: 'BG58RZBB91555087474816',
            currency: 'BGN',
            transactions: [
                {
                    id: 'c3a0f308-9dbc-4177-9422-47f253cac6ac',
                    date: '5.3.2020',
                    reason: 'Deposit',
                    amount: '600',
                    type: 'deposit',
                },
                {
                    id: 'eda5007c-da9e-484d-8778-92caf5c45f68 ',
                    date: '6.4.2020',
                    reason: 'Deposit',
                    amount: '300',
                    type: 'deposit',
                },
                {
                    id: 'abb1b035-11c2-48aa-87a5-e0d679047493',
                    date: '4.5.2020',
                    reason: 'Deposit',
                    amount: '300.00',
                    type: 'deposit',
                }
            ]
        },
        {
            id: '2',
            name: 'Work Payments Account',
            balance: '3000‬',
            iban: 'BG25UBBS84231000000000',
            currency: 'EUR',
            transactions: [
                {
                    id: '7f05e392-5282-4787-9e61-56d6aba990b3',
                    date: '1.1.2020',
                    reason: 'Traveling expenses',
                    amount: '400',
                    type: 'withdraw',
                },
                {
                    id: 'ba74b86b-ad87-4a4d-b26f-5e9ca632ed74',
                    date: '2.1.2020',
                    reason: 'Work dinner',
                    amount: '100',
                    type: 'withdraw',
                },
                {
                    id: 'd8c2c6cb-3a9b-4969-9f1f-8adf8f19d501',
                    date: '3.2.2020',
                    reason: 'Consumatives',
                    amount: '550.30',
                    type: 'withdraw',
                }
            ]
        },
    ]
}

mock.onPost(authenticate).reply(201, {
    message: 'Successfully authenticated the user.',
    userID: 0
})

mock.onGet(user).reply(200, 
    fakeData
)

mock.onPost(user).reply(200, {
    message: 'Successfully logged out user'
})

mock.onPost(accounts).reply(201, {
    message: 'Successfully added a new account.'
})

mock.onDelete(accounts).reply(200, {
    message: 'Successfully delete a account.'
})

mock.onPost(transactions).reply(201, {
    message: 'Successfully added a transaction.'
})
