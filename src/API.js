import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const endpoint = '/users/0'
export const instance = axios.create({
    baseURL: '/api',
    timeout: 1000,
});

const mock = new MockAdapter(instance)
const fakeData = {
    id: 0,
    firstName: 'Ivan',
    lastName: 'Petrov',
    bankAccs: [
        {
            id: 0,
            name: 'Personal Payments Account',
            balance: '302.77‬',
            iban: 'BG18RZBB91550123456789',
            currency: 'BGN',
            transactions: [
                {
                    date: '1.1.2020',
                    reason: 'Salary',
                    amount: '666',
                    type: 'deposit',
                },
                {
                    date: '1.1.2020',
                    reason: 'Groceries',
                    amount: '30.23',
                    type: 'withdraw',
                },
                {
                    date: '13.2.2020',
                    reason: 'Rent',
                    amount: '333',
                    type: 'withdraw',
                }
            ]
        },
        {
            id: 1,
            name: 'Personal Savings Account',
            balance: '1200‬',
            iban: 'BG58RZBB91555087474816',
            currency: 'BGN',
            transactions: [
                {
                    date: '5.3.2020',
                    reason: 'Deposit',
                    amount: '600',
                    type: 'deposit',
                },
                {
                    date: '6.4.2020',
                    reason: 'Deposit',
                    amount: '300',
                    type: 'deposit',
                },
                {
                    date: '4.5.2020',
                    reason: 'Deposit',
                    amount: '300.00',
                    type: 'deposit',
                }
            ]
        },
        {
            id: 2,
            name: 'Work Payments Account',
            balance: '3000‬',
            iban: 'BG25UBBS84231000000000',
            currency: 'EUR',
            transactions: [
                {
                    date: '1.1.2020',
                    reason: 'Traveling expenses',
                    amount: '400',
                    type: 'withdraw',
                },
                {
                    date: '2.1.2020',
                    reason: 'Work dinner',
                    amount: '100',
                    type: 'withdraw',
                },
                {
                    date: '3.2.2020',
                    reason: 'Consumatives',
                    amount: '550.30',
                    type: 'withdraw',
                }
            ]
        },
    ]
}

mock.onGet(endpoint).reply(200, 
    fakeData
)


