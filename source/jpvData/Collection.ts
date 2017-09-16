namespace jpvData {

    export class Collection<Datum> {
        private cache: Cache<Datum>;
        private loader: Loader<Datum>;
        private deserializer: Deserializer<Datum>;
        private filters: Filter[] = [];

        filter(filters: Filter[]) {
            const clone = new Collection<Datum>();
            clone.cache = this.cache;
            clone.loader = this.loader;
            clone.deserializer = this.deserializer;
            clone.filters = this.filters.concat(filters);
        }

        load(sort: Sort[] = [], offset = 0, limit = Number.POSITIVE_INFINITY): Task<Datum> {

        }
    }

    export interface Cache<Datum> {
        get(request: Request<Datum>): Datum[];
        set(request: Request<Datum>, result: Result<Datum>): void;
    }

    export interface Loader<Datum> {
        load(request: Request<Datum>): Task<Datum>;
    }

    export interface Deserializer<Datum> {
        deserialize(serializedDatum: any): Datum;
    }

    export interface TaskCallbacks<Datum> {
        success(data: Datum[]): void;
        error(error: any): void;
        aborted?(): void;
        completed?(): void;
    }

    export class Task<Datum> {
        private callbacks: TaskCallbacks[];
        
        abort() {

        }
    }

    export class LoadTask<Data> {

    }

    export class ImmediateTask<Data> {

    }

    export class RequestAndResult<Datum> {
        constructor(readonly request: Request<Datum>, readonly result: Result<Datum>) {}
    }

    export class Request<Datum> {
        filters: Filter[] = [];
        sort: Sort[] = [];
        offset: number = 0;
        limit: number = Number.POSITIVE_INFINITY;
    }

    export class Result<Datum> {
        readonly data: Datum[];

        constructor(data: Datum[]) {
            this.data = data;
        }
    }

    export class Filter {

    }

    export class Sort {

    }
}
