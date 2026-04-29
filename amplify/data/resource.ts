import { a, defineData, type ClientSchema } from '@aws-amplify/backend';
import { todo } from 'node:test';
import { use } from 'react';

const schema = a.schema({
    ExpenseCategory: a.enum(["Food", "Travel", "Accommodation", "Miscellaneous","GrosseryShopping","Entertainment","HealthandWellness","Education","PersonalCare","Utilities","SubscriptionServices","GiftsandDonations","BusinessExpenses"]),
    status: a.enum(["Pending", "Approved", "Rejected"]),
    Expense : a.model({
        title: a.string(),
        amount: a.float(),
        date: a.string(),
        category: a.ref('ExpenseCategory'),
        status: a.ref('status'),
        description: a.string(),
    }).authorization(allow=>allow.owner())
}).authorization(allow=>allow.owner());

// Used for code completion / highlighting when making requests from frontend
export type Schema = ClientSchema<typeof schema>;

// defines the data resource to be deployed
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    apiKeyAuthorizationMode: { expiresInDays: 2 }
  }
});