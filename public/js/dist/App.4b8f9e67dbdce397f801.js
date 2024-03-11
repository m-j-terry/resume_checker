/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array.js":
/*!**********************!*\
  !*** ./src/array.js ***!
  \**********************/
/***/ ((module) => {

const buzzWords = ['react', 'reactjs', 'node', 'nodejs', 'html', 'html5', 'css', 'css3', 'javascript', 'js', 'responsive', 'vue', 'vuejs', 'next', 'nextjs', 'angular', 'angularjs', 'backbone', 'backbonejs', 'front', 'back', 'frontend', 'backend', 'fullstack', 'full', 'mern', 'mernstack', 'ai', 'python', 'typescript', 'ts', 'py', 'restful', 'api', 'webpack', 'java', 'vite', 'loadtesting', 'load', 'testing', 'test', 'tests', 'objectoriented', 'object', 'oriented', 'programming', 'objectorientedprogramming', "oop", 'mongoose', 'mongodb', 'express', "sql", "mysql", "postgres", "postgresql", "django", "docker", 'ruby', "rubyonrails", "golang", "C", "C++", "devops", "linux", "perl", "php"];
module.exports = buzzWords;

/***/ }),

/***/ "./src/check-resume.js":
/*!*****************************!*\
  !*** ./src/check-resume.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const buzzWords = __webpack_require__(/*! ./array */ "./src/array.js");
function resumeChecker(description, resume) {
  let res = resume.toLowerCase().split(' ');
  let des = description.toLowerCase().split(' ');
  const resBuzzedWords = [];
  const desBuzzedWords = [];
  const unBuzzedWords = [];
  for (let i = 0; i < buzzWords.length; i++) {
    if (des.includes(buzzWords[i]) === true) {
      desBuzzedWords.push(buzzWords[i]);
    }
  }
  for (let i = 0; i < desBuzzedWords.length; i++) {
    if (res.includes(desBuzzedWords[i]) === true) {
      resBuzzedWords.push(desBuzzedWords[i]);
    } else {
      unBuzzedWords.push(desBuzzedWords[i]);
    }
  }
  let percentage = Math.round(resBuzzedWords.length / desBuzzedWords.length * 100);
  const missingWords = unBuzzedWords.join(', ');
  console.log('percentage match is ' + percentage + '%');
  console.log('missing buzz words include: ' + missingWords);
  let result = {
    Resume: resume,
    Description: description,
    Percentage: percentage,
    MissingWords: missingWords
  };
  // return `percentage match is ${percentage}% and missing buzz words include: ${missingWords}`
  return result;
}
module.exports = resumeChecker;

/***/ }),

/***/ "./src/components/Backround.js":
/*!*************************************!*\
  !*** ./src/components/Backround.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Background)
/* harmony export */ });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array */ "./src/array.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_array__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Background(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "BackgroundComponent"
  }, /*#__PURE__*/React.createElement("center", null, _array__WEBPACK_IMPORTED_MODULE_0___default().map(word => /*#__PURE__*/React.createElement("h3", {
    key: word,
    className: "word"
  }, word))));
}

/***/ }),

