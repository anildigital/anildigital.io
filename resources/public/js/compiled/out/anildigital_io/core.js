// Compiled by ClojureScript 0.0-2760 {}
goog.provide('anildigital_io.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('om.core');
if(typeof anildigital_io.core.app_state !== 'undefined'){
} else {
anildigital_io.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"loading"], null)], null)], null));
}
anildigital_io.core.fetch_feed = (function fetch_feed(){
var c__14647__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14647__auto__){
return (function (){
var f__14648__auto__ = (function (){var switch__14632__auto__ = ((function (c__14647__auto__){
return (function (state_17592){
var state_val_17593 = (state_17592[(1)]);
if((state_val_17593 === (2))){
var inst_17584 = (state_17592[(2)]);
var inst_17585 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_17584);
var inst_17586 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17587 = [new cljs.core.Keyword(null,"recenttracks","recenttracks",-814205062),new cljs.core.Keyword(null,"track","track",195787487)];
var inst_17588 = (new cljs.core.PersistentVector(null,2,(5),inst_17586,inst_17587,null));
var inst_17589 = cljs.core.get_in.call(null,inst_17585,inst_17588);
var inst_17590 = cljs.core.swap_BANG_.call(null,anildigital_io.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"list","list",765357683),inst_17589);
var state_17592__$1 = state_17592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17592__$1,inst_17590);
} else {
if((state_val_17593 === (1))){
var inst_17579 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_17580 = [false];
var inst_17581 = cljs.core.PersistentHashMap.fromArrays(inst_17579,inst_17580);
var inst_17582 = cljs_http.client.get.call(null,"http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=anildigital&api_key=d5eb0b1875c450d79bb1e5bb36aac9a6&limit=15&format=json",inst_17581);
var state_17592__$1 = state_17592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17592__$1,(2),inst_17582);
} else {
return null;
}
}
});})(c__14647__auto__))
;
return ((function (switch__14632__auto__,c__14647__auto__){
return (function() {
var state_machine__14633__auto__ = null;
var state_machine__14633__auto____0 = (function (){
var statearr_17597 = [null,null,null,null,null,null,null];
(statearr_17597[(0)] = state_machine__14633__auto__);

(statearr_17597[(1)] = (1));

return statearr_17597;
});
var state_machine__14633__auto____1 = (function (state_17592){
while(true){
var ret_value__14634__auto__ = (function (){try{while(true){
var result__14635__auto__ = switch__14632__auto__.call(null,state_17592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14635__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14635__auto__;
}
break;
}
}catch (e17598){if((e17598 instanceof Object)){
var ex__14636__auto__ = e17598;
var statearr_17599_17601 = state_17592;
(statearr_17599_17601[(5)] = ex__14636__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14634__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17602 = state_17592;
state_17592 = G__17602;
continue;
} else {
return ret_value__14634__auto__;
}
break;
}
});
state_machine__14633__auto__ = function(state_17592){
switch(arguments.length){
case 0:
return state_machine__14633__auto____0.call(this);
case 1:
return state_machine__14633__auto____1.call(this,state_17592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14633__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14633__auto____0;
state_machine__14633__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14633__auto____1;
return state_machine__14633__auto__;
})()
;})(switch__14632__auto__,c__14647__auto__))
})();
var state__14649__auto__ = (function (){var statearr_17600 = f__14648__auto__.call(null);
(statearr_17600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14647__auto__);

return statearr_17600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14649__auto__);
});})(c__14647__auto__))
);

return c__14647__auto__;
});
om.core.root.call(null,(function (data,owner){
if(typeof anildigital_io.core.t17603 !== 'undefined'){
} else {

/**
* @constructor
*/
anildigital_io.core.t17603 = (function (owner,data,meta17604){
this.owner = owner;
this.data = data;
this.meta17604 = meta17604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
anildigital_io.core.t17603.prototype.om$core$IRender$ = true;

anildigital_io.core.t17603.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.ul,{"className": "music_list"},cljs.core.map.call(null,((function (___$1){
return (function (text){
return React.DOM.li(null,[cljs.core.str(cljs.core.get_in.call(null,text,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null))),cljs.core.str(" - "),cljs.core.str(cljs.core.get_in.call(null,text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"artist","artist",152869709),new cljs.core.Keyword(null,"#text","#text",-1034841636)], null)))].join(''));
});})(___$1))
,new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

anildigital_io.core.t17603.prototype.om$core$IDidMount$ = true;

anildigital_io.core.t17603.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
anildigital_io.core.fetch_feed.call(null);

return setInterval(((function (___$1){
return (function (){
return anildigital_io.core.fetch_feed.call(null);
});})(___$1))
,(10000));
});

anildigital_io.core.t17603.prototype.om$core$IInitState$ = true;

anildigital_io.core.t17603.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,anildigital_io.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"loading..."], null)], null));
});

anildigital_io.core.t17603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17605){
var self__ = this;
var _17605__$1 = this;
return self__.meta17604;
});

anildigital_io.core.t17603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17605,meta17604__$1){
var self__ = this;
var _17605__$1 = this;
return (new anildigital_io.core.t17603(self__.owner,self__.data,meta17604__$1));
});

anildigital_io.core.t17603.cljs$lang$type = true;

anildigital_io.core.t17603.cljs$lang$ctorStr = "anildigital-io.core/t17603";

anildigital_io.core.t17603.cljs$lang$ctorPrWriter = (function (this__13306__auto__,writer__13307__auto__,opt__13308__auto__){
return cljs.core._write.call(null,writer__13307__auto__,"anildigital-io.core/t17603");
});

anildigital_io.core.__GT_t17603 = (function __GT_t17603(owner__$1,data__$1,meta17604){
return (new anildigital_io.core.t17603(owner__$1,data__$1,meta17604));
});

}

return (new anildigital_io.core.t17603(owner,data,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),128,new cljs.core.Keyword(null,"end-line","end-line",1837326455),34,new cljs.core.Keyword(null,"column","column",2078222095),4,new cljs.core.Keyword(null,"line","line",212345235),21,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/anil/Code/clojure/clojurescript/anildigital-io/src/anildigital_io/core.cljs"], null)));
}),anildigital_io.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map?rel=1424031525852