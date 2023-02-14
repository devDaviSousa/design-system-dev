"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  colors: () => colors
});
module.exports = __toCommonJS(src_exports);

// src/colors.ts
var colors = {
  black: "#000",
  baseTitle: "#272221",
  baseSubTitle: "#403937",
  baseText: "#574f4d",
  baseLabel: "#8d8686",
  baseHover: "#d7d5d5",
  baseButton: "#e6e5e5",
  baseInput: "#ededed",
  baseCardinal: "#f3f2f2",
  background: "#fafafa",
  white: "#ffffff",
  yellowDark: "#c47f17",
  yellow: "#dbac2c",
  yellowLight: "#f1e9c9",
  purpleDark: "#4b2995",
  puple: "#8047f8",
  puplelight: "#ebe5f9"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors
});
