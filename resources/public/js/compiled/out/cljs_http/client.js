// Compiled by ClojureScript 0.0-2760 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function if_pos(v){
if(cljs.core.truth_((function (){var and__12706__auto__ = v;
if(cljs.core.truth_(and__12706__auto__)){
return (v > (0));
} else {
return and__12706__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__18695_SHARP_,p2__18694_SHARP_){
var vec__18697 = clojure.string.split.call(null,p2__18694_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__18697,(0),null);
var v = cljs.core.nth.call(null,vec__18697,(1),null);
return cljs.core.assoc.call(null,p1__18695_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__18698_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__18698_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__18699){
var vec__18701 = p__18699;
var k = cljs.core.nth.call(null,vec__18701,(0),null);
var v = cljs.core.nth.call(null,vec__18701,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__18702_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__18702_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
* Escape special characters -- for content-type.
*/
cljs_http.client.escape_special = (function escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__12706__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__12706__auto__){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__12706__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else {
return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__18703_SHARP_){
return cljs_http.client.decode_body.call(null,p1__18703_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_default_headers = (function() { 
var wrap_default_headers__delegate = function (client,p__18704){
var vec__18706 = p__18704;
var default_headers = cljs.core.nth.call(null,vec__18706,(0),null);
return ((function (vec__18706,default_headers){
return (function (request){
var temp__4124__auto__ = (function (){var or__12718__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__12718__auto__)){
return or__12718__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var default_headers__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__18706,default_headers))
};
var wrap_default_headers = function (client,var_args){
var p__18704 = null;
if (arguments.length > 1) {
var G__18707__i = 0, G__18707__a = new Array(arguments.length -  1);
while (G__18707__i < G__18707__a.length) {G__18707__a[G__18707__i] = arguments[G__18707__i + 1]; ++G__18707__i;}
  p__18704 = new cljs.core.IndexedSeq(G__18707__a,0);
} 
return wrap_default_headers__delegate.call(this,client,p__18704);};
wrap_default_headers.cljs$lang$maxFixedArity = 1;
wrap_default_headers.cljs$lang$applyTo = (function (arglist__18708){
var client = cljs.core.first(arglist__18708);
var p__18704 = cljs.core.rest(arglist__18708);
return wrap_default_headers__delegate(client,p__18704);
});
wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = wrap_default_headers__delegate;
return wrap_default_headers;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__18709){
var vec__18711 = p__18709;
var accept = cljs.core.nth.call(null,vec__18711,(0),null);
return ((function (vec__18711,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__12718__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__12718__auto__)){
return or__12718__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__18711,accept))
};
var wrap_accept = function (client,var_args){
var p__18709 = null;
if (arguments.length > 1) {
var G__18712__i = 0, G__18712__a = new Array(arguments.length -  1);
while (G__18712__i < G__18712__a.length) {G__18712__a[G__18712__i] = arguments[G__18712__i + 1]; ++G__18712__i;}
  p__18709 = new cljs.core.IndexedSeq(G__18712__a,0);
} 
return wrap_accept__delegate.call(this,client,p__18709);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__18713){
var client = cljs.core.first(arglist__18713);
var p__18709 = cljs.core.rest(arglist__18713);
return wrap_accept__delegate(client,p__18709);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__18714){
var vec__18716 = p__18714;
var content_type = cljs.core.nth.call(null,vec__18716,(0),null);
return ((function (vec__18716,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__12718__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__12718__auto__)){
return or__12718__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__18716,content_type))
};
var wrap_content_type = function (client,var_args){
var p__18714 = null;
if (arguments.length > 1) {
var G__18717__i = 0, G__18717__a = new Array(arguments.length -  1);
while (G__18717__i < G__18717__a.length) {G__18717__a[G__18717__i] = arguments[G__18717__i + 1]; ++G__18717__i;}
  p__18714 = new cljs.core.IndexedSeq(G__18717__a,0);
} 
return wrap_content_type__delegate.call(this,client,p__18714);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__18718){
var client = cljs.core.first(arglist__18718);
var p__18714 = cljs.core.rest(arglist__18718);
return wrap_content_type__delegate(client,p__18714);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
* Encode :transit-params in the `request` :body and set the appropriate
* Content Type header.
* 
* A :transit-opts map can be optionally provided with the following keys:
* 
* :encoding                #{:json, :json-verbose}
* :decoding                #{:json, :json-verbose}
* :encoding/decoding-opts  appropriate map of options to be passed to
* transit writer/reader, respectively.
*/
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var map__18720 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__18720__$1 = ((cljs.core.seq_QMARK_.call(null,map__18720))?cljs.core.apply.call(null,cljs.core.hash_map,map__18720):map__18720);
var encoding_opts = cljs.core.get.call(null,map__18720__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var encoding = cljs.core.get.call(null,map__18720__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else {
return client.call(null,request);
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__18724 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__18724__$1 = ((cljs.core.seq_QMARK_.call(null,map__18724))?cljs.core.apply.call(null,cljs.core.hash_map,map__18724):map__18724);
var decoding_opts = cljs.core.get.call(null,map__18724__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var decoding = cljs.core.get.call(null,map__18724__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var transit_decode = ((function (map__18724,map__18724__$1,decoding_opts,decoding){
return (function (p1__18721_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__18721_SHARP_,decoding,decoding_opts);
});})(map__18724,map__18724__$1,decoding_opts,decoding))
;
return cljs.core.async.map.call(null,((function (map__18724,map__18724__$1,decoding_opts,decoding,transit_decode){
return (function (p1__18722_SHARP_){
return cljs_http.client.decode_body.call(null,p1__18722_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__18724,map__18724__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else {
return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__18725_SHARP_){
return cljs_http.client.decode_body.call(null,p1__18725_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__18728){
var map__18729 = p__18728;
var map__18729__$1 = ((cljs.core.seq_QMARK_.call(null,map__18729))?cljs.core.apply.call(null,cljs.core.hash_map,map__18729):map__18729);
var req = map__18729__$1;
var query_params = cljs.core.get.call(null,map__18729__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__18732){
var map__18733 = p__18732;
var map__18733__$1 = ((cljs.core.seq_QMARK_.call(null,map__18733))?cljs.core.apply.call(null,cljs.core.hash_map,map__18733):map__18733);
var request = map__18733__$1;
var request_method = cljs.core.get.call(null,map__18733__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var form_params = cljs.core.get.call(null,map__18733__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
if(cljs.core.truth_((function (){var and__12706__auto__ = form_params;
if(cljs.core.truth_(and__12706__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__12706__auto__;
}
})())){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__18740_18746 = cljs.core.seq.call(null,params);
var chunk__18741_18747 = null;
var count__18742_18748 = (0);
var i__18743_18749 = (0);
while(true){
if((i__18743_18749 < count__18742_18748)){
var vec__18744_18750 = cljs.core._nth.call(null,chunk__18741_18747,i__18743_18749);
var k_18751 = cljs.core.nth.call(null,vec__18744_18750,(0),null);
var v_18752 = cljs.core.nth.call(null,vec__18744_18750,(1),null);
form_data.append(cljs.core.name.call(null,k_18751),v_18752);

var G__18753 = seq__18740_18746;
var G__18754 = chunk__18741_18747;
var G__18755 = count__18742_18748;
var G__18756 = (i__18743_18749 + (1));
seq__18740_18746 = G__18753;
chunk__18741_18747 = G__18754;
count__18742_18748 = G__18755;
i__18743_18749 = G__18756;
continue;
} else {
var temp__4126__auto___18757 = cljs.core.seq.call(null,seq__18740_18746);
if(temp__4126__auto___18757){
var seq__18740_18758__$1 = temp__4126__auto___18757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18740_18758__$1)){
var c__13506__auto___18759 = cljs.core.chunk_first.call(null,seq__18740_18758__$1);
var G__18760 = cljs.core.chunk_rest.call(null,seq__18740_18758__$1);
var G__18761 = c__13506__auto___18759;
var G__18762 = cljs.core.count.call(null,c__13506__auto___18759);
var G__18763 = (0);
seq__18740_18746 = G__18760;
chunk__18741_18747 = G__18761;
count__18742_18748 = G__18762;
i__18743_18749 = G__18763;
continue;
} else {
var vec__18745_18764 = cljs.core.first.call(null,seq__18740_18758__$1);
var k_18765 = cljs.core.nth.call(null,vec__18745_18764,(0),null);
var v_18766 = cljs.core.nth.call(null,vec__18745_18764,(1),null);
form_data.append(cljs.core.name.call(null,k_18765),v_18766);

var G__18767 = cljs.core.next.call(null,seq__18740_18758__$1);
var G__18768 = null;
var G__18769 = (0);
var G__18770 = (0);
seq__18740_18746 = G__18767;
chunk__18741_18747 = G__18768;
count__18742_18748 = G__18769;
i__18743_18749 = G__18770;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function wrap_multipart_params(client){
return (function (p__18773){
var map__18774 = p__18773;
var map__18774__$1 = ((cljs.core.seq_QMARK_.call(null,map__18774))?cljs.core.apply.call(null,cljs.core.hash_map,map__18774):map__18774);
var request = map__18774__$1;
var request_method = cljs.core.get.call(null,map__18774__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var multipart_params = cljs.core.get.call(null,map__18774__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
if(cljs.core.truth_((function (){var and__12706__auto__ = multipart_params;
if(cljs.core.truth_(and__12706__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__12706__auto__;
}
})())){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"multipart/form-data"));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__18775_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__18775_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__18779){
var map__18780 = p__18779;
var map__18780__$1 = ((cljs.core.seq_QMARK_.call(null,map__18780))?cljs.core.apply.call(null,cljs.core.hash_map,map__18780):map__18780);
var req = map__18780__$1;
var query_params = cljs.core.get.call(null,map__18780__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__18780,map__18780__$1,req,query_params){
return (function (p1__18776_SHARP_){
return cljs.core.merge.call(null,p1__18776_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__18780,map__18780__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__18781){
var vec__18783 = p__18781;
var credentials = cljs.core.nth.call(null,vec__18783,(0),null);
return ((function (vec__18783,credentials){
return (function (req){
var credentials__$1 = (function (){var or__12718__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__12718__auto__)){
return or__12718__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__18783,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__18781 = null;
if (arguments.length > 1) {
var G__18784__i = 0, G__18784__a = new Array(arguments.length -  1);
while (G__18784__i < G__18784__a.length) {G__18784__a[G__18784__i] = arguments[G__18784__i + 1]; ++G__18784__i;}
  p__18781 = new cljs.core.IndexedSeq(G__18784__a,0);
} 
return wrap_basic_auth__delegate.call(this,client,p__18781);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__18785){
var client = cljs.core.first(arglist__18785);
var p__18781 = cljs.core.rest(arglist__18785);
return wrap_basic_auth__delegate(client,p__18781);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){
return (function (req){
var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var oauth_token = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
* Pipe the response-channel into the request-map's
* custom channel (e.g. to enable transducers)
*/
cljs_http.client.wrap_channel_from_request_map = (function wrap_channel_from_request_map(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var custom_channel = temp__4124__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/request
*/
cljs_http.client.wrap_request = (function wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__18786){
var vec__18788 = p__18786;
var req = cljs.core.nth.call(null,vec__18788,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__18786 = null;
if (arguments.length > 1) {
var G__18789__i = 0, G__18789__a = new Array(arguments.length -  1);
while (G__18789__i < G__18789__a.length) {G__18789__a[G__18789__i] = arguments[G__18789__i + 1]; ++G__18789__i;}
  p__18786 = new cljs.core.IndexedSeq(G__18789__a,0);
} 
return delete$__delegate.call(this,url,p__18786);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__18790){
var url = cljs.core.first(arglist__18790);
var p__18786 = cljs.core.rest(arglist__18790);
return delete$__delegate(url,p__18786);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__18791){
var vec__18793 = p__18791;
var req = cljs.core.nth.call(null,vec__18793,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__18791 = null;
if (arguments.length > 1) {
var G__18794__i = 0, G__18794__a = new Array(arguments.length -  1);
while (G__18794__i < G__18794__a.length) {G__18794__a[G__18794__i] = arguments[G__18794__i + 1]; ++G__18794__i;}
  p__18791 = new cljs.core.IndexedSeq(G__18794__a,0);
} 
return get__delegate.call(this,url,p__18791);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__18795){
var url = cljs.core.first(arglist__18795);
var p__18791 = cljs.core.rest(arglist__18795);
return get__delegate(url,p__18791);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__18796){
var vec__18798 = p__18796;
var req = cljs.core.nth.call(null,vec__18798,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__18796 = null;
if (arguments.length > 1) {
var G__18799__i = 0, G__18799__a = new Array(arguments.length -  1);
while (G__18799__i < G__18799__a.length) {G__18799__a[G__18799__i] = arguments[G__18799__i + 1]; ++G__18799__i;}
  p__18796 = new cljs.core.IndexedSeq(G__18799__a,0);
} 
return head__delegate.call(this,url,p__18796);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__18800){
var url = cljs.core.first(arglist__18800);
var p__18796 = cljs.core.rest(arglist__18800);
return head__delegate(url,p__18796);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__18801){
var vec__18803 = p__18801;
var req = cljs.core.nth.call(null,vec__18803,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__18801 = null;
if (arguments.length > 1) {
var G__18804__i = 0, G__18804__a = new Array(arguments.length -  1);
while (G__18804__i < G__18804__a.length) {G__18804__a[G__18804__i] = arguments[G__18804__i + 1]; ++G__18804__i;}
  p__18801 = new cljs.core.IndexedSeq(G__18804__a,0);
} 
return move__delegate.call(this,url,p__18801);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__18805){
var url = cljs.core.first(arglist__18805);
var p__18801 = cljs.core.rest(arglist__18805);
return move__delegate(url,p__18801);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__18806){
var vec__18808 = p__18806;
var req = cljs.core.nth.call(null,vec__18808,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__18806 = null;
if (arguments.length > 1) {
var G__18809__i = 0, G__18809__a = new Array(arguments.length -  1);
while (G__18809__i < G__18809__a.length) {G__18809__a[G__18809__i] = arguments[G__18809__i + 1]; ++G__18809__i;}
  p__18806 = new cljs.core.IndexedSeq(G__18809__a,0);
} 
return options__delegate.call(this,url,p__18806);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__18810){
var url = cljs.core.first(arglist__18810);
var p__18806 = cljs.core.rest(arglist__18810);
return options__delegate(url,p__18806);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__18811){
var vec__18813 = p__18811;
var req = cljs.core.nth.call(null,vec__18813,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__18811 = null;
if (arguments.length > 1) {
var G__18814__i = 0, G__18814__a = new Array(arguments.length -  1);
while (G__18814__i < G__18814__a.length) {G__18814__a[G__18814__i] = arguments[G__18814__i + 1]; ++G__18814__i;}
  p__18811 = new cljs.core.IndexedSeq(G__18814__a,0);
} 
return patch__delegate.call(this,url,p__18811);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__18815){
var url = cljs.core.first(arglist__18815);
var p__18811 = cljs.core.rest(arglist__18815);
return patch__delegate(url,p__18811);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__18816){
var vec__18818 = p__18816;
var req = cljs.core.nth.call(null,vec__18818,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__18816 = null;
if (arguments.length > 1) {
var G__18819__i = 0, G__18819__a = new Array(arguments.length -  1);
while (G__18819__i < G__18819__a.length) {G__18819__a[G__18819__i] = arguments[G__18819__i + 1]; ++G__18819__i;}
  p__18816 = new cljs.core.IndexedSeq(G__18819__a,0);
} 
return post__delegate.call(this,url,p__18816);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__18820){
var url = cljs.core.first(arglist__18820);
var p__18816 = cljs.core.rest(arglist__18820);
return post__delegate(url,p__18816);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__18821){
var vec__18823 = p__18821;
var req = cljs.core.nth.call(null,vec__18823,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__18821 = null;
if (arguments.length > 1) {
var G__18824__i = 0, G__18824__a = new Array(arguments.length -  1);
while (G__18824__i < G__18824__a.length) {G__18824__a[G__18824__i] = arguments[G__18824__i + 1]; ++G__18824__i;}
  p__18821 = new cljs.core.IndexedSeq(G__18824__a,0);
} 
return put__delegate.call(this,url,p__18821);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__18825){
var url = cljs.core.first(arglist__18825);
var p__18821 = cljs.core.rest(arglist__18825);
return put__delegate(url,p__18821);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map?rel=1424026960145