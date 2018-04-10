export class Place {
    constructor(public _id: string,
                public email: string,
                public password?: string,
                public firstName?: string,
                public lastName?: string,
                public placeName?: string,
                public telNo?: string,
                public regNo?: string,
                public accNo?: string,
                public bank?: string,
                public branchCode?: string,
                public accType?: string,
                public longitude?: string,
                public latitude?: string,
                public address? : string,
                public status? : string
    ) {}
}