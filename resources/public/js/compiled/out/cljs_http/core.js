// Compiled by ClojureScript 0.0-2760 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Attempt to close the given channel and abort the pending HTTP request
* with which it is associated.
*/
cljs_http.core.abort_BANG_ = (function abort_BANG_(channel){
var temp__4126__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4126__auto__)){
var xhr = temp__4126__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

return xhr.abort();
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
* Takes an XhrIo object and applies the default-headers to it.
*/
cljs_http.core.apply_default_headers_BANG_ = (function apply_default_headers_BANG_(xhr,headers){
var seq__19030 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__19035 = null;
var count__19036 = (0);
var i__19037 = (0);
while(true){
if((i__19037 < count__19036)){
var h_name = cljs.core._nth.call(null,chunk__19035,i__19037);
var seq__19038_19042 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__19039_19043 = null;
var count__19040_19044 = (0);
var i__19041_19045 = (0);
while(true){
if((i__19041_19045 < count__19040_19044)){
var h_val_19046 = cljs.core._nth.call(null,chunk__19039_19043,i__19041_19045);
xhr.headers.set(h_name,h_val_19046);

var G__19047 = seq__19038_19042;
var G__19048 = chunk__19039_19043;
var G__19049 = count__19040_19044;
var G__19050 = (i__19041_19045 + (1));
seq__19038_19042 = G__19047;
chunk__19039_19043 = G__19048;
count__19040_19044 = G__19049;
i__19041_19045 = G__19050;
continue;
} else {
var temp__4126__auto___19051 = cljs.core.seq.call(null,seq__19038_19042);
if(temp__4126__auto___19051){
var seq__19038_19052__$1 = temp__4126__auto___19051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19038_19052__$1)){
var c__13506__auto___19053 = cljs.core.chunk_first.call(null,seq__19038_19052__$1);
var G__19054 = cljs.core.chunk_rest.call(null,seq__19038_19052__$1);
var G__19055 = c__13506__auto___19053;
var G__19056 = cljs.core.count.call(null,c__13506__auto___19053);
var G__19057 = (0);
seq__19038_19042 = G__19054;
chunk__19039_19043 = G__19055;
count__19040_19044 = G__19056;
i__19041_19045 = G__19057;
continue;
} else {
var h_val_19058 = cljs.core.first.call(null,seq__19038_19052__$1);
xhr.headers.set(h_name,h_val_19058);

var G__19059 = cljs.core.next.call(null,seq__19038_19052__$1);
var G__19060 = null;
var G__19061 = (0);
var G__19062 = (0);
seq__19038_19042 = G__19059;
chunk__19039_19043 = G__19060;
count__19040_19044 = G__19061;
i__19041_19045 = G__19062;
continue;
}
} else {
}
}
break;
}

var G__19063 = seq__19030;
var G__19064 = chunk__19035;
var G__19065 = count__19036;
var G__19066 = (i__19037 + (1));
seq__19030 = G__19063;
chunk__19035 = G__19064;
count__19036 = G__19065;
i__19037 = G__19066;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19030);
if(temp__4126__auto__){
var seq__19030__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19030__$1)){
var c__13506__auto__ = cljs.core.chunk_first.call(null,seq__19030__$1);
var G__19067 = cljs.core.chunk_rest.call(null,seq__19030__$1);
var G__19068 = c__13506__auto__;
var G__19069 = cljs.core.count.call(null,c__13506__auto__);
var G__19070 = (0);
seq__19030 = G__19067;
chunk__19035 = G__19068;
count__19036 = G__19069;
i__19037 = G__19070;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__19030__$1);
var seq__19031_19071 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__19032_19072 = null;
var count__19033_19073 = (0);
var i__19034_19074 = (0);
while(true){
if((i__19034_19074 < count__19033_19073)){
var h_val_19075 = cljs.core._nth.call(null,chunk__19032_19072,i__19034_19074);
xhr.headers.set(h_name,h_val_19075);

var G__19076 = seq__19031_19071;
var G__19077 = chunk__19032_19072;
var G__19078 = count__19033_19073;
var G__19079 = (i__19034_19074 + (1));
seq__19031_19071 = G__19076;
chunk__19032_19072 = G__19077;
count__19033_19073 = G__19078;
i__19034_19074 = G__19079;
continue;
} else {
var temp__4126__auto___19080__$1 = cljs.core.seq.call(null,seq__19031_19071);
if(temp__4126__auto___19080__$1){
var seq__19031_19081__$1 = temp__4126__auto___19080__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19031_19081__$1)){
var c__13506__auto___19082 = cljs.core.chunk_first.call(null,seq__19031_19081__$1);
var G__19083 = cljs.core.chunk_rest.call(null,seq__19031_19081__$1);
var G__19084 = c__13506__auto___19082;
var G__19085 = cljs.core.count.call(null,c__13506__auto___19082);
var G__19086 = (0);
seq__19031_19071 = G__19083;
chunk__19032_19072 = G__19084;
count__19033_19073 = G__19085;
i__19034_19074 = G__19086;
continue;
} else {
var h_val_19087 = cljs.core.first.call(null,seq__19031_19081__$1);
xhr.headers.set(h_name,h_val_19087);

var G__19088 = cljs.core.next.call(null,seq__19031_19081__$1);
var G__19089 = null;
var G__19090 = (0);
var G__19091 = (0);
seq__19031_19071 = G__19088;
chunk__19032_19072 = G__19089;
count__19033_19073 = G__19090;
i__19034_19074 = G__19091;
continue;
}
} else {
}
}
break;
}

