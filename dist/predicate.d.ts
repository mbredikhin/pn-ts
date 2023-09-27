declare const predicate: {
    nullish: <T extends null | undefined>(value: any) => value is T;
    number: (value: any) => value is number;
    nan: (value: any) => value is number;
    string: (value: any) => value is string;
    boolean: (value: any) => value is boolean;
    set: (value: any) => value is Set<any>;
    map: (value: any) => value is Map<any, any>;
    array: (value: any) => value is any[];
    object: (value: any) => value is object;
    symbol: (value: any) => value is Symbol;
    function: (value: any) => value is Function;
    any: (value?: any) => boolean;
};
export default predicate;
