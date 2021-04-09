"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const fetch = require('node-fetch');
const acceptPSIRequestEndpoint = '/api/acceptPSIRequest/acceptPSIRequest';
let InitPSIService = class InitPSIService {
    async initPSI({ requesteeID, requesteeIP }, configRepo) {
        console.log('PSI initiated with client B');
        const clientID = 'A';
        console.log(requesteeIP);
        await fetch(requesteeIP + acceptPSIRequestEndpoint, { method: 'POST', body: JSON.stringify({ requesterID: clientID }), headers: { 'Content-Type': 'application/json' } });
    }
};
InitPSIService = __decorate([
    typedi_1.Service()
], InitPSIService);
exports.default = InitPSIService;
