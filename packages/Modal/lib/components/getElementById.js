"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * 获取元素Id
 * @param id
 * @returns {HTMLElement|null|HTMLDivElement}
 */
function getElementById(id) {
  if (!id || !document) {
    return null;
  }

  var domRoot = document.getElementById(id);

  if (domRoot) {
    return domRoot;
  }

  var newRoot = document.createElement('div');
  newRoot.id = id;
  document.body.appendChild(newRoot);
  return newRoot;
}

var _default = getElementById;
exports.default = _default;