export interface CategoryTypes {
  _id: string;
  name: string;
  __v: Number;
}

export interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface BankTypes {
  _id: string;
  name: string;
  noRekening: string;
  bankName: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BankTypes[];
}

export interface NominalTypes {
  _id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  _id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  phoneNumber: string;
}

export interface JWTPayloadTypes {
  player: UserTypes;
}

export interface CheckoutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
}

export interface HistoryVoucherTopupTypes {
  gameName: string;
  category: string;
  coinName: string;
  coinQuantity: string;
  price: number;
  thumbnail: string;
}

export interface HistoryPaymentTypes {
  bankName: string;
  name: string;
  noRekening: string;
  type: string;
}

export interface HistoryTransactionTypes {
  _id: string;
  accountUser: string;
  historyVoucherTopup: HistoryVoucherTopupTypes;
  value: number;
  status: string;
  category: string;
  tax: number;
  name: string;
  historyPayment: HistoryPaymentTypes;
}

export interface CategoryTopupTypes {
  _id: string;
  name: string;
  value: number;
}
