/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/HuiManager.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/Cache.ts":
/*!**********************!*\
  !*** ./src/Cache.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Cache {\n    constructor() {\n        this.data = new Map();\n    }\n    get(url) {\n        return this.data.get(url);\n    }\n    set(url, data) {\n        this.data.set(url, data);\n    }\n}\nexports.Cache = Cache;\n\n\n//# sourceURL=webpack:///./src/Cache.ts?");

/***/ }),

/***/ "./src/Constants.ts":
/*!**************************!*\
  !*** ./src/Constants.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.NODE_HEADER_LENGTH = 4;\nexports.GEOMETRY_ATTRIB_HEADER_LENGTH = 4;\nexports.NODE_GEOMETRY = 1;\nexports.NODE_MESH = 2;\nexports.NODE_SKELETON = 3;\nexports.NODE_ANIMATION_CLIP = 4;\n//geometry attribute Types\nexports.GEOMETRY_ATTR_VERTICIES = 1;\nexports.GEOMETRY_ATTR_TRIANGLE_FACES = 2;\nexports.GEOMETRY_ATTR_SKIN_INDICES = 3;\nexports.GEOMETRY_ATTR_SKIN_WEIGHTS = 4;\n//Mesh param types\nexports.MESH_PARAM_GEOMETRY = 1;\nexports.MESH_PARAM_SKELETON = 2;\nexports.BONE_NO_PARENT = 0xFFFF;\n//Animation tracks\nexports.TRACK_BONE_POSITION_KEYFRAMES = 1;\nexports.TRACK_BONE_ROTATION_KEYFRAMES = 2;\n\n\n//# sourceURL=webpack:///./src/Constants.ts?");

/***/ }),

