"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
exports.getInstance = function (baseURL, merchantId, merchantKey) {
    var instance = axios_1.default.create({
        baseURL: baseURL,
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'merchantId': merchantId,
            'merchantKey': merchantKey,
        }
    });
    return instance;
};
//# sourceMappingURL=axios-instance.js.map