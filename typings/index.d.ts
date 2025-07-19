// Type definitions for firestore-google-apps-script
// Project: https://github.com/grahamearley/FirestoreGoogleAppsScript
// Definitions by: LaughDonor <https://github.com/LaughDonor>
// TypeScript Version: 3.9
/* eslint @typescript-eslint/triple-slash-reference: "off" */
/* eslint @typescript-eslint/no-unused-vars: "off" */

/// <reference types="google-apps-script" />
/// <reference path="Auth.d.ts"/>
/// <reference path="Common.d.ts"/>
/// <reference path="Query.d.ts"/>
/// <reference path="Test.d.ts"/>

import FirestoreAPI = gapi.client.firestore;

import Auth from '../Auth';
import Document from '../Document';
import { getFirestore } from '../Firestore';
import FirestoreRead from '../FirestoreRead';
import FirestoreWrite from '../FirestoreWrite';
import FirestoreDelete from '../FirestoreDelete';
import Query from '../Query';
import Request from '../Request';

import type * as AuthTypes from './Auth';

declare namespace FirestoreGoogleAppsScript {
  type Value = null | boolean | number | string | FirestoreAPI.LatLng | Date | ValueObject | ValueArray;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ValueObject extends Record<string, Value> {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ValueArray extends Array<Value> {}

  type Auth = typeof Auth;
  type Document = InstanceType<typeof Document>;
  type Firestore = ReturnType<typeof getFirestore>;
  type FirestoreRead = InstanceType<typeof FirestoreRead>;
  type FirestoreWrite = InstanceType<typeof FirestoreWrite>;
  type FirestoreDelete = InstanceType<typeof FirestoreDelete>;
  type Query = InstanceType<typeof Query>;
  type Request = InstanceType<typeof Request>;

  type TokenResponse = AuthTypes.TokenResponse;

  interface FirestoreApp {
    getFirestore: typeof getFirestore;
  }
}

// This library purposefuly does not declare a specific global variable, for you
// are free to pick any fitting name they (through the GAS UI or with an
// appsscript.json config file). Within your code, this declaration will be
// useful to avoid TypeScript errors when using the FirestoreApp object (edit
// the variable name to match the one you actually use in your GAS project):
// declare var FirestoreApp: FirestoreGoogleAppsScript.FirestoreApp;