/***/ "./src/HuiManager.ts":
/*!***************************!*\
  !*** ./src/HuiManager.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst THREE = __importStar(__webpack_require__(/*! three */ \"three\"));\nconst Cache_1 = __webpack_require__(/*! ./Cache */ \"./src/Cache.ts\");\nconst nodes_1 = __webpack_require__(/*! ./nodes/nodes */ \"./src/nodes/nodes.ts\");\nconst Constants = __importStar(__webpack_require__(/*! ./Constants */ \"./src/Constants.ts\"));\nconst ThreeBuilder_1 = __webpack_require__(/*! ./ThreeBuilder */ \"./src/ThreeBuilder.ts\");\nclass HuiManager {\n    constructor(loader) {\n        if (!loader) {\n            this.fileLoader = new THREE.FileLoader();\n            this.fileLoader.setResponseType(\"arraybuffer\");\n        }\n        this.cache = new Cache_1.Cache();\n    }\n    loadScene(url, callback, onError) {\n        var builtNodes = this.cache.get(url);\n        if (builtNodes) {\n            callback(this.buildSceneFromNodes(builtNodes));\n        }\n        else {\n            this.fileLoader.load(url, (data) => {\n                if (data instanceof ArrayBuffer) {\n                    var parsedNodes = this.parseNodes(new Uint8Array(data));\n                    var builtNodes = this.buildNodes(parsedNodes);\n                    this.cache.set(url, builtNodes);\n                    callback(this.buildSceneFromNodes(builtNodes));\n                }\n                else {\n                    console.error(\"loaded data is not ArrayBuffer\");\n                }\n            }, undefined, (err) => { console.error(err); if (onError)\n                onError(err); });\n        }\n        this.fileLoader.load();\n    }\n    buildSceneFromNodes(builtNodes) {\n        var skeleton = undefined;\n        var animations = [];\n        var scene = new THREE.Object3D();\n        for (var node of builtNodes) {\n            if (node instanceof THREE.Skeleton) {\n                skeleton = this.cloneSkeleton(node);\n                break;\n            }\n        }\n        for (var node of builtNodes) {\n            if (node instanceof THREE.SkinnedMesh && skeleton) {\n                var skinnedMesh = new THREE.SkinnedMesh(node.geometry, node.material);\n                scene.add(skinnedMesh);\n                skinnedMesh.add(skeleton.bones[0]);\n                skinnedMesh.bind(skeleton);\n                skinnedMesh.remove(skeleton.bones[0]);\n                //  scene.add(skinnedMesh)\n            }\n            else if (node instanceof THREE.Mesh) {\n                var mesh = new THREE.Mesh(node.geometry, node.material);\n                scene.add(mesh);\n            }\n            else if (node instanceof THREE.AnimationClip) {\n                animations.push(node);\n            }\n        }\n        if (skeleton) {\n            var armature = new THREE.Object3D();\n            armature.position.copy(skeleton.bones[0].position);\n            skeleton.bones[0].position.set(0, 0, 0);\n            armature.add(skeleton.bones[0]);\n            scene.add(armature);\n        }\n        return {\n            scene: scene,\n            animations: animations\n        };\n    }\n    cloneSkeleton(skeleton) {\n        var clonedBones = [];\n        for (var bone of skeleton.bones) {\n            if (!bone.parent) {\n                var clonedRootBone = bone.clone(true);\n                clonedRootBone.traverse((b) => {\n                    if (b instanceof THREE.Bone && b.name != \"\")\n                        clonedBones.push(b);\n                });\n            }\n        }\n        return new THREE.Skeleton(clonedBones);\n    }\n    parseNodes(data) {\n        var parsedNodes = [];\n        var nodeStart = 0;\n        while (nodeStart < data.byteLength) {\n            var node = undefined;\n            var nodeBuf = new Uint8Array(data.buffer, data.byteOffset + nodeStart);\n            var nodeType = nodeBuf[0];\n            var nodeLength = nodes_1.HuiNode.parseNodeLength(nodeBuf);\n            switch (nodeType) {\n                case Constants.NODE_GEOMETRY:\n                    node = new nodes_1.GeometryNode(nodeBuf);\n                    break;\n                case Constants.NODE_MESH:\n                    node = new nodes_1.MeshNode(nodeBuf);\n                    break;\n                case Constants.NODE_SKELETON:\n                    node = new nodes_1.SkeletonNode(nodeBuf);\n                    break;\n                case Constants.NODE_ANIMATION_CLIP:\n                    node = new nodes_1.AnimationClipNode(nodeBuf);\n                    break;\n                default:\n                    console.error(\"unknown node type:\" + nodeType);\n                    break;\n            }\n            if (node) {\n                parsedNodes.push(node);\n            }\n            else {\n                throw \"node not parsed\";\n            }\n            nodeStart += nodeLength;\n        }\n        return parsedNodes;\n    }\n    buildNodes(nodes) {\n        var builtNodes = new Array(nodes.length);\n        for (var i = 0; i < nodes.length; i++) {\n            var node = nodes[i];\n            if (node instanceof nodes_1.GeometryNode) {\n                builtNodes[i] = ThreeBuilder_1.ThreeBuilder.buildGeometry(node);\n            }\n            else if (node instanceof nodes_1.SkeletonNode) {\n                builtNodes[i] = ThreeBuilder_1.ThreeBuilder.buildSkeleton(node);\n            }\n            else if (node instanceof nodes_1.AnimationClipNode) {\n                builtNodes[i] = ThreeBuilder_1.ThreeBuilder.buildAnimationClip(node);\n            }\n        }\n        for (var i = 0; i < nodes.length; i++) {\n            var node = nodes[i];\n            if (node instanceof nodes_1.MeshNode) {\n                var geometry = builtNodes[node.geometryId];\n                builtNodes[i] = ThreeBuilder_1.ThreeBuilder.buildMesh(node, geometry);\n            }\n        }\n        return builtNodes;\n    }\n}\nexports.HuiManager = HuiManager;\n///@ts-ignore\nglobal[\"HuiManager\"] = HuiManager;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/HuiManager.ts?");

/***/ }),