/***/ "./src/components/FormInput.js":
/*!*************************************!*\
  !*** ./src/components/FormInput.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const _excluded = ["label", "errorMessage", "handleInputChange", "id"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FormInput(props) {
  const [isBlur, setIsBlur] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
      label,
      errorMessage,
      handleInputChange,
      id
    } = props,
    inputProps = _objectWithoutProperties(props, _excluded);
  const handleInputBlur = e => {
    setIsBlur(true);
  };
  if (id === "submission-text") {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      htmlFor: id
    }, label), /*#__PURE__*/React.createElement("textarea", _extends({
      id: id,
      cols: "70",
      rows: "15",
      wrap: "hard"
    }, inputProps, {
      onChange: handleInputChange,
      onBlur: handleInputBlur,
      blurred: isBlur.toString(),
      onFocus: () => inputProps.name === 'confirm' && setIsBlur(true)
    })));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      className: "FormInputComponent"
    }, /*#__PURE__*/React.createElement("label", {
      className: "label",
      htmlFor: id
    }, label), /*#__PURE__*/React.createElement("textarea", _extends({
      id: id
    }, inputProps, {
      cols: "70",
      rows: "15",
      wrap: "hard",
      onChange: handleInputChange,
      onBlur: handleInputBlur,
      blurred: isBlur.toString(),
      onFocus: () => inputProps.name === 'confirm' && setIsBlur(true)
    })));
  }
}

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const NavBar = props => {
  return /*#__PURE__*/React.createElement("nav", {
    className: "NavBar"
  }, props.routes.map(_ref => {
    let {
      key,
      path
    } = _ref;
    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
      key: key,
      to: path
    }, key);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./src/router/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(_router__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./src/pages/About.js":
/*!****************************!*\
  !*** ./src/pages/About.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Backround__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Backround */ "./src/components/Backround.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function About(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "AboutPage"
  }, /*#__PURE__*/React.createElement(_components_Backround__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("h1", null, "about me"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "My name is Michael. I recently completed General Assembly's SEI Intensive Bootcamp. ", /*#__PURE__*/React.createElement("br", null), " I am a former educator looking to break into the software engineering industry. I designed this application to help engineers like myself put their best foot forward on applications. "), /*#__PURE__*/React.createElement("p", null, "Did you know that Applicant Tracking Systems (ATS) check your resume for hard-skill buzz words and that by tailoring your resume to reflect your expertise in these skills\u2014literally by making sure to include them directly\u2014you can increase the chances of your application making a good impression? This application checks job descriptions for the buzz words that may be missing from your resume so that you can improve your resume for that application! ", /*#__PURE__*/React.createElement("br", null), " See my ", /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/m-j-terry/resume_checker"
  }, "README"), " for a more thorough explanation of the steps for doing this!"), /*#__PURE__*/React.createElement("p", null, "Follow me on github and connect with me on Linkedin! Want to see more of my projects? Check out my portfolio!"), /*#__PURE__*/React.createElement("div", {
    className: "socials"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/m-j-terry"
  }, /*#__PURE__*/React.createElement("img", {
    className: "thumbnail",
    id: "github",
    src: "https://pngimg.com/d/github_PNG32.png"
  }))), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "https://portfolio-mjterry.netlify.app/"
  }, /*#__PURE__*/React.createElement("img", {
    className: "thumbnail",
    id: "portfolio",
    src: "https://portfolio-mjterry.netlify.app/assets/logo-black-5b2b3903.png"
  }))), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/michaeljterry/"
  }, /*#__PURE__*/React.createElement("img", {
    className: "thumbnail",
    src: "https://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Download-PNG.png"
  })))))));
}

/***/ }),

/***/ "./src/pages/Input.js":
/*!****************************!*\
  !*** ./src/pages/Input.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormInput */ "./src/components/FormInput.js");
