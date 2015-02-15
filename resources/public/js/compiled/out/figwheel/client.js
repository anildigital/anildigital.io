// Compiled by ClojureScript 0.0-2760 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27157__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27158__i = 0, G__27158__a = new Array(arguments.length -  0);
while (G__27158__i < G__27158__a.length) {G__27158__a[G__27158__i] = arguments[G__27158__i + 0]; ++G__27158__i;}
  args = new cljs.core.IndexedSeq(G__27158__a,0);
} 
return G__27157__delegate.call(this,args);};
G__27157.cljs$lang$maxFixedArity = 0;
G__27157.cljs$lang$applyTo = (function (arglist__27159){
var args = cljs.core.seq(arglist__27159);
return G__27157__delegate(args);
});
G__27157.cljs$core$IFn$_invoke$arity$variadic = G__27157__delegate;
return G__27157;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__27160){
var map__27162 = p__27160;
var map__27162__$1 = ((cljs.core.seq_QMARK_.call(null,map__27162))?cljs.core.apply.call(null,cljs.core.hash_map,map__27162):map__27162);
var class$ = cljs.core.get.call(null,map__27162__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__27162__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__12718__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__12718__auto__)){
return or__12718__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__12706__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__12706__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__12706__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__16142__auto___27291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto___27291,ch){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto___27291,ch){
return (function (state_27265){
var state_val_27266 = (state_27265[(1)]);
if((state_val_27266 === (7))){
var inst_27261 = (state_27265[(2)]);
var state_27265__$1 = state_27265;
var statearr_27267_27292 = state_27265__$1;
(statearr_27267_27292[(2)] = inst_27261);

(statearr_27267_27292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (1))){
var state_27265__$1 = state_27265;
var statearr_27268_27293 = state_27265__$1;
(statearr_27268_27293[(2)] = null);

(statearr_27268_27293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (4))){
var inst_27229 = (state_27265[(7)]);
var inst_27229__$1 = (state_27265[(2)]);
var state_27265__$1 = (function (){var statearr_27269 = state_27265;
(statearr_27269[(7)] = inst_27229__$1);

return statearr_27269;
})();
if(cljs.core.truth_(inst_27229__$1)){
var statearr_27270_27294 = state_27265__$1;
(statearr_27270_27294[(1)] = (5));

} else {
var statearr_27271_27295 = state_27265__$1;
(statearr_27271_27295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (13))){
var state_27265__$1 = state_27265;
var statearr_27272_27296 = state_27265__$1;
(statearr_27272_27296[(2)] = null);

(statearr_27272_27296[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (6))){
var state_27265__$1 = state_27265;
var statearr_27273_27297 = state_27265__$1;
(statearr_27273_27297[(2)] = null);

(statearr_27273_27297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (3))){
var inst_27263 = (state_27265[(2)]);
var state_27265__$1 = state_27265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27265__$1,inst_27263);
} else {
if((state_val_27266 === (12))){
var inst_27236 = (state_27265[(8)]);
var inst_27249 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27236);
var inst_27250 = cljs.core.first.call(null,inst_27249);
var inst_27251 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27250);
var inst_27252 = console.warn("Figwheel: Not loading code with warnings - ",inst_27251);
var state_27265__$1 = state_27265;
var statearr_27274_27298 = state_27265__$1;
(statearr_27274_27298[(2)] = inst_27252);

(statearr_27274_27298[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (2))){
var state_27265__$1 = state_27265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27265__$1,(4),ch);
} else {
if((state_val_27266 === (11))){
var inst_27245 = (state_27265[(2)]);
var state_27265__$1 = state_27265;
var statearr_27275_27299 = state_27265__$1;
(statearr_27275_27299[(2)] = inst_27245);

(statearr_27275_27299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (9))){
var inst_27235 = (state_27265[(9)]);
var inst_27247 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27235,opts);
var state_27265__$1 = state_27265;
if(inst_27247){
var statearr_27276_27300 = state_27265__$1;
(statearr_27276_27300[(1)] = (12));

} else {
var statearr_27277_27301 = state_27265__$1;
(statearr_27277_27301[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (5))){
var inst_27229 = (state_27265[(7)]);
var inst_27235 = (state_27265[(9)]);
var inst_27231 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27232 = (new cljs.core.PersistentArrayMap(null,2,inst_27231,null));
var inst_27233 = (new cljs.core.PersistentHashSet(null,inst_27232,null));
var inst_27234 = figwheel.client.focus_msgs.call(null,inst_27233,inst_27229);
var inst_27235__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27234);
var inst_27236 = cljs.core.first.call(null,inst_27234);
var inst_27237 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27235__$1,opts);
var state_27265__$1 = (function (){var statearr_27278 = state_27265;
(statearr_27278[(8)] = inst_27236);

(statearr_27278[(9)] = inst_27235__$1);

return statearr_27278;
})();
if(cljs.core.truth_(inst_27237)){
var statearr_27279_27302 = state_27265__$1;
(statearr_27279_27302[(1)] = (8));

} else {
var statearr_27280_27303 = state_27265__$1;
(statearr_27280_27303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (14))){
var inst_27255 = (state_27265[(2)]);
var state_27265__$1 = state_27265;
var statearr_27281_27304 = state_27265__$1;
(statearr_27281_27304[(2)] = inst_27255);

(statearr_27281_27304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (10))){
var inst_27257 = (state_27265[(2)]);
var state_27265__$1 = (function (){var statearr_27282 = state_27265;
(statearr_27282[(10)] = inst_27257);

return statearr_27282;
})();
var statearr_27283_27305 = state_27265__$1;
(statearr_27283_27305[(2)] = null);

(statearr_27283_27305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27266 === (8))){
var inst_27236 = (state_27265[(8)]);
var inst_27239 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27240 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27236);
var inst_27241 = cljs.core.async.timeout.call(null,(1000));
var inst_27242 = [inst_27240,inst_27241];
var inst_27243 = (new cljs.core.PersistentVector(null,2,(5),inst_27239,inst_27242,null));
var state_27265__$1 = state_27265;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27265__$1,(11),inst_27243);
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
});})(c__16142__auto___27291,ch))
;
return ((function (switch__16086__auto__,c__16142__auto___27291,ch){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_27287 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27287[(0)] = state_machine__16087__auto__);

(statearr_27287[(1)] = (1));

return statearr_27287;
});
var state_machine__16087__auto____1 = (function (state_27265){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_27265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e27288){if((e27288 instanceof Object)){
var ex__16090__auto__ = e27288;
var statearr_27289_27306 = state_27265;
(statearr_27289_27306[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27307 = state_27265;
state_27265 = G__27307;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_27265){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_27265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto___27291,ch))
})();
var state__16144__auto__ = (function (){var statearr_27290 = f__16143__auto__.call(null);
(statearr_27290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___27291);

return statearr_27290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto___27291,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__27308_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27308_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_27313 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27314 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27313,_STAR_print_newline_STAR_27314){
return (function() { 
var G__27315__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27316__i = 0, G__27316__a = new Array(arguments.length -  0);
while (G__27316__i < G__27316__a.length) {G__27316__a[G__27316__i] = arguments[G__27316__i + 0]; ++G__27316__i;}
  args = new cljs.core.IndexedSeq(G__27316__a,0);
} 
return G__27315__delegate.call(this,args);};
G__27315.cljs$lang$maxFixedArity = 0;
G__27315.cljs$lang$applyTo = (function (arglist__27317){
var args = cljs.core.seq(arglist__27317);
return G__27315__delegate(args);
});
G__27315.cljs$core$IFn$_invoke$arity$variadic = G__27315__delegate;
return G__27315;
})()
;})(_STAR_print_fn_STAR_27313,_STAR_print_newline_STAR_27314))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27314;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27313;
}}catch (e27312){if((e27312 instanceof Error)){
var e = e27312;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e27312;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs)){
} else {
cljs = {};
}