/***/ "./src/HuiMath.ts":
/*!************************!*\
  !*** ./src/HuiMath.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/*\n* converts Float16 to Number\n*/\nfunction int16AsFloat(value) {\n    var sign = (value & 0x8000) >> 15;\n    var exp = (value & 0b0111110000000000) >> 10;\n    var mantissa = (value & 0x03FF);\n    if (exp == 0 && mantissa == 0) {\n        return 0;\n    }\n    if (exp == 0b11111) {\n        if (mantissa == 0) {\n            return (sign) ? -Infinity : Infinity;\n        }\n        else\n            return NaN;\n    }\n    exp = exp - 15;\n    var f32 = new Float32Array(1);\n    var i32 = new Int32Array(f32.buffer);\n    var resInt = (0x01 & sign) << 31;\n    resInt = resInt | ((exp + 0x7f) << 23);\n    resInt = resInt | (mantissa << 13);\n    i32[0] = resInt;\n    return f32[0];\n}\nexports.int16AsFloat = int16AsFloat;\nfunction getUint24(data, offset) {\n    return data[offset] + (data[offset + 1] << 8) + (data[offset + 2] << 16);\n}\nexports.getUint24 = getUint24;\nfunction getUint16(data, offset) {\n    return data[offset] + (data[offset + 1] << 8);\n}\nexports.getUint16 = getUint16;\nfunction getFloat16(data, offset) {\n    var intval = data[offset] + (data[offset + 1] << 8);\n    return int16AsFloat(intval);\n}\nexports.getFloat16 = getFloat16;\n\n\n//# sourceURL=webpack:///./src/HuiMath.ts?");

/***/ }),

/***/ "./src/ThreeBuilder.ts":
/*!*****************************!*\
  !*** ./src/ThreeBuilder.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst THREE = __importStar(__webpack_require__(/*! three */ \"three\"));\nconst Constants = __importStar(__webpack_require__(/*! ./Constants */ \"./src/Constants.ts\"));\nvar ThreeBuilder;\n(function (ThreeBuilder) {\n    function buildGeometry(node) {\n        var geometry = new THREE.BufferGeometry();\n        if (node.verticies) {\n            geometry.addAttribute('position', new THREE.BufferAttribute(node.verticies, 3));\n        }\n        if (node.indices) {\n            geometry.setIndex(new THREE.BufferAttribute(node.indices, 1));\n        }\n        if (node.skinIndices) {\n            geometry.addAttribute('skinIndex', new THREE.Uint16BufferAttribute(node.skinIndices, 4));\n        }\n        if (node.skinWeights) {\n            geometry.addAttribute('skinWeight', new THREE.Float32BufferAttribute(node.skinWeights, 4));\n        }\n        return geometry;\n    }\n    ThreeBuilder.buildGeometry = buildGeometry;\n    function buildSkeleton(skeletonNode) {\n        var bones = [];\n        for (var boneNode of skeletonNode.bones) {\n            var bone = new THREE.Bone();\n            bone.position.set(boneNode.x, boneNode.y, boneNode.z);\n            if (boneNode.parent != Constants.BONE_NO_PARENT) {\n                var parentNode = skeletonNode.bones[boneNode.parent];\n                bone.position.x += parentNode.tailX - parentNode.x;\n                bone.position.y += parentNode.tailY - parentNode.y;\n                bone.position.z += parentNode.tailZ - parentNode.z;\n            }\n            bones.push(bone);\n        }\n        for (var i = 0; i < bones.length; i++) {\n            bones[i].name = makeBoneName(i);\n            if (skeletonNode.bones[i].parent != Constants.BONE_NO_PARENT) {\n                bones[skeletonNode.bones[i].parent].add(bones[i]);\n            }\n        }\n        //add fake bones\n        for (var i = 0; i < bones.length; i++) {\n            if (bones[i].children.length == 0) {\n                var bone = new THREE.Bone();\n                bone.position.set(skeletonNode.bones[i].tailX, skeletonNode.bones[i].tailY, skeletonNode.bones[i].tailZ);\n                bones[i].add(bone);\n            }\n        }\n        return new THREE.Skeleton(bones);\n    }\n    ThreeBuilder.buildSkeleton = buildSkeleton;\n    function buildAnimationClip(node) {\n        var tracks = [];\n        for (var trackNode of node.tracks) {\n            if (trackNode.times.length == 0) {\n                continue;\n            }\n            tracks.push(buildKeyFrameTrack(trackNode));\n        }\n        return new THREE.AnimationClip(node.name, node.duration, tracks);\n    }\n    ThreeBuilder.buildAnimationClip = buildAnimationClip;\n    function buildKeyFrameTrack(trackNode) {\n        var name = \"\";\n        if (trackNode.type == Constants.TRACK_BONE_POSITION_KEYFRAMES) {\n            name = makeBoneName(trackNode.boneNumber) + \".position\";\n            return new THREE.VectorKeyframeTrack(name, trackNode.times, trackNode.values);\n        }\n        else if (trackNode.type == Constants.TRACK_BONE_ROTATION_KEYFRAMES) {\n            name = makeBoneName(trackNode.boneNumber) + \".quaternion\";\n            return new THREE.QuaternionKeyframeTrack(name, trackNode.times, trackNode.values);\n        }\n        else {\n            throw new Error(\"can not create track\");\n        }\n    }\n    function buildMesh(node, geometry, mat) {\n        //  var mesh:THREE.Mesh|THREE.SkinnedMesh;\n        var material = mat || new THREE.MeshPhongMaterial({\n            skinning: true,\n            color: 0x156289,\n            emissive: 0x072534,\n            flatShading: true\n        });\n        if (node.skeletonId >= 0) {\n            return new THREE.SkinnedMesh(geometry, material);\n        }\n        else {\n            return new THREE.Mesh(geometry, material);\n        }\n    }\n    ThreeBuilder.buildMesh = buildMesh;\n    function makeBoneName(boneNumber) {\n        return \"bone\" + boneNumber;\n    }\n})(ThreeBuilder = exports.ThreeBuilder || (exports.ThreeBuilder = {}));\n\n\n//# sourceURL=webpack:///./src/ThreeBuilder.ts?");

