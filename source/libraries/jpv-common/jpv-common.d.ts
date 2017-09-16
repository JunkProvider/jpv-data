declare namespace jpvCommon.geometry {
    class Rectangle implements comparison.Comparable {
        static fromXYWidthAndHeight(x: number, y: number, width: number, height: number): Rectangle;
        static fromPointAndSize(point: Point, size: Size): Rectangle;
        private _x;
        private _y;
        private _width;
        private _height;
        x: number;
        y: number;
        width: number;
        height: number;
        left: number;
        right: number;
        top: number;
        bottom: number;
        position: Point;
        size: Size;
        constructor(x: number, y: number, width: number, height: number);
        equals(rect: Rectangle): boolean;
    }
}
declare namespace jpvCommon.collection {
    interface IndexedObject<Value> {
        [index: string]: Value;
    }
}
declare namespace jpvCommon.eventing {
    interface EventHandler<Sender, EventData> {
        (sender: Sender, data: EventData): void;
    }
    class Event<EventData> {
        private listeners;
        private disposed;
        dispose(): void;
        register(context: Object, handler: EventHandler<any, EventData>): void;
        fire(sender: Object, data: EventData): void;
        unregister(context: Object, handler: EventHandler<any, EventData>): boolean;
    }
}
declare namespace jpvCommon.timing {
    class Timeout {
        expired: eventing.Event<void>;
        duration: number;
        private id;
        constructor(duration: number);
        start(): void;
        stop(): void;
        protected onExpired(): void;
    }
}
declare namespace jpvCommon.geometry {
    class Range implements comparison.Comparable {
        static ZERO_TO_ZERO: Range;
        static ZERO_TO_ONE: Range;
        private _min;
        private _max;
        min: number;
        max: number;
        length: number;
        constructor(min: number, max: number);
        contains(value: number): boolean;
        equals(range: Range): boolean;
    }
}
declare namespace jpvCommon.geometry {
    class Point implements comparison.Comparable {
        static add(pointA: Point, pointB: Point): Point;
        static sub(pointA: Point, pointB: Point): Point;
        static ZERO: Point;
        private _x;
        private _y;
        x: number;
        y: number;
        constructor(x: number, y: number);
        equals(point: Point): boolean;
    }
}
declare namespace jpvCommon.timing {
    class Interval {
        ticked: eventing.Event<void>;
        duration: number;
        private id;
        constructor(duration: number);
        start(): void;
        stop(): void;
        protected onTick(): void;
    }
}
declare namespace jpvCommon.comparison {
    interface Comparable {
        equals(b: Object): boolean;
    }
}
declare namespace jpvCommon.geometry {
    class Size implements comparison.Comparable {
        static min(sizeA: Size, sizeB: Size): Size;
        static max(sizeA: Size, sizeB: Size): Size;
        static ZERO: Size;
        static INFINITE: Size;
        private _width;
        private _height;
        width: number;
        height: number;
        constructor(width: number, height: number);
        isZero(): boolean;
        isInfinite(): boolean;
        isPositive(): boolean;
        equals(size: Size): boolean;
    }
}
declare namespace jpvCommon.collection {
    class List<Value> implements Enumerable<Value> {
        static fromArray<Value>(values: Value[]): void;
        static fromObject<Value>(values: IndexedObject<Value>): List<Value>;
        private values;
        contains(value: Value): boolean;
        get(index: number): Value;
        add(value: Value): void;
        set(index: number, value: Value): void;
        remove(value: Value): boolean;
        toArray(): Value[];
        forEach(callback: (value: Value, key: string | number) => void): void;
    }
}
declare namespace jpvCommon.comparison {
    function compareByEqualsMethod<Type extends Comparable>(a: Type, b: Type): boolean;
}
declare namespace jpvCommon.collection {
    class Map<Value> implements Enumerable<Value> {
        static fromArray<Value>(values: Value[], getKey?: (value: Value) => string | number): Map<Value>;
        static fromObject<Value>(values: IndexedObject<Value>): Map<Value>;
        private values;
        contains(key: string | number): boolean;
        get(key: string | number): Value;
        add(key: string | number, value: Value): void;
        set(key: string | number, value: Value): void;
        remove(key: string | number): boolean;
        toArray(): Value[];
        toObject(): IndexedObject<Value>;
        forEach(callback: (value: Value, key: string | number) => void): void;
    }
}
declare namespace jpvCommon.comparison {
    interface CompareFunction<Type> {
        (a: Type, b: Type): boolean;
    }
}
declare namespace jpvCommon.comparison {
    function compareByOperatorStrict(a: any, b: any): boolean;
}
declare namespace jpvCommon.collection {
    class Extensions {
        static sum<Value>(enumerable: Enumerable<Value>, callback?: (value: Value) => number): number;
    }
}
declare namespace jpvCommon.collection {
    interface Enumerable<Value> {
        forEach(callback: (value: Value) => void): void;
    }
}
declare namespace jpvCommon.comparison {
    function compareByOperator(a: any, b: any): boolean;
}