var G__19092 = cljs.core.next.call(null,seq__19030__$1);
var G__19093 = null;
var G__19094 = (0);
var G__19095 = (0);
seq__19030 = G__19092;
chunk__19035 = G__19093;
count__19036 = G__19094;
i__19037 = G__19095;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
* Builds an XhrIo object from the request parameters.
*/
cljs_http.core.build_xhr = (function build_xhr(p__19096){
var map__19099 = p__19096;
var map__19099__$1 = ((cljs.core.seq_QMARK_.call(null,map__19099))?cljs.core.apply.call(null,cljs.core.hash_map,map__19099):map__19099);
var request = map__19099__$1;
var default_headers = cljs.core.get.call(null,map__19099__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__19099__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var timeout = (function (){var or__12718__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__12718__auto__)){
return or__12718__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__19100 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__19100,default_headers);

G__19100.setTimeoutInterval(timeout);

G__19100.setWithCredentials(send_credentials);

return G__19100;
});
/**
* Execute the HTTP request corresponding to the given Ring request
* map and return a core.async channel.
*/
cljs_http.core.request = (function request(p__19101){
var map__19127 = p__19101;
var map__19127__$1 = ((cljs.core.seq_QMARK_.call(null,map__19127))?cljs.core.apply.call(null,cljs.core.hash_map,map__19127):map__19127);
var request__$1 = map__19127__$1;
var cancel = cljs.core.get.call(null,map__19127__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__19127__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var body = cljs.core.get.call(null,map__19127__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__19127__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var request_method = cljs.core.get.call(null,map__19127__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request__$1);
var method = cljs.core.name.call(null,(function (){var or__12718__auto__ = request_method;
if(cljs.core.truth_(or__12718__auto__)){
return or__12718__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request__$1);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__19127,map__19127__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponseText(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null)], null);
if(!(cljs_http.core.aborted_QMARK_.call(null,xhr))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr,map__19127,map__19127__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__14826__auto___19152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14826__auto___19152,channel,request_url,method,headers__$1,xhr,map__19127,map__19127__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (){
var f__14827__auto__ = (function (){var switch__14770__auto__ = ((function (c__14826__auto___19152,channel,request_url,method,headers__$1,xhr,map__19127,map__19127__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (state_19138){
var state_val_19139 = (state_19138[(1)]);
if((state_val_19139 === (5))){
var inst_19136 = (state_19138[(2)]);
var state_19138__$1 = state_19138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19138__$1,inst_19136);
} else {
if((state_val_19139 === (4))){
var state_19138__$1 = state_19138;
var statearr_19140_19153 = state_19138__$1;
(statearr_19140_19153[(2)] = null);

(statearr_19140_19153[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19139 === (3))){
var inst_19133 = xhr.abort();
var state_19138__$1 = state_19138;
var statearr_19141_19154 = state_19138__$1;
(statearr_19141_19154[(2)] = inst_19133);

(statearr_19141_19154[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19139 === (2))){
var inst_19129 = (state_19138[(2)]);
var inst_19130 = xhr.isComplete();
var inst_19131 = cljs.core.not.call(null,inst_19130);
var state_19138__$1 = (function (){var statearr_19142 = state_19138;
(statearr_19142[(7)] = inst_19129);

return statearr_19142;
})();
if(inst_19131){
var statearr_19143_19155 = state_19138__$1;
(statearr_19143_19155[(1)] = (3));

} else {
var statearr_19144_19156 = state_19138__$1;
(statearr_19144_19156[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19139 === (1))){
var state_19138__$1 = state_19138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19138__$1,(2),cancel);
} else {
return null;
}
}
}
}
}
});})(c__14826__auto___19152,channel,request_url,method,headers__$1,xhr,map__19127,map__19127__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
;
return ((function (switch__14770__auto__,c__14826__auto___19152,channel,request_url,method,headers__$1,xhr,map__19127,map__19127__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function() {
var state_machine__14771__auto__ = null;
var state_machine__14771__auto____0 = (function (){
var statearr_19148 = [null,null,null,null,null,null,null,null];
(statearr_19148[(0)] = state_machine__14771__auto__);

(statearr_19148[(1)] = (1));

return statearr_19148;
});
var state_machine__14771__auto____1 = (function (state_19138){
while(true){
var ret_value__14772__auto__ = (function (){try{while(true){
var result__14773__auto__ = switch__14770__auto__.call(null,state_19138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14773__auto__;
}
break;
}
}catch (e19149){if((e19149 instanceof Object)){
var ex__14774__auto__ = e19149;
var statearr_19150_19157 = state_19138;
(statearr_19150_19157[(5)] = ex__14774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19158 = state_19138;
state_19138 = G__19158;
continue;
} else {
return ret_value__14772__auto__;
}
break;
}
});
state_machine__14771__auto__ = function(state_19138){
switch(arguments.length){
case 0:
return state_machine__14771__auto____0.call(this);
case 1:
return state_machine__14771__auto____1.call(this,state_19138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14771__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14771__auto____0;
state_machine__14771__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14771__auto____1;
return state_machine__14771__auto__;
})()
;})(switch__14770__auto__,c__14826__auto___19152,channel,request_url,method,headers__$1,xhr,map__19127,map__19127__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
})();
var state__14828__auto__ = (function (){var statearr_19151 = f__14827__auto__.call(null);
(statearr_19151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14826__auto___19152);

return statearr_19151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14828__auto__);
});})(c__14826__auto___19152,channel,request_url,method,headers__$1,xhr,map__19127,map__19127__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

} else {
}

return channel;
});

//# sourceMappingURL=core.js.map?rel=1424026960694