/***/ }),

/***/ "./src/nodes/AnimationClipNode.ts":
/*!****************************************!*\
  !*** ./src/nodes/AnimationClipNode.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst HuiNode_1 = __webpack_require__(/*! ./HuiNode */ \"./src/nodes/HuiNode.ts\");\nconst AnimationTrack_1 = __webpack_require__(/*! ./AnimationTrack */ \"./src/nodes/AnimationTrack.ts\");\nconst Constants = __importStar(__webpack_require__(/*! ../Constants */ \"./src/Constants.ts\"));\nconst HuiMath = __importStar(__webpack_require__(/*! ../HuiMath */ \"./src/HuiMath.ts\"));\nclass AnimationClipNode extends HuiNode_1.HuiNode {\n    constructor(data) {\n        super();\n        this.tracks = [];\n        this.duration = 0;\n        var nodeLength = HuiNode_1.HuiNode.parseNodeLength(data);\n        var dataPtr = Constants.NODE_HEADER_LENGTH;\n        var nameLength = HuiMath.getUint16(data, dataPtr);\n        var nameBuf = new Uint8Array(data.buffer, data.byteOffset + dataPtr + 2, nameLength);\n        this.name = new TextDecoder(\"utf-8\").decode(nameBuf);\n        dataPtr += 2 + nameLength;\n        while (dataPtr < nodeLength - 4) {\n            var trackRecordLength = HuiMath.getUint24(data, dataPtr + 1);\n            var trackBuf = new Uint8Array(data.buffer, data.byteOffset + dataPtr);\n            var track = new AnimationTrack_1.AnimationTrack(trackBuf);\n            this.tracks.push(track);\n            if (this.duration < track.getDuration()) {\n                this.duration = track.getDuration();\n            }\n            dataPtr += trackRecordLength;\n        }\n    }\n}\nexports.AnimationClipNode = AnimationClipNode;\n\n\n//# sourceURL=webpack:///./src/nodes/AnimationClipNode.ts?");