/* harmony import */ var _components_Backround__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Backround */ "./src/components/Backround.js");
/* harmony import */ var _check_resume__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../check-resume */ "./src/check-resume.js");
/* harmony import */ var _check_resume__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_check_resume__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function Input(props) {
  const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setResult({
      Resume: null,
      Description: null,
      Percentage: null,
      MissingWords: null
    });
    console.log(result.Percentage);
    setValues({
      description: '',
      resume: ''
    });
  }, []);
  const inputs = [{
    id: "job-description",
    name: "description",
    type: "textarea",
    placeholder: "Paste job description here",
    errorMessage: "whoopsiedaisy!",
    label: "Job Description: ",
    required: true
  }, {
    id: "resume",
    name: "resume",
    type: "textarea",
    cols: "40",
    rows: "10",
    placeholder: "Paste resume here",
    errorMessage: "whoopsiedaisy!",
    label: "Resume: "
  }];
  const handleInputChange = e => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (e) {
      // e.preventDefault()
      // let formData = new FormData()
      // console.log('values = ' + values)
      // for (let key in values) {
      //     formData.append(key, values[key])
      // }
      let checker = _check_resume__WEBPACK_IMPORTED_MODULE_3___default()(values.description, values.resume);
      console.log(checker);
      setResult(checker);
      // console.log('formData = ' + formData)
    });
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  if (!result.Percentage) {
    return /*#__PURE__*/React.createElement("div", {
      className: "InputPage"
    }, /*#__PURE__*/React.createElement(_components_Backround__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("div", {
      className: "opacity"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "heading"
    }, "ATS Resume Checker"), /*#__PURE__*/React.createElement("h2", {
      className: "heading"
    }, "Paste your resume check what percent it matches with the listing's job description.")), /*#__PURE__*/React.createElement("form", null, inputs.map(input => /*#__PURE__*/React.createElement(_components_FormInput__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      className: "FormInput",
      key: input.id
    }, input, {
      value: values[input.name],
      handleInputChange: handleInputChange
    })))), /*#__PURE__*/React.createElement("button", {
      onClick: () => handleSubmit()
    }, "submit")));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      className: "InputPage"
    }, /*#__PURE__*/React.createElement(_components_Backround__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement("h2", null, "Your resume is a ", result.Percentage, "% match to the job description."), result.Percentage === 100 ? /*#__PURE__*/React.createElement("h2", null, "You're a great fit! Make sure to include a cover letter to take your application to the next level!") : /*#__PURE__*/React.createElement("h2", null, "These are the words that were missing in your resume: ", result.MissingWords, " ", /*#__PURE__*/React.createElement("br", null), "Update your resume to include these so that your resume goes even farther!"), /*#__PURE__*/React.createElement("p", null, "Ready to try another job description?"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setResult({
        Resume: null,
        Description: null,
        Percentage: null,
        MissingWords: null
      })
    }, "reset"));
  }
}

/***/ }),

/***/ "./src/pages/Results.js":
/*!******************************!*\
  !*** ./src/pages/Results.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export default */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Backround__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Backround */ "./src/components/Backround.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function Results(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ResultsPage"
  }, /*#__PURE__*/React.createElement(_components_Backround__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("h1", null, props.page), /*#__PURE__*/React.createElement("div", {
    className: "opacity"
  }, /*#__PURE__*/React.createElement("h2", null, "Your resume is a ", props.result.Percentage, "% match to the job description."), props.result.Percentagercentage === 100 ? /*#__PURE__*/React.createElement("h2", null, "You're a great fit! Make sure to include a cover letter to take your application to the next level!") : /*#__PURE__*/React.createElement("h2", null, "These are the words that were missing in your resume: ", props.result.MissingWords, " ", /*#__PURE__*/React.createElement("br", null), "Update your resume to include these so that your resume goes even farther!"))));
}

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./src/router/routes.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



const AppRouter = () => {
  return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, null, /*#__PURE__*/React.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    routes: _routes__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, null, _routes__WEBPACK_IMPORTED_MODULE_1__["default"].map(_ref => {
    let {
      Component,
      key,
      path
    } = _ref;
    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
      key: key,
      path: path,
      element: /*#__PURE__*/React.createElement(Component, {
        page: key
      })
    });
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppRouter);

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/About */ "./src/pages/About.js");
/* harmony import */ var _pages_Results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Results */ "./src/pages/Results.js");
/* harmony import */ var _pages_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Input */ "./src/pages/Input.js");



const routes = [{
  Component: _pages_Input__WEBPACK_IMPORTED_MODULE_2__["default"],
  key: 'Input',
  path: '/'
}, {
  Component: _pages_About__WEBPACK_IMPORTED_MODULE_0__["default"],
  key: 'About',
  path: '/about'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_client_js-node_modules_react-router-dom_dist_index_js"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.3eb3d939418de6ed095d0df7df31d5ca.js.map