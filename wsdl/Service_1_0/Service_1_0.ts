/* tslint:disable:max-line-length no-empty-interface */
export interface ICreateShipmentsInput {
    ClientInfo: Service_1_0Types.IClientInfo;
    Transaction: Service_1_0Types.ITransaction;
    Shipments: {
        Shipment: Array<Service_1_0Types.IShipment>;
    };
    LabelInfo: Service_1_0Types.ILabelInfo;
}

export interface ICreateShipmentsOutput {
    Transaction: Service_1_0Types.ITransaction;
    Notifications: Service_1_0Types.INotifications;
    /** xsd:boolean(undefined) */
    HasErrors: boolean;
    Shipments: {
        ProcessedShipment: Array<Service_1_0Types.IProcessedShipment>;
    };
}

export interface IPrintLabelInput {
    ClientInfo: Service_1_0Types.IClientInfo;
    Transaction: Service_1_0Types.ITransaction;
    /** xsd:string(undefined) */
    ShipmentNumber: string;
    /** xsd:string(undefined) */
    ProductGroup: string;
    /** xsd:string(undefined) */
    OriginEntity: string;
    LabelInfo: Service_1_0Types.ILabelInfo;
}

export interface IPrintLabelOutput {
    Transaction: Service_1_0Types.ITransaction;
    Notifications: Service_1_0Types.INotifications;
    /** xsd:boolean(undefined) */
    HasErrors: boolean;
    /** xsd:string(undefined) */
    ShipmentNumber: string;
    ShipmentLabel: Service_1_0Types.IShipmentLabel;
}

export interface ICreatePickupInput {
    ClientInfo: Service_1_0Types.IClientInfo;
    Transaction: Service_1_0Types.ITransaction;
    Pickup: Service_1_0Types.IPickup;
    LabelInfo: Service_1_0Types.ILabelInfo;
}

export interface ICreatePickupOutput {
    Transaction: Service_1_0Types.ITransaction;
    Notifications: Service_1_0Types.INotifications;
    /** xsd:boolean(undefined) */
    HasErrors: boolean;
    ProcessedPickup: Service_1_0Types.IProcessedPickup;
}

export interface ICancelPickupInput {
    ClientInfo: Service_1_0Types.IClientInfo;
    Transaction: Service_1_0Types.ITransaction;
    /** xsd:string(undefined) */
    PickupGUID: string;
    /** xsd:string(undefined) */
    Comments: string;
}

export interface ICancelPickupOutput {
    Transaction: Service_1_0Types.ITransaction;
    Notifications: Service_1_0Types.INotifications;
    /** xsd:boolean(undefined) */
    HasErrors: boolean;
}