/***/ }),

/***/ "./src/nodes/AnimationTrack.ts":
/*!*************************************!*\
  !*** ./src/nodes/AnimationTrack.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Constants = __importStar(__webpack_require__(/*! ../Constants */ \"./src/Constants.ts\"));\nconst HuiMath = __importStar(__webpack_require__(/*! ../HuiMath */ \"./src/HuiMath.ts\"));\nclass AnimationTrack {\n    constructor(data) {\n        this.boneNumber = 0xFFFF;\n        this.times = [];\n        this.values = [];\n        this.type = data[0];\n        var trackRecordLength = HuiMath.getUint24(data, 1);\n        switch (this.type) {\n            case Constants.TRACK_BONE_POSITION_KEYFRAMES:\n                {\n                    const FRAME_RECORD_LENGTH = 8;\n                    this.boneNumber = HuiMath.getUint16(data, 4);\n                    var offset = 6;\n                    var time = 0;\n                    while (offset < trackRecordLength) {\n                        var dt = HuiMath.getFloat16(data, offset);\n                        time += dt;\n                        this.times.push(time);\n                        this.values.push(HuiMath.getFloat16(data, offset + 2));\n                        this.values.push(HuiMath.getFloat16(data, offset + 4));\n                        this.values.push(HuiMath.getFloat16(data, offset + 6));\n                        offset += FRAME_RECORD_LENGTH;\n                    }\n                }\n                break;\n            case Constants.TRACK_BONE_ROTATION_KEYFRAMES:\n                {\n                    const FRAME_RECORD_LENGTH = 8;\n                    this.boneNumber = HuiMath.getUint16(data, 4);\n                    var offset = 6;\n                    var time = 0;\n                    while (offset < trackRecordLength) {\n                        var dt = HuiMath.getFloat16(data, offset);\n                        time += dt;\n                        this.times.push(time);\n                        var x = HuiMath.getFloat16(data, offset + 2);\n                        var y = HuiMath.getFloat16(data, offset + 4);\n                        var z = HuiMath.getFloat16(data, offset + 6);\n                        var w = Math.sqrt(1 - x * x - y * y - z * z);\n                        this.values.push(x, y, z, w);\n                        offset += FRAME_RECORD_LENGTH;\n                    }\n                }\n                break;\n            default:\n                console.error(\"unknown animation track type: \" + this.type);\n                break;\n        }\n    }\n    getDuration() {\n        if (this.times.length > 0) {\n            return this.times[this.times.length - 1];\n        }\n        return 0;\n    }\n}\nexports.AnimationTrack = AnimationTrack;\n\n\n//# sourceURL=webpack:///./src/nodes/AnimationTrack.ts?");

/***/ }),

