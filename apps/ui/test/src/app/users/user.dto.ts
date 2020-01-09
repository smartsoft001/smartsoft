import {Field, FieldType, IFieldModifyMetadata, Model} from "@smartsoft001/models";

const modifyMetdata : IFieldModifyMetadata = {
    required: true
};

export enum UserPermission {
    admin = "admin"
}

@Model({})
export class User {
    @Field({
        create: modifyMetdata,
        update: modifyMetdata,
        details: true,
        list: { order: 3 }
    })
    firstName: string;

    @Field({
        create: modifyMetdata,
        update: modifyMetdata,
        details: true,
        list: { order: 2 }
    })
    lastName: string;

    @Field({
        create: modifyMetdata,
        update: modifyMetdata,
        details: true,
        list: { order: 1 }
    })
    username: string;

    @Field({
        create: modifyMetdata,
        update: modifyMetdata,
        details: true
    })
    password: string;

    @Field({
        create: modifyMetdata,
        update: modifyMetdata,
        details: true,
        type: FieldType.flag
    })
    disabled: boolean;

    @Field({
        create: modifyMetdata,
        update: modifyMetdata,
        details: true,
        type: FieldType.enum,
        options: UserPermission
    })
    permissions: Array<UserPermission>;

    @Field({
        create: modifyMetdata,
        update: modifyMetdata,
        details: true
    })
    email: string;
}