(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{HGgG:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("rePB"),i=n("dI71"),a=(n("IZzc"),n("PG+Z")),o=n("BunF");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),c=new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),d=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]),l=new Float32Array([0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1]),h={POSITION:{size:3,value:new Float32Array(c)},NORMAL:{size:3,value:new Float32Array(d)},TEXCOORD_0:{size:2,value:new Float32Array(l)}},p=function(e){function t(t){void 0===t&&(t={});var n=t.id,r=void 0===n?Object(o.c)("cube-geometry"):n;return e.call(this,u(u({},t),{},{id:r,indices:{size:1,value:new Uint16Array(f)},attributes:u(u({},h),t.attributes)}))||this}return Object(i.a)(t,e),t}(a.a)},"PG+Z":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("rePB"),i=n("vuIU"),a=n("BunF"),o=n("Iq2B");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var u={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},f=function(){function e(e){void 0===e&&(e={});var t=e,n=t.id,r=void 0===n?Object(a.c)("geometry"):n,i=t.drawMode,o=void 0===i?u.TRIANGLES:i,s=t.attributes,f=void 0===s?{}:s,c=t.indices,d=void 0===c?null:c,l=t.vertexCount,h=void 0===l?null:l;this.id=r,this.drawMode=0|o,this.attributes={},this.userData={},this._setAttributes(f,d),this.vertexCount=h||this._calculateVertexCount(this.attributes,this.indices)}var t=e.prototype;return t.getVertexCount=function(){return this.vertexCount},t.getAttributes=function(){return this.indices?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({indices:this.indices},this.attributes):this.attributes},t._print=function(e){return"Geometry "+this.id+" attribute "+e},t._setAttributes=function(e,t){for(var n in t&&(this.indices=ArrayBuffer.isView(t)?{value:t,size:1}:t),e){var r=e[n];r=ArrayBuffer.isView(r)?{value:r}:r,Object(o.a)(ArrayBuffer.isView(r.value),this._print(n)+": must be typed array or object with value as typed array"),"POSITION"!==n&&"positions"!==n||r.size||(r.size=3),"indices"===n?(Object(o.a)(!this.indices),this.indices=r):this.attributes[n]=r}return this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this},t._calculateVertexCount=function(e,t){if(t)return t.value.length;var n=1/0;for(var r in e){var i=e[r],a=i.value,s=i.size;!i.constant&&a&&s>=1&&(n=Math.min(n,a.length/s))}return Object(o.a)(Number.isFinite(n)),n},Object(i.a)(e,[{key:"mode",get:function(){return this.drawMode}}],[{key:"DRAW_MODE",get:function(){return u}}]),e}()},XneE:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var r=n("dI71"),i=n("q1tI"),a=n.n(i),o=n("z0FI"),s=(n("IZzc"),n("73Rc")),u=n("HGgG"),f=n("UD/Y"),c=n("bjw9"),d=n("3LCa"),l=n("Ifu7"),h=n("Iq2B"),p=function(){function e(e){var t;for(var n in this.layout={},this.size=0,e)this._addUniform(n,e[n]);this.size+=(4-this.size%4)%4;var r=new Float32Array(this.size);this.typedArray=((t={})[5126]=r,t[5124]=new Int32Array(r.buffer),t[5125]=new Uint32Array(r.buffer),t)}var t=e.prototype;return t.getBytes=function(){return 4*this.size},t.getData=function(){return this.typedArray[5126]},t.getSubData=function(e){var t,n;if(void 0===e)t=this.data,n=0;else{var r=this.offsets[e],i=r+this.sizes[e];t=this.data.subarray(r,i),n=4*r}return{data:t,offset:n}},t.setUniforms=function(e){for(var t in e)this._setValue(t,e[t]);return this},t._setValue=function(e,t){var n=this.layout[e];Object(h.a)(n,"UniformLayoutStd140 illegal argument");var r=this.typedArray[n.type];1===n.size?r[n.offset]=t:r.set(t,n.offset)},t._addUniform=function(e,t){var n=Object(l.a)(t);Object(h.a)(n,"UniformBufferLayout illegal argument");var r=n.type,i=n.components;this.size=this._alignTo(this.size,i);var a=this.size;this.size+=i,this.layout[e]={type:r,size:i,offset:a}},t._alignTo=function(e,t){switch(t){case 1:return e;case 2:return e+e%2;default:return e+(4-e%4)%4}},e}(),v=n("WFpA"),m=n("mECX"),g=n("2urO"),b=n("WrWi"),y=n("IObG"),O=n("lHlH"),w=n("kh/P"),E=n("yeNo"),T=[1,1,0,-1,1,0,1,-1,0,-1,-1,0],A=2,R=3,_=2.8,M=new Float32Array(2),D=function(e){function t(t,n){var r,i=n.count,a=new Array(i),o=new Float32Array(16*i),s=new d.a(t,o.byteLength);return(r=e.call(this,t,Object.assign({geometry:new u.a},n,{vs:"#version 300 es\n#define SHADER_NAME scene.vs\n\nin vec3 positions;\nin vec3 normals;\nin vec2 texCoords;\nin vec4 modelMatCol1;\nin vec4 modelMatCol2;\nin vec4 modelMatCol3;\nin vec4 modelMatCol4;\n\nuniform mat4 uView;\nuniform mat4 uProjection;\nout vec3 vNormal;\nout vec2 vUV;\n\nvoid main(void) {\n  mat4 modelMat = mat4(\n    modelMatCol1,\n    modelMatCol2,\n    modelMatCol3,\n    modelMatCol4\n  );\n  gl_Position = uProjection * uView * modelMat * vec4(positions, 1.0);\n  vNormal = vec3(modelMat * vec4(normals, 0.0));\n  vUV = texCoords;\n}\n",fs:"#version 300 es\nprecision highp float;\n#define SHADER_NAME scene.fs\n\nin vec3 vNormal;\nin vec2 vUV;\nuniform sampler2D uTexture;\n\nout vec4 fragColor;\nvoid main(void) {\n  float d = clamp(dot(normalize(vNormal), normalize(vec3(1.0, 1.0, 0.2))), 0.0, 1.0);\n  fragColor.rgb = texture(uTexture, vec2(vUV.x, 1.0 - vUV.y)).rgb * (d + 0.1);\n  fragColor.a = 1.0;\n}\n",isInstanced:1,instanceCount:i,uniforms:{uTexture:n.uniforms.uTexture},attributes:{modelMatCol1:{buffer:s,size:4,stride:64,offset:0,divisor:1},modelMatCol2:{buffer:s,size:4,stride:64,offset:16,divisor:1},modelMatCol3:{buffer:s,size:4,stride:64,offset:32,divisor:1},modelMatCol4:{buffer:s,size:4,stride:64,offset:48,divisor:1}}}))||this).count=i,r.xforms=a,r.matrices=o,r.matrixBuffer=s,r}return Object(r.a)(t,e),t.prototype.updateMatrixBuffer=function(){this.matrixBuffer.setData(this.matrices)},t}(f.a),P=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e),t.getInfo=function(){return'\n<p>\n  <b>Depth of Field</b>.\n<p>\nSeveral instanced luma.gl <code>Cubes</code> rendered with a Depth of Field\npost-processing effect.\n\n<div>\n  <label>Focal Length</label><input type="range" id="focal-length" min="0.1" max="10.0" step="0.1">\n</div>\n<div>\n  <label>Focus Distance</label><input type="range" id="focus-distance" min="0.1" max="10.0" step="0.1">\n</div>\n<div>\n  <label>F-Stop</label><input type="range" id="f-stop" min="0.1" max="10.0" step="0.1">\n</div>\n\n'};var n=t.prototype;return n.onInitialize=function(e){var t,n,r,i,a=e.gl;if(this.demoNotSupported=!Object(O.h)(a),this.demoNotSupported)return{};Object(O.m)(a,{depthTest:!0,depthFunc:s.a.LEQUAL});var o=new w.a,u=(new w.a).lookAt({eye:[0,0,8]}),f=new p({uDepthRange:a.FLOAT_VEC2,uFocusDistance:a.FLOAT,uBlurCoefficient:a.FLOAT,uPPM:a.FLOAT}).setUniforms({uDepthRange:[.1,30]}),c=new d.a(a,{target:s.a.UNIFORM_BUFFER,data:f.getData(),accessor:{index:0}}),l=new v.a(a,{id:"DOF_PROGRAM",vs:"#version 300 es\n#define SHADER_NAME quad.vs\n\nlayout(location=0) in vec3 aPosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 1.0);\n}\n",fs:"#version 300 es\nprecision highp float;\n#define SHADER_NAME dof.fs\n\n#define MAX_BLUR 20.0\n\nuniform DOFUniforms {\n  vec2  uDepthRange;\n  float uFocusDistance;\n  float uBlurCoefficient;\n  float uPPM;\n};\n\nuniform vec2 uTexelOffset;\n\nuniform sampler2D uColor;\nuniform sampler2D uDepth;\n\nout vec4 fragColor;\n\nvoid main() {\n    ivec2 fragCoord = ivec2(gl_FragCoord.xy);\n    ivec2 resolution = textureSize(uColor, 0) - 1;\n\n    // Convert to linear depth\n    float ndc = 2.0 * texelFetch(uDepth, fragCoord, 0).r - 1.0;\n    float depth = -(2.0 * uDepthRange.y * uDepthRange.x) / (ndc * (uDepthRange.y - uDepthRange.x) - uDepthRange.y - uDepthRange.x);\n    float deltaDepth = abs(uFocusDistance - depth);\n\n    // Blur more quickly in the foreground.\n    float xdd = depth < uFocusDistance ? abs(uFocusDistance - deltaDepth) : abs(uFocusDistance + deltaDepth);\n    float blurRadius = min(floor(uBlurCoefficient * (deltaDepth / xdd) * uPPM), MAX_BLUR);\n\n    vec4 color = vec4(0.0);\n    if (blurRadius > 1.0) {\n        float halfBlur = blurRadius * 0.5;\n\n        float count = 0.0;\n\n        for (float i = 0.0; i <= MAX_BLUR; ++i) {\n            if (i > blurRadius) {\n                break;\n            }\n\n            // texelFetch outside texture gives vec4(0.0) (undefined in ES 3)\n            ivec2 sampleCoord = clamp(fragCoord + ivec2(((i - halfBlur) * uTexelOffset)), ivec2(0), resolution);\n            color += texelFetch(uColor, sampleCoord, 0);\n\n            ++count;\n        }\n\n        color /= count;\n    } else {\n        color = texelFetch(uColor, fragCoord, 0);\n    }\n\n    fragColor = color;\n}\n"});l.uniformBlockBinding(l.getUniformBlockIndex("DOFUniforms"),0);var h=new m.a(a,{width:a.drawingBufferWidth,height:a.drawingBufferHeight,attachments:(r={},r[s.a.COLOR_ATTACHMENT0]=new g.a(a,{format:s.a.RGBA,type:s.a.UNSIGNED_BYTE,width:a.drawingBufferWidth,height:a.drawingBufferHeight,mipmaps:!1,parameters:(t={},t[s.a.TEXTURE_MIN_FILTER]=s.a.LINEAR,t[s.a.TEXTURE_MAG_FILTER]=s.a.LINEAR,t[s.a.TEXTURE_WRAP_S]=s.a.CLAMP_TO_EDGE,t[s.a.TEXTURE_WRAP_T]=s.a.CLAMP_TO_EDGE,t)}),r[s.a.DEPTH_ATTACHMENT]=new g.a(a,{format:s.a.DEPTH_COMPONENT16,type:s.a.UNSIGNED_SHORT,dataFormat:s.a.DEPTH_COMPONENT,width:a.drawingBufferWidth,height:a.drawingBufferHeight,mipmaps:!1,parameters:(n={},n[s.a.TEXTURE_MIN_FILTER]=s.a.NEAREST,n[s.a.TEXTURE_MAG_FILTER]=s.a.NEAREST,n[s.a.TEXTURE_WRAP_S]=s.a.CLAMP_TO_EDGE,n[s.a.TEXTURE_WRAP_T]=s.a.CLAMP_TO_EDGE,n)}),r)}),y=new m.a(a,{width:a.drawingBufferWidth,height:a.drawingBufferHeight,depth:!1}),E=document.getElementById("focal-length"),M=document.getElementById("focus-distance"),P=document.getElementById("f-stop");E&&(E.value=A,E.addEventListener("input",(function(){A=parseFloat(E.value)})),M.value=R,M.addEventListener("input",(function(){R=parseFloat(M.value)})),P.value=_,P.addEventListener("input",(function(){_=parseFloat(P.value)})));for(var C=new g.a(a,{data:"vis-logo.png",mipmaps:!0,parameters:(i={},i[a.TEXTURE_MAG_FILTER]=a.LINEAR,i[a.TEXTURE_MIN_FILTER]=a.LINEAR_MIPMAP_NEAREST,i)}),x=new D(a,{count:100,uniforms:{uTexture:C}}),I=0,F=0;F<5;++F)for(var B=F-Math.floor(2.5),j=0;j<20;++j){var N=[.4,.4,.4],U=[-Math.sin(18.23*j)*Math.PI,0,Math.cos(11.27*j)*Math.PI],L=[2-j-B,0,2-j+B];x.xforms[I]={scale:N,translate:L,rotate:U,matrix:(new w.a).translate(L).rotateXYZ(U).scale(N)},x.matrices.set(x.xforms[I].matrix,16*I),++I}return x.updateMatrixBuffer(),{projMat:o,viewMat:u,instancedCubes:x,sceneFramebuffer:h,dofFramebuffer:y,quadVertexArray:new b.a(a,{program:l,attributes:{aPosition:new d.a(a,new Float32Array(T))}}),dofProgram:l,dofUniforms:c,dofUniformsLayout:f}},n.onRender=function(e){var t=e.gl,n=(e.tick,e.width,e.height,e.aspect),r=e.projMat,i=e.viewMat,a=e.instancedCubes,o=e.sceneFramebuffer,s=e.dofFramebuffer,u=e.quadVertexArray,f=e.dofProgram,c=e.dofUniforms,d=e.dofUniformsLayout;if(!this.demoNotSupported){o.resize(t.drawingBufferWidth,t.drawingBufferHeight),s.resize(t.drawingBufferWidth,t.drawingBufferHeight);var l=A/Math.max(.1,Math.abs(R-A)),h=A*l/_,p=Math.sqrt(t.drawingBufferWidth*t.drawingBufferWidth+t.drawingBufferHeight*t.drawingBufferHeight)/35;Object(y.a)(t,{color:[0,0,0,1],depth:!0,framebuffer:o}),r.perspective({fov:Object(E.e)(75),aspect:n,near:.1,far:30}),i.lookAt({eye:[3,1.5,3],center:[0,0,0],up:[0,1,0]});for(var v=0;v<100;++v){var m=a.xforms[v];m.rotate[0]+=.01,m.rotate[1]+=.02,m.matrix.identity().translate(m.translate).rotateXYZ(m.rotate).scale(m.scale),a.matrices.set(m.matrix,16*v)}a.updateMatrixBuffer(),a.draw({uniforms:{uProjection:r,uView:i},framebuffer:o}),Object(y.a)(t,{color:[0,0,0,1],framebuffer:s}),M[0]=1,M[1]=0,d.setUniforms({uFocusDistance:R,uBlurCoefficient:h,uPPM:p}),c.setData(d.getData()),c.bind(),f.setUniforms({uTexelOffset:M,uColor:o.color,uDepth:o.depth}),f.draw({vertexArray:u,drawMode:t.TRIANGLE_STRIP,vertexCount:4,framebuffer:s}),Object(y.a)(t,{color:[0,0,0,1]}),M[0]=0,M[1]=1,f.setUniforms({uTexelOffset:M,uColor:o.color,uDepth:o.depth}),f.draw({vertexArray:u,drawMode:t.TRIANGLE_STRIP,vertexCount:4}),c.unbind()}},n.getAltText=function(){return"THIS DEMO REQUIRES WEBGL 2, BUT YOUR BROWSER DOESN'T SUPPORT IT"},t}(c.a);"undefined"==typeof window||window.website||(new P).start();var C=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return a.a.createElement(o.a,{AnimationLoop:P,exampleConfig:this.props.pageContext.exampleConfig})},t}(a.a.Component)}}]);