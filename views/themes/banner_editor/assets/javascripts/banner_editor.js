"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"===("undefined"==typeof exports?"undefined":_typeof(exports))?require("jquery"):jQuery)}(function(t){function n(e,o){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,t.isPlainObject(o)&&o),this.init()}var e="qor.bannereditor",o="enable."+e,r="disable."+e,a="click."+e,i="dragstart."+e,d="dragend."+e,l="drop."+e,s="[draggable]",c=".qor-bannereditor__button",u=".qor-bannereditor__value",f=".qor-bannereditor__canvas";return n.prototype={constructor:n,init:function(){this.bind(),this.config={},this.config.toolbar=this.$element.find(u).data("configure"),this.$canvas=this.$element.find(f),this.initToolbar()},bind:function(){this.$element.on(a,c,this.addElements.bind(this)).on(i,s,this.handleDragStart.bind(this)).on(d,s,this.handleDragEnd.bind(this)).on(l,s,this.handleDrop.bind(this)),t(document).on(a,'.qor-bannereditor__content button[type="submit"]',this.renderElement.bind(this))},initToolbar:function(){var e=t(window.Mustache.render(n.toolbar,this.config));e.appendTo(t(".qor-bannereditor__toolbar-btns")),this.$popover=t(n.popover).appendTo("body")},handleDragStart:function(t){t.originalEvent.dataTransfer.setData("text/plain",null)},handleDragEnd:function(n){console.log(n),t(n.target).css({left:n.originalEvent.offsetX,top:n.originalEvent.offsetY})},handleDrop:function(t){return!1},renderElement:function(n){var e=t(n.target).closest("form"),o=e.prop("action"),r=e.prop("method"),a=new FormData(e[0]),i=this.$canvas,d=this.$popover;if(e.length)return t.ajax(o,{method:r,dataType:"json",data:a,processData:!1,contentType:!1,success:function(n){i.append(t(n.Template).attr("draggable",!0)),d.qorModal("hide")}}),!1},addElements:function(n){var e=t(n.target),o=e.data("banner-url"),r=e.data("title"),a=this.$popover;t.ajax(o,{method:"GET",dataType:"html",success:function(n){var e=t(n).find(".qor-form-container");e.find(".qor-button--cancel").attr("data-dismiss","modal").removeAttr("href"),a.find(".qor-bannereditor__title").html(r),a.find(".qor-bannereditor__content").html(e.html()),a.trigger("enable").qorModal("show")}})}},n.toolbar='[[#toolbar]]<button class="mdl-button mdl-button--colored mdl-js-button qor-bannereditor__button" data-banner-url="[[CreateUrl]]" data-title="[[Name]]" type="button">[[Name]]</button>[[/toolbar]]',n.popover='<div class="qor-modal fade qor-bannereditor__form" tabindex="-1" role="dialog" aria-hidden="true">\n                                  <div class="mdl-card mdl-shadow--2dp" role="document">\n                                    <div class="mdl-card__title">\n                                        <h2 class="mdl-card__title-text qor-bannereditor__title"></h2>\n                                    </div>\n                                    <div class="mdl-card__supporting-text qor-bannereditor__content"></div>\n                                  </div>\n                                </div>',n.plugin=function(o){return this.each(function(){var r=t(this),a=r.data(e),i=void 0;if(!a){if(/destroy/.test(o))return;r.data(e,a=new n(this,o))}"string"==typeof o&&t.isFunction(i=a[o])&&i.apply(a)})},t(function(){var e='[data-toggle="qor.bannereditor"]';t(document).on(r,function(o){n.plugin.call(t(e,o.target),"destroy")}).on(o,function(o){n.plugin.call(t(e,o.target))}).triggerHandler(o)}),n});