export type ItemRequest={
    id?:number;
    customerName?:string;
    customerEmail?:string;
    customerPhone?:string;
    dateOfDelivery?:Date;
    itemName?:string;
        street?: string;
        city?: string;
        state?: string;
        zipCode?: string;
}