if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__27318){
var map__27323 = p__27318;
var map__27323__$1 = ((cljs.core.seq_QMARK_.call(null,map__27323))?cljs.core.apply.call(null,cljs.core.hash_map,map__27323):map__27323);
var opts = map__27323__$1;
var build_id = cljs.core.get.call(null,map__27323__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27323,map__27323__$1,opts,build_id){
return (function (p__27324){
var vec__27325 = p__27324;
var map__27326 = cljs.core.nth.call(null,vec__27325,(0),null);
var map__27326__$1 = ((cljs.core.seq_QMARK_.call(null,map__27326))?cljs.core.apply.call(null,cljs.core.hash_map,map__27326):map__27326);
var msg = map__27326__$1;
var msg_name = cljs.core.get.call(null,map__27326__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27325,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__27325,map__27326,map__27326__$1,msg,msg_name,_,map__27323,map__27323__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27325,map__27326,map__27326__$1,msg,msg_name,_,map__27323,map__27323__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27323,map__27323__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__27330){
var vec__27331 = p__27330;
var map__27332 = cljs.core.nth.call(null,vec__27331,(0),null);
var map__27332__$1 = ((cljs.core.seq_QMARK_.call(null,map__27332))?cljs.core.apply.call(null,cljs.core.hash_map,map__27332):map__27332);
var msg = map__27332__$1;
var msg_name = cljs.core.get.call(null,map__27332__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27331,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__27333){
var map__27341 = p__27333;
var map__27341__$1 = ((cljs.core.seq_QMARK_.call(null,map__27341))?cljs.core.apply.call(null,cljs.core.hash_map,map__27341):map__27341);
var on_compile_fail = cljs.core.get.call(null,map__27341__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__27341__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__27341,map__27341__$1,on_compile_fail,on_compile_warning){
return (function (p__27342){
var vec__27343 = p__27342;
var map__27344 = cljs.core.nth.call(null,vec__27343,(0),null);
var map__27344__$1 = ((cljs.core.seq_QMARK_.call(null,map__27344))?cljs.core.apply.call(null,cljs.core.hash_map,map__27344):map__27344);
var msg = map__27344__$1;
var msg_name = cljs.core.get.call(null,map__27344__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27343,(1));
var pred__27345 = cljs.core._EQ_;
var expr__27346 = msg_name;
if(cljs.core.truth_(pred__27345.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27346))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27345.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27346))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27341,map__27341__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__16142__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto__,msg_hist,msg_names,msg){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto__,msg_hist,msg_names,msg){
return (function (state_27523){
var state_val_27524 = (state_27523[(1)]);
if((state_val_27524 === (7))){
var inst_27472 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27523__$1 = state_27523;
if(inst_27472){
var statearr_27525_27562 = state_27523__$1;
(statearr_27525_27562[(1)] = (11));

} else {
var statearr_27526_27563 = state_27523__$1;
(statearr_27526_27563[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (20))){
var inst_27513 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27527_27564 = state_27523__$1;
(statearr_27527_27564[(2)] = inst_27513);

(statearr_27527_27564[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (27))){
var inst_27504 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27523__$1,(30),inst_27504);
} else {
if((state_val_27524 === (1))){
var inst_27455 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27523__$1 = state_27523;
if(cljs.core.truth_(inst_27455)){
var statearr_27528_27565 = state_27523__$1;
(statearr_27528_27565[(1)] = (2));

} else {
var statearr_27529_27566 = state_27523__$1;
(statearr_27529_27566[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (24))){
var inst_27502 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27523__$1 = state_27523;
if(inst_27502){
var statearr_27530_27567 = state_27523__$1;
(statearr_27530_27567[(1)] = (27));

} else {
var statearr_27531_27568 = state_27523__$1;
(statearr_27531_27568[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (4))){
var inst_27521 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27523__$1,inst_27521);
} else {
if((state_val_27524 === (15))){
var inst_27482 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27483 = figwheel.client.heads_up.append_message.call(null,inst_27482);
var state_27523__$1 = state_27523;
var statearr_27532_27569 = state_27523__$1;
(statearr_27532_27569[(2)] = inst_27483);

(statearr_27532_27569[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (21))){
var inst_27489 = (state_27523[(2)]);
var inst_27490 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27491 = figwheel.client.heads_up.display_warning.call(null,inst_27490);
var state_27523__$1 = (function (){var statearr_27533 = state_27523;
(statearr_27533[(7)] = inst_27489);

return statearr_27533;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27523__$1,(22),inst_27491);
} else {
if((state_val_27524 === (13))){
var inst_27517 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27534_27570 = state_27523__$1;
(statearr_27534_27570[(2)] = inst_27517);

(statearr_27534_27570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (22))){
var inst_27493 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27535_27571 = state_27523__$1;
(statearr_27535_27571[(2)] = inst_27493);

(statearr_27535_27571[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (29))){
var inst_27509 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27536_27572 = state_27523__$1;
(statearr_27536_27572[(2)] = inst_27509);

(statearr_27536_27572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (6))){
var inst_27463 = figwheel.client.heads_up.clear.call(null);
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27523__$1,(9),inst_27463);
} else {
if((state_val_27524 === (28))){
var state_27523__$1 = state_27523;
var statearr_27537_27573 = state_27523__$1;
(statearr_27537_27573[(2)] = null);

(statearr_27537_27573[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (25))){
var inst_27511 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27538_27574 = state_27523__$1;
(statearr_27538_27574[(2)] = inst_27511);

(statearr_27538_27574[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (17))){
var inst_27515 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27539_27575 = state_27523__$1;
(statearr_27539_27575[(2)] = inst_27515);

(statearr_27539_27575[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (3))){
var inst_27461 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27523__$1 = state_27523;
if(inst_27461){
var statearr_27540_27576 = state_27523__$1;
(statearr_27540_27576[(1)] = (6));

} else {
var statearr_27541_27577 = state_27523__$1;
(statearr_27541_27577[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (12))){
var inst_27480 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27523__$1 = state_27523;
if(inst_27480){
var statearr_27542_27578 = state_27523__$1;
(statearr_27542_27578[(1)] = (15));

} else {
var statearr_27543_27579 = state_27523__$1;
(statearr_27543_27579[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (2))){
var inst_27457 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27523__$1,(5),inst_27457);
} else {
if((state_val_27524 === (23))){
var inst_27497 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27498 = figwheel.client.heads_up.display_warning.call(null,inst_27497);
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27523__$1,(26),inst_27498);
} else {
if((state_val_27524 === (19))){
var inst_27495 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27523__$1 = state_27523;
if(inst_27495){
var statearr_27544_27580 = state_27523__$1;
(statearr_27544_27580[(1)] = (23));

} else {
var statearr_27545_27581 = state_27523__$1;
(statearr_27545_27581[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (11))){
var inst_27474 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27475 = figwheel.client.format_messages.call(null,inst_27474);
var inst_27476 = figwheel.client.heads_up.display_error.call(null,inst_27475);
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27523__$1,(14),inst_27476);
} else {
if((state_val_27524 === (9))){
var inst_27465 = (state_27523[(2)]);
var inst_27466 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27467 = figwheel.client.format_messages.call(null,inst_27466);
var inst_27468 = figwheel.client.heads_up.display_error.call(null,inst_27467);
var state_27523__$1 = (function (){var statearr_27546 = state_27523;
(statearr_27546[(8)] = inst_27465);

return statearr_27546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27523__$1,(10),inst_27468);
} else {
if((state_val_27524 === (5))){
var inst_27459 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27547_27582 = state_27523__$1;
(statearr_27547_27582[(2)] = inst_27459);

(statearr_27547_27582[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (14))){
var inst_27478 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27548_27583 = state_27523__$1;
(statearr_27548_27583[(2)] = inst_27478);

(statearr_27548_27583[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (26))){
var inst_27500 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27549_27584 = state_27523__$1;
(statearr_27549_27584[(2)] = inst_27500);

(statearr_27549_27584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (16))){
var inst_27485 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27523__$1 = state_27523;
if(inst_27485){
var statearr_27550_27585 = state_27523__$1;
(statearr_27550_27585[(1)] = (18));

} else {
var statearr_27551_27586 = state_27523__$1;
(statearr_27551_27586[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (30))){
var inst_27506 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27552_27587 = state_27523__$1;
(statearr_27552_27587[(2)] = inst_27506);

(statearr_27552_27587[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (10))){
var inst_27470 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27553_27588 = state_27523__$1;
(statearr_27553_27588[(2)] = inst_27470);

(statearr_27553_27588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27524 === (18))){
var inst_27487 = figwheel.client.heads_up.clear.call(null);
var state_27523__$1 = state_27523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27523__$1,(21),inst_27487);
} else {
if((state_val_27524 === (8))){
var inst_27519 = (state_27523[(2)]);
var state_27523__$1 = state_27523;
var statearr_27554_27589 = state_27523__$1;
(statearr_27554_27589[(2)] = inst_27519);

(statearr_27554_27589[(1)] = (4));


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
});})(c__16142__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__16086__auto__,c__16142__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_27558 = [null,null,null,null,null,null,null,null,null];
(statearr_27558[(0)] = state_machine__16087__auto__);

(statearr_27558[(1)] = (1));

return statearr_27558;
});
var state_machine__16087__auto____1 = (function (state_27523){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_27523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e27559){if((e27559 instanceof Object)){
var ex__16090__auto__ = e27559;
var statearr_27560_27590 = state_27523;
(statearr_27560_27590[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27591 = state_27523;
state_27523 = G__27591;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_27523){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_27523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto__,msg_hist,msg_names,msg))
})();
var state__16144__auto__ = (function (){var statearr_27561 = f__16143__auto__.call(null);
(statearr_27561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto__);

return statearr_27561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto__,msg_hist,msg_names,msg))
);

return c__16142__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__16142__auto___27654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto___27654,ch){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto___27654,ch){
return (function (state_27637){
var state_val_27638 = (state_27637[(1)]);
if((state_val_27638 === (8))){
var inst_27629 = (state_27637[(2)]);
var state_27637__$1 = (function (){var statearr_27639 = state_27637;
(statearr_27639[(7)] = inst_27629);

return statearr_27639;
})();
var statearr_27640_27655 = state_27637__$1;
(statearr_27640_27655[(2)] = null);

(statearr_27640_27655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (7))){
var inst_27633 = (state_27637[(2)]);
var state_27637__$1 = state_27637;
var statearr_27641_27656 = state_27637__$1;
(statearr_27641_27656[(2)] = inst_27633);

(statearr_27641_27656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (6))){
var state_27637__$1 = state_27637;
var statearr_27642_27657 = state_27637__$1;
(statearr_27642_27657[(2)] = null);

(statearr_27642_27657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (5))){
var inst_27625 = (state_27637[(8)]);
var inst_27627 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27625);
var state_27637__$1 = state_27637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27637__$1,(8),inst_27627);
} else {
if((state_val_27638 === (4))){
var inst_27625 = (state_27637[(8)]);
var inst_27625__$1 = (state_27637[(2)]);
var state_27637__$1 = (function (){var statearr_27643 = state_27637;
(statearr_27643[(8)] = inst_27625__$1);

return statearr_27643;
})();
if(cljs.core.truth_(inst_27625__$1)){
var statearr_27644_27658 = state_27637__$1;
(statearr_27644_27658[(1)] = (5));

} else {
var statearr_27645_27659 = state_27637__$1;
(statearr_27645_27659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (3))){
var inst_27635 = (state_27637[(2)]);
var state_27637__$1 = state_27637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27637__$1,inst_27635);
} else {
if((state_val_27638 === (2))){
var state_27637__$1 = state_27637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27637__$1,(4),ch);
} else {
if((state_val_27638 === (1))){
var state_27637__$1 = state_27637;
var statearr_27646_27660 = state_27637__$1;
(statearr_27646_27660[(2)] = null);

(statearr_27646_27660[(1)] = (2));


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
});})(c__16142__auto___27654,ch))
;
return ((function (switch__16086__auto__,c__16142__auto___27654,ch){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_27650 = [null,null,null,null,null,null,null,null,null];
(statearr_27650[(0)] = state_machine__16087__auto__);

(statearr_27650[(1)] = (1));

return statearr_27650;
});
var state_machine__16087__auto____1 = (function (state_27637){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_27637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e27651){if((e27651 instanceof Object)){
var ex__16090__auto__ = e27651;
var statearr_27652_27661 = state_27637;
(statearr_27652_27661[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27662 = state_27637;
state_27637 = G__27662;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_27637){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_27637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto___27654,ch))
})();
var state__16144__auto__ = (function (){var statearr_27653 = f__16143__auto__.call(null);
(statearr_27653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___27654);

return statearr_27653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto___27654,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__16142__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto__){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto__){
return (function (state_27683){
var state_val_27684 = (state_27683[(1)]);
if((state_val_27684 === (2))){
var inst_27680 = (state_27683[(2)]);
var inst_27681 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27683__$1 = (function (){var statearr_27685 = state_27683;
(statearr_27685[(7)] = inst_27680);

return statearr_27685;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27683__$1,inst_27681);
} else {
if((state_val_27684 === (1))){
var inst_27678 = cljs.core.async.timeout.call(null,(3000));
var state_27683__$1 = state_27683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27683__$1,(2),inst_27678);
} else {
return null;
}
}
});})(c__16142__auto__))
;
return ((function (switch__16086__auto__,c__16142__auto__){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_27689 = [null,null,null,null,null,null,null,null];
(statearr_27689[(0)] = state_machine__16087__auto__);

(statearr_27689[(1)] = (1));

return statearr_27689;
});
var state_machine__16087__auto____1 = (function (state_27683){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_27683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e27690){if((e27690 instanceof Object)){
var ex__16090__auto__ = e27690;
var statearr_27691_27693 = state_27683;
(statearr_27691_27693[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27694 = state_27683;
state_27683 = G__27694;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_27683){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_27683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto__))
})();
var state__16144__auto__ = (function (){var statearr_27692 = f__16143__auto__.call(null);
(statearr_27692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto__);

return statearr_27692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto__))
);

return c__16142__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__12706__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__12706__auto__)){
return ("CustomEvent" in window);
} else {
return and__12706__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj27698 = {"detail":url};
return obj27698;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__27699){
var map__27705 = p__27699;
var map__27705__$1 = ((cljs.core.seq_QMARK_.call(null,map__27705))?cljs.core.apply.call(null,cljs.core.hash_map,map__27705):map__27705);
var ed = map__27705__$1;
var exception_data = cljs.core.get.call(null,map__27705__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__27705__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27706_27710 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27707_27711 = null;
var count__27708_27712 = (0);
var i__27709_27713 = (0);
while(true){
if((i__27709_27713 < count__27708_27712)){
var msg_27714 = cljs.core._nth.call(null,chunk__27707_27711,i__27709_27713);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27714);

var G__27715 = seq__27706_27710;
var G__27716 = chunk__27707_27711;
var G__27717 = count__27708_27712;
var G__27718 = (i__27709_27713 + (1));
seq__27706_27710 = G__27715;
chunk__27707_27711 = G__27716;
count__27708_27712 = G__27717;
i__27709_27713 = G__27718;
continue;
} else {
var temp__4126__auto___27719 = cljs.core.seq.call(null,seq__27706_27710);
if(temp__4126__auto___27719){
var seq__27706_27720__$1 = temp__4126__auto___27719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27706_27720__$1)){
var c__13505__auto___27721 = cljs.core.chunk_first.call(null,seq__27706_27720__$1);
var G__27722 = cljs.core.chunk_rest.call(null,seq__27706_27720__$1);
var G__27723 = c__13505__auto___27721;
var G__27724 = cljs.core.count.call(null,c__13505__auto___27721);
var G__27725 = (0);
seq__27706_27710 = G__27722;
chunk__27707_27711 = G__27723;
count__27708_27712 = G__27724;
i__27709_27713 = G__27725;
continue;
} else {
var msg_27726 = cljs.core.first.call(null,seq__27706_27720__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27726);

var G__27727 = cljs.core.next.call(null,seq__27706_27720__$1);
var G__27728 = null;
var G__27729 = (0);
var G__27730 = (0);
seq__27706_27710 = G__27727;
chunk__27707_27711 = G__27728;
count__27708_27712 = G__27729;
i__27709_27713 = G__27730;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__27731){
var map__27733 = p__27731;
var map__27733__$1 = ((cljs.core.seq_QMARK_.call(null,map__27733))?cljs.core.apply.call(null,cljs.core.hash_map,map__27733):map__27733);
var w = map__27733__$1;
var message = cljs.core.get.call(null,map__27733__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
if(cljs.core.truth_((function (){var and__12706__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__12706__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__12706__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$1,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$1;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__27740 = cljs.core.seq.call(null,plugins);
var chunk__27741 = null;
var count__27742 = (0);
var i__27743 = (0);
while(true){
if((i__27743 < count__27742)){
var vec__27744 = cljs.core._nth.call(null,chunk__27741,i__27743);
var k = cljs.core.nth.call(null,vec__27744,(0),null);
var plugin = cljs.core.nth.call(null,vec__27744,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27746 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27740,chunk__27741,count__27742,i__27743,pl_27746,vec__27744,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27746.call(null,msg_hist);
});})(seq__27740,chunk__27741,count__27742,i__27743,pl_27746,vec__27744,k,plugin))
);
} else {
}

var G__27747 = seq__27740;
var G__27748 = chunk__27741;
var G__27749 = count__27742;
var G__27750 = (i__27743 + (1));
seq__27740 = G__27747;
chunk__27741 = G__27748;
count__27742 = G__27749;
i__27743 = G__27750;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__27740);
if(temp__4126__auto__){
var seq__27740__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27740__$1)){
var c__13505__auto__ = cljs.core.chunk_first.call(null,seq__27740__$1);
var G__27751 = cljs.core.chunk_rest.call(null,seq__27740__$1);
var G__27752 = c__13505__auto__;
var G__27753 = cljs.core.count.call(null,c__13505__auto__);
var G__27754 = (0);
seq__27740 = G__27751;
chunk__27741 = G__27752;
count__27742 = G__27753;
i__27743 = G__27754;
continue;
} else {
var vec__27745 = cljs.core.first.call(null,seq__27740__$1);
var k = cljs.core.nth.call(null,vec__27745,(0),null);
var plugin = cljs.core.nth.call(null,vec__27745,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27755 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27740,chunk__27741,count__27742,i__27743,pl_27755,vec__27745,k,plugin,seq__27740__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27755.call(null,msg_hist);
});})(seq__27740,chunk__27741,count__27742,i__27743,pl_27755,vec__27745,k,plugin,seq__27740__$1,temp__4126__auto__))
);
} else {
}

var G__27756 = cljs.core.next.call(null,seq__27740__$1);
var G__27757 = null;
var G__27758 = (0);
var G__27759 = (0);
seq__27740 = G__27756;
chunk__27741 = G__27757;
count__27742 = G__27758;
i__27743 = G__27759;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__27760){
var map__27762 = p__27760;
var map__27762__$1 = ((cljs.core.seq_QMARK_.call(null,map__27762))?cljs.core.apply.call(null,cljs.core.hash_map,map__27762):map__27762);
var opts = map__27762__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__27760 = null;
if (arguments.length > 0) {
var G__27763__i = 0, G__27763__a = new Array(arguments.length -  0);
while (G__27763__i < G__27763__a.length) {G__27763__a[G__27763__i] = arguments[G__27763__i + 0]; ++G__27763__i;}
  p__27760 = new cljs.core.IndexedSeq(G__27763__a,0);
} 
return watch_and_reload__delegate.call(this,p__27760);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__27764){
var p__27760 = cljs.core.seq(arglist__27764);
return watch_and_reload__delegate(p__27760);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1424021761732