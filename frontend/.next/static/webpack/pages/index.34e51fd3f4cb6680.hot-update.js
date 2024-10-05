"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"../../node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../../node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [task, setTask] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"all\"); // Filter state for tasks\n    // Fetch tasks from Flask API on component mount\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchTasks = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:5000/tasks\");\n                setTasks(response.data);\n            } catch (error) {\n                console.error(\"Error fetching tasks:\", error);\n            }\n        };\n        fetchTasks();\n    }, []);\n    // Add a new task\n    const addTask = async ()=>{\n        if (task.trim() === \"\") return; // Prevent adding empty tasks\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://127.0.0.1:5000/tasks\", {\n                title: task\n            });\n            setTasks([\n                ...tasks,\n                response.data\n            ]); // Update the state with the new task\n            setTask(\"\"); // Clear the input field after adding a task\n        } catch (error) {\n            console.error(\"Error adding task:\", error);\n        }\n    };\n    // Delete a task\n    const deleteTask = async (id)=>{\n        if (!confirm(\"Are you sure you want to delete this task?\")) return; // Confirmation dialog\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"http://127.0.0.1:5000/tasks/\".concat(id));\n            setTasks(tasks.filter((task)=>task.id !== id)); // Update state after deleting\n        } catch (error) {\n            console.error(\"Error deleting task:\", error);\n        }\n    };\n    // Filter tasks based on filter state\n    const filteredTasks = tasks.filter((task)=>{\n        if (filter === \"completed\") return task.completed;\n        if (filter === \"incomplete\") return !task.completed;\n        return true; // For 'all' tasks\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-1c47ab790e23f76d\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-1c47ab790e23f76d\",\n                children: \"To-Do List\"\n            }, void 0, false, {\n                fileName: \"/home/jasvir/my nextjs python/frontend/pages/index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-1c47ab790e23f76d\" + \" \" + \"task-input\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: task,\n                        onChange: (e)=>setTask(e.target.value),\n                        placeholder: \"Add a new task\",\n                        className: \"jsx-1c47ab790e23f76d\"\n                    }, void 0, false, {\n                        fileName: \"/home/jasvir/my nextjs python/frontend/pages/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: addTask,\n                        className: \"jsx-1c47ab790e23f76d\",\n                        children: \"Add Task\"\n                    }, void 0, false, {\n                        fileName: \"/home/jasvir/my nextjs python/frontend/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jasvir/my nextjs python/frontend/pages/index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-1c47ab790e23f76d\" + \" \" + \"filter-buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setFilter(\"all\"),\n                        className: \"jsx-1c47ab790e23f76d\",\n                        children: \"All\"\n                    }, void 0, false, {\n                        fileName: \"/home/jasvir/my nextjs python/frontend/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setFilter(\"completed\"),\n                        className: \"jsx-1c47ab790e23f76d\",\n                        children: \"Completed\"\n                    }, void 0, false, {\n                        fileName: \"/home/jasvir/my nextjs python/frontend/pages/index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setFilter(\"incomplete\"),\n                        className: \"jsx-1c47ab790e23f76d\",\n                        children: \"Incomplete\"\n                    }, void 0, false, {\n                        fileName: \"/home/jasvir/my nextjs python/frontend/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jasvir/my nextjs python/frontend/pages/index.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"jsx-1c47ab790e23f76d\",\n                children: filteredTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"jsx-1c47ab790e23f76d\" + \" \" + ((task.completed ? \"completed\" : \"\") || \"\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"jsx-1c47ab790e23f76d\",\n                                children: task.title\n                            }, void 0, false, {\n                                fileName: \"/home/jasvir/my nextjs python/frontend/pages/index.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>deleteTask(task.id),\n                                className: \"jsx-1c47ab790e23f76d\",\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/home/jasvir/my nextjs python/frontend/pages/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, task.id, true, {\n                        fileName: \"/home/jasvir/my nextjs python/frontend/pages/index.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/jasvir/my nextjs python/frontend/pages/index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"1c47ab790e23f76d\",\n                children: \"\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jasvir/my nextjs python/frontend/pages/index.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"mZ9d053Do6Pl5VlD9wTal/Zjr68=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O0FBWTFCO0dBbEZ3QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdGFzaywgc2V0VGFza10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgnYWxsJyk7IC8vIEZpbHRlciBzdGF0ZSBmb3IgdGFza3NcblxuICAvLyBGZXRjaCB0YXNrcyBmcm9tIEZsYXNrIEFQSSBvbiBjb21wb25lbnQgbW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFRhc2tzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC90YXNrcycpO1xuICAgICAgICBzZXRUYXNrcyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRhc2tzOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoVGFza3MoKTtcbiAgfSwgW10pO1xuXG4gIC8vIEFkZCBhIG5ldyB0YXNrXG4gIGNvbnN0IGFkZFRhc2sgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHRhc2sudHJpbSgpID09PSAnJykgcmV0dXJuOyAvLyBQcmV2ZW50IGFkZGluZyBlbXB0eSB0YXNrc1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC90YXNrcycsIHsgdGl0bGU6IHRhc2sgfSk7XG4gICAgICBzZXRUYXNrcyhbLi4udGFza3MsIHJlc3BvbnNlLmRhdGFdKTsgLy8gVXBkYXRlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgdGFza1xuICAgICAgc2V0VGFzaygnJyk7IC8vIENsZWFyIHRoZSBpbnB1dCBmaWVsZCBhZnRlciBhZGRpbmcgYSB0YXNrXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFkZGluZyB0YXNrOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gRGVsZXRlIGEgdGFza1xuICBjb25zdCBkZWxldGVUYXNrID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgaWYgKCFjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRhc2s/XCIpKSByZXR1cm47IC8vIENvbmZpcm1hdGlvbiBkaWFsb2dcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvdGFza3MvJHtpZH1gKTtcbiAgICAgIHNldFRhc2tzKHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaWQgIT09IGlkKSk7IC8vIFVwZGF0ZSBzdGF0ZSBhZnRlciBkZWxldGluZ1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyB0YXNrOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gRmlsdGVyIHRhc2tzIGJhc2VkIG9uIGZpbHRlciBzdGF0ZVxuICBjb25zdCBmaWx0ZXJlZFRhc2tzID0gdGFza3MuZmlsdGVyKHRhc2sgPT4ge1xuICAgIGlmIChmaWx0ZXIgPT09ICdjb21wbGV0ZWQnKSByZXR1cm4gdGFzay5jb21wbGV0ZWQ7XG4gICAgaWYgKGZpbHRlciA9PT0gJ2luY29tcGxldGUnKSByZXR1cm4gIXRhc2suY29tcGxldGVkO1xuICAgIHJldHVybiB0cnVlOyAvLyBGb3IgJ2FsbCcgdGFza3NcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGgxPlRvLURvIExpc3Q8L2gxPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhc2staW5wdXRcIj5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgdmFsdWU9e3Rhc2t9IFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFzayhlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgbmV3IHRhc2tcIiBcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRUYXNrfT5BZGQgVGFzazwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoJ2FsbCcpfT5BbGw8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoJ2NvbXBsZXRlZCcpfT5Db21wbGV0ZWQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoJ2luY29tcGxldGUnKX0+SW5jb21wbGV0ZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDx1bD5cbiAgICAgICAge2ZpbHRlcmVkVGFza3MubWFwKHRhc2sgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Rhc2suaWR9IGNsYXNzTmFtZT17dGFzay5jb21wbGV0ZWQgPyAnY29tcGxldGVkJyA6ICcnfT5cbiAgICAgICAgICAgIDxzcGFuPnt0YXNrLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlVGFzayh0YXNrLmlkKX0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC8qIFlvdXIgZXhpc3Rpbmcgc3R5bGVzIGhlcmUgKi9cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiSG9tZSIsInRhc2tzIiwic2V0VGFza3MiLCJ0YXNrIiwic2V0VGFzayIsImZpbHRlciIsInNldEZpbHRlciIsImZldGNoVGFza3MiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJhZGRUYXNrIiwidHJpbSIsInBvc3QiLCJ0aXRsZSIsImRlbGV0ZVRhc2siLCJpZCIsImNvbmZpcm0iLCJkZWxldGUiLCJmaWx0ZXJlZFRhc2tzIiwiY29tcGxldGVkIiwiZGl2IiwiaDEiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibWFwIiwibGkiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});