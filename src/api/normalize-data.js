import { normalize, schema } from 'normalizr'

const transaction = new schema.Entity('transactions')

const bankAcc = new schema.Entity('bankAccs', {
    transactions: [transaction]
})

const user = new schema.Entity('user', {
    bankAccs: [bankAcc],
    transactions: [transaction]
})

const normalizedData = originalData => normalize(originalData, user)


export default normalizedData