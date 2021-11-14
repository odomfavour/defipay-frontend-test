import { CustomerViewModel } from ".."
import { customerActionTypes } from "./CustomerActionTypes"
export const actions = {
    createcustomer: () => ({ type: customerActionTypes.CreateCustomer }),
    updatecustomer: () => ({ type: customerActionTypes.UpdateCustomer }),
    getcustomers: () => ({ type: customerActionTypes.Customers }),
    fulfilcustomers: (customers: CustomerViewModel[]) =>
        ({ type: customerActionTypes.FufilCustomers, payload: { customers } }),
    getcustomer: () => ({ type: customerActionTypes.Customer }),
    fulfilcustomer: (customer: CustomerViewModel) =>
        ({ type: customerActionTypes.FufilCustomer, payload: { customer } }),
}