/***/ "./src/nodes/GeometryNode.ts":
/*!***********************************!*\
  !*** ./src/nodes/GeometryNode.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst HuiNode_1 = __webpack_require__(/*! ./HuiNode */ \"./src/nodes/HuiNode.ts\");\nconst Constants = __importStar(__webpack_require__(/*! ../Constants */ \"./src/Constants.ts\"));\nconst HuiMath = __importStar(__webpack_require__(/*! ../HuiMath */ \"./src/HuiMath.ts\"));\nclass GeometryNode extends HuiNode_1.HuiNode {\n    constructor(data) {\n        super();\n        var nodeLength = HuiNode_1.HuiNode.parseNodeLength(data);\n        var dataPtr = Constants.NODE_HEADER_LENGTH;\n        var attrLength = 0;\n        while (dataPtr < nodeLength) {\n            var attrType = data[dataPtr];\n            attrLength = HuiMath.getUint24(data, dataPtr + 1);\n            var attrDataLength = attrLength - Constants.GEOMETRY_ATTRIB_HEADER_LENGTH;\n            switch (attrType) {\n                case Constants.GEOMETRY_ATTR_VERTICIES:\n                    this.verticies = new Float32Array(attrDataLength / 2);\n                    for (var i = 0; i < this.verticies.length; i++) {\n                        this.verticies[i] = HuiMath.getFloat16(data, dataPtr + Constants.GEOMETRY_ATTRIB_HEADER_LENGTH + i * 2);\n                    }\n                    break;\n                case Constants.GEOMETRY_ATTR_TRIANGLE_FACES:\n                    this.indices = new Uint32Array(attrDataLength / 2); //uint16 in file\n                    for (var i = 0; i < this.indices.length; i++) {\n                        this.indices[i] = HuiMath.getUint16(data, dataPtr + Constants.GEOMETRY_ATTRIB_HEADER_LENGTH + i * 2);\n                    }\n                    break;\n                case Constants.GEOMETRY_ATTR_SKIN_INDICES:\n                    this.skinIndices = new Uint16Array(attrDataLength);\n                    for (var i = 0; i < this.skinIndices.length; i++) {\n                        this.skinIndices[i] = data[dataPtr + Constants.GEOMETRY_ATTRIB_HEADER_LENGTH + i];\n                    }\n                    break;\n                case Constants.GEOMETRY_ATTR_SKIN_WEIGHTS:\n                    this.skinWeights = new Float32Array(attrDataLength);\n                    for (var i = 0; i < this.skinWeights.length; i++) {\n                        var val = data[dataPtr + Constants.GEOMETRY_ATTRIB_HEADER_LENGTH + i];\n                        this.skinWeights[i] = val / 255.0;\n                    }\n                    break;\n                default:\n                    console.error(\"wrong geometry attribute type:\" + attrType);\n                    break;\n            }\n            dataPtr += attrLength;\n        }\n        this.normalizeSkinWeights(4);\n    }\n    normalizeSkinWeights(valuesPerVertex) {\n        if (!this.skinWeights) {\n            return;\n        }\n        for (var i = 0; i < this.skinWeights.length; i += valuesPerVertex) {\n            var sum = 0;\n            for (var j = i; j < i + valuesPerVertex; j++) {\n                sum += this.skinWeights[j];\n            }\n            var factor = 1.0 / sum;\n            for (var j = i; j < i + valuesPerVertex; j++) {\n                this.skinWeights[j] *= factor;\n            }\n        }\n    }\n}\nexports.GeometryNode = GeometryNode;\n\n\n//# sourceURL=webpack:///./src/nodes/GeometryNode.ts?");

/***/ }),

/***/ "./src/nodes/HuiNode.ts":
/*!******************************!*\
  !*** ./src/nodes/HuiNode.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass HuiNode {\n    static parseNodeLength(node) {\n        return node[1] + (node[2] << 8) + (node[3] << 16);\n    }\n}\nexports.HuiNode = HuiNode;\n\n\n//# sourceURL=webpack:///./src/nodes/HuiNode.ts?");

/***/ }),

/***/ "./src/nodes/MeshNode.ts":
/*!*******************************!*\
  !*** ./src/nodes/MeshNode.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst HuiNode_1 = __webpack_require__(/*! ./HuiNode */ \"./src/nodes/HuiNode.ts\");\nconst Constants = __importStar(__webpack_require__(/*! ../Constants */ \"./src/Constants.ts\"));\nclass MeshNode extends HuiNode_1.HuiNode {\n    constructor(data) {\n        super();\n        this.geometryId = -1;\n        this.skeletonId = -1;\n        const PARAM_LENGTH = 4;\n        var nodeLength = HuiNode_1.HuiNode.parseNodeLength(data);\n        var dataPtr = Constants.NODE_HEADER_LENGTH;\n        while (dataPtr < nodeLength) {\n            var param = data[dataPtr] + (data[dataPtr + 1] << 8);\n            switch (param) {\n                case Constants.MESH_PARAM_GEOMETRY:\n                    this.geometryId = data[dataPtr + 2] + (data[dataPtr + 3] << 8);\n                    break;\n                case Constants.MESH_PARAM_SKELETON:\n                    this.skeletonId = data[dataPtr + 2] + (data[dataPtr + 3] << 8);\n                    break;\n                default:\n                    console.error(\"wrong mesh parameter type:\" + param);\n                    break;\n            }\n            dataPtr += PARAM_LENGTH;\n        }\n    }\n}\nexports.MeshNode = MeshNode;\n\n\n//# sourceURL=webpack:///./src/nodes/MeshNode.ts?");

