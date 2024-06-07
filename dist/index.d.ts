import * as UtilsModule from '@carry0987/utils';
import { Types } from '@carry0987/utils';

declare class Utils {
    constructor(extension: Types.Extension);
    static version: string;
    static utilsVersion: string;
    static stylesheetId: string;
    static replaceRule: Types.ReplaceRule;
    static setStylesheetId: typeof UtilsModule.setStylesheetId;
    static setReplaceRule: typeof UtilsModule.setReplaceRule;
    static isObject: typeof UtilsModule.isObject;
    static isArray: typeof UtilsModule.isArray;
    static isFunction: typeof UtilsModule.isFunction;
    static isString: typeof UtilsModule.isString;
    static isNumber: typeof UtilsModule.isNumber;
    static isBoolean: typeof UtilsModule.isBoolean;
    static isEmpty: typeof UtilsModule.isEmpty;
    static deepMerge: typeof UtilsModule.deepMerge;
    static shallowMerge: typeof UtilsModule.shallowMerge;
    static deepClone: typeof UtilsModule.deepClone;
    static shallowClone: typeof UtilsModule.shallowClone;
    static deepEqual: typeof UtilsModule.deepEqual;
    static shallowEqual: typeof UtilsModule.shallowEqual;
    static injectStylesheet: typeof UtilsModule.injectStylesheet;
    static buildRules: typeof UtilsModule.buildRules;
    static compatInsertRule: typeof UtilsModule.compatInsertRule;
    static removeStylesheet: typeof UtilsModule.removeStylesheet;
    static generateRandom: typeof UtilsModule.generateRandom;
    static generateUUID: typeof UtilsModule.generateUUID;
    static getUrlParam: typeof UtilsModule.getUrlParam;
    static setUrlParam: typeof UtilsModule.setUrlParam;
    static getElem: typeof UtilsModule.domUtils.getElem;
    static createElem: typeof UtilsModule.domUtils.createElem;
    static insertAfter: typeof UtilsModule.domUtils.insertAfter;
    static insertBefore: typeof UtilsModule.domUtils.insertBefore;
    static addClass: typeof UtilsModule.domUtils.addClass;
    static removeClass: typeof UtilsModule.domUtils.removeClass;
    static toggleClass: typeof UtilsModule.domUtils.toggleClass;
    static hasClass: typeof UtilsModule.domUtils.hasClass;
    static hasParent: typeof UtilsModule.domUtils.hasParent;
    static findParent: typeof UtilsModule.domUtils.findParent;
    static findParents: typeof UtilsModule.domUtils.findParents;
    static hasChild: typeof UtilsModule.domUtils.hasChild;
    static findChild: typeof UtilsModule.domUtils.findChild;
    static findChilds: typeof UtilsModule.domUtils.findChilds;
    static createEvent: typeof UtilsModule.eventUtils.createEvent;
    static dispatchEvent: typeof UtilsModule.eventUtils.dispatchEvent;
    static addEventListener: typeof UtilsModule.eventUtils.addEventListener;
    static removeEventListener: typeof UtilsModule.eventUtils.removeEventListener;
    static setLocalValue: typeof UtilsModule.storageUtils.setLocalValue;
    static getLocalValue: typeof UtilsModule.storageUtils.getLocalValue;
    static removeLocalValue: typeof UtilsModule.storageUtils.removeLocalValue;
    static setSessionValue: typeof UtilsModule.storageUtils.setSessionValue;
    static getSessionValue: typeof UtilsModule.storageUtils.getSessionValue;
    static removeSessionValue: typeof UtilsModule.storageUtils.removeSessionValue;
    static setCookie: typeof UtilsModule.storageUtils.setCookie;
    static getCookie: typeof UtilsModule.storageUtils.getCookie;
    static removeCookie: typeof UtilsModule.storageUtils.removeCookie;
    static doFetch: typeof UtilsModule.fetchUtils.doFetch;
    static sendData: typeof UtilsModule.fetchUtils.sendData;
    static sendFormData: typeof UtilsModule.fetchUtils.sendFormData;
    static fetchData: typeof UtilsModule.fetchUtils.fetchData;
    static sendForm: typeof UtilsModule.fetchUtils.sendForm;
    static appendFormData: typeof UtilsModule.formUtils.appendFormData;
    static encodeFormData: typeof UtilsModule.formUtils.encodeFormData;
    static reportError: typeof UtilsModule.errorUtils.reportError;
    static throwError: typeof UtilsModule.errorUtils.throwError;
}

export { Utils as default };
