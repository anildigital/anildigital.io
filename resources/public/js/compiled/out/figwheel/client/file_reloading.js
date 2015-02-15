// Compiled by ClojureScript 0.0-2760 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__28191_SHARP_,p2__28192_SHARP_){
var and__12706__auto__ = p1__28191_SHARP_;
if(cljs.core.truth_(and__12706__auto__)){
return p2__28192_SHARP_;
} else {
return and__12706__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__12718__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__12718__auto__){
return or__12718__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__28194_SHARP_,p2__28193_SHARP_){
return [cljs.core.str(p2__28193_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__12718__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__12718__auto__){
return or__12718__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__12718__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__12718__auto__)){
return or__12718__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__13615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__13616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__13617__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__13618__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__13619__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__13619__auto__,method_table__13615__auto__,prefer_table__13616__auto__,method_cache__13617__auto__,cached_hierarchy__13618__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28195){
var map__28196 = p__28195;
var map__28196__$1 = ((cljs.core.seq_QMARK_.call(null,map__28196))?cljs.core.apply.call(null,cljs.core.hash_map,map__28196):map__28196);
var file = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__28197){
var map__28198 = p__28197;
var map__28198__$1 = ((cljs.core.seq_QMARK_.call(null,map__28198))?cljs.core.apply.call(null,cljs.core.hash_map,map__28198):map__28198);
var namespace = cljs.core.get.call(null,map__28198__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__13615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__13616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__13617__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__13618__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__13619__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__13619__auto__,method_table__13615__auto__,prefer_table__13616__auto__,method_cache__13617__auto__,cached_hierarchy__13618__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e28199){if((e28199 instanceof Error)){
var e = e28199;
return false;
} else {
throw e28199;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__28200,callback){
var map__28202 = p__28200;
var map__28202__$1 = ((cljs.core.seq_QMARK_.call(null,map__28202))?cljs.core.apply.call(null,cljs.core.hash_map,map__28202):map__28202);
var file_msg = map__28202__$1;
var request_url = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28202,map__28202__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28202,map__28202__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__28203){
var map__28205 = p__28203;
var map__28205__$1 = ((cljs.core.seq_QMARK_.call(null,map__28205))?cljs.core.apply.call(null,cljs.core.hash_map,map__28205):map__28205);
var file_msg = map__28205__$1;
var meta_data = cljs.core.get.call(null,map__28205__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__28205__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__12718__auto__ = meta_data;
if(cljs.core.truth_(or__12718__auto__)){
return or__12718__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__12706__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__12706__auto__){
var or__12718__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__12718__auto__)){
return or__12718__auto__;
} else {
var or__12718__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__12718__auto____$1)){
return or__12718__auto____$1;
} else {
var and__12706__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__12706__auto____$1){
var or__12718__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__12718__auto____$2){
return or__12718__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__12706__auto____$1;
}
}
}
} else {
return and__12706__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__28206,callback){
var map__28208 = p__28206;
var map__28208__$1 = ((cljs.core.seq_QMARK_.call(null,map__28208))?cljs.core.apply.call(null,cljs.core.hash_map,map__28208):map__28208);
var file_msg = map__28208__$1;
var namespace = cljs.core.get.call(null,map__28208__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__28208__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__16142__auto___28295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto___28295,out){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto___28295,out){
return (function (state_28277){
var state_val_28278 = (state_28277[(1)]);
if((state_val_28278 === (7))){
var inst_28261 = (state_28277[(7)]);
var inst_28267 = (state_28277[(2)]);
var inst_28268 = cljs.core.async.put_BANG_.call(null,out,inst_28267);
var inst_28257 = inst_28261;
var state_28277__$1 = (function (){var statearr_28279 = state_28277;
(statearr_28279[(8)] = inst_28268);

(statearr_28279[(9)] = inst_28257);

return statearr_28279;
})();
var statearr_28280_28296 = state_28277__$1;
(statearr_28280_28296[(2)] = null);

(statearr_28280_28296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (6))){
var inst_28273 = (state_28277[(2)]);
var state_28277__$1 = state_28277;
var statearr_28281_28297 = state_28277__$1;
(statearr_28281_28297[(2)] = inst_28273);

(statearr_28281_28297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (5))){
var inst_28271 = cljs.core.async.close_BANG_.call(null,out);
var state_28277__$1 = state_28277;
var statearr_28282_28298 = state_28277__$1;
(statearr_28282_28298[(2)] = inst_28271);

(statearr_28282_28298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (4))){
var inst_28260 = (state_28277[(10)]);
var inst_28265 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28260);
var state_28277__$1 = state_28277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28277__$1,(7),inst_28265);
} else {
if((state_val_28278 === (3))){
var inst_28275 = (state_28277[(2)]);
var state_28277__$1 = state_28277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28277__$1,inst_28275);
} else {
if((state_val_28278 === (2))){
var inst_28257 = (state_28277[(9)]);
var inst_28260 = (state_28277[(10)]);
var inst_28260__$1 = cljs.core.nth.call(null,inst_28257,(0),null);
var inst_28261 = cljs.core.nthnext.call(null,inst_28257,(1));
var inst_28262 = (inst_28260__$1 == null);
var inst_28263 = cljs.core.not.call(null,inst_28262);
var state_28277__$1 = (function (){var statearr_28283 = state_28277;
(statearr_28283[(7)] = inst_28261);

(statearr_28283[(10)] = inst_28260__$1);

return statearr_28283;
})();
if(inst_28263){
var statearr_28284_28299 = state_28277__$1;
(statearr_28284_28299[(1)] = (4));

} else {
var statearr_28285_28300 = state_28277__$1;
(statearr_28285_28300[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28278 === (1))){
var inst_28255 = cljs.core.nth.call(null,files,(0),null);
var inst_28256 = cljs.core.nthnext.call(null,files,(1));
var inst_28257 = files;
var state_28277__$1 = (function (){var statearr_28286 = state_28277;
(statearr_28286[(11)] = inst_28256);

(statearr_28286[(9)] = inst_28257);

(statearr_28286[(12)] = inst_28255);

return statearr_28286;
})();
var statearr_28287_28301 = state_28277__$1;
(statearr_28287_28301[(2)] = null);

(statearr_28287_28301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__16142__auto___28295,out))
;
return ((function (switch__16086__auto__,c__16142__auto___28295,out){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_28291 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28291[(0)] = state_machine__16087__auto__);

(statearr_28291[(1)] = (1));

return statearr_28291;
});
var state_machine__16087__auto____1 = (function (state_28277){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_28277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e28292){if((e28292 instanceof Object)){
var ex__16090__auto__ = e28292;
var statearr_28293_28302 = state_28277;
(statearr_28293_28302[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28303 = state_28277;
state_28277 = G__28303;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_28277){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_28277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto___28295,out))
})();
var state__16144__auto__ = (function (){var statearr_28294 = f__16143__auto__.call(null);
(statearr_28294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___28295);

return statearr_28294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto___28295,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__28304,p__28305){
var map__28308 = p__28304;
var map__28308__$1 = ((cljs.core.seq_QMARK_.call(null,map__28308))?cljs.core.apply.call(null,cljs.core.hash_map,map__28308):map__28308);
var opts = map__28308__$1;
var url_rewriter = cljs.core.get.call(null,map__28308__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__28309 = p__28305;
var map__28309__$1 = ((cljs.core.seq_QMARK_.call(null,map__28309))?cljs.core.apply.call(null,cljs.core.hash_map,map__28309):map__28309);
var file_msg = map__28309__$1;
var file = cljs.core.get.call(null,map__28309__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__28310){
var map__28313 = p__28310;
var map__28313__$1 = ((cljs.core.seq_QMARK_.call(null,map__28313))?cljs.core.apply.call(null,cljs.core.hash_map,map__28313):map__28313);
var file = cljs.core.get.call(null,map__28313__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__28313__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__12706__auto__ = eval_body__$1;
if(cljs.core.truth_(and__12706__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__12706__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e28314){var e = e28314;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__28319,p__28320){
var map__28521 = p__28319;
var map__28521__$1 = ((cljs.core.seq_QMARK_.call(null,map__28521))?cljs.core.apply.call(null,cljs.core.hash_map,map__28521):map__28521);
var opts = map__28521__$1;
var load_unchanged_files = cljs.core.get.call(null,map__28521__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__28521__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__28521__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__28522 = p__28320;
var map__28522__$1 = ((cljs.core.seq_QMARK_.call(null,map__28522))?cljs.core.apply.call(null,cljs.core.hash_map,map__28522):map__28522);
var msg = map__28522__$1;
var files = cljs.core.get.call(null,map__28522__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__16142__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files){
return (function (state_28646){
var state_val_28647 = (state_28646[(1)]);
if((state_val_28647 === (7))){
var inst_28535 = (state_28646[(7)]);
var inst_28534 = (state_28646[(8)]);
var inst_28533 = (state_28646[(9)]);
var inst_28536 = (state_28646[(10)]);
var inst_28541 = cljs.core._nth.call(null,inst_28534,inst_28536);
var inst_28542 = figwheel.client.file_reloading.eval_body.call(null,inst_28541);
var inst_28543 = (inst_28536 + (1));
var tmp28648 = inst_28535;
var tmp28649 = inst_28534;
var tmp28650 = inst_28533;
var inst_28533__$1 = tmp28650;
var inst_28534__$1 = tmp28649;
var inst_28535__$1 = tmp28648;
var inst_28536__$1 = inst_28543;
var state_28646__$1 = (function (){var statearr_28651 = state_28646;
(statearr_28651[(11)] = inst_28542);

(statearr_28651[(7)] = inst_28535__$1);

(statearr_28651[(8)] = inst_28534__$1);

(statearr_28651[(9)] = inst_28533__$1);

(statearr_28651[(10)] = inst_28536__$1);

return statearr_28651;
})();
var statearr_28652_28721 = state_28646__$1;
(statearr_28652_28721[(2)] = null);

(statearr_28652_28721[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (20))){
var inst_28582 = (state_28646[(12)]);
var inst_28585 = (state_28646[(13)]);
var inst_28578 = (state_28646[(14)]);
var inst_28579 = (state_28646[(15)]);
var inst_28583 = (state_28646[(16)]);
var inst_28588 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28590 = (function (){var files_not_loaded = inst_28585;
var res = inst_28583;
var res_SINGLEQUOTE_ = inst_28582;
var files_SINGLEQUOTE_ = inst_28579;
var all_files = inst_28578;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28582,inst_28585,inst_28578,inst_28579,inst_28583,inst_28588,state_val_28647,c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files){
return (function (p__28589){
var map__28653 = p__28589;
var map__28653__$1 = ((cljs.core.seq_QMARK_.call(null,map__28653))?cljs.core.apply.call(null,cljs.core.hash_map,map__28653):map__28653);
var file = cljs.core.get.call(null,map__28653__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__28653__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28582,inst_28585,inst_28578,inst_28579,inst_28583,inst_28588,state_val_28647,c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files))
})();
var inst_28591 = cljs.core.map.call(null,inst_28590,inst_28583);
var inst_28592 = cljs.core.pr_str.call(null,inst_28591);
var inst_28593 = figwheel.client.utils.log.call(null,inst_28592);
var inst_28594 = (function (){var files_not_loaded = inst_28585;
var res = inst_28583;
var res_SINGLEQUOTE_ = inst_28582;
var files_SINGLEQUOTE_ = inst_28579;
var all_files = inst_28578;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28582,inst_28585,inst_28578,inst_28579,inst_28583,inst_28588,inst_28590,inst_28591,inst_28592,inst_28593,state_val_28647,c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28582,inst_28585,inst_28578,inst_28579,inst_28583,inst_28588,inst_28590,inst_28591,inst_28592,inst_28593,state_val_28647,c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files))
})();
var inst_28595 = setTimeout(inst_28594,(10));
var state_28646__$1 = (function (){var statearr_28654 = state_28646;
(statearr_28654[(17)] = inst_28588);

(statearr_28654[(18)] = inst_28593);

return statearr_28654;
})();
var statearr_28655_28722 = state_28646__$1;
(statearr_28655_28722[(2)] = inst_28595);

(statearr_28655_28722[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (27))){
var inst_28605 = (state_28646[(19)]);
var state_28646__$1 = state_28646;
var statearr_28656_28723 = state_28646__$1;
(statearr_28656_28723[(2)] = inst_28605);

(statearr_28656_28723[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (1))){
var inst_28525 = (state_28646[(20)]);
var inst_28523 = before_jsload.call(null,files);
var inst_28524 = (function (){return ((function (inst_28525,inst_28523,state_val_28647,c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files){
return (function (p1__28315_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28315_SHARP_);
});
;})(inst_28525,inst_28523,state_val_28647,c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files))
})();
var inst_28525__$1 = cljs.core.filter.call(null,inst_28524,files);
var inst_28526 = cljs.core.not_empty.call(null,inst_28525__$1);
var state_28646__$1 = (function (){var statearr_28657 = state_28646;
(statearr_28657[(20)] = inst_28525__$1);

(statearr_28657[(21)] = inst_28523);

return statearr_28657;
})();
if(cljs.core.truth_(inst_28526)){
var statearr_28658_28724 = state_28646__$1;
(statearr_28658_28724[(1)] = (2));

} else {
var statearr_28659_28725 = state_28646__$1;
(statearr_28659_28725[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (24))){
var state_28646__$1 = state_28646;
var statearr_28660_28726 = state_28646__$1;
(statearr_28660_28726[(2)] = null);

(statearr_28660_28726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (4))){
var inst_28570 = (state_28646[(2)]);
var inst_28571 = (function (){return ((function (inst_28570,state_val_28647,c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files){
return (function (p1__28316_SHARP_){
var and__12706__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28316_SHARP_);
if(cljs.core.truth_(and__12706__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28316_SHARP_));
} else {
return and__12706__auto__;
}
});
;})(inst_28570,state_val_28647,c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files))
})();
var inst_28572 = cljs.core.filter.call(null,inst_28571,files);
var state_28646__$1 = (function (){var statearr_28661 = state_28646;
(statearr_28661[(22)] = inst_28570);

(statearr_28661[(23)] = inst_28572);

return statearr_28661;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_28662_28727 = state_28646__$1;
(statearr_28662_28727[(1)] = (16));

} else {
var statearr_28663_28728 = state_28646__$1;
(statearr_28663_28728[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (15))){
var inst_28560 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
var statearr_28664_28729 = state_28646__$1;
(statearr_28664_28729[(2)] = inst_28560);

(statearr_28664_28729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (21))){
var state_28646__$1 = state_28646;
var statearr_28665_28730 = state_28646__$1;
(statearr_28665_28730[(2)] = null);

(statearr_28665_28730[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (31))){
var inst_28613 = (state_28646[(24)]);
var inst_28623 = (state_28646[(2)]);
var inst_28624 = cljs.core.not_empty.call(null,inst_28613);
var state_28646__$1 = (function (){var statearr_28666 = state_28646;
(statearr_28666[(25)] = inst_28623);

return statearr_28666;
})();
if(cljs.core.truth_(inst_28624)){
var statearr_28667_28731 = state_28646__$1;
(statearr_28667_28731[(1)] = (32));

} else {
var statearr_28668_28732 = state_28646__$1;
(statearr_28668_28732[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (32))){
var inst_28613 = (state_28646[(24)]);
var inst_28626 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28613);
var inst_28627 = cljs.core.pr_str.call(null,inst_28626);
var inst_28628 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_28627)].join('');
var inst_28629 = figwheel.client.utils.log.call(null,inst_28628);
var state_28646__$1 = state_28646;
var statearr_28669_28733 = state_28646__$1;
(statearr_28669_28733[(2)] = inst_28629);

(statearr_28669_28733[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (33))){
var state_28646__$1 = state_28646;
var statearr_28670_28734 = state_28646__$1;
(statearr_28670_28734[(2)] = null);

(statearr_28670_28734[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (13))){
var inst_28546 = (state_28646[(26)]);
var inst_28550 = cljs.core.chunk_first.call(null,inst_28546);
var inst_28551 = cljs.core.chunk_rest.call(null,inst_28546);
var inst_28552 = cljs.core.count.call(null,inst_28550);
var inst_28533 = inst_28551;
var inst_28534 = inst_28550;
var inst_28535 = inst_28552;
var inst_28536 = (0);
var state_28646__$1 = (function (){var statearr_28671 = state_28646;
(statearr_28671[(7)] = inst_28535);

(statearr_28671[(8)] = inst_28534);

(statearr_28671[(9)] = inst_28533);

(statearr_28671[(10)] = inst_28536);

return statearr_28671;
})();
var statearr_28672_28735 = state_28646__$1;
(statearr_28672_28735[(2)] = null);

(statearr_28672_28735[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (22))){
var inst_28585 = (state_28646[(13)]);
var inst_28598 = (state_28646[(2)]);
var inst_28599 = cljs.core.not_empty.call(null,inst_28585);
var state_28646__$1 = (function (){var statearr_28673 = state_28646;
(statearr_28673[(27)] = inst_28598);

return statearr_28673;
})();
if(cljs.core.truth_(inst_28599)){
var statearr_28674_28736 = state_28646__$1;
(statearr_28674_28736[(1)] = (23));

} else {
var statearr_28675_28737 = state_28646__$1;
(statearr_28675_28737[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (36))){
var state_28646__$1 = state_28646;
var statearr_28676_28738 = state_28646__$1;
(statearr_28676_28738[(2)] = null);

(statearr_28676_28738[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (29))){
var inst_28614 = (state_28646[(28)]);
var inst_28617 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28614);
var inst_28618 = cljs.core.pr_str.call(null,inst_28617);
var inst_28619 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28618)].join('');
var inst_28620 = figwheel.client.utils.log.call(null,inst_28619);
var state_28646__$1 = state_28646;
var statearr_28677_28739 = state_28646__$1;
(statearr_28677_28739[(2)] = inst_28620);

(statearr_28677_28739[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (6))){
var inst_28567 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
var statearr_28678_28740 = state_28646__$1;
(statearr_28678_28740[(2)] = inst_28567);

(statearr_28678_28740[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (28))){
var inst_28614 = (state_28646[(28)]);
var inst_28611 = (state_28646[(2)]);
var inst_28612 = cljs.core.get.call(null,inst_28611,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28613 = cljs.core.get.call(null,inst_28611,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_28614__$1 = cljs.core.get.call(null,inst_28611,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28615 = cljs.core.not_empty.call(null,inst_28614__$1);
var state_28646__$1 = (function (){var statearr_28679 = state_28646;
(statearr_28679[(28)] = inst_28614__$1);

(statearr_28679[(29)] = inst_28612);

(statearr_28679[(24)] = inst_28613);

return statearr_28679;
})();
if(cljs.core.truth_(inst_28615)){
var statearr_28680_28741 = state_28646__$1;
(statearr_28680_28741[(1)] = (29));

} else {
var statearr_28681_28742 = state_28646__$1;
(statearr_28681_28742[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (25))){
var inst_28644 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28646__$1,inst_28644);
} else {
if((state_val_28647 === (34))){
var inst_28612 = (state_28646[(29)]);
var inst_28632 = (state_28646[(2)]);
var inst_28633 = cljs.core.not_empty.call(null,inst_28612);
var state_28646__$1 = (function (){var statearr_28682 = state_28646;
(statearr_28682[(30)] = inst_28632);

return statearr_28682;
})();
if(cljs.core.truth_(inst_28633)){
var statearr_28683_28743 = state_28646__$1;
(statearr_28683_28743[(1)] = (35));

} else {
var statearr_28684_28744 = state_28646__$1;
(statearr_28684_28744[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (17))){
var inst_28572 = (state_28646[(23)]);
var state_28646__$1 = state_28646;
var statearr_28685_28745 = state_28646__$1;
(statearr_28685_28745[(2)] = inst_28572);

(statearr_28685_28745[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (3))){
var state_28646__$1 = state_28646;
var statearr_28686_28746 = state_28646__$1;
(statearr_28686_28746[(2)] = null);

(statearr_28686_28746[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (12))){
var inst_28563 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
var statearr_28687_28747 = state_28646__$1;
(statearr_28687_28747[(2)] = inst_28563);

(statearr_28687_28747[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (2))){
var inst_28525 = (state_28646[(20)]);
var inst_28532 = cljs.core.seq.call(null,inst_28525);
var inst_28533 = inst_28532;
var inst_28534 = null;
var inst_28535 = (0);
var inst_28536 = (0);
var state_28646__$1 = (function (){var statearr_28688 = state_28646;
(statearr_28688[(7)] = inst_28535);

(statearr_28688[(8)] = inst_28534);

(statearr_28688[(9)] = inst_28533);

(statearr_28688[(10)] = inst_28536);

return statearr_28688;
})();
var statearr_28689_28748 = state_28646__$1;
(statearr_28689_28748[(2)] = null);

(statearr_28689_28748[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (23))){
var inst_28605 = (state_28646[(19)]);
var inst_28582 = (state_28646[(12)]);
var inst_28585 = (state_28646[(13)]);
var inst_28578 = (state_28646[(14)]);
var inst_28579 = (state_28646[(15)]);
var inst_28583 = (state_28646[(16)]);
var inst_28601 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28604 = (function (){var files_not_loaded = inst_28585;
var res = inst_28583;
var res_SINGLEQUOTE_ = inst_28582;
var files_SINGLEQUOTE_ = inst_28579;
var all_files = inst_28578;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28605,inst_28582,inst_28585,inst_28578,inst_28579,inst_28583,inst_28601,state_val_28647,c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files){
return (function (p__28603){
var map__28690 = p__28603;
var map__28690__$1 = ((cljs.core.seq_QMARK_.call(null,map__28690))?cljs.core.apply.call(null,cljs.core.hash_map,map__28690):map__28690);
var meta_data = cljs.core.get.call(null,map__28690__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28605,inst_28582,inst_28585,inst_28578,inst_28579,inst_28583,inst_28601,state_val_28647,c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files))
})();
var inst_28605__$1 = cljs.core.group_by.call(null,inst_28604,inst_28585);
var inst_28606 = cljs.core.seq_QMARK_.call(null,inst_28605__$1);
var state_28646__$1 = (function (){var statearr_28691 = state_28646;
(statearr_28691[(19)] = inst_28605__$1);

(statearr_28691[(31)] = inst_28601);

return statearr_28691;
})();
if(inst_28606){
var statearr_28692_28749 = state_28646__$1;
(statearr_28692_28749[(1)] = (26));

} else {
var statearr_28693_28750 = state_28646__$1;
(statearr_28693_28750[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (35))){
var inst_28612 = (state_28646[(29)]);
var inst_28635 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28612);
var inst_28636 = cljs.core.pr_str.call(null,inst_28635);
var inst_28637 = [cljs.core.str("not required: "),cljs.core.str(inst_28636)].join('');
var inst_28638 = figwheel.client.utils.log.call(null,inst_28637);
var state_28646__$1 = state_28646;
var statearr_28694_28751 = state_28646__$1;
(statearr_28694_28751[(2)] = inst_28638);

(statearr_28694_28751[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (19))){
var inst_28582 = (state_28646[(12)]);
var inst_28578 = (state_28646[(14)]);
var inst_28579 = (state_28646[(15)]);
var inst_28583 = (state_28646[(16)]);
var inst_28582__$1 = (state_28646[(2)]);
var inst_28583__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28582__$1);
var inst_28584 = (function (){var res = inst_28583__$1;
var res_SINGLEQUOTE_ = inst_28582__$1;
var files_SINGLEQUOTE_ = inst_28579;
var all_files = inst_28578;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28582,inst_28578,inst_28579,inst_28583,inst_28582__$1,inst_28583__$1,state_val_28647,c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files){
return (function (p1__28318_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28318_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_28582,inst_28578,inst_28579,inst_28583,inst_28582__$1,inst_28583__$1,state_val_28647,c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files))
})();
var inst_28585 = cljs.core.filter.call(null,inst_28584,inst_28582__$1);
var inst_28586 = cljs.core.not_empty.call(null,inst_28583__$1);
var state_28646__$1 = (function (){var statearr_28695 = state_28646;
(statearr_28695[(12)] = inst_28582__$1);

(statearr_28695[(13)] = inst_28585);

(statearr_28695[(16)] = inst_28583__$1);

return statearr_28695;
})();
if(cljs.core.truth_(inst_28586)){
var statearr_28696_28752 = state_28646__$1;
(statearr_28696_28752[(1)] = (20));

} else {
var statearr_28697_28753 = state_28646__$1;
(statearr_28697_28753[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (11))){
var state_28646__$1 = state_28646;
var statearr_28698_28754 = state_28646__$1;
(statearr_28698_28754[(2)] = null);

(statearr_28698_28754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (9))){
var inst_28565 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
var statearr_28699_28755 = state_28646__$1;
(statearr_28699_28755[(2)] = inst_28565);

(statearr_28699_28755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (5))){
var inst_28535 = (state_28646[(7)]);
var inst_28536 = (state_28646[(10)]);
var inst_28538 = (inst_28536 < inst_28535);
var inst_28539 = inst_28538;
var state_28646__$1 = state_28646;
if(cljs.core.truth_(inst_28539)){
var statearr_28700_28756 = state_28646__$1;
(statearr_28700_28756[(1)] = (7));

} else {
var statearr_28701_28757 = state_28646__$1;
(statearr_28701_28757[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (14))){
var inst_28546 = (state_28646[(26)]);
var inst_28555 = cljs.core.first.call(null,inst_28546);
var inst_28556 = figwheel.client.file_reloading.eval_body.call(null,inst_28555);
var inst_28557 = cljs.core.next.call(null,inst_28546);
var inst_28533 = inst_28557;
var inst_28534 = null;
var inst_28535 = (0);
var inst_28536 = (0);
var state_28646__$1 = (function (){var statearr_28702 = state_28646;
(statearr_28702[(7)] = inst_28535);

(statearr_28702[(8)] = inst_28534);

(statearr_28702[(32)] = inst_28556);

(statearr_28702[(9)] = inst_28533);

(statearr_28702[(10)] = inst_28536);

return statearr_28702;
})();
var statearr_28703_28758 = state_28646__$1;
(statearr_28703_28758[(2)] = null);

(statearr_28703_28758[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (26))){
var inst_28605 = (state_28646[(19)]);
var inst_28608 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28605);
var state_28646__$1 = state_28646;
var statearr_28704_28759 = state_28646__$1;
(statearr_28704_28759[(2)] = inst_28608);

(statearr_28704_28759[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (16))){
var inst_28572 = (state_28646[(23)]);
var inst_28574 = (function (){var all_files = inst_28572;
return ((function (all_files,inst_28572,state_val_28647,c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files){
return (function (p1__28317_SHARP_){
return cljs.core.update_in.call(null,p1__28317_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_28572,state_val_28647,c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files))
})();
var inst_28575 = cljs.core.map.call(null,inst_28574,inst_28572);
var state_28646__$1 = state_28646;
var statearr_28705_28760 = state_28646__$1;
(statearr_28705_28760[(2)] = inst_28575);

(statearr_28705_28760[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (30))){
var state_28646__$1 = state_28646;
var statearr_28706_28761 = state_28646__$1;
(statearr_28706_28761[(2)] = null);

(statearr_28706_28761[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (10))){
var inst_28546 = (state_28646[(26)]);
var inst_28548 = cljs.core.chunked_seq_QMARK_.call(null,inst_28546);
var state_28646__$1 = state_28646;
if(inst_28548){
var statearr_28707_28762 = state_28646__$1;
(statearr_28707_28762[(1)] = (13));

} else {
var statearr_28708_28763 = state_28646__$1;
(statearr_28708_28763[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (18))){
var inst_28578 = (state_28646[(14)]);
var inst_28579 = (state_28646[(15)]);
var inst_28578__$1 = (state_28646[(2)]);
var inst_28579__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_28578__$1);
var inst_28580 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28579__$1);
var state_28646__$1 = (function (){var statearr_28709 = state_28646;
(statearr_28709[(14)] = inst_28578__$1);

(statearr_28709[(15)] = inst_28579__$1);

return statearr_28709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28646__$1,(19),inst_28580);
} else {
if((state_val_28647 === (37))){
var inst_28641 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
var statearr_28710_28764 = state_28646__$1;
(statearr_28710_28764[(2)] = inst_28641);

(statearr_28710_28764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (8))){
var inst_28546 = (state_28646[(26)]);
var inst_28533 = (state_28646[(9)]);
var inst_28546__$1 = cljs.core.seq.call(null,inst_28533);
var state_28646__$1 = (function (){var statearr_28711 = state_28646;
(statearr_28711[(26)] = inst_28546__$1);

return statearr_28711;
})();
if(inst_28546__$1){
var statearr_28712_28765 = state_28646__$1;
(statearr_28712_28765[(1)] = (10));

} else {
var statearr_28713_28766 = state_28646__$1;
(statearr_28713_28766[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files))
;
return ((function (switch__16086__auto__,c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_28717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28717[(0)] = state_machine__16087__auto__);

(statearr_28717[(1)] = (1));

return statearr_28717;
});
var state_machine__16087__auto____1 = (function (state_28646){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_28646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e28718){if((e28718 instanceof Object)){
var ex__16090__auto__ = e28718;
var statearr_28719_28767 = state_28646;
(statearr_28719_28767[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28768 = state_28646;
state_28646 = G__28768;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_28646){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_28646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files))
})();
var state__16144__auto__ = (function (){var statearr_28720 = f__16143__auto__.call(null);
(statearr_28720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto__);

return statearr_28720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto__,map__28521,map__28521__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__28522,map__28522__$1,msg,files))
);

return c__16142__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__28771,link){
var map__28773 = p__28771;
var map__28773__$1 = ((cljs.core.seq_QMARK_.call(null,map__28773))?cljs.core.apply.call(null,cljs.core.hash_map,map__28773):map__28773);
var file = cljs.core.get.call(null,map__28773__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__28773,map__28773__$1,file){
return (function (p1__28769_SHARP_,p2__28770_SHARP_){
if(cljs.core._EQ_.call(null,p1__28769_SHARP_,p2__28770_SHARP_)){
return p1__28769_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__28773,map__28773__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28777){
var map__28778 = p__28777;
var map__28778__$1 = ((cljs.core.seq_QMARK_.call(null,map__28778))?cljs.core.apply.call(null,cljs.core.hash_map,map__28778):map__28778);
var current_url_length = cljs.core.get.call(null,map__28778__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__28778__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28774_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28774_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__28779){
var map__28781 = p__28779;
var map__28781__$1 = ((cljs.core.seq_QMARK_.call(null,map__28781))?cljs.core.apply.call(null,cljs.core.hash_map,map__28781):map__28781);
var f_data = map__28781__$1;
var request_url = cljs.core.get.call(null,map__28781__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__28781__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__12718__auto__ = request_url;
if(cljs.core.truth_(or__12718__auto__)){
return or__12718__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__28782,files_msg){
var map__28804 = p__28782;
var map__28804__$1 = ((cljs.core.seq_QMARK_.call(null,map__28804))?cljs.core.apply.call(null,cljs.core.hash_map,map__28804):map__28804);
var opts = map__28804__$1;
var on_cssload = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28805_28825 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28806_28826 = null;
var count__28807_28827 = (0);
var i__28808_28828 = (0);
while(true){
if((i__28808_28828 < count__28807_28827)){
var f_28829 = cljs.core._nth.call(null,chunk__28806_28826,i__28808_28828);
figwheel.client.file_reloading.reload_css_file.call(null,f_28829);

var G__28830 = seq__28805_28825;
var G__28831 = chunk__28806_28826;
var G__28832 = count__28807_28827;
var G__28833 = (i__28808_28828 + (1));
seq__28805_28825 = G__28830;
chunk__28806_28826 = G__28831;
count__28807_28827 = G__28832;
i__28808_28828 = G__28833;
continue;
} else {
var temp__4126__auto___28834 = cljs.core.seq.call(null,seq__28805_28825);
if(temp__4126__auto___28834){
var seq__28805_28835__$1 = temp__4126__auto___28834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28805_28835__$1)){
var c__13505__auto___28836 = cljs.core.chunk_first.call(null,seq__28805_28835__$1);
var G__28837 = cljs.core.chunk_rest.call(null,seq__28805_28835__$1);
var G__28838 = c__13505__auto___28836;
var G__28839 = cljs.core.count.call(null,c__13505__auto___28836);
var G__28840 = (0);
seq__28805_28825 = G__28837;
chunk__28806_28826 = G__28838;
count__28807_28827 = G__28839;
i__28808_28828 = G__28840;
continue;
} else {
var f_28841 = cljs.core.first.call(null,seq__28805_28835__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28841);

var G__28842 = cljs.core.next.call(null,seq__28805_28835__$1);
var G__28843 = null;
var G__28844 = (0);
var G__28845 = (0);
seq__28805_28825 = G__28842;
chunk__28806_28826 = G__28843;
count__28807_28827 = G__28844;
i__28808_28828 = G__28845;
continue;
}
} else {
}
}
break;
}

var c__16142__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto__,map__28804,map__28804__$1,opts,on_cssload){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto__,map__28804,map__28804__$1,opts,on_cssload){
return (function (state_28815){
var state_val_28816 = (state_28815[(1)]);
if((state_val_28816 === (2))){
var inst_28811 = (state_28815[(2)]);
var inst_28812 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_28813 = on_cssload.call(null,inst_28812);
var state_28815__$1 = (function (){var statearr_28817 = state_28815;
(statearr_28817[(7)] = inst_28811);

return statearr_28817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28815__$1,inst_28813);
} else {
if((state_val_28816 === (1))){
var inst_28809 = cljs.core.async.timeout.call(null,(100));
var state_28815__$1 = state_28815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28815__$1,(2),inst_28809);
} else {
return null;
}
}
});})(c__16142__auto__,map__28804,map__28804__$1,opts,on_cssload))
;
return ((function (switch__16086__auto__,c__16142__auto__,map__28804,map__28804__$1,opts,on_cssload){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_28821 = [null,null,null,null,null,null,null,null];
(statearr_28821[(0)] = state_machine__16087__auto__);

(statearr_28821[(1)] = (1));

return statearr_28821;
});
var state_machine__16087__auto____1 = (function (state_28815){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_28815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e28822){if((e28822 instanceof Object)){
var ex__16090__auto__ = e28822;
var statearr_28823_28846 = state_28815;
(statearr_28823_28846[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28847 = state_28815;
state_28815 = G__28847;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_28815){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_28815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto__,map__28804,map__28804__$1,opts,on_cssload))
})();
var state__16144__auto__ = (function (){var statearr_28824 = f__16143__auto__.call(null);
(statearr_28824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto__);

return statearr_28824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto__,map__28804,map__28804__$1,opts,on_cssload))
);

return c__16142__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1424021762770