"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_vue_1 = __importDefault(require("@vitejs/plugin-vue"));
// https://vitejs.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_vue_1.default)()],
    build: {
        outDir: './out',
        assetsDir: './as',
        rollupOptions: {
            input: {
                main: 'src/main.ts',
                sub: 'src/sub.ts',
            }
        },
    }
});
