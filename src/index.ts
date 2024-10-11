import { Types, version as utilsVersion } from '@carry0987/utils';
import * as UtilsModule from '@carry0987/utils';

class Utils {
    constructor(extension: Types.Extension) {
        Object.assign(this, extension);
    }

    static version: string = '__version__';
    static utilsVersion: string = utilsVersion;
    static stylesheetId: string = UtilsModule.stylesheetId;
    static replaceRule: Types.ReplaceRule = {
        from: UtilsModule.replaceRule.from,
        to: UtilsModule.replaceRule.to
    };

    // utils
    static setStylesheetId: typeof UtilsModule.setStylesheetId = UtilsModule.setStylesheetId;
    static setReplaceRule: typeof UtilsModule.setReplaceRule = UtilsModule.setReplaceRule;
    static isObject: typeof UtilsModule.isObject = UtilsModule.isObject;
    static isArray: typeof UtilsModule.isArray = UtilsModule.isArray;
    static isFunction: typeof UtilsModule.isFunction = UtilsModule.isFunction;
    static isString: typeof UtilsModule.isString = UtilsModule.isString;
    static isNumber: typeof UtilsModule.isNumber = UtilsModule.isNumber;
    static isBoolean: typeof UtilsModule.isBoolean = UtilsModule.isBoolean;
    static isEmpty: typeof UtilsModule.isEmpty = UtilsModule.isEmpty;
    static deepMerge: typeof UtilsModule.deepMerge = UtilsModule.deepMerge;
    static shallowMerge: typeof UtilsModule.shallowMerge = UtilsModule.shallowMerge;
    static deepClone: typeof UtilsModule.deepClone = UtilsModule.deepClone;
    static shallowClone: typeof UtilsModule.shallowClone = UtilsModule.shallowClone;
    static deepEqual: typeof UtilsModule.deepEqual = UtilsModule.deepEqual;
    static shallowEqual: typeof UtilsModule.shallowEqual = UtilsModule.shallowEqual;
    static injectStylesheet: typeof UtilsModule.injectStylesheet = UtilsModule.injectStylesheet;
    static buildRules: typeof UtilsModule.buildRules = UtilsModule.buildRules;
    static compatInsertRule: typeof UtilsModule.compatInsertRule = UtilsModule.compatInsertRule;
    static removeStylesheet: typeof UtilsModule.removeStylesheet = UtilsModule.removeStylesheet;
    static generateRandom: typeof UtilsModule.generateRandom = UtilsModule.generateRandom;
    static generateUUID: typeof UtilsModule.generateUUID = UtilsModule.generateUUID;
    static getUrlParam: typeof UtilsModule.getUrlParam = UtilsModule.getUrlParam;
    static setUrlParam: typeof UtilsModule.setUrlParam = UtilsModule.setUrlParam;
    // domUtils
    static getElem: typeof UtilsModule.domUtils.getElem = UtilsModule.domUtils.getElem;
    static createElem: typeof UtilsModule.domUtils.createElem = UtilsModule.domUtils.createElem;
    static insertAfter: typeof UtilsModule.domUtils.insertAfter = UtilsModule.domUtils.insertAfter;
    static insertBefore: typeof UtilsModule.domUtils.insertBefore = UtilsModule.domUtils.insertBefore;
    static addClass: typeof UtilsModule.domUtils.addClass = UtilsModule.domUtils.addClass;
    static removeClass: typeof UtilsModule.domUtils.removeClass = UtilsModule.domUtils.removeClass;
    static toggleClass: typeof UtilsModule.domUtils.toggleClass = UtilsModule.domUtils.toggleClass;
    static hasClass: typeof UtilsModule.domUtils.hasClass = UtilsModule.domUtils.hasClass;
    static hasParent: typeof UtilsModule.domUtils.hasParent = UtilsModule.domUtils.hasParent;
    static findParent: typeof UtilsModule.domUtils.findParent = UtilsModule.domUtils.findParent;
    static findParents: typeof UtilsModule.domUtils.findParents = UtilsModule.domUtils.findParents;
    static hasChild: typeof UtilsModule.domUtils.hasChild = UtilsModule.domUtils.hasChild;
    static findChild: typeof UtilsModule.domUtils.findChild = UtilsModule.domUtils.findChild;
    static findChilds: typeof UtilsModule.domUtils.findChilds = UtilsModule.domUtils.findChilds;
    static templateToHtml: typeof UtilsModule.domUtils.templateToHtml = UtilsModule.domUtils.templateToHtml;
    // eventUtils
    static createEvent: typeof UtilsModule.eventUtils.createEvent = UtilsModule.eventUtils.createEvent;
    static dispatchEvent: typeof UtilsModule.eventUtils.dispatchEvent = UtilsModule.eventUtils.dispatchEvent;
    static addEventListener: typeof UtilsModule.eventUtils.addEventListener = UtilsModule.eventUtils.addEventListener;
    static removeEventListener: typeof UtilsModule.eventUtils.removeEventListener = UtilsModule.eventUtils.removeEventListener;
    // storageUtils
    static setLocalValue: typeof UtilsModule.storageUtils.setLocalValue = UtilsModule.storageUtils.setLocalValue;
    static getLocalValue: typeof UtilsModule.storageUtils.getLocalValue = UtilsModule.storageUtils.getLocalValue;
    static removeLocalValue: typeof UtilsModule.storageUtils.removeLocalValue = UtilsModule.storageUtils.removeLocalValue;
    static setSessionValue: typeof UtilsModule.storageUtils.setSessionValue = UtilsModule.storageUtils.setSessionValue;
    static getSessionValue: typeof UtilsModule.storageUtils.getSessionValue = UtilsModule.storageUtils.getSessionValue;
    static removeSessionValue: typeof UtilsModule.storageUtils.removeSessionValue = UtilsModule.storageUtils.removeSessionValue;
    static setCookie: typeof UtilsModule.storageUtils.setCookie = UtilsModule.storageUtils.setCookie;
    static getCookie: typeof UtilsModule.storageUtils.getCookie = UtilsModule.storageUtils.getCookie;
    static removeCookie: typeof UtilsModule.storageUtils.removeCookie = UtilsModule.storageUtils.removeCookie;
    // fetchUtils
    static doFetch: typeof UtilsModule.fetchUtils.doFetch = UtilsModule.fetchUtils.doFetch;
    static sendData: typeof UtilsModule.fetchUtils.sendData = UtilsModule.fetchUtils.sendData;
    static sendFormData: typeof UtilsModule.fetchUtils.sendFormData = UtilsModule.fetchUtils.sendFormData;
    static fetchData: typeof UtilsModule.fetchUtils.fetchData = UtilsModule.fetchUtils.fetchData;
    static sendForm: typeof UtilsModule.fetchUtils.sendForm = UtilsModule.fetchUtils.sendForm;
    // formUtils
    static appendFormData: typeof UtilsModule.formUtils.appendFormData = UtilsModule.formUtils.appendFormData;
    static encodeFormData: typeof UtilsModule.formUtils.encodeFormData = UtilsModule.formUtils.encodeFormData;
    static decodeFormData: typeof UtilsModule.formUtils.decodeFormData = UtilsModule.formUtils.decodeFormData;
    static formDataToURLParams: typeof UtilsModule.formUtils.formDataToURLParams = UtilsModule.formUtils.formDataToURLParams;
    static bodyToURLParams: typeof UtilsModule.formUtils.bodyToURLParams = UtilsModule.formUtils.bodyToURLParams;
    // errorUtils
    static reportError: typeof UtilsModule.errorUtils.reportError = UtilsModule.errorUtils.reportError;
    static throwError: typeof UtilsModule.errorUtils.throwError = UtilsModule.errorUtils.throwError;
}

// Making the version property non-writable in TypeScript
Object.defineProperty(Utils, 'version', { writable: false, configurable: true });

export default Utils;
