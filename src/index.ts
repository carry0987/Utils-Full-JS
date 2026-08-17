import * as UtilsModule from '@carry0987/utils/browser';
import type { Extension } from '@carry0987/utils/types';

class Utils {
    constructor(extension: Extension) {
        Object.assign(this, extension);
    }
}

type UtilsInstance<T extends Extension> = Utils & T;

type UtilsClass = {
    new <T extends Extension>(extension: T): UtilsInstance<T>;
    prototype: Utils;
};

type UtilsConstructor = UtilsClass &
    typeof UtilsModule & {
        readonly version: string;
        readonly utilsVersion: string;
        readonly stylesheetId: string;
        readonly replaceRule: typeof UtilsModule.replaceRule;
    };

const UtilsWithStatics = Object.assign(Utils as UtilsClass, UtilsModule) as UtilsConstructor;

Object.defineProperties(UtilsWithStatics, {
    version: {
        value: '__version__',
        writable: false,
        configurable: true
    },
    utilsVersion: {
        value: UtilsModule.version,
        writable: false,
        configurable: true
    },
    stylesheetId: {
        get() {
            return UtilsModule.stylesheetId;
        },
        configurable: true
    },
    replaceRule: {
        get() {
            return UtilsModule.replaceRule;
        },
        configurable: true
    }
});

export default UtilsWithStatics;