export interface IService_1_0Soap {
    CreateShipments: (input: ICreateShipmentsInput, cb: (err: any | null, result: ICreateShipmentsOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    PrintLabel: (input: IPrintLabelInput, cb: (err: any | null, result: IPrintLabelOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    CreatePickup: (input: ICreatePickupInput, cb: (err: any | null, result: ICreatePickupOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    CancelPickup: (input: ICancelPickupInput, cb: (err: any | null, result: ICancelPickupOutput, raw: string, soapHeader: { [k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
}
export type double = Number;
export type int = Number;
export type datetime = string;
export type dateTime = string;
export type base64Binary = string;
export namespace Service_1_0Types {
    export interface IClientInfo {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        UserName: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Password: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Version: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        AccountNumber: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        AccountPin: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        AccountEntity: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        AccountCountryCode: string;
    }
    export interface ITransaction {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference1: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference2: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference3: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference4: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference5: string;
    }
    export interface IPartyAddress {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Line1: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Line2: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Line3: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        City: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        StateOrProvinceCode: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PostCode: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        CountryCode: string;
    }
    export interface IContact {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Department: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PersonName: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Title: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        CompanyName: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PhoneNumber1: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PhoneNumber1Ext: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PhoneNumber2: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PhoneNumber2Ext: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        FaxNumber: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        CellPhone: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        EmailAddress: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Type: string;
    }
    export interface IShipper {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference1: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference2: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        AccountNumber: string;
        PartyAddress: Service_1_0Types.IPartyAddress;
        Contact: Service_1_0Types.IContact;
    }
    export interface IConsignee {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference1: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference2: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        AccountNumber: string;
        PartyAddress: Service_1_0Types.IPartyAddress;
        Contact: Service_1_0Types.IContact;
    }
    export interface IThirdParty {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference1: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference2: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        AccountNumber: string;
        PartyAddress: Service_1_0Types.IPartyAddress;
        Contact: Service_1_0Types.IContact;
    }
    export interface IDimensions {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Length: double;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Width: double;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Height: double;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Unit: string;
    }
    export interface IActualWeight {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Unit: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Value: double;
    }
    export interface IChargeableWeight {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Unit: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Value: double;
    }
    export interface ICustomsValueAmount {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        CurrencyCode: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Value: double;
    }
    export interface ICashOnDeliveryAmount {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        CurrencyCode: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Value: double;
    }
    export interface IInsuranceAmount {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        CurrencyCode: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Value: double;
    }
    export interface ICashAdditionalAmount {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        CurrencyCode: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Value: double;
    }
    export interface ICollectAmount {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        CurrencyCode: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Value: double;
    }
    export interface IWeight {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Unit: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Value: double;
    }
    export interface IShipmentItem {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PackageType: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:int(undefined) */
        Quantity: int;
        Weight: Service_1_0Types.IWeight;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Comments: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference: string;
    }
    export interface IItems {
        ShipmentItem: Array<Service_1_0Types.IShipmentItem>;
    }
    export interface IDetails {
        Dimensions: Service_1_0Types.IDimensions;
        ActualWeight: Service_1_0Types.IActualWeight;
        ChargeableWeight: Service_1_0Types.IChargeableWeight;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        DescriptionOfGoods: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        GoodsOriginCountry: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:int(undefined) */
        NumberOfPieces: int;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        ProductGroup: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        ProductType: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PaymentType: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PaymentOptions: string;
        CustomsValueAmount: Service_1_0Types.ICustomsValueAmount;
        CashOnDeliveryAmount: Service_1_0Types.ICashOnDeliveryAmount;
        InsuranceAmount: Service_1_0Types.IInsuranceAmount;
        CashAdditionalAmount: Service_1_0Types.ICashAdditionalAmount;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        CashAdditionalAmountDescription: string;
        CollectAmount: Service_1_0Types.ICollectAmount;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Services: string;
        Items: Service_1_0Types.IItems;
    }
    export interface IAttachment {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        FileName: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        FileExtension: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:base64Binary(undefined) */
        FileContents: base64Binary;
    }
    export interface IAttachments {
        Attachment: Array<Service_1_0Types.IAttachment>;
    }
    export interface IShipment {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference1: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference2: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference3: string;
        Shipper: Service_1_0Types.IShipper;
        Consignee: Service_1_0Types.IConsignee;
        ThirdParty: Service_1_0Types.IThirdParty;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:dateTime(undefined) */
        ShippingDateTime: dateTime;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:dateTime(undefined) */
        DueDate: dateTime;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Comments: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PickupLocation: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        OperationsInstructions: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        AccountingInstrcutions: string;
        Details: Service_1_0Types.IDetails;
        Attachments: Service_1_0Types.IAttachments;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        ForeignHAWB: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:int(undefined) */
        TransportType_x0020_: int;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PickupGUID: string;
    }
    export interface ILabelInfo {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:int(undefined) */
        ReportID: int;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        ReportType: string;
    }
    export interface INotification {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Code: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Message: string;
    }
    export interface INotifications {
        Notification: Array<Service_1_0Types.INotification>;
    }
    export interface IShipmentLabel {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        LabelURL: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:base64Binary(undefined) */
        LabelFileContents: base64Binary;
    }
    export interface IProcessedShipment {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        ID: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference1: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference2: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference3: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        ForeignHAWB: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:boolean(undefined) */
        HasErrors: boolean;
        Notifications: Service_1_0Types.INotifications;
        ShipmentLabel: Service_1_0Types.IShipmentLabel;
    }
    export interface IPickupAddress {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Line1: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Line2: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Line3: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        City: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        StateOrProvinceCode: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PostCode: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        CountryCode: string;
    }
    export interface IPickupContact {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Department: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PersonName: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Title: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        CompanyName: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PhoneNumber1: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PhoneNumber1Ext: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PhoneNumber2: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PhoneNumber2Ext: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        FaxNumber: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        CellPhone: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        EmailAddress: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Type: string;
    }
    export interface IShipmentWeight {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Unit: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Value: double;
    }
    export interface IShipmentVolume {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Unit: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Value: double;
    }
    export interface ICashAmount {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        CurrencyCode: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Value: double;
    }
    export interface IExtraCharges {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        CurrencyCode: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Value: double;
    }
    export interface IShipmentDimensions {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Length: double;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Width: double;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:double(undefined) */
        Height: double;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Unit: string;
    }
    export interface IPickupItemDetail {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        ProductGroup: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        ProductType: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:int(undefined) */
        NumberOfShipments: int;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PackageType: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Payment: string;
        ShipmentWeight: Service_1_0Types.IShipmentWeight;
        ShipmentVolume: Service_1_0Types.IShipmentVolume;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:int(undefined) */
        NumberOfPieces: int;
        CashAmount: Service_1_0Types.ICashAmount;
        ExtraCharges: Service_1_0Types.IExtraCharges;
        ShipmentDimensions: Service_1_0Types.IShipmentDimensions;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Comments: string;
    }
    export interface IPickupItems {
        PickupItemDetail: Array<Service_1_0Types.IPickupItemDetail>;
    }
    export interface IPickup {
        PickupAddress: Service_1_0Types.IPickupAddress;
        PickupContact: Service_1_0Types.IPickupContact;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        PickupLocation: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:dateTime(undefined) */
        PickupDate: dateTime;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:dateTime(undefined) */
        ReadyTime: dateTime;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:dateTime(undefined) */
        LastPickupTime: dateTime;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:dateTime(undefined) */
        ClosingTime: dateTime;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Comments: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference1: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference2: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Vehicle: string;
        Shipments: {
            Shipment: Array<Service_1_0Types.IShipment>;
        };
        PickupItems: Service_1_0Types.IPickupItems;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Status: string;
    }
    export interface IProcessedShipments {
        ProcessedShipment: Array<Service_1_0Types.IProcessedShipment>;
    }
    export interface IProcessedPickup {
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        ID: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#guid(pattern) */
        GUID: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference1: string;
        /** http://ws.aramex.net/ShippingAPI/v1/#xsd:string(undefined) */
        Reference2: string;
        ProcessedShipments: Service_1_0Types.IProcessedShipments;
    }
}
