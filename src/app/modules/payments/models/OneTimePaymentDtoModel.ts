export interface OneTimePaymentDtoModel {
    pagename: String,
    description: String,
    redirectLink: String,
    successmessage: String,
    emailaddress: String,
    amount: Number,
    paidBy: string
}
