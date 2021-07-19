(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3qiD":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return _}));var r=n("dI71"),o=n("q1tI"),i=n.n(o),a=n("z0FI"),c=n("DhAv"),s=n("UD/Y"),l=n("bjw9"),u=n("lHlH"),d=n("QJb2"),v=n("HGgG"),p=n("kh/P"),m=n("yeNo"),f=n("aI42"),h=Object(f.b)(),g="attribute vec3 positions;\nattribute vec3 normals;\n\nuniform vec3 uColor;\nuniform mat4 uModel;\nuniform mat4 uView;\nuniform mat4 uProjection;\n\nvarying vec3 color;\n\nvoid main(void) {\n  vec3 normal = vec3(uModel * vec4(normals, 0.0));\n\n  // Set up data for modules\n  color = uColor;\n  LUMAGL_normal(normal);\n  gl_Position = uProjection * uView * uModel * vec4(positions, 1.0);\n}\n",b="precision highp float;\n\nvarying vec3 color;\n\nvoid main(void) {\n  gl_FragColor = vec4(color, 1.);\n  LUMAGL_fragmentColor(gl_FragColor);\n}\n",j=Object.assign({inject:{"vs:LUMAGL_normal":"project_setNormal(normal);","fs:LUMAGL_fragmentColor":"color = dirlight_filterColor(color);"}},d.a),w=function(t){function e(){return t.call(this,{debug:!0})||this}Object(r.a)(e,t),e.getInfo=function(){return"\nUsing a ProgramManager to cache and share programs between models.\n"};var n=e.prototype;return n.onInitialize=function(t){var e=t.gl,n=t.aspect;Object(u.m)(e,{clearColor:[0,0,0,1],clearDepth:1,depthTest:!0,depthFunc:e.LEQUAL});var r=new c.a(e);r.addShaderHook("vs:LUMAGL_normal(inout vec3 normal)"),r.addShaderHook("fs:LUMAGL_fragmentColor(inout vec4 color)");var o=[[2,-2,0],[2,2,0],[-2,2,0],[-2,-2,0]],i=[[h(),h(),h()],[h(),h(),h()],[h(),h(),h()],[h(),h(),h()]],a=[[1,0,0],[0,1,0],[0,0,1],[1,1,0]];this.cubes=new Array(4);for(var l=0;l<4;++l)this.cubes[l]={translation:o[l],rotation:i[l],model:new s.a(e,{programManager:r,vs:g,fs:b,modules:l%2==0?[]:[j],geometry:new v.a,uniforms:{uProjection:(new p.a).perspective({fov:Object(m.e)(60),aspect:n,near:1,far:20}),uView:(new p.a).lookAt({center:[0,0,0],eye:[0,0,-8]}),uColor:a[l]}})};return{programManager:r}},n.onRender=function(t){var e=t.gl,n=t.tick,r=t.programManager;if(n%240==0&&(n%480==0?r.removeDefaultModule(j):r.addDefaultModule(j)),n%120==0)for(var o=n%240==0,i=0;i<4;++i)this.cubes[i].model.setProgram({vs:g,fs:b,modules:i%2===Number(o)?[]:[j]});var a=new p.a;e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);for(var c=0;c<4;++c){var s=this.cubes[c];s.rotation[0]+=.01,s.rotation[1]+=.01,s.rotation[2]+=.01,a.identity().translate(s.translation).rotateXYZ(s.rotation),s.model.setUniforms({uModel:a}).draw()}},n.onFinalize=function(t){t.gl;for(var e=0;e<4;++e)this.cubes[e].model.delete()},e}(l.a);"undefined"==typeof window||window.website||(new w).start();var _=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){return i.a.createElement(a.a,{AnimationLoop:w,exampleConfig:this.props.pageContext.exampleConfig})},e}(i.a.Component)},HGgG:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n("rePB"),o=n("dI71"),i=(n("IZzc"),n("PG+Z")),a=n("BunF");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),u=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),d=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),v=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),p={POSITION:{size:3,value:new Float32Array(u)},NORMAL:{size:3,value:new Float32Array(d)},TEXCOORD_0:{size:2,value:new Float32Array(v)}},m=function(t){function e(e){void 0===e&&(e={});var n=e.id,r=void 0===n?Object(a.c)("cube-geometry"):n;return t.call(this,s(s({},e),{},{id:r,indices:{size:1,value:new Uint16Array(l)},attributes:s(s({},p),e.attributes)}))||this}return Object(o.a)(e,t),e}(i.a)},"PG+Z":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("rePB"),o=n("vuIU"),i=n("BunF"),a=n("Iq2B");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var s={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},l=function(){function t(t){void 0===t&&(t={});var e=t,n=e.id,r=void 0===n?Object(i.c)("geometry"):n,o=e.drawMode,a=void 0===o?s.TRIANGLES:o,c=e.attributes,l=void 0===c?{}:c,u=e.indices,d=void 0===u?null:u,v=e.vertexCount,p=void 0===v?null:v;this.id=r,this.drawMode=0|a,this.attributes={},this.userData={},this._setAttributes(l,d),this.vertexCount=p||this._calculateVertexCount(this.attributes,this.indices)}var e=t.prototype;return e.getVertexCount=function(){return this.vertexCount},e.getAttributes=function(){return this.indices?function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({indices:this.indices},this.attributes):this.attributes},e._print=function(t){return"Geometry "+this.id+" attribute "+t},e._setAttributes=function(t,e){for(var n in e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),t){var r=t[n];r=ArrayBuffer.isView(r)?{value:r}:r,Object(a.a)(ArrayBuffer.isView(r.value),this._print(n)+": must be typed array or object with value as typed array"),"POSITION"!==n&&"positions"!==n||r.size||(r.size=3),"indices"===n?(Object(a.a)(!this.indices),this.indices=r):this.attributes[n]=r}return this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this},e._calculateVertexCount=function(t,e){if(e)return e.value.length;var n=1/0;for(var r in t){var o=t[r],i=o.value,c=o.size;!o.constant&&i&&c>=1&&(n=Math.min(n,i.length/c))}return Object(a.a)(Number.isFinite(n)),n},Object(o.a)(t,[{key:"mode",get:function(){return this.drawMode}}],[{key:"DRAW_MODE",get:function(){return s}}]),t}()},QJb2:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("IZzc");var r=n("kh/P"),o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],i={modelMatrix:o,viewMatrix:o,projectionMatrix:o,cameraPositionWorld:[0,0,0]};var a={name:"project",getUniforms:function(t,e){void 0===t&&(t=i),void 0===e&&(e={});var n={};return void 0!==t.modelMatrix&&(n.modelMatrix=t.modelMatrix),void 0!==t.viewMatrix&&(n.viewMatrix=t.viewMatrix),void 0!==t.projectionMatrix&&(n.projectionMatrix=t.projectionMatrix),void 0!==t.cameraPositionWorld&&(n.cameraPositionWorld=t.cameraPositionWorld),void 0===t.projectionMatrix&&void 0===t.viewMatrix||(n.viewProjectionMatrix=new r.a(t.projectionMatrix).multiplyRight(t.viewMatrix)),n},vs:"varying vec4 project_vPositionWorld;\nvarying vec3 project_vNormalWorld;\n\nvec4 project_getPosition_World() {\n  return project_vPositionWorld;\n}\n\nvec3 project_getNormal_World() {\n  return project_vNormalWorld;\n}\n\n\n// Unprefixed uniforms\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewProjectionMatrix;\nuniform vec3 cameraPositionWorld;\n\nstruct World {\n  vec3 position;\n  vec3 normal;\n};\n\nWorld world;\n\nvoid project_setPosition(vec4 position) {\n  project_vPositionWorld = position;\n}\n\nvoid project_setNormal(vec3 normal) {\n  project_vNormalWorld = normal;\n}\n\nvoid project_setPositionAndNormal_World(vec3 position, vec3 normal) {\n  world.position = position;\n  world.normal = normal;\n}\n\nvoid project_setPositionAndNormal_Model(vec3 position, vec3 normal) {\n  world.position = (modelMatrix * vec4(position, 1.)).xyz;\n  world.normal = mat3(modelMatrix) * normal;\n}\n\nvec4 project_model_to_clipspace(vec4 position) {\n  return viewProjectionMatrix * modelMatrix * position;\n}\n\nvec4 project_model_to_clipspace(vec3 position) {\n  return viewProjectionMatrix * modelMatrix * vec4(position, 1.);\n}\n\nvec4 project_world_to_clipspace(vec3 position) {\n  return viewProjectionMatrix * vec4(position, 1.);\n}\n\nvec4 project_view_to_clipspace(vec3 position) {\n  return projectionMatrix * vec4(position, 1.);\n}\n\nvec4 project_to_clipspace(vec3 position) {\n  return viewProjectionMatrix * vec4(position, 1.);\n}\n",fs:"\nvarying vec4 project_vPositionWorld;\nvarying vec3 project_vNormalWorld;\n\nvec4 project_getPosition_World() {\n  return project_vPositionWorld;\n}\n\nvec3 project_getNormal_World() {\n  return project_vNormalWorld;\n}\n"},c={lightDirection:new Float32Array([1,1,2])};var s={name:"dirlight",vs:null,fs:"uniform vec3 dirlight_uLightDirection;\n\n/*\n * Returns color attenuated by angle from light source\n */\nvec4 dirlight_filterColor(vec4 color) {\n  vec3 normal = project_getNormal_World();\n  float d = abs(dot(normalize(normal), normalize(dirlight_uLightDirection)));\n  return vec4(color.rgb * d, color.a);\n}\n",getUniforms:function(t){void 0===t&&(t=c);var e={};return t.lightDirection&&(e.dirlight_uLightDirection=t.lightDirection),e},dependencies:[a]}},aI42:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){function t(){}t.getInfo=function(){return""};var e=t.prototype;return e.start=function(){},e.stop=function(){},e.delete=function(){},e.onFinalize=function(){},e.waitForRender=function(){return Promise.resolve()},e._setDisplay=function(){},e._getCanvas=function(t){var e;if(void 0===t&&(t={}),t.canvas){e=document.getElementById(t.canvas);var n=window.devicePixelRatio||1;e.height=e.clientHeight*n,e.width=e.clientWidth*n}else(e=document.createElement("canvas")).width=800,e.height=600,document.body.appendChild(e);return e},e._getContainer=function(t){if(void 0===t&&(t={}),this.container)return this.container;var e,n;if(this.container=document.createElement("div"),t.canvas){var r=document.getElementById(t.canvas);this.parent=r.parentElement,e=r.clientWidth,n=r.clientHeight,this.container.style.position="relative",this.container.style.top="-"+n+"px"}else this.parent=document.body,e=800,n=800;return this.container.style.width=e+"px",this.container.style.height=n+"px",this.parent.appendChild(this.container),this.container},e._removeContainer=function(t){void 0===t&&(t={}),this.parent.removeChild(this.container)},t}();function o(){var t=1,e=1;return function(){return t=Math.sin(17.23*e),e=Math.cos(27.92*t),(n=1432.71*Math.abs(t*e))-Math.floor(n);var n}}}}]);