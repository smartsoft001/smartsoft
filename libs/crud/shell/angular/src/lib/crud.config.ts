import {Injectable} from "@angular/core";
import {IIconButtonOptions, IListCellPipe} from "@smartsoft001/angular";

@Injectable()
export class CrudConfig<T> {
    apiUrl: string;
    entity: string;
    type?: any;
}

@Injectable()
export class CrudFullConfig<T> extends CrudConfig<T> {
    type: any;
    title: string;
    details?: boolean | {
        components: {
            top: any
        }
    };
    edit?: boolean;
    add?: boolean;
    remove?: boolean;
    search?: boolean;
    pagination?: { limit: number };
    sort?: boolean | {
        default?: string;
        defaultDesc?: boolean;
    };
    list?: {
        cellPipe?: IListCellPipe<T>;
        components?: {
            top: any
        }
    };
    buttons?: Array<IIconButtonOptions>;
}