/***/ }),

/***/ "./src/nodes/SkeletonNode.ts":
/*!***********************************!*\
  !*** ./src/nodes/SkeletonNode.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst HuiNode_1 = __webpack_require__(/*! ./HuiNode */ \"./src/nodes/HuiNode.ts\");\nconst Constants = __importStar(__webpack_require__(/*! ../Constants */ \"./src/Constants.ts\"));\nconst HuiMath = __importStar(__webpack_require__(/*! ../HuiMath */ \"./src/HuiMath.ts\"));\nclass SkeletonNode extends HuiNode_1.HuiNode {\n    constructor(data) {\n        super();\n        this.bones = [];\n        const BONE_RECORD_LENGTH = 14;\n        var nodeLength = HuiNode_1.HuiNode.parseNodeLength(data);\n        var dataPtr = Constants.NODE_HEADER_LENGTH;\n        while (dataPtr < nodeLength) {\n            var param = data[dataPtr] + (data[dataPtr + 1] << 8);\n            var bone = {\n                x: HuiMath.getFloat16(data, dataPtr),\n                y: HuiMath.getFloat16(data, dataPtr + 2),\n                z: HuiMath.getFloat16(data, dataPtr + 4),\n                tailX: HuiMath.getFloat16(data, dataPtr + 6),\n                tailY: HuiMath.getFloat16(data, dataPtr + 8),\n                tailZ: HuiMath.getFloat16(data, dataPtr + 10),\n                parent: HuiMath.getUint16(data, dataPtr + 12),\n            };\n            this.bones.push(bone);\n            dataPtr += BONE_RECORD_LENGTH;\n        }\n    }\n}\nexports.SkeletonNode = SkeletonNode;\n\n\n//# sourceURL=webpack:///./src/nodes/SkeletonNode.ts?");

/***/ }),

/***/ "./src/nodes/nodes.ts":
/*!****************************!*\
  !*** ./src/nodes/nodes.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar HuiNode_1 = __webpack_require__(/*! ./HuiNode */ \"./src/nodes/HuiNode.ts\");\nexports.HuiNode = HuiNode_1.HuiNode;\nvar GeometryNode_1 = __webpack_require__(/*! ./GeometryNode */ \"./src/nodes/GeometryNode.ts\");\nexports.GeometryNode = GeometryNode_1.GeometryNode;\nvar MeshNode_1 = __webpack_require__(/*! ./MeshNode */ \"./src/nodes/MeshNode.ts\");\nexports.MeshNode = MeshNode_1.MeshNode;\nvar SkeletonNode_1 = __webpack_require__(/*! ./SkeletonNode */ \"./src/nodes/SkeletonNode.ts\");\nexports.SkeletonNode = SkeletonNode_1.SkeletonNode;\nvar AnimationClipNode_1 = __webpack_require__(/*! ./AnimationClipNode */ \"./src/nodes/AnimationClipNode.ts\");\nexports.AnimationClipNode = AnimationClipNode_1.AnimationClipNode;\nvar AnimationTrack_1 = __webpack_require__(/*! ./AnimationTrack */ \"./src/nodes/AnimationTrack.ts\");\nexports.AnimationTrack = AnimationTrack_1.AnimationTrack;\n\n\n//# sourceURL=webpack:///./src/nodes/nodes.ts?");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "THREE" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = THREE;\n\n//# sourceURL=webpack:///external_%22THREE%22?");

/***/ })

/******/ });