// Compiled by ClojureScript 0.0-2760 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t28894 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28894 = (function (f,fn_handler,meta28895){
this.f = f;
this.fn_handler = fn_handler;
this.meta28895 = meta28895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28894.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28896){
var self__ = this;
var _28896__$1 = this;
return self__.meta28895;
});

cljs.core.async.t28894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28896,meta28895__$1){
var self__ = this;
var _28896__$1 = this;
return (new cljs.core.async.t28894(self__.f,self__.fn_handler,meta28895__$1));
});

cljs.core.async.t28894.cljs$lang$type = true;

cljs.core.async.t28894.cljs$lang$ctorStr = "cljs.core.async/t28894";

cljs.core.async.t28894.cljs$lang$ctorPrWriter = (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cljs.core.async/t28894");
});

cljs.core.async.__GT_t28894 = (function __GT_t28894(f__$1,fn_handler__$1,meta28895){
return (new cljs.core.async.t28894(f__$1,fn_handler__$1,meta28895));
});

}

return (new cljs.core.async.t28894(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/anil/Code/clojure/clojurescript/anildigital-io/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__28898 = buff;
if(G__28898){
var bit__13399__auto__ = null;
if(cljs.core.truth_((function (){var or__12718__auto__ = bit__13399__auto__;
if(cljs.core.truth_(or__12718__auto__)){
return or__12718__auto__;
} else {
return G__28898.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28898.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28898);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28898);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28899 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28899);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28899,ret){
return (function (){
return fn1.call(null,val_28899);
});})(val_28899,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__13605__auto___28900 = n;
var x_28901 = (0);
while(true){
if((x_28901 < n__13605__auto___28900)){
(a[x_28901] = (0));

var G__28902 = (x_28901 + (1));
x_28901 = G__28902;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28903 = (i + (1));
i = G__28903;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28907 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28907 = (function (flag,alt_flag,meta28908){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28908 = meta28908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28907.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28907.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28907.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28907.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28909){
var self__ = this;
var _28909__$1 = this;
return self__.meta28908;
});})(flag))
;

cljs.core.async.t28907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28909,meta28908__$1){
var self__ = this;
var _28909__$1 = this;
return (new cljs.core.async.t28907(self__.flag,self__.alt_flag,meta28908__$1));
});})(flag))
;

cljs.core.async.t28907.cljs$lang$type = true;

cljs.core.async.t28907.cljs$lang$ctorStr = "cljs.core.async/t28907";

cljs.core.async.t28907.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cljs.core.async/t28907");
});})(flag))
;

cljs.core.async.__GT_t28907 = ((function (flag){
return (function __GT_t28907(flag__$1,alt_flag__$1,meta28908){
return (new cljs.core.async.t28907(flag__$1,alt_flag__$1,meta28908));
});})(flag))
;

}

return (new cljs.core.async.t28907(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/anil/Code/clojure/clojurescript/anildigital-io/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t28913 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28913 = (function (cb,flag,alt_handler,meta28914){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28914 = meta28914;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28913.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28915){
var self__ = this;
var _28915__$1 = this;
return self__.meta28914;
});

cljs.core.async.t28913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28915,meta28914__$1){
var self__ = this;
var _28915__$1 = this;
return (new cljs.core.async.t28913(self__.cb,self__.flag,self__.alt_handler,meta28914__$1));
});

cljs.core.async.t28913.cljs$lang$type = true;

cljs.core.async.t28913.cljs$lang$ctorStr = "cljs.core.async/t28913";

cljs.core.async.t28913.cljs$lang$ctorPrWriter = (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cljs.core.async/t28913");
});

cljs.core.async.__GT_t28913 = (function __GT_t28913(cb__$1,flag__$1,alt_handler__$1,meta28914){
return (new cljs.core.async.t28913(cb__$1,flag__$1,alt_handler__$1,meta28914));
});

}

return (new cljs.core.async.t28913(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/anil/Code/clojure/clojurescript/anildigital-io/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28916_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28916_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28917_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28917_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12718__auto__ = wport;
if(cljs.core.truth_(or__12718__auto__)){
return or__12718__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28918 = (i + (1));
i = G__28918;
continue;
}
} else {
return null;
}
break;
}
})();
var or__12718__auto__ = ret;
if(cljs.core.truth_(or__12718__auto__)){
return or__12718__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__12706__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__12706__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__12706__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__28919){
var map__28921 = p__28919;
var map__28921__$1 = ((cljs.core.seq_QMARK_.call(null,map__28921))?cljs.core.apply.call(null,cljs.core.hash_map,map__28921):map__28921);
var opts = map__28921__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__28919 = null;
if (arguments.length > 1) {
var G__28922__i = 0, G__28922__a = new Array(arguments.length -  1);
while (G__28922__i < G__28922__a.length) {G__28922__a[G__28922__i] = arguments[G__28922__i + 1]; ++G__28922__i;}
  p__28919 = new cljs.core.IndexedSeq(G__28922__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__28919);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28923){
var ports = cljs.core.first(arglist__28923);
var p__28919 = cljs.core.rest(arglist__28923);
return alts_BANG___delegate(ports,p__28919);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__16142__auto___29018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto___29018){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto___29018){
return (function (state_28994){
var state_val_28995 = (state_28994[(1)]);
if((state_val_28995 === (7))){
var inst_28990 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
var statearr_28996_29019 = state_28994__$1;
(statearr_28996_29019[(2)] = inst_28990);

(statearr_28996_29019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (1))){
var state_28994__$1 = state_28994;
var statearr_28997_29020 = state_28994__$1;
(statearr_28997_29020[(2)] = null);

(statearr_28997_29020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (4))){
var inst_28973 = (state_28994[(7)]);
var inst_28973__$1 = (state_28994[(2)]);
var inst_28974 = (inst_28973__$1 == null);
var state_28994__$1 = (function (){var statearr_28998 = state_28994;
(statearr_28998[(7)] = inst_28973__$1);

return statearr_28998;
})();
if(cljs.core.truth_(inst_28974)){
var statearr_28999_29021 = state_28994__$1;
(statearr_28999_29021[(1)] = (5));

} else {
var statearr_29000_29022 = state_28994__$1;
(statearr_29000_29022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (13))){
var state_28994__$1 = state_28994;
var statearr_29001_29023 = state_28994__$1;
(statearr_29001_29023[(2)] = null);

(statearr_29001_29023[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (6))){
var inst_28973 = (state_28994[(7)]);
var state_28994__$1 = state_28994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28994__$1,(11),to,inst_28973);
} else {
if((state_val_28995 === (3))){
var inst_28992 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28994__$1,inst_28992);
} else {
if((state_val_28995 === (12))){
var state_28994__$1 = state_28994;
var statearr_29002_29024 = state_28994__$1;
(statearr_29002_29024[(2)] = null);

(statearr_29002_29024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (2))){
var state_28994__$1 = state_28994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28994__$1,(4),from);
} else {
if((state_val_28995 === (11))){
var inst_28983 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
if(cljs.core.truth_(inst_28983)){
var statearr_29003_29025 = state_28994__$1;
(statearr_29003_29025[(1)] = (12));

} else {
var statearr_29004_29026 = state_28994__$1;
(statearr_29004_29026[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (9))){
var state_28994__$1 = state_28994;
var statearr_29005_29027 = state_28994__$1;
(statearr_29005_29027[(2)] = null);

(statearr_29005_29027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (5))){
var state_28994__$1 = state_28994;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29006_29028 = state_28994__$1;
(statearr_29006_29028[(1)] = (8));

} else {
var statearr_29007_29029 = state_28994__$1;
(statearr_29007_29029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (14))){
var inst_28988 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
var statearr_29008_29030 = state_28994__$1;
(statearr_29008_29030[(2)] = inst_28988);

(statearr_29008_29030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (10))){
var inst_28980 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
var statearr_29009_29031 = state_28994__$1;
(statearr_29009_29031[(2)] = inst_28980);

(statearr_29009_29031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (8))){
var inst_28977 = cljs.core.async.close_BANG_.call(null,to);
var state_28994__$1 = state_28994;
var statearr_29010_29032 = state_28994__$1;
(statearr_29010_29032[(2)] = inst_28977);

(statearr_29010_29032[(1)] = (10));


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
});})(c__16142__auto___29018))
;
return ((function (switch__16086__auto__,c__16142__auto___29018){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_29014 = [null,null,null,null,null,null,null,null];
(statearr_29014[(0)] = state_machine__16087__auto__);

(statearr_29014[(1)] = (1));

return statearr_29014;
});
var state_machine__16087__auto____1 = (function (state_28994){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_28994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e29015){if((e29015 instanceof Object)){
var ex__16090__auto__ = e29015;
var statearr_29016_29033 = state_28994;
(statearr_29016_29033[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29034 = state_28994;
state_28994 = G__29034;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_28994){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_28994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto___29018))
})();
var state__16144__auto__ = (function (){var statearr_29017 = f__16143__auto__.call(null);
(statearr_29017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___29018);

return statearr_29017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto___29018))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29218){
var vec__29219 = p__29218;
var v = cljs.core.nth.call(null,vec__29219,(0),null);
var p = cljs.core.nth.call(null,vec__29219,(1),null);
var job = vec__29219;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16142__auto___29401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto___29401,res,vec__29219,v,p,job,jobs,results){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto___29401,res,vec__29219,v,p,job,jobs,results){
return (function (state_29224){
var state_val_29225 = (state_29224[(1)]);
if((state_val_29225 === (2))){
var inst_29221 = (state_29224[(2)]);
var inst_29222 = cljs.core.async.close_BANG_.call(null,res);
var state_29224__$1 = (function (){var statearr_29226 = state_29224;
(statearr_29226[(7)] = inst_29221);

return statearr_29226;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29224__$1,inst_29222);
} else {
if((state_val_29225 === (1))){
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29224__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16142__auto___29401,res,vec__29219,v,p,job,jobs,results))
;
return ((function (switch__16086__auto__,c__16142__auto___29401,res,vec__29219,v,p,job,jobs,results){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_29230 = [null,null,null,null,null,null,null,null];
(statearr_29230[(0)] = state_machine__16087__auto__);

(statearr_29230[(1)] = (1));

return statearr_29230;
});
var state_machine__16087__auto____1 = (function (state_29224){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_29224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e29231){if((e29231 instanceof Object)){
var ex__16090__auto__ = e29231;
var statearr_29232_29402 = state_29224;
(statearr_29232_29402[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29403 = state_29224;
state_29224 = G__29403;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_29224){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_29224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto___29401,res,vec__29219,v,p,job,jobs,results))
})();
var state__16144__auto__ = (function (){var statearr_29233 = f__16143__auto__.call(null);
(statearr_29233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___29401);

return statearr_29233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto___29401,res,vec__29219,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29234){
var vec__29235 = p__29234;
var v = cljs.core.nth.call(null,vec__29235,(0),null);
var p = cljs.core.nth.call(null,vec__29235,(1),null);
var job = vec__29235;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__13605__auto___29404 = n;
var __29405 = (0);
while(true){
if((__29405 < n__13605__auto___29404)){
var G__29236_29406 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29236_29406) {
case "async":
var c__16142__auto___29408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29405,c__16142__auto___29408,G__29236_29406,n__13605__auto___29404,jobs,results,process,async){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (__29405,c__16142__auto___29408,G__29236_29406,n__13605__auto___29404,jobs,results,process,async){
return (function (state_29249){
var state_val_29250 = (state_29249[(1)]);
if((state_val_29250 === (7))){
var inst_29245 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
var statearr_29251_29409 = state_29249__$1;
(statearr_29251_29409[(2)] = inst_29245);

(statearr_29251_29409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (6))){
var state_29249__$1 = state_29249;
var statearr_29252_29410 = state_29249__$1;
(statearr_29252_29410[(2)] = null);

(statearr_29252_29410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (5))){
var state_29249__$1 = state_29249;
var statearr_29253_29411 = state_29249__$1;
(statearr_29253_29411[(2)] = null);

(statearr_29253_29411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (4))){
var inst_29239 = (state_29249[(2)]);
var inst_29240 = async.call(null,inst_29239);
var state_29249__$1 = state_29249;
if(cljs.core.truth_(inst_29240)){
var statearr_29254_29412 = state_29249__$1;
(statearr_29254_29412[(1)] = (5));

} else {
var statearr_29255_29413 = state_29249__$1;
(statearr_29255_29413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (3))){
var inst_29247 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29249__$1,inst_29247);
} else {
if((state_val_29250 === (2))){
var state_29249__$1 = state_29249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29249__$1,(4),jobs);
} else {
if((state_val_29250 === (1))){
var state_29249__$1 = state_29249;
var statearr_29256_29414 = state_29249__$1;
(statearr_29256_29414[(2)] = null);

(statearr_29256_29414[(1)] = (2));


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
});})(__29405,c__16142__auto___29408,G__29236_29406,n__13605__auto___29404,jobs,results,process,async))
;
return ((function (__29405,switch__16086__auto__,c__16142__auto___29408,G__29236_29406,n__13605__auto___29404,jobs,results,process,async){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_29260 = [null,null,null,null,null,null,null];
(statearr_29260[(0)] = state_machine__16087__auto__);

(statearr_29260[(1)] = (1));

return statearr_29260;
});
var state_machine__16087__auto____1 = (function (state_29249){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_29249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e29261){if((e29261 instanceof Object)){
var ex__16090__auto__ = e29261;
var statearr_29262_29415 = state_29249;
(statearr_29262_29415[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29416 = state_29249;
state_29249 = G__29416;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_29249){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_29249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(__29405,switch__16086__auto__,c__16142__auto___29408,G__29236_29406,n__13605__auto___29404,jobs,results,process,async))
})();
var state__16144__auto__ = (function (){var statearr_29263 = f__16143__auto__.call(null);
(statearr_29263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___29408);

return statearr_29263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(__29405,c__16142__auto___29408,G__29236_29406,n__13605__auto___29404,jobs,results,process,async))
);


break;
case "compute":
var c__16142__auto___29417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29405,c__16142__auto___29417,G__29236_29406,n__13605__auto___29404,jobs,results,process,async){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (__29405,c__16142__auto___29417,G__29236_29406,n__13605__auto___29404,jobs,results,process,async){
return (function (state_29276){
var state_val_29277 = (state_29276[(1)]);
if((state_val_29277 === (7))){
var inst_29272 = (state_29276[(2)]);
var state_29276__$1 = state_29276;
var statearr_29278_29418 = state_29276__$1;
(statearr_29278_29418[(2)] = inst_29272);

(statearr_29278_29418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29277 === (6))){
var state_29276__$1 = state_29276;
var statearr_29279_29419 = state_29276__$1;
(statearr_29279_29419[(2)] = null);

(statearr_29279_29419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29277 === (5))){
var state_29276__$1 = state_29276;
var statearr_29280_29420 = state_29276__$1;
(statearr_29280_29420[(2)] = null);

(statearr_29280_29420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29277 === (4))){
var inst_29266 = (state_29276[(2)]);
var inst_29267 = process.call(null,inst_29266);
var state_29276__$1 = state_29276;
if(cljs.core.truth_(inst_29267)){
var statearr_29281_29421 = state_29276__$1;
(statearr_29281_29421[(1)] = (5));

} else {
var statearr_29282_29422 = state_29276__$1;
(statearr_29282_29422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29277 === (3))){
var inst_29274 = (state_29276[(2)]);
var state_29276__$1 = state_29276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29276__$1,inst_29274);
} else {
if((state_val_29277 === (2))){
var state_29276__$1 = state_29276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29276__$1,(4),jobs);
} else {
if((state_val_29277 === (1))){
var state_29276__$1 = state_29276;
var statearr_29283_29423 = state_29276__$1;
(statearr_29283_29423[(2)] = null);

(statearr_29283_29423[(1)] = (2));


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
});})(__29405,c__16142__auto___29417,G__29236_29406,n__13605__auto___29404,jobs,results,process,async))
;
return ((function (__29405,switch__16086__auto__,c__16142__auto___29417,G__29236_29406,n__13605__auto___29404,jobs,results,process,async){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_29287 = [null,null,null,null,null,null,null];
(statearr_29287[(0)] = state_machine__16087__auto__);

(statearr_29287[(1)] = (1));

return statearr_29287;
});
var state_machine__16087__auto____1 = (function (state_29276){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_29276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e29288){if((e29288 instanceof Object)){
var ex__16090__auto__ = e29288;
var statearr_29289_29424 = state_29276;
(statearr_29289_29424[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29425 = state_29276;
state_29276 = G__29425;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_29276){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_29276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(__29405,switch__16086__auto__,c__16142__auto___29417,G__29236_29406,n__13605__auto___29404,jobs,results,process,async))
})();
var state__16144__auto__ = (function (){var statearr_29290 = f__16143__auto__.call(null);
(statearr_29290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___29417);

return statearr_29290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(__29405,c__16142__auto___29417,G__29236_29406,n__13605__auto___29404,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29426 = (__29405 + (1));
__29405 = G__29426;
continue;
} else {
}
break;
}

var c__16142__auto___29427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto___29427,jobs,results,process,async){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto___29427,jobs,results,process,async){
return (function (state_29312){
var state_val_29313 = (state_29312[(1)]);
if((state_val_29313 === (9))){
var inst_29305 = (state_29312[(2)]);
var state_29312__$1 = (function (){var statearr_29314 = state_29312;
(statearr_29314[(7)] = inst_29305);

return statearr_29314;
})();
var statearr_29315_29428 = state_29312__$1;
(statearr_29315_29428[(2)] = null);

(statearr_29315_29428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (8))){
var inst_29298 = (state_29312[(8)]);
var inst_29303 = (state_29312[(2)]);
var state_29312__$1 = (function (){var statearr_29316 = state_29312;
(statearr_29316[(9)] = inst_29303);

return statearr_29316;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29312__$1,(9),results,inst_29298);
} else {
if((state_val_29313 === (7))){
var inst_29308 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
var statearr_29317_29429 = state_29312__$1;
(statearr_29317_29429[(2)] = inst_29308);

(statearr_29317_29429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (6))){
var inst_29293 = (state_29312[(10)]);
var inst_29298 = (state_29312[(8)]);
var inst_29298__$1 = cljs.core.async.chan.call(null,(1));
var inst_29299 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29300 = [inst_29293,inst_29298__$1];
var inst_29301 = (new cljs.core.PersistentVector(null,2,(5),inst_29299,inst_29300,null));
var state_29312__$1 = (function (){var statearr_29318 = state_29312;
(statearr_29318[(8)] = inst_29298__$1);

return statearr_29318;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29312__$1,(8),jobs,inst_29301);
} else {
if((state_val_29313 === (5))){
var inst_29296 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29312__$1 = state_29312;
var statearr_29319_29430 = state_29312__$1;
(statearr_29319_29430[(2)] = inst_29296);

(statearr_29319_29430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (4))){
var inst_29293 = (state_29312[(10)]);
var inst_29293__$1 = (state_29312[(2)]);
var inst_29294 = (inst_29293__$1 == null);
var state_29312__$1 = (function (){var statearr_29320 = state_29312;
(statearr_29320[(10)] = inst_29293__$1);

return statearr_29320;
})();
if(cljs.core.truth_(inst_29294)){
var statearr_29321_29431 = state_29312__$1;
(statearr_29321_29431[(1)] = (5));

} else {
var statearr_29322_29432 = state_29312__$1;
(statearr_29322_29432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29313 === (3))){
var inst_29310 = (state_29312[(2)]);
var state_29312__$1 = state_29312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29312__$1,inst_29310);
} else {
if((state_val_29313 === (2))){
var state_29312__$1 = state_29312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29312__$1,(4),from);
} else {
if((state_val_29313 === (1))){
var state_29312__$1 = state_29312;
var statearr_29323_29433 = state_29312__$1;
(statearr_29323_29433[(2)] = null);

(statearr_29323_29433[(1)] = (2));


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
});})(c__16142__auto___29427,jobs,results,process,async))
;
return ((function (switch__16086__auto__,c__16142__auto___29427,jobs,results,process,async){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_29327 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29327[(0)] = state_machine__16087__auto__);

(statearr_29327[(1)] = (1));

return statearr_29327;
});
var state_machine__16087__auto____1 = (function (state_29312){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_29312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e29328){if((e29328 instanceof Object)){
var ex__16090__auto__ = e29328;
var statearr_29329_29434 = state_29312;
(statearr_29329_29434[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29435 = state_29312;
state_29312 = G__29435;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_29312){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_29312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto___29427,jobs,results,process,async))
})();
var state__16144__auto__ = (function (){var statearr_29330 = f__16143__auto__.call(null);
(statearr_29330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___29427);

return statearr_29330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto___29427,jobs,results,process,async))
);


var c__16142__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto__,jobs,results,process,async){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto__,jobs,results,process,async){
return (function (state_29368){
var state_val_29369 = (state_29368[(1)]);
if((state_val_29369 === (7))){
var inst_29364 = (state_29368[(2)]);
var state_29368__$1 = state_29368;
var statearr_29370_29436 = state_29368__$1;
(statearr_29370_29436[(2)] = inst_29364);

(statearr_29370_29436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (20))){
var state_29368__$1 = state_29368;
var statearr_29371_29437 = state_29368__$1;
(statearr_29371_29437[(2)] = null);

(statearr_29371_29437[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (1))){
var state_29368__$1 = state_29368;
var statearr_29372_29438 = state_29368__$1;
(statearr_29372_29438[(2)] = null);

(statearr_29372_29438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (4))){
var inst_29333 = (state_29368[(7)]);
var inst_29333__$1 = (state_29368[(2)]);
var inst_29334 = (inst_29333__$1 == null);
var state_29368__$1 = (function (){var statearr_29373 = state_29368;
(statearr_29373[(7)] = inst_29333__$1);

return statearr_29373;
})();
if(cljs.core.truth_(inst_29334)){
var statearr_29374_29439 = state_29368__$1;
(statearr_29374_29439[(1)] = (5));

} else {
var statearr_29375_29440 = state_29368__$1;
(statearr_29375_29440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (15))){
var inst_29346 = (state_29368[(8)]);
var state_29368__$1 = state_29368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29368__$1,(18),to,inst_29346);
} else {
if((state_val_29369 === (21))){
var inst_29359 = (state_29368[(2)]);
var state_29368__$1 = state_29368;
var statearr_29376_29441 = state_29368__$1;
(statearr_29376_29441[(2)] = inst_29359);

(statearr_29376_29441[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (13))){
var inst_29361 = (state_29368[(2)]);
var state_29368__$1 = (function (){var statearr_29377 = state_29368;
(statearr_29377[(9)] = inst_29361);

return statearr_29377;
})();
var statearr_29378_29442 = state_29368__$1;
(statearr_29378_29442[(2)] = null);

(statearr_29378_29442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (6))){
var inst_29333 = (state_29368[(7)]);
var state_29368__$1 = state_29368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29368__$1,(11),inst_29333);
} else {
if((state_val_29369 === (17))){
var inst_29354 = (state_29368[(2)]);
var state_29368__$1 = state_29368;
if(cljs.core.truth_(inst_29354)){
var statearr_29379_29443 = state_29368__$1;
(statearr_29379_29443[(1)] = (19));

} else {
var statearr_29380_29444 = state_29368__$1;
(statearr_29380_29444[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (3))){
var inst_29366 = (state_29368[(2)]);
var state_29368__$1 = state_29368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29368__$1,inst_29366);
} else {
if((state_val_29369 === (12))){
var inst_29343 = (state_29368[(10)]);
var state_29368__$1 = state_29368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29368__$1,(14),inst_29343);
} else {
if((state_val_29369 === (2))){
var state_29368__$1 = state_29368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29368__$1,(4),results);
} else {
if((state_val_29369 === (19))){
var state_29368__$1 = state_29368;
var statearr_29381_29445 = state_29368__$1;
(statearr_29381_29445[(2)] = null);

(statearr_29381_29445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (11))){
var inst_29343 = (state_29368[(2)]);
var state_29368__$1 = (function (){var statearr_29382 = state_29368;
(statearr_29382[(10)] = inst_29343);

return statearr_29382;
})();
var statearr_29383_29446 = state_29368__$1;
(statearr_29383_29446[(2)] = null);

(statearr_29383_29446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (9))){
var state_29368__$1 = state_29368;
var statearr_29384_29447 = state_29368__$1;
(statearr_29384_29447[(2)] = null);

(statearr_29384_29447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (5))){
var state_29368__$1 = state_29368;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29385_29448 = state_29368__$1;
(statearr_29385_29448[(1)] = (8));

} else {
var statearr_29386_29449 = state_29368__$1;
(statearr_29386_29449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (14))){
var inst_29348 = (state_29368[(11)]);
var inst_29346 = (state_29368[(8)]);
var inst_29346__$1 = (state_29368[(2)]);
var inst_29347 = (inst_29346__$1 == null);
var inst_29348__$1 = cljs.core.not.call(null,inst_29347);
var state_29368__$1 = (function (){var statearr_29387 = state_29368;
(statearr_29387[(11)] = inst_29348__$1);

(statearr_29387[(8)] = inst_29346__$1);

return statearr_29387;
})();
if(inst_29348__$1){
var statearr_29388_29450 = state_29368__$1;
(statearr_29388_29450[(1)] = (15));

} else {
var statearr_29389_29451 = state_29368__$1;
(statearr_29389_29451[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (16))){
var inst_29348 = (state_29368[(11)]);
var state_29368__$1 = state_29368;
var statearr_29390_29452 = state_29368__$1;
(statearr_29390_29452[(2)] = inst_29348);

(statearr_29390_29452[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (10))){
var inst_29340 = (state_29368[(2)]);
var state_29368__$1 = state_29368;
var statearr_29391_29453 = state_29368__$1;
(statearr_29391_29453[(2)] = inst_29340);

(statearr_29391_29453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (18))){
var inst_29351 = (state_29368[(2)]);
var state_29368__$1 = state_29368;
var statearr_29392_29454 = state_29368__$1;
(statearr_29392_29454[(2)] = inst_29351);

(statearr_29392_29454[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29369 === (8))){
var inst_29337 = cljs.core.async.close_BANG_.call(null,to);
var state_29368__$1 = state_29368;
var statearr_29393_29455 = state_29368__$1;
(statearr_29393_29455[(2)] = inst_29337);

(statearr_29393_29455[(1)] = (10));


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
});})(c__16142__auto__,jobs,results,process,async))
;
return ((function (switch__16086__auto__,c__16142__auto__,jobs,results,process,async){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_29397 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29397[(0)] = state_machine__16087__auto__);

(statearr_29397[(1)] = (1));

return statearr_29397;
});
var state_machine__16087__auto____1 = (function (state_29368){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_29368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e29398){if((e29398 instanceof Object)){
var ex__16090__auto__ = e29398;
var statearr_29399_29456 = state_29368;
(statearr_29399_29456[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29457 = state_29368;
state_29368 = G__29457;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_29368){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_29368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto__,jobs,results,process,async))
})();
var state__16144__auto__ = (function (){var statearr_29400 = f__16143__auto__.call(null);
(statearr_29400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto__);

return statearr_29400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto__,jobs,results,process,async))
);

return c__16142__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16142__auto___29558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto___29558,tc,fc){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto___29558,tc,fc){
return (function (state_29533){
var state_val_29534 = (state_29533[(1)]);
if((state_val_29534 === (7))){
var inst_29529 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
var statearr_29535_29559 = state_29533__$1;
(statearr_29535_29559[(2)] = inst_29529);

(statearr_29535_29559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (1))){
var state_29533__$1 = state_29533;
var statearr_29536_29560 = state_29533__$1;
(statearr_29536_29560[(2)] = null);

(statearr_29536_29560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (4))){
var inst_29510 = (state_29533[(7)]);
var inst_29510__$1 = (state_29533[(2)]);
var inst_29511 = (inst_29510__$1 == null);
var state_29533__$1 = (function (){var statearr_29537 = state_29533;
(statearr_29537[(7)] = inst_29510__$1);

return statearr_29537;
})();
if(cljs.core.truth_(inst_29511)){
var statearr_29538_29561 = state_29533__$1;
(statearr_29538_29561[(1)] = (5));

} else {
var statearr_29539_29562 = state_29533__$1;
(statearr_29539_29562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (13))){
var state_29533__$1 = state_29533;
var statearr_29540_29563 = state_29533__$1;
(statearr_29540_29563[(2)] = null);

(statearr_29540_29563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (6))){
var inst_29510 = (state_29533[(7)]);
var inst_29516 = p.call(null,inst_29510);
var state_29533__$1 = state_29533;
if(cljs.core.truth_(inst_29516)){
var statearr_29541_29564 = state_29533__$1;
(statearr_29541_29564[(1)] = (9));

} else {
var statearr_29542_29565 = state_29533__$1;
(statearr_29542_29565[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (3))){
var inst_29531 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29533__$1,inst_29531);
} else {
if((state_val_29534 === (12))){
var state_29533__$1 = state_29533;
var statearr_29543_29566 = state_29533__$1;
(statearr_29543_29566[(2)] = null);

(statearr_29543_29566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (2))){
var state_29533__$1 = state_29533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29533__$1,(4),ch);
} else {
if((state_val_29534 === (11))){
var inst_29510 = (state_29533[(7)]);
var inst_29520 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29533__$1,(8),inst_29520,inst_29510);
} else {
if((state_val_29534 === (9))){
var state_29533__$1 = state_29533;
var statearr_29544_29567 = state_29533__$1;
(statearr_29544_29567[(2)] = tc);

(statearr_29544_29567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (5))){
var inst_29513 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29514 = cljs.core.async.close_BANG_.call(null,fc);
var state_29533__$1 = (function (){var statearr_29545 = state_29533;
(statearr_29545[(8)] = inst_29513);

return statearr_29545;
})();
var statearr_29546_29568 = state_29533__$1;
(statearr_29546_29568[(2)] = inst_29514);

(statearr_29546_29568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (14))){
var inst_29527 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
var statearr_29547_29569 = state_29533__$1;
(statearr_29547_29569[(2)] = inst_29527);

(statearr_29547_29569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (10))){
var state_29533__$1 = state_29533;
var statearr_29548_29570 = state_29533__$1;
(statearr_29548_29570[(2)] = fc);

(statearr_29548_29570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (8))){
var inst_29522 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
if(cljs.core.truth_(inst_29522)){
var statearr_29549_29571 = state_29533__$1;
(statearr_29549_29571[(1)] = (12));

} else {
var statearr_29550_29572 = state_29533__$1;
(statearr_29550_29572[(1)] = (13));

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
});})(c__16142__auto___29558,tc,fc))
;
return ((function (switch__16086__auto__,c__16142__auto___29558,tc,fc){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_29554 = [null,null,null,null,null,null,null,null,null];
(statearr_29554[(0)] = state_machine__16087__auto__);

(statearr_29554[(1)] = (1));

return statearr_29554;
});
var state_machine__16087__auto____1 = (function (state_29533){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_29533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e29555){if((e29555 instanceof Object)){
var ex__16090__auto__ = e29555;
var statearr_29556_29573 = state_29533;
(statearr_29556_29573[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29574 = state_29533;
state_29533 = G__29574;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_29533){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_29533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto___29558,tc,fc))
})();
var state__16144__auto__ = (function (){var statearr_29557 = f__16143__auto__.call(null);
(statearr_29557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___29558);

return statearr_29557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto___29558,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__16142__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto__){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto__){
return (function (state_29621){
var state_val_29622 = (state_29621[(1)]);
if((state_val_29622 === (7))){
var inst_29617 = (state_29621[(2)]);
var state_29621__$1 = state_29621;
var statearr_29623_29639 = state_29621__$1;
(statearr_29623_29639[(2)] = inst_29617);

(statearr_29623_29639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (6))){
var inst_29607 = (state_29621[(7)]);
var inst_29610 = (state_29621[(8)]);
var inst_29614 = f.call(null,inst_29607,inst_29610);
var inst_29607__$1 = inst_29614;
var state_29621__$1 = (function (){var statearr_29624 = state_29621;
(statearr_29624[(7)] = inst_29607__$1);

return statearr_29624;
})();
var statearr_29625_29640 = state_29621__$1;
(statearr_29625_29640[(2)] = null);

(statearr_29625_29640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (5))){
var inst_29607 = (state_29621[(7)]);
var state_29621__$1 = state_29621;
var statearr_29626_29641 = state_29621__$1;
(statearr_29626_29641[(2)] = inst_29607);

(statearr_29626_29641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (4))){
var inst_29610 = (state_29621[(8)]);
var inst_29610__$1 = (state_29621[(2)]);
var inst_29611 = (inst_29610__$1 == null);
var state_29621__$1 = (function (){var statearr_29627 = state_29621;
(statearr_29627[(8)] = inst_29610__$1);

return statearr_29627;
})();
if(cljs.core.truth_(inst_29611)){
var statearr_29628_29642 = state_29621__$1;
(statearr_29628_29642[(1)] = (5));

} else {
var statearr_29629_29643 = state_29621__$1;
(statearr_29629_29643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (3))){
var inst_29619 = (state_29621[(2)]);
var state_29621__$1 = state_29621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29621__$1,inst_29619);
} else {
if((state_val_29622 === (2))){
var state_29621__$1 = state_29621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29621__$1,(4),ch);
} else {
if((state_val_29622 === (1))){
var inst_29607 = init;
var state_29621__$1 = (function (){var statearr_29630 = state_29621;
(statearr_29630[(7)] = inst_29607);

return statearr_29630;
})();
var statearr_29631_29644 = state_29621__$1;
(statearr_29631_29644[(2)] = null);

(statearr_29631_29644[(1)] = (2));


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
});})(c__16142__auto__))
;
return ((function (switch__16086__auto__,c__16142__auto__){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_29635 = [null,null,null,null,null,null,null,null,null];
(statearr_29635[(0)] = state_machine__16087__auto__);

(statearr_29635[(1)] = (1));

return statearr_29635;
});
var state_machine__16087__auto____1 = (function (state_29621){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_29621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e29636){if((e29636 instanceof Object)){
var ex__16090__auto__ = e29636;
var statearr_29637_29645 = state_29621;
(statearr_29637_29645[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29646 = state_29621;
state_29621 = G__29646;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_29621){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_29621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto__))
})();
var state__16144__auto__ = (function (){var statearr_29638 = f__16143__auto__.call(null);
(statearr_29638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto__);

return statearr_29638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto__))
);

return c__16142__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__16142__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto__){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto__){
return (function (state_29720){
var state_val_29721 = (state_29720[(1)]);
if((state_val_29721 === (7))){
var inst_29702 = (state_29720[(2)]);
var state_29720__$1 = state_29720;
var statearr_29722_29745 = state_29720__$1;
(statearr_29722_29745[(2)] = inst_29702);

(statearr_29722_29745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (1))){
var inst_29696 = cljs.core.seq.call(null,coll);
var inst_29697 = inst_29696;
var state_29720__$1 = (function (){var statearr_29723 = state_29720;
(statearr_29723[(7)] = inst_29697);

return statearr_29723;
})();
var statearr_29724_29746 = state_29720__$1;
(statearr_29724_29746[(2)] = null);

(statearr_29724_29746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (4))){
var inst_29697 = (state_29720[(7)]);
var inst_29700 = cljs.core.first.call(null,inst_29697);
var state_29720__$1 = state_29720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29720__$1,(7),ch,inst_29700);
} else {
if((state_val_29721 === (13))){
var inst_29714 = (state_29720[(2)]);
var state_29720__$1 = state_29720;
var statearr_29725_29747 = state_29720__$1;
(statearr_29725_29747[(2)] = inst_29714);

(statearr_29725_29747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (6))){
var inst_29705 = (state_29720[(2)]);
var state_29720__$1 = state_29720;
if(cljs.core.truth_(inst_29705)){
var statearr_29726_29748 = state_29720__$1;
(statearr_29726_29748[(1)] = (8));

} else {
var statearr_29727_29749 = state_29720__$1;
(statearr_29727_29749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (3))){
var inst_29718 = (state_29720[(2)]);
var state_29720__$1 = state_29720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29720__$1,inst_29718);
} else {
if((state_val_29721 === (12))){
var state_29720__$1 = state_29720;
var statearr_29728_29750 = state_29720__$1;
(statearr_29728_29750[(2)] = null);

(statearr_29728_29750[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (2))){
var inst_29697 = (state_29720[(7)]);
var state_29720__$1 = state_29720;
if(cljs.core.truth_(inst_29697)){
var statearr_29729_29751 = state_29720__$1;
(statearr_29729_29751[(1)] = (4));

} else {
var statearr_29730_29752 = state_29720__$1;
(statearr_29730_29752[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (11))){
var inst_29711 = cljs.core.async.close_BANG_.call(null,ch);
var state_29720__$1 = state_29720;
var statearr_29731_29753 = state_29720__$1;
(statearr_29731_29753[(2)] = inst_29711);

(statearr_29731_29753[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (9))){
var state_29720__$1 = state_29720;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29732_29754 = state_29720__$1;
(statearr_29732_29754[(1)] = (11));

} else {
var statearr_29733_29755 = state_29720__$1;
(statearr_29733_29755[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (5))){
var inst_29697 = (state_29720[(7)]);
var state_29720__$1 = state_29720;
var statearr_29734_29756 = state_29720__$1;
(statearr_29734_29756[(2)] = inst_29697);

(statearr_29734_29756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (10))){
var inst_29716 = (state_29720[(2)]);
var state_29720__$1 = state_29720;
var statearr_29735_29757 = state_29720__$1;
(statearr_29735_29757[(2)] = inst_29716);

(statearr_29735_29757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (8))){
var inst_29697 = (state_29720[(7)]);
var inst_29707 = cljs.core.next.call(null,inst_29697);
var inst_29697__$1 = inst_29707;
var state_29720__$1 = (function (){var statearr_29736 = state_29720;
(statearr_29736[(7)] = inst_29697__$1);

return statearr_29736;
})();
var statearr_29737_29758 = state_29720__$1;
(statearr_29737_29758[(2)] = null);

(statearr_29737_29758[(1)] = (2));


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
});})(c__16142__auto__))
;
return ((function (switch__16086__auto__,c__16142__auto__){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_29741 = [null,null,null,null,null,null,null,null];
(statearr_29741[(0)] = state_machine__16087__auto__);

(statearr_29741[(1)] = (1));

return statearr_29741;
});
var state_machine__16087__auto____1 = (function (state_29720){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_29720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e29742){if((e29742 instanceof Object)){
var ex__16090__auto__ = e29742;
var statearr_29743_29759 = state_29720;
(statearr_29743_29759[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29760 = state_29720;
state_29720 = G__29760;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_29720){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_29720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto__))
})();
var state__16144__auto__ = (function (){var statearr_29744 = f__16143__auto__.call(null);
(statearr_29744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto__);

return statearr_29744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto__))
);

return c__16142__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj29762 = {};
return obj29762;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__12706__auto__ = _;
if(and__12706__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__12706__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__13362__auto__ = (((_ == null))?null:_);
return (function (){var or__12718__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13362__auto__)]);
if(or__12718__auto__){
return or__12718__auto__;
} else {
var or__12718__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__12718__auto____$1){
return or__12718__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj29764 = {};
return obj29764;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__12706__auto__ = m;
if(and__12706__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__12706__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__13362__auto__ = (((m == null))?null:m);
return (function (){var or__12718__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13362__auto__)]);
if(or__12718__auto__){
return or__12718__auto__;
} else {
var or__12718__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__12718__auto____$1){
return or__12718__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__12706__auto__ = m;
if(and__12706__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__12706__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__13362__auto__ = (((m == null))?null:m);
return (function (){var or__12718__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13362__auto__)]);
if(or__12718__auto__){
return or__12718__auto__;
} else {
var or__12718__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__12718__auto____$1){
return or__12718__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__12706__auto__ = m;
if(and__12706__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__12706__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__13362__auto__ = (((m == null))?null:m);
return (function (){var or__12718__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13362__auto__)]);
if(or__12718__auto__){
return or__12718__auto__;
} else {
var or__12718__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__12718__auto____$1){
return or__12718__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t29986 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29986 = (function (cs,ch,mult,meta29987){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29987 = meta29987;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29986.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29986.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29986.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29986.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29986.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29986.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29986.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29988){
var self__ = this;
var _29988__$1 = this;
return self__.meta29987;
});})(cs))
;

cljs.core.async.t29986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29988,meta29987__$1){
var self__ = this;
var _29988__$1 = this;
return (new cljs.core.async.t29986(self__.cs,self__.ch,self__.mult,meta29987__$1));
});})(cs))
;

cljs.core.async.t29986.cljs$lang$type = true;

cljs.core.async.t29986.cljs$lang$ctorStr = "cljs.core.async/t29986";

cljs.core.async.t29986.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cljs.core.async/t29986");
});})(cs))
;

cljs.core.async.__GT_t29986 = ((function (cs){
return (function __GT_t29986(cs__$1,ch__$1,mult__$1,meta29987){
return (new cljs.core.async.t29986(cs__$1,ch__$1,mult__$1,meta29987));
});})(cs))
;

}

return (new cljs.core.async.t29986(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/anil/Code/clojure/clojurescript/anildigital-io/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16142__auto___30207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto___30207,cs,m,dchan,dctr,done){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto___30207,cs,m,dchan,dctr,done){
return (function (state_30119){
var state_val_30120 = (state_30119[(1)]);
if((state_val_30120 === (7))){
var inst_30115 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30121_30208 = state_30119__$1;
(statearr_30121_30208[(2)] = inst_30115);

(statearr_30121_30208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (20))){
var inst_30020 = (state_30119[(7)]);
var inst_30030 = cljs.core.first.call(null,inst_30020);
var inst_30031 = cljs.core.nth.call(null,inst_30030,(0),null);
var inst_30032 = cljs.core.nth.call(null,inst_30030,(1),null);
var state_30119__$1 = (function (){var statearr_30122 = state_30119;
(statearr_30122[(8)] = inst_30031);

return statearr_30122;
})();
if(cljs.core.truth_(inst_30032)){
var statearr_30123_30209 = state_30119__$1;
(statearr_30123_30209[(1)] = (22));

} else {
var statearr_30124_30210 = state_30119__$1;
(statearr_30124_30210[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (27))){
var inst_29991 = (state_30119[(9)]);
var inst_30060 = (state_30119[(10)]);
var inst_30067 = (state_30119[(11)]);
var inst_30062 = (state_30119[(12)]);
var inst_30067__$1 = cljs.core._nth.call(null,inst_30060,inst_30062);
var inst_30068 = cljs.core.async.put_BANG_.call(null,inst_30067__$1,inst_29991,done);
var state_30119__$1 = (function (){var statearr_30125 = state_30119;
(statearr_30125[(11)] = inst_30067__$1);

return statearr_30125;
})();
if(cljs.core.truth_(inst_30068)){
var statearr_30126_30211 = state_30119__$1;
(statearr_30126_30211[(1)] = (30));

} else {
var statearr_30127_30212 = state_30119__$1;
(statearr_30127_30212[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (1))){
var state_30119__$1 = state_30119;
var statearr_30128_30213 = state_30119__$1;
(statearr_30128_30213[(2)] = null);

(statearr_30128_30213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (24))){
var inst_30020 = (state_30119[(7)]);
var inst_30037 = (state_30119[(2)]);
var inst_30038 = cljs.core.next.call(null,inst_30020);
var inst_30000 = inst_30038;
var inst_30001 = null;
var inst_30002 = (0);
var inst_30003 = (0);
var state_30119__$1 = (function (){var statearr_30129 = state_30119;
(statearr_30129[(13)] = inst_30001);

(statearr_30129[(14)] = inst_30002);

(statearr_30129[(15)] = inst_30037);

(statearr_30129[(16)] = inst_30003);

(statearr_30129[(17)] = inst_30000);

return statearr_30129;
})();
var statearr_30130_30214 = state_30119__$1;
(statearr_30130_30214[(2)] = null);

(statearr_30130_30214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (39))){
var state_30119__$1 = state_30119;
var statearr_30134_30215 = state_30119__$1;
(statearr_30134_30215[(2)] = null);

(statearr_30134_30215[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (4))){
var inst_29991 = (state_30119[(9)]);
var inst_29991__$1 = (state_30119[(2)]);
var inst_29992 = (inst_29991__$1 == null);
var state_30119__$1 = (function (){var statearr_30135 = state_30119;
(statearr_30135[(9)] = inst_29991__$1);

return statearr_30135;
})();
if(cljs.core.truth_(inst_29992)){
var statearr_30136_30216 = state_30119__$1;
(statearr_30136_30216[(1)] = (5));

} else {
var statearr_30137_30217 = state_30119__$1;
(statearr_30137_30217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (15))){
var inst_30001 = (state_30119[(13)]);
var inst_30002 = (state_30119[(14)]);
var inst_30003 = (state_30119[(16)]);
var inst_30000 = (state_30119[(17)]);
var inst_30016 = (state_30119[(2)]);
var inst_30017 = (inst_30003 + (1));
var tmp30131 = inst_30001;
var tmp30132 = inst_30002;
var tmp30133 = inst_30000;
var inst_30000__$1 = tmp30133;
var inst_30001__$1 = tmp30131;
var inst_30002__$1 = tmp30132;
var inst_30003__$1 = inst_30017;
var state_30119__$1 = (function (){var statearr_30138 = state_30119;
(statearr_30138[(13)] = inst_30001__$1);

(statearr_30138[(18)] = inst_30016);

(statearr_30138[(14)] = inst_30002__$1);

(statearr_30138[(16)] = inst_30003__$1);

(statearr_30138[(17)] = inst_30000__$1);

return statearr_30138;
})();
var statearr_30139_30218 = state_30119__$1;
(statearr_30139_30218[(2)] = null);

(statearr_30139_30218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (21))){
var inst_30041 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30143_30219 = state_30119__$1;
(statearr_30143_30219[(2)] = inst_30041);

(statearr_30143_30219[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (31))){
var inst_30067 = (state_30119[(11)]);
var inst_30071 = done.call(null,null);
var inst_30072 = cljs.core.async.untap_STAR_.call(null,m,inst_30067);
var state_30119__$1 = (function (){var statearr_30144 = state_30119;
(statearr_30144[(19)] = inst_30071);

return statearr_30144;
})();
var statearr_30145_30220 = state_30119__$1;
(statearr_30145_30220[(2)] = inst_30072);

(statearr_30145_30220[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (32))){
var inst_30060 = (state_30119[(10)]);
var inst_30061 = (state_30119[(20)]);
var inst_30059 = (state_30119[(21)]);
var inst_30062 = (state_30119[(12)]);
var inst_30074 = (state_30119[(2)]);
var inst_30075 = (inst_30062 + (1));
var tmp30140 = inst_30060;
var tmp30141 = inst_30061;
var tmp30142 = inst_30059;
var inst_30059__$1 = tmp30142;
var inst_30060__$1 = tmp30140;
var inst_30061__$1 = tmp30141;
var inst_30062__$1 = inst_30075;
var state_30119__$1 = (function (){var statearr_30146 = state_30119;
(statearr_30146[(10)] = inst_30060__$1);

(statearr_30146[(20)] = inst_30061__$1);

(statearr_30146[(22)] = inst_30074);

(statearr_30146[(21)] = inst_30059__$1);

(statearr_30146[(12)] = inst_30062__$1);

return statearr_30146;
})();
var statearr_30147_30221 = state_30119__$1;
(statearr_30147_30221[(2)] = null);

(statearr_30147_30221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (40))){
var inst_30087 = (state_30119[(23)]);
var inst_30091 = done.call(null,null);
var inst_30092 = cljs.core.async.untap_STAR_.call(null,m,inst_30087);
var state_30119__$1 = (function (){var statearr_30148 = state_30119;
(statearr_30148[(24)] = inst_30091);

return statearr_30148;
})();
var statearr_30149_30222 = state_30119__$1;
(statearr_30149_30222[(2)] = inst_30092);

(statearr_30149_30222[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (33))){
var inst_30078 = (state_30119[(25)]);
var inst_30080 = cljs.core.chunked_seq_QMARK_.call(null,inst_30078);
var state_30119__$1 = state_30119;
if(inst_30080){
var statearr_30150_30223 = state_30119__$1;
(statearr_30150_30223[(1)] = (36));

} else {
var statearr_30151_30224 = state_30119__$1;
(statearr_30151_30224[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (13))){
var inst_30010 = (state_30119[(26)]);
var inst_30013 = cljs.core.async.close_BANG_.call(null,inst_30010);
var state_30119__$1 = state_30119;
var statearr_30152_30225 = state_30119__$1;
(statearr_30152_30225[(2)] = inst_30013);

(statearr_30152_30225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (22))){
var inst_30031 = (state_30119[(8)]);
var inst_30034 = cljs.core.async.close_BANG_.call(null,inst_30031);
var state_30119__$1 = state_30119;
var statearr_30153_30226 = state_30119__$1;
(statearr_30153_30226[(2)] = inst_30034);

(statearr_30153_30226[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (36))){
var inst_30078 = (state_30119[(25)]);
var inst_30082 = cljs.core.chunk_first.call(null,inst_30078);
var inst_30083 = cljs.core.chunk_rest.call(null,inst_30078);
var inst_30084 = cljs.core.count.call(null,inst_30082);
var inst_30059 = inst_30083;
var inst_30060 = inst_30082;
var inst_30061 = inst_30084;
var inst_30062 = (0);
var state_30119__$1 = (function (){var statearr_30154 = state_30119;
(statearr_30154[(10)] = inst_30060);

(statearr_30154[(20)] = inst_30061);

(statearr_30154[(21)] = inst_30059);

(statearr_30154[(12)] = inst_30062);

return statearr_30154;
})();
var statearr_30155_30227 = state_30119__$1;
(statearr_30155_30227[(2)] = null);

(statearr_30155_30227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (41))){
var inst_30078 = (state_30119[(25)]);
var inst_30094 = (state_30119[(2)]);
var inst_30095 = cljs.core.next.call(null,inst_30078);
var inst_30059 = inst_30095;
var inst_30060 = null;
var inst_30061 = (0);
var inst_30062 = (0);
var state_30119__$1 = (function (){var statearr_30156 = state_30119;
(statearr_30156[(10)] = inst_30060);

(statearr_30156[(20)] = inst_30061);

(statearr_30156[(27)] = inst_30094);

(statearr_30156[(21)] = inst_30059);

(statearr_30156[(12)] = inst_30062);

return statearr_30156;
})();
var statearr_30157_30228 = state_30119__$1;
(statearr_30157_30228[(2)] = null);

(statearr_30157_30228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (43))){
var state_30119__$1 = state_30119;
var statearr_30158_30229 = state_30119__$1;
(statearr_30158_30229[(2)] = null);

(statearr_30158_30229[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (29))){
var inst_30103 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30159_30230 = state_30119__$1;
(statearr_30159_30230[(2)] = inst_30103);

(statearr_30159_30230[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (44))){
var inst_30112 = (state_30119[(2)]);
var state_30119__$1 = (function (){var statearr_30160 = state_30119;
(statearr_30160[(28)] = inst_30112);

return statearr_30160;
})();
var statearr_30161_30231 = state_30119__$1;
(statearr_30161_30231[(2)] = null);

(statearr_30161_30231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (6))){
var inst_30051 = (state_30119[(29)]);
var inst_30050 = cljs.core.deref.call(null,cs);
var inst_30051__$1 = cljs.core.keys.call(null,inst_30050);
var inst_30052 = cljs.core.count.call(null,inst_30051__$1);
var inst_30053 = cljs.core.reset_BANG_.call(null,dctr,inst_30052);
var inst_30058 = cljs.core.seq.call(null,inst_30051__$1);
var inst_30059 = inst_30058;
var inst_30060 = null;
var inst_30061 = (0);
var inst_30062 = (0);
var state_30119__$1 = (function (){var statearr_30162 = state_30119;
(statearr_30162[(10)] = inst_30060);

(statearr_30162[(20)] = inst_30061);

(statearr_30162[(30)] = inst_30053);

(statearr_30162[(29)] = inst_30051__$1);

(statearr_30162[(21)] = inst_30059);

(statearr_30162[(12)] = inst_30062);

return statearr_30162;
})();
var statearr_30163_30232 = state_30119__$1;
(statearr_30163_30232[(2)] = null);

(statearr_30163_30232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (28))){
var inst_30078 = (state_30119[(25)]);
var inst_30059 = (state_30119[(21)]);
var inst_30078__$1 = cljs.core.seq.call(null,inst_30059);
var state_30119__$1 = (function (){var statearr_30164 = state_30119;
(statearr_30164[(25)] = inst_30078__$1);

return statearr_30164;
})();
if(inst_30078__$1){
var statearr_30165_30233 = state_30119__$1;
(statearr_30165_30233[(1)] = (33));

} else {
var statearr_30166_30234 = state_30119__$1;
(statearr_30166_30234[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (25))){
var inst_30061 = (state_30119[(20)]);
var inst_30062 = (state_30119[(12)]);
var inst_30064 = (inst_30062 < inst_30061);
var inst_30065 = inst_30064;
var state_30119__$1 = state_30119;
if(cljs.core.truth_(inst_30065)){
var statearr_30167_30235 = state_30119__$1;
(statearr_30167_30235[(1)] = (27));

} else {
var statearr_30168_30236 = state_30119__$1;
(statearr_30168_30236[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (34))){
var state_30119__$1 = state_30119;
var statearr_30169_30237 = state_30119__$1;
(statearr_30169_30237[(2)] = null);

(statearr_30169_30237[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (17))){
var state_30119__$1 = state_30119;
var statearr_30170_30238 = state_30119__$1;
(statearr_30170_30238[(2)] = null);

(statearr_30170_30238[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (3))){
var inst_30117 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30119__$1,inst_30117);
} else {
if((state_val_30120 === (12))){
var inst_30046 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30171_30239 = state_30119__$1;
(statearr_30171_30239[(2)] = inst_30046);

(statearr_30171_30239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (2))){
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30119__$1,(4),ch);
} else {
if((state_val_30120 === (23))){
var state_30119__$1 = state_30119;
var statearr_30172_30240 = state_30119__$1;
(statearr_30172_30240[(2)] = null);

(statearr_30172_30240[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (35))){
var inst_30101 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30173_30241 = state_30119__$1;
(statearr_30173_30241[(2)] = inst_30101);

(statearr_30173_30241[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (19))){
var inst_30020 = (state_30119[(7)]);
var inst_30024 = cljs.core.chunk_first.call(null,inst_30020);
var inst_30025 = cljs.core.chunk_rest.call(null,inst_30020);
var inst_30026 = cljs.core.count.call(null,inst_30024);
var inst_30000 = inst_30025;
var inst_30001 = inst_30024;
var inst_30002 = inst_30026;
var inst_30003 = (0);
var state_30119__$1 = (function (){var statearr_30174 = state_30119;
(statearr_30174[(13)] = inst_30001);

(statearr_30174[(14)] = inst_30002);

(statearr_30174[(16)] = inst_30003);

(statearr_30174[(17)] = inst_30000);

return statearr_30174;
})();
var statearr_30175_30242 = state_30119__$1;
(statearr_30175_30242[(2)] = null);

(statearr_30175_30242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (11))){
var inst_30020 = (state_30119[(7)]);
var inst_30000 = (state_30119[(17)]);
var inst_30020__$1 = cljs.core.seq.call(null,inst_30000);
var state_30119__$1 = (function (){var statearr_30176 = state_30119;
(statearr_30176[(7)] = inst_30020__$1);

return statearr_30176;
})();
if(inst_30020__$1){
var statearr_30177_30243 = state_30119__$1;
(statearr_30177_30243[(1)] = (16));

} else {
var statearr_30178_30244 = state_30119__$1;
(statearr_30178_30244[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (9))){
var inst_30048 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30179_30245 = state_30119__$1;
(statearr_30179_30245[(2)] = inst_30048);

(statearr_30179_30245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (5))){
var inst_29998 = cljs.core.deref.call(null,cs);
var inst_29999 = cljs.core.seq.call(null,inst_29998);
var inst_30000 = inst_29999;
var inst_30001 = null;
var inst_30002 = (0);
var inst_30003 = (0);
var state_30119__$1 = (function (){var statearr_30180 = state_30119;
(statearr_30180[(13)] = inst_30001);

(statearr_30180[(14)] = inst_30002);

(statearr_30180[(16)] = inst_30003);

(statearr_30180[(17)] = inst_30000);

return statearr_30180;
})();
var statearr_30181_30246 = state_30119__$1;
(statearr_30181_30246[(2)] = null);

(statearr_30181_30246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (14))){
var state_30119__$1 = state_30119;
var statearr_30182_30247 = state_30119__$1;
(statearr_30182_30247[(2)] = null);

(statearr_30182_30247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (45))){
var inst_30109 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30183_30248 = state_30119__$1;
(statearr_30183_30248[(2)] = inst_30109);

(statearr_30183_30248[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (26))){
var inst_30051 = (state_30119[(29)]);
var inst_30105 = (state_30119[(2)]);
var inst_30106 = cljs.core.seq.call(null,inst_30051);
var state_30119__$1 = (function (){var statearr_30184 = state_30119;
(statearr_30184[(31)] = inst_30105);

return statearr_30184;
})();
if(inst_30106){
var statearr_30185_30249 = state_30119__$1;
(statearr_30185_30249[(1)] = (42));

} else {
var statearr_30186_30250 = state_30119__$1;
(statearr_30186_30250[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (16))){
var inst_30020 = (state_30119[(7)]);
var inst_30022 = cljs.core.chunked_seq_QMARK_.call(null,inst_30020);
var state_30119__$1 = state_30119;
if(inst_30022){
var statearr_30187_30251 = state_30119__$1;
(statearr_30187_30251[(1)] = (19));

} else {
var statearr_30188_30252 = state_30119__$1;
(statearr_30188_30252[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (38))){
var inst_30098 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30189_30253 = state_30119__$1;
(statearr_30189_30253[(2)] = inst_30098);

(statearr_30189_30253[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (30))){
var state_30119__$1 = state_30119;
var statearr_30190_30254 = state_30119__$1;
(statearr_30190_30254[(2)] = null);

(statearr_30190_30254[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (10))){
var inst_30001 = (state_30119[(13)]);
var inst_30003 = (state_30119[(16)]);
var inst_30009 = cljs.core._nth.call(null,inst_30001,inst_30003);
var inst_30010 = cljs.core.nth.call(null,inst_30009,(0),null);
var inst_30011 = cljs.core.nth.call(null,inst_30009,(1),null);
var state_30119__$1 = (function (){var statearr_30191 = state_30119;
(statearr_30191[(26)] = inst_30010);

return statearr_30191;
})();
if(cljs.core.truth_(inst_30011)){
var statearr_30192_30255 = state_30119__$1;
(statearr_30192_30255[(1)] = (13));

} else {
var statearr_30193_30256 = state_30119__$1;
(statearr_30193_30256[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (18))){
var inst_30044 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30194_30257 = state_30119__$1;
(statearr_30194_30257[(2)] = inst_30044);

(statearr_30194_30257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (42))){
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30119__$1,(45),dchan);
} else {
if((state_val_30120 === (37))){
var inst_29991 = (state_30119[(9)]);
var inst_30078 = (state_30119[(25)]);
var inst_30087 = (state_30119[(23)]);
var inst_30087__$1 = cljs.core.first.call(null,inst_30078);
var inst_30088 = cljs.core.async.put_BANG_.call(null,inst_30087__$1,inst_29991,done);
var state_30119__$1 = (function (){var statearr_30195 = state_30119;
(statearr_30195[(23)] = inst_30087__$1);

return statearr_30195;
})();
if(cljs.core.truth_(inst_30088)){
var statearr_30196_30258 = state_30119__$1;
(statearr_30196_30258[(1)] = (39));

} else {
var statearr_30197_30259 = state_30119__$1;
(statearr_30197_30259[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (8))){
var inst_30002 = (state_30119[(14)]);
var inst_30003 = (state_30119[(16)]);
var inst_30005 = (inst_30003 < inst_30002);
var inst_30006 = inst_30005;
var state_30119__$1 = state_30119;
if(cljs.core.truth_(inst_30006)){
var statearr_30198_30260 = state_30119__$1;
(statearr_30198_30260[(1)] = (10));

} else {
var statearr_30199_30261 = state_30119__$1;
(statearr_30199_30261[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__16142__auto___30207,cs,m,dchan,dctr,done))
;
return ((function (switch__16086__auto__,c__16142__auto___30207,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_30203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30203[(0)] = state_machine__16087__auto__);

(statearr_30203[(1)] = (1));

return statearr_30203;
});
var state_machine__16087__auto____1 = (function (state_30119){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_30119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e30204){if((e30204 instanceof Object)){
var ex__16090__auto__ = e30204;
var statearr_30205_30262 = state_30119;
(statearr_30205_30262[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30263 = state_30119;
state_30119 = G__30263;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_30119){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_30119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto___30207,cs,m,dchan,dctr,done))
})();
var state__16144__auto__ = (function (){var statearr_30206 = f__16143__auto__.call(null);
(statearr_30206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___30207);

return statearr_30206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto___30207,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj30265 = {};
return obj30265;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__12706__auto__ = m;
if(and__12706__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__12706__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__13362__auto__ = (((m == null))?null:m);
return (function (){var or__12718__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13362__auto__)]);
if(or__12718__auto__){
return or__12718__auto__;
} else {
var or__12718__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__12718__auto____$1){
return or__12718__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__12706__auto__ = m;
if(and__12706__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__12706__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__13362__auto__ = (((m == null))?null:m);
return (function (){var or__12718__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13362__auto__)]);
if(or__12718__auto__){
return or__12718__auto__;
} else {
var or__12718__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__12718__auto____$1){
return or__12718__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__12706__auto__ = m;
if(and__12706__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__12706__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__13362__auto__ = (((m == null))?null:m);
return (function (){var or__12718__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13362__auto__)]);
if(or__12718__auto__){
return or__12718__auto__;
} else {
var or__12718__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__12718__auto____$1){
return or__12718__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__12706__auto__ = m;
if(and__12706__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__12706__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__13362__auto__ = (((m == null))?null:m);
return (function (){var or__12718__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13362__auto__)]);
if(or__12718__auto__){
return or__12718__auto__;
} else {
var or__12718__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__12718__auto____$1){
return or__12718__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__12706__auto__ = m;
if(and__12706__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__12706__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__13362__auto__ = (((m == null))?null:m);
return (function (){var or__12718__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13362__auto__)]);
if(or__12718__auto__){
return or__12718__auto__;
} else {
var or__12718__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__12718__auto____$1){
return or__12718__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__30266){
var map__30271 = p__30266;
var map__30271__$1 = ((cljs.core.seq_QMARK_.call(null,map__30271))?cljs.core.apply.call(null,cljs.core.hash_map,map__30271):map__30271);
var opts = map__30271__$1;
var statearr_30272_30275 = state;
(statearr_30272_30275[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__30271,map__30271__$1,opts){
return (function (val){
var statearr_30273_30276 = state;
(statearr_30273_30276[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30271,map__30271__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_30274_30277 = state;
(statearr_30274_30277[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__30266 = null;
if (arguments.length > 3) {
var G__30278__i = 0, G__30278__a = new Array(arguments.length -  3);
while (G__30278__i < G__30278__a.length) {G__30278__a[G__30278__i] = arguments[G__30278__i + 3]; ++G__30278__i;}
  p__30266 = new cljs.core.IndexedSeq(G__30278__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__30266);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__30279){
var state = cljs.core.first(arglist__30279);
arglist__30279 = cljs.core.next(arglist__30279);
var cont_block = cljs.core.first(arglist__30279);
arglist__30279 = cljs.core.next(arglist__30279);
var ports = cljs.core.first(arglist__30279);
var p__30266 = cljs.core.rest(arglist__30279);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__30266);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t30399 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30399 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30400){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30400 = meta30400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30399.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t30399.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30399.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30399.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30399.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30399.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30399.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30399.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30399.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30401){
var self__ = this;
var _30401__$1 = this;
return self__.meta30400;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30401,meta30400__$1){
var self__ = this;
var _30401__$1 = this;
return (new cljs.core.async.t30399(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30400__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30399.cljs$lang$type = true;

cljs.core.async.t30399.cljs$lang$ctorStr = "cljs.core.async/t30399";

cljs.core.async.t30399.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cljs.core.async/t30399");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t30399 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t30399(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30400){
return (new cljs.core.async.t30399(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30400));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t30399(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/anil/Code/clojure/clojurescript/anildigital-io/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var c__16142__auto___30518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto___30518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto___30518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30471){
var state_val_30472 = (state_30471[(1)]);
if((state_val_30472 === (7))){
var inst_30415 = (state_30471[(7)]);
var inst_30420 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30415);
var state_30471__$1 = state_30471;
var statearr_30473_30519 = state_30471__$1;
(statearr_30473_30519[(2)] = inst_30420);

(statearr_30473_30519[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (20))){
var inst_30430 = (state_30471[(8)]);
var state_30471__$1 = state_30471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30471__$1,(23),out,inst_30430);
} else {
if((state_val_30472 === (1))){
var inst_30405 = (state_30471[(9)]);
var inst_30405__$1 = calc_state.call(null);
var inst_30406 = cljs.core.seq_QMARK_.call(null,inst_30405__$1);
var state_30471__$1 = (function (){var statearr_30474 = state_30471;
(statearr_30474[(9)] = inst_30405__$1);

return statearr_30474;
})();
if(inst_30406){
var statearr_30475_30520 = state_30471__$1;
(statearr_30475_30520[(1)] = (2));

} else {
var statearr_30476_30521 = state_30471__$1;
(statearr_30476_30521[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (24))){
var inst_30423 = (state_30471[(10)]);
var inst_30415 = inst_30423;
var state_30471__$1 = (function (){var statearr_30477 = state_30471;
(statearr_30477[(7)] = inst_30415);

return statearr_30477;
})();
var statearr_30478_30522 = state_30471__$1;
(statearr_30478_30522[(2)] = null);

(statearr_30478_30522[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (4))){
var inst_30405 = (state_30471[(9)]);
var inst_30411 = (state_30471[(2)]);
var inst_30412 = cljs.core.get.call(null,inst_30411,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30413 = cljs.core.get.call(null,inst_30411,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30414 = cljs.core.get.call(null,inst_30411,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30415 = inst_30405;
var state_30471__$1 = (function (){var statearr_30479 = state_30471;
(statearr_30479[(11)] = inst_30413);

(statearr_30479[(12)] = inst_30414);

(statearr_30479[(7)] = inst_30415);

(statearr_30479[(13)] = inst_30412);

return statearr_30479;
})();
var statearr_30480_30523 = state_30471__$1;
(statearr_30480_30523[(2)] = null);

(statearr_30480_30523[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (15))){
var state_30471__$1 = state_30471;
var statearr_30481_30524 = state_30471__$1;
(statearr_30481_30524[(2)] = null);

(statearr_30481_30524[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (21))){
var inst_30423 = (state_30471[(10)]);
var inst_30415 = inst_30423;
var state_30471__$1 = (function (){var statearr_30482 = state_30471;
(statearr_30482[(7)] = inst_30415);

return statearr_30482;
})();
var statearr_30483_30525 = state_30471__$1;
(statearr_30483_30525[(2)] = null);

(statearr_30483_30525[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (13))){
var inst_30467 = (state_30471[(2)]);
var state_30471__$1 = state_30471;
var statearr_30484_30526 = state_30471__$1;
(statearr_30484_30526[(2)] = inst_30467);

(statearr_30484_30526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (22))){
var inst_30465 = (state_30471[(2)]);
var state_30471__$1 = state_30471;
var statearr_30485_30527 = state_30471__$1;
(statearr_30485_30527[(2)] = inst_30465);

(statearr_30485_30527[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (6))){
var inst_30469 = (state_30471[(2)]);
var state_30471__$1 = state_30471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30471__$1,inst_30469);
} else {
if((state_val_30472 === (25))){
var state_30471__$1 = state_30471;
var statearr_30486_30528 = state_30471__$1;
(statearr_30486_30528[(2)] = null);

(statearr_30486_30528[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (17))){
var inst_30445 = (state_30471[(14)]);
var state_30471__$1 = state_30471;
var statearr_30487_30529 = state_30471__$1;
(statearr_30487_30529[(2)] = inst_30445);

(statearr_30487_30529[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (3))){
var inst_30405 = (state_30471[(9)]);
var state_30471__$1 = state_30471;
var statearr_30488_30530 = state_30471__$1;
(statearr_30488_30530[(2)] = inst_30405);

(statearr_30488_30530[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (12))){
var inst_30426 = (state_30471[(15)]);
var inst_30445 = (state_30471[(14)]);
var inst_30431 = (state_30471[(16)]);
var inst_30445__$1 = inst_30426.call(null,inst_30431);
var state_30471__$1 = (function (){var statearr_30489 = state_30471;
(statearr_30489[(14)] = inst_30445__$1);

return statearr_30489;
})();
if(cljs.core.truth_(inst_30445__$1)){
var statearr_30490_30531 = state_30471__$1;
(statearr_30490_30531[(1)] = (17));

} else {
var statearr_30491_30532 = state_30471__$1;
(statearr_30491_30532[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (2))){
var inst_30405 = (state_30471[(9)]);
var inst_30408 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30405);
var state_30471__$1 = state_30471;
var statearr_30492_30533 = state_30471__$1;
(statearr_30492_30533[(2)] = inst_30408);

(statearr_30492_30533[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (23))){
var inst_30456 = (state_30471[(2)]);
var state_30471__$1 = state_30471;
if(cljs.core.truth_(inst_30456)){
var statearr_30493_30534 = state_30471__$1;
(statearr_30493_30534[(1)] = (24));

} else {
var statearr_30494_30535 = state_30471__$1;
(statearr_30494_30535[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (19))){
var inst_30453 = (state_30471[(2)]);
var state_30471__$1 = state_30471;
if(cljs.core.truth_(inst_30453)){
var statearr_30495_30536 = state_30471__$1;
(statearr_30495_30536[(1)] = (20));

} else {
var statearr_30496_30537 = state_30471__$1;
(statearr_30496_30537[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (11))){
var inst_30430 = (state_30471[(8)]);
var inst_30436 = (inst_30430 == null);
var state_30471__$1 = state_30471;
if(cljs.core.truth_(inst_30436)){
var statearr_30497_30538 = state_30471__$1;
(statearr_30497_30538[(1)] = (14));

} else {
var statearr_30498_30539 = state_30471__$1;
(statearr_30498_30539[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (9))){
var inst_30423 = (state_30471[(10)]);
var inst_30423__$1 = (state_30471[(2)]);
var inst_30424 = cljs.core.get.call(null,inst_30423__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30425 = cljs.core.get.call(null,inst_30423__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30426 = cljs.core.get.call(null,inst_30423__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_30471__$1 = (function (){var statearr_30499 = state_30471;
(statearr_30499[(10)] = inst_30423__$1);

(statearr_30499[(15)] = inst_30426);

(statearr_30499[(17)] = inst_30425);

return statearr_30499;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30471__$1,(10),inst_30424);
} else {
if((state_val_30472 === (5))){
var inst_30415 = (state_30471[(7)]);
var inst_30418 = cljs.core.seq_QMARK_.call(null,inst_30415);
var state_30471__$1 = state_30471;
if(inst_30418){
var statearr_30500_30540 = state_30471__$1;
(statearr_30500_30540[(1)] = (7));

} else {
var statearr_30501_30541 = state_30471__$1;
(statearr_30501_30541[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (14))){
var inst_30431 = (state_30471[(16)]);
var inst_30438 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30431);
var state_30471__$1 = state_30471;
var statearr_30502_30542 = state_30471__$1;
(statearr_30502_30542[(2)] = inst_30438);

(statearr_30502_30542[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (26))){
var inst_30461 = (state_30471[(2)]);
var state_30471__$1 = state_30471;
var statearr_30503_30543 = state_30471__$1;
(statearr_30503_30543[(2)] = inst_30461);

(statearr_30503_30543[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (16))){
var inst_30441 = (state_30471[(2)]);
var inst_30442 = calc_state.call(null);
var inst_30415 = inst_30442;
var state_30471__$1 = (function (){var statearr_30504 = state_30471;
(statearr_30504[(18)] = inst_30441);

(statearr_30504[(7)] = inst_30415);

return statearr_30504;
})();
var statearr_30505_30544 = state_30471__$1;
(statearr_30505_30544[(2)] = null);

(statearr_30505_30544[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (10))){
var inst_30430 = (state_30471[(8)]);
var inst_30431 = (state_30471[(16)]);
var inst_30429 = (state_30471[(2)]);
var inst_30430__$1 = cljs.core.nth.call(null,inst_30429,(0),null);
var inst_30431__$1 = cljs.core.nth.call(null,inst_30429,(1),null);
var inst_30432 = (inst_30430__$1 == null);
var inst_30433 = cljs.core._EQ_.call(null,inst_30431__$1,change);
var inst_30434 = (inst_30432) || (inst_30433);
var state_30471__$1 = (function (){var statearr_30506 = state_30471;
(statearr_30506[(8)] = inst_30430__$1);

(statearr_30506[(16)] = inst_30431__$1);

return statearr_30506;
})();
if(cljs.core.truth_(inst_30434)){
var statearr_30507_30545 = state_30471__$1;
(statearr_30507_30545[(1)] = (11));

} else {
var statearr_30508_30546 = state_30471__$1;
(statearr_30508_30546[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (18))){
var inst_30426 = (state_30471[(15)]);
var inst_30431 = (state_30471[(16)]);
var inst_30425 = (state_30471[(17)]);
var inst_30448 = cljs.core.empty_QMARK_.call(null,inst_30426);
var inst_30449 = inst_30425.call(null,inst_30431);
var inst_30450 = cljs.core.not.call(null,inst_30449);
var inst_30451 = (inst_30448) && (inst_30450);
var state_30471__$1 = state_30471;
var statearr_30509_30547 = state_30471__$1;
(statearr_30509_30547[(2)] = inst_30451);

(statearr_30509_30547[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (8))){
var inst_30415 = (state_30471[(7)]);
var state_30471__$1 = state_30471;
var statearr_30510_30548 = state_30471__$1;
(statearr_30510_30548[(2)] = inst_30415);

(statearr_30510_30548[(1)] = (9));


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
});})(c__16142__auto___30518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16086__auto__,c__16142__auto___30518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_30514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30514[(0)] = state_machine__16087__auto__);

(statearr_30514[(1)] = (1));

return statearr_30514;
});
var state_machine__16087__auto____1 = (function (state_30471){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_30471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e30515){if((e30515 instanceof Object)){
var ex__16090__auto__ = e30515;
var statearr_30516_30549 = state_30471;
(statearr_30516_30549[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30550 = state_30471;
state_30471 = G__30550;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_30471){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_30471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto___30518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16144__auto__ = (function (){var statearr_30517 = f__16143__auto__.call(null);
(statearr_30517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___30518);

return statearr_30517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto___30518,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj30552 = {};
return obj30552;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__12706__auto__ = p;
if(and__12706__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__12706__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__13362__auto__ = (((p == null))?null:p);
return (function (){var or__12718__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13362__auto__)]);
if(or__12718__auto__){
return or__12718__auto__;
} else {
var or__12718__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__12718__auto____$1){
return or__12718__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__12706__auto__ = p;
if(and__12706__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__12706__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__13362__auto__ = (((p == null))?null:p);
return (function (){var or__12718__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13362__auto__)]);
if(or__12718__auto__){
return or__12718__auto__;
} else {
var or__12718__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__12718__auto____$1){
return or__12718__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__12706__auto__ = p;
if(and__12706__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__12706__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__13362__auto__ = (((p == null))?null:p);
return (function (){var or__12718__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13362__auto__)]);
if(or__12718__auto__){
return or__12718__auto__;
} else {
var or__12718__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12718__auto____$1){
return or__12718__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__12706__auto__ = p;
if(and__12706__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__12706__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__13362__auto__ = (((p == null))?null:p);
return (function (){var or__12718__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13362__auto__)]);
if(or__12718__auto__){
return or__12718__auto__;
} else {
var or__12718__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12718__auto____$1){
return or__12718__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__12718__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__12718__auto__)){
return or__12718__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12718__auto__,mults){
return (function (p1__30553_SHARP_){
if(cljs.core.truth_(p1__30553_SHARP_.call(null,topic))){
return p1__30553_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30553_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12718__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30676 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30676 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta30677){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta30677 = meta30677;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30676.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30676.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30676.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t30676.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30676.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30676.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30676.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30676.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30678){
var self__ = this;
var _30678__$1 = this;
return self__.meta30677;
});})(mults,ensure_mult))
;

cljs.core.async.t30676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30678,meta30677__$1){
var self__ = this;
var _30678__$1 = this;
return (new cljs.core.async.t30676(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta30677__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30676.cljs$lang$type = true;

cljs.core.async.t30676.cljs$lang$ctorStr = "cljs.core.async/t30676";

cljs.core.async.t30676.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cljs.core.async/t30676");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30676 = ((function (mults,ensure_mult){
return (function __GT_t30676(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30677){
return (new cljs.core.async.t30676(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30677));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30676(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/anil/Code/clojure/clojurescript/anildigital-io/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var c__16142__auto___30798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto___30798,mults,ensure_mult,p){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto___30798,mults,ensure_mult,p){
return (function (state_30750){
var state_val_30751 = (state_30750[(1)]);
if((state_val_30751 === (7))){
var inst_30746 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
var statearr_30752_30799 = state_30750__$1;
(statearr_30752_30799[(2)] = inst_30746);

(statearr_30752_30799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (20))){
var state_30750__$1 = state_30750;
var statearr_30753_30800 = state_30750__$1;
(statearr_30753_30800[(2)] = null);

(statearr_30753_30800[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (1))){
var state_30750__$1 = state_30750;
var statearr_30754_30801 = state_30750__$1;
(statearr_30754_30801[(2)] = null);

(statearr_30754_30801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (24))){
var inst_30729 = (state_30750[(7)]);
var inst_30738 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30729);
var state_30750__$1 = state_30750;
var statearr_30755_30802 = state_30750__$1;
(statearr_30755_30802[(2)] = inst_30738);

(statearr_30755_30802[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (4))){
var inst_30681 = (state_30750[(8)]);
var inst_30681__$1 = (state_30750[(2)]);
var inst_30682 = (inst_30681__$1 == null);
var state_30750__$1 = (function (){var statearr_30756 = state_30750;
(statearr_30756[(8)] = inst_30681__$1);

return statearr_30756;
})();
if(cljs.core.truth_(inst_30682)){
var statearr_30757_30803 = state_30750__$1;
(statearr_30757_30803[(1)] = (5));

} else {
var statearr_30758_30804 = state_30750__$1;
(statearr_30758_30804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (15))){
var inst_30723 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
var statearr_30759_30805 = state_30750__$1;
(statearr_30759_30805[(2)] = inst_30723);

(statearr_30759_30805[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (21))){
var inst_30743 = (state_30750[(2)]);
var state_30750__$1 = (function (){var statearr_30760 = state_30750;
(statearr_30760[(9)] = inst_30743);

return statearr_30760;
})();
var statearr_30761_30806 = state_30750__$1;
(statearr_30761_30806[(2)] = null);

(statearr_30761_30806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (13))){
var inst_30705 = (state_30750[(10)]);
var inst_30707 = cljs.core.chunked_seq_QMARK_.call(null,inst_30705);
var state_30750__$1 = state_30750;
if(inst_30707){
var statearr_30762_30807 = state_30750__$1;
(statearr_30762_30807[(1)] = (16));

} else {
var statearr_30763_30808 = state_30750__$1;
(statearr_30763_30808[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (22))){
var inst_30735 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
if(cljs.core.truth_(inst_30735)){
var statearr_30764_30809 = state_30750__$1;
(statearr_30764_30809[(1)] = (23));

} else {
var statearr_30765_30810 = state_30750__$1;
(statearr_30765_30810[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (6))){
var inst_30681 = (state_30750[(8)]);
var inst_30731 = (state_30750[(11)]);
var inst_30729 = (state_30750[(7)]);
var inst_30729__$1 = topic_fn.call(null,inst_30681);
var inst_30730 = cljs.core.deref.call(null,mults);
var inst_30731__$1 = cljs.core.get.call(null,inst_30730,inst_30729__$1);
var state_30750__$1 = (function (){var statearr_30766 = state_30750;
(statearr_30766[(11)] = inst_30731__$1);

(statearr_30766[(7)] = inst_30729__$1);

return statearr_30766;
})();
if(cljs.core.truth_(inst_30731__$1)){
var statearr_30767_30811 = state_30750__$1;
(statearr_30767_30811[(1)] = (19));

} else {
var statearr_30768_30812 = state_30750__$1;
(statearr_30768_30812[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (25))){
var inst_30740 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
var statearr_30769_30813 = state_30750__$1;
(statearr_30769_30813[(2)] = inst_30740);

(statearr_30769_30813[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (17))){
var inst_30705 = (state_30750[(10)]);
var inst_30714 = cljs.core.first.call(null,inst_30705);
var inst_30715 = cljs.core.async.muxch_STAR_.call(null,inst_30714);
var inst_30716 = cljs.core.async.close_BANG_.call(null,inst_30715);
var inst_30717 = cljs.core.next.call(null,inst_30705);
var inst_30691 = inst_30717;
var inst_30692 = null;
var inst_30693 = (0);
var inst_30694 = (0);
var state_30750__$1 = (function (){var statearr_30770 = state_30750;
(statearr_30770[(12)] = inst_30694);

(statearr_30770[(13)] = inst_30692);

(statearr_30770[(14)] = inst_30691);

(statearr_30770[(15)] = inst_30693);

(statearr_30770[(16)] = inst_30716);

return statearr_30770;
})();
var statearr_30771_30814 = state_30750__$1;
(statearr_30771_30814[(2)] = null);

(statearr_30771_30814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (3))){
var inst_30748 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30750__$1,inst_30748);
} else {
if((state_val_30751 === (12))){
var inst_30725 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
var statearr_30772_30815 = state_30750__$1;
(statearr_30772_30815[(2)] = inst_30725);

(statearr_30772_30815[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (2))){
var state_30750__$1 = state_30750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30750__$1,(4),ch);
} else {
if((state_val_30751 === (23))){
var state_30750__$1 = state_30750;
var statearr_30773_30816 = state_30750__$1;
(statearr_30773_30816[(2)] = null);

(statearr_30773_30816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (19))){
var inst_30681 = (state_30750[(8)]);
var inst_30731 = (state_30750[(11)]);
var inst_30733 = cljs.core.async.muxch_STAR_.call(null,inst_30731);
var state_30750__$1 = state_30750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30750__$1,(22),inst_30733,inst_30681);
} else {
if((state_val_30751 === (11))){
var inst_30691 = (state_30750[(14)]);
var inst_30705 = (state_30750[(10)]);
var inst_30705__$1 = cljs.core.seq.call(null,inst_30691);
var state_30750__$1 = (function (){var statearr_30774 = state_30750;
(statearr_30774[(10)] = inst_30705__$1);

return statearr_30774;
})();
if(inst_30705__$1){
var statearr_30775_30817 = state_30750__$1;
(statearr_30775_30817[(1)] = (13));

} else {
var statearr_30776_30818 = state_30750__$1;
(statearr_30776_30818[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (9))){
var inst_30727 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
var statearr_30777_30819 = state_30750__$1;
(statearr_30777_30819[(2)] = inst_30727);

(statearr_30777_30819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (5))){
var inst_30688 = cljs.core.deref.call(null,mults);
var inst_30689 = cljs.core.vals.call(null,inst_30688);
var inst_30690 = cljs.core.seq.call(null,inst_30689);
var inst_30691 = inst_30690;
var inst_30692 = null;
var inst_30693 = (0);
var inst_30694 = (0);
var state_30750__$1 = (function (){var statearr_30778 = state_30750;
(statearr_30778[(12)] = inst_30694);

(statearr_30778[(13)] = inst_30692);

(statearr_30778[(14)] = inst_30691);

(statearr_30778[(15)] = inst_30693);

return statearr_30778;
})();
var statearr_30779_30820 = state_30750__$1;
(statearr_30779_30820[(2)] = null);

(statearr_30779_30820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (14))){
var state_30750__$1 = state_30750;
var statearr_30783_30821 = state_30750__$1;
(statearr_30783_30821[(2)] = null);

(statearr_30783_30821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (16))){
var inst_30705 = (state_30750[(10)]);
var inst_30709 = cljs.core.chunk_first.call(null,inst_30705);
var inst_30710 = cljs.core.chunk_rest.call(null,inst_30705);
var inst_30711 = cljs.core.count.call(null,inst_30709);
var inst_30691 = inst_30710;
var inst_30692 = inst_30709;
var inst_30693 = inst_30711;
var inst_30694 = (0);
var state_30750__$1 = (function (){var statearr_30784 = state_30750;
(statearr_30784[(12)] = inst_30694);

(statearr_30784[(13)] = inst_30692);

(statearr_30784[(14)] = inst_30691);

(statearr_30784[(15)] = inst_30693);

return statearr_30784;
})();
var statearr_30785_30822 = state_30750__$1;
(statearr_30785_30822[(2)] = null);

(statearr_30785_30822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (10))){
var inst_30694 = (state_30750[(12)]);
var inst_30692 = (state_30750[(13)]);
var inst_30691 = (state_30750[(14)]);
var inst_30693 = (state_30750[(15)]);
var inst_30699 = cljs.core._nth.call(null,inst_30692,inst_30694);
var inst_30700 = cljs.core.async.muxch_STAR_.call(null,inst_30699);
var inst_30701 = cljs.core.async.close_BANG_.call(null,inst_30700);
var inst_30702 = (inst_30694 + (1));
var tmp30780 = inst_30692;
var tmp30781 = inst_30691;
var tmp30782 = inst_30693;
var inst_30691__$1 = tmp30781;
var inst_30692__$1 = tmp30780;
var inst_30693__$1 = tmp30782;
var inst_30694__$1 = inst_30702;
var state_30750__$1 = (function (){var statearr_30786 = state_30750;
(statearr_30786[(12)] = inst_30694__$1);

(statearr_30786[(13)] = inst_30692__$1);

(statearr_30786[(14)] = inst_30691__$1);

(statearr_30786[(15)] = inst_30693__$1);

(statearr_30786[(17)] = inst_30701);

return statearr_30786;
})();
var statearr_30787_30823 = state_30750__$1;
(statearr_30787_30823[(2)] = null);

(statearr_30787_30823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (18))){
var inst_30720 = (state_30750[(2)]);
var state_30750__$1 = state_30750;
var statearr_30788_30824 = state_30750__$1;
(statearr_30788_30824[(2)] = inst_30720);

(statearr_30788_30824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30751 === (8))){
var inst_30694 = (state_30750[(12)]);
var inst_30693 = (state_30750[(15)]);
var inst_30696 = (inst_30694 < inst_30693);
var inst_30697 = inst_30696;
var state_30750__$1 = state_30750;
if(cljs.core.truth_(inst_30697)){
var statearr_30789_30825 = state_30750__$1;
(statearr_30789_30825[(1)] = (10));

} else {
var statearr_30790_30826 = state_30750__$1;
(statearr_30790_30826[(1)] = (11));

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
});})(c__16142__auto___30798,mults,ensure_mult,p))
;
return ((function (switch__16086__auto__,c__16142__auto___30798,mults,ensure_mult,p){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_30794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30794[(0)] = state_machine__16087__auto__);

(statearr_30794[(1)] = (1));

return statearr_30794;
});
var state_machine__16087__auto____1 = (function (state_30750){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_30750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e30795){if((e30795 instanceof Object)){
var ex__16090__auto__ = e30795;
var statearr_30796_30827 = state_30750;
(statearr_30796_30827[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30828 = state_30750;
state_30750 = G__30828;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_30750){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_30750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto___30798,mults,ensure_mult,p))
})();
var state__16144__auto__ = (function (){var statearr_30797 = f__16143__auto__.call(null);
(statearr_30797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___30798);

return statearr_30797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto___30798,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__16142__auto___30965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto___30965,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto___30965,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30935){
var state_val_30936 = (state_30935[(1)]);
if((state_val_30936 === (7))){
var state_30935__$1 = state_30935;
var statearr_30937_30966 = state_30935__$1;
(statearr_30937_30966[(2)] = null);

(statearr_30937_30966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (1))){
var state_30935__$1 = state_30935;
var statearr_30938_30967 = state_30935__$1;
(statearr_30938_30967[(2)] = null);

(statearr_30938_30967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (4))){
var inst_30899 = (state_30935[(7)]);
var inst_30901 = (inst_30899 < cnt);
var state_30935__$1 = state_30935;
if(cljs.core.truth_(inst_30901)){
var statearr_30939_30968 = state_30935__$1;
(statearr_30939_30968[(1)] = (6));

} else {
var statearr_30940_30969 = state_30935__$1;
(statearr_30940_30969[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (15))){
var inst_30931 = (state_30935[(2)]);
var state_30935__$1 = state_30935;
var statearr_30941_30970 = state_30935__$1;
(statearr_30941_30970[(2)] = inst_30931);

(statearr_30941_30970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (13))){
var inst_30924 = cljs.core.async.close_BANG_.call(null,out);
var state_30935__$1 = state_30935;
var statearr_30942_30971 = state_30935__$1;
(statearr_30942_30971[(2)] = inst_30924);

(statearr_30942_30971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (6))){
var state_30935__$1 = state_30935;
var statearr_30943_30972 = state_30935__$1;
(statearr_30943_30972[(2)] = null);

(statearr_30943_30972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (3))){
var inst_30933 = (state_30935[(2)]);
var state_30935__$1 = state_30935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30935__$1,inst_30933);
} else {
if((state_val_30936 === (12))){
var inst_30921 = (state_30935[(8)]);
var inst_30921__$1 = (state_30935[(2)]);
var inst_30922 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30921__$1);
var state_30935__$1 = (function (){var statearr_30944 = state_30935;
(statearr_30944[(8)] = inst_30921__$1);

return statearr_30944;
})();
if(cljs.core.truth_(inst_30922)){
var statearr_30945_30973 = state_30935__$1;
(statearr_30945_30973[(1)] = (13));

} else {
var statearr_30946_30974 = state_30935__$1;
(statearr_30946_30974[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (2))){
var inst_30898 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30899 = (0);
var state_30935__$1 = (function (){var statearr_30947 = state_30935;
(statearr_30947[(9)] = inst_30898);

(statearr_30947[(7)] = inst_30899);

return statearr_30947;
})();
var statearr_30948_30975 = state_30935__$1;
(statearr_30948_30975[(2)] = null);

(statearr_30948_30975[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (11))){
var inst_30899 = (state_30935[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30935,(10),Object,null,(9));
var inst_30908 = chs__$1.call(null,inst_30899);
var inst_30909 = done.call(null,inst_30899);
var inst_30910 = cljs.core.async.take_BANG_.call(null,inst_30908,inst_30909);
var state_30935__$1 = state_30935;
var statearr_30949_30976 = state_30935__$1;
(statearr_30949_30976[(2)] = inst_30910);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30935__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (9))){
var inst_30899 = (state_30935[(7)]);
var inst_30912 = (state_30935[(2)]);
var inst_30913 = (inst_30899 + (1));
var inst_30899__$1 = inst_30913;
var state_30935__$1 = (function (){var statearr_30950 = state_30935;
(statearr_30950[(10)] = inst_30912);

(statearr_30950[(7)] = inst_30899__$1);

return statearr_30950;
})();
var statearr_30951_30977 = state_30935__$1;
(statearr_30951_30977[(2)] = null);

(statearr_30951_30977[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (5))){
var inst_30919 = (state_30935[(2)]);
var state_30935__$1 = (function (){var statearr_30952 = state_30935;
(statearr_30952[(11)] = inst_30919);

return statearr_30952;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30935__$1,(12),dchan);
} else {
if((state_val_30936 === (14))){
var inst_30921 = (state_30935[(8)]);
var inst_30926 = cljs.core.apply.call(null,f,inst_30921);
var state_30935__$1 = state_30935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30935__$1,(16),out,inst_30926);
} else {
if((state_val_30936 === (16))){
var inst_30928 = (state_30935[(2)]);
var state_30935__$1 = (function (){var statearr_30953 = state_30935;
(statearr_30953[(12)] = inst_30928);

return statearr_30953;
})();
var statearr_30954_30978 = state_30935__$1;
(statearr_30954_30978[(2)] = null);

(statearr_30954_30978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (10))){
var inst_30903 = (state_30935[(2)]);
var inst_30904 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30935__$1 = (function (){var statearr_30955 = state_30935;
(statearr_30955[(13)] = inst_30903);

return statearr_30955;
})();
var statearr_30956_30979 = state_30935__$1;
(statearr_30956_30979[(2)] = inst_30904);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30935__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30936 === (8))){
var inst_30917 = (state_30935[(2)]);
var state_30935__$1 = state_30935;
var statearr_30957_30980 = state_30935__$1;
(statearr_30957_30980[(2)] = inst_30917);

(statearr_30957_30980[(1)] = (5));


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
});})(c__16142__auto___30965,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16086__auto__,c__16142__auto___30965,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_30961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30961[(0)] = state_machine__16087__auto__);

(statearr_30961[(1)] = (1));

return statearr_30961;
});
var state_machine__16087__auto____1 = (function (state_30935){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_30935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e30962){if((e30962 instanceof Object)){
var ex__16090__auto__ = e30962;
var statearr_30963_30981 = state_30935;
(statearr_30963_30981[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30982 = state_30935;
state_30935 = G__30982;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_30935){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_30935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto___30965,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16144__auto__ = (function (){var statearr_30964 = f__16143__auto__.call(null);
(statearr_30964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___30965);

return statearr_30964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto___30965,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16142__auto___31090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto___31090,out){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto___31090,out){
return (function (state_31066){
var state_val_31067 = (state_31066[(1)]);
if((state_val_31067 === (7))){
var inst_31046 = (state_31066[(7)]);
var inst_31045 = (state_31066[(8)]);
var inst_31045__$1 = (state_31066[(2)]);
var inst_31046__$1 = cljs.core.nth.call(null,inst_31045__$1,(0),null);
var inst_31047 = cljs.core.nth.call(null,inst_31045__$1,(1),null);
var inst_31048 = (inst_31046__$1 == null);
var state_31066__$1 = (function (){var statearr_31068 = state_31066;
(statearr_31068[(7)] = inst_31046__$1);

(statearr_31068[(8)] = inst_31045__$1);

(statearr_31068[(9)] = inst_31047);

return statearr_31068;
})();
if(cljs.core.truth_(inst_31048)){
var statearr_31069_31091 = state_31066__$1;
(statearr_31069_31091[(1)] = (8));

} else {
var statearr_31070_31092 = state_31066__$1;
(statearr_31070_31092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (1))){
var inst_31037 = cljs.core.vec.call(null,chs);
var inst_31038 = inst_31037;
var state_31066__$1 = (function (){var statearr_31071 = state_31066;
(statearr_31071[(10)] = inst_31038);

return statearr_31071;
})();
var statearr_31072_31093 = state_31066__$1;
(statearr_31072_31093[(2)] = null);

(statearr_31072_31093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (4))){
var inst_31038 = (state_31066[(10)]);
var state_31066__$1 = state_31066;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31066__$1,(7),inst_31038);
} else {
if((state_val_31067 === (6))){
var inst_31062 = (state_31066[(2)]);
var state_31066__$1 = state_31066;
var statearr_31073_31094 = state_31066__$1;
(statearr_31073_31094[(2)] = inst_31062);

(statearr_31073_31094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (3))){
var inst_31064 = (state_31066[(2)]);
var state_31066__$1 = state_31066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31066__$1,inst_31064);
} else {
if((state_val_31067 === (2))){
var inst_31038 = (state_31066[(10)]);
var inst_31040 = cljs.core.count.call(null,inst_31038);
var inst_31041 = (inst_31040 > (0));
var state_31066__$1 = state_31066;
if(cljs.core.truth_(inst_31041)){
var statearr_31075_31095 = state_31066__$1;
(statearr_31075_31095[(1)] = (4));

} else {
var statearr_31076_31096 = state_31066__$1;
(statearr_31076_31096[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (11))){
var inst_31038 = (state_31066[(10)]);
var inst_31055 = (state_31066[(2)]);
var tmp31074 = inst_31038;
var inst_31038__$1 = tmp31074;
var state_31066__$1 = (function (){var statearr_31077 = state_31066;
(statearr_31077[(10)] = inst_31038__$1);

(statearr_31077[(11)] = inst_31055);

return statearr_31077;
})();
var statearr_31078_31097 = state_31066__$1;
(statearr_31078_31097[(2)] = null);

(statearr_31078_31097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (9))){
var inst_31046 = (state_31066[(7)]);
var state_31066__$1 = state_31066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31066__$1,(11),out,inst_31046);
} else {
if((state_val_31067 === (5))){
var inst_31060 = cljs.core.async.close_BANG_.call(null,out);
var state_31066__$1 = state_31066;
var statearr_31079_31098 = state_31066__$1;
(statearr_31079_31098[(2)] = inst_31060);

(statearr_31079_31098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (10))){
var inst_31058 = (state_31066[(2)]);
var state_31066__$1 = state_31066;
var statearr_31080_31099 = state_31066__$1;
(statearr_31080_31099[(2)] = inst_31058);

(statearr_31080_31099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31067 === (8))){
var inst_31046 = (state_31066[(7)]);
var inst_31045 = (state_31066[(8)]);
var inst_31038 = (state_31066[(10)]);
var inst_31047 = (state_31066[(9)]);
var inst_31050 = (function (){var c = inst_31047;
var v = inst_31046;
var vec__31043 = inst_31045;
var cs = inst_31038;
return ((function (c,v,vec__31043,cs,inst_31046,inst_31045,inst_31038,inst_31047,state_val_31067,c__16142__auto___31090,out){
return (function (p1__30983_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30983_SHARP_);
});
;})(c,v,vec__31043,cs,inst_31046,inst_31045,inst_31038,inst_31047,state_val_31067,c__16142__auto___31090,out))
})();
var inst_31051 = cljs.core.filterv.call(null,inst_31050,inst_31038);
var inst_31038__$1 = inst_31051;
var state_31066__$1 = (function (){var statearr_31081 = state_31066;
(statearr_31081[(10)] = inst_31038__$1);

return statearr_31081;
})();
var statearr_31082_31100 = state_31066__$1;
(statearr_31082_31100[(2)] = null);

(statearr_31082_31100[(1)] = (2));


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
});})(c__16142__auto___31090,out))
;
return ((function (switch__16086__auto__,c__16142__auto___31090,out){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_31086 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31086[(0)] = state_machine__16087__auto__);

(statearr_31086[(1)] = (1));

return statearr_31086;
});
var state_machine__16087__auto____1 = (function (state_31066){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_31066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e31087){if((e31087 instanceof Object)){
var ex__16090__auto__ = e31087;
var statearr_31088_31101 = state_31066;
(statearr_31088_31101[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31102 = state_31066;
state_31066 = G__31102;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_31066){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_31066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto___31090,out))
})();
var state__16144__auto__ = (function (){var statearr_31089 = f__16143__auto__.call(null);
(statearr_31089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___31090);

return statearr_31089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto___31090,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16142__auto___31195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto___31195,out){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto___31195,out){
return (function (state_31172){
var state_val_31173 = (state_31172[(1)]);
if((state_val_31173 === (7))){
var inst_31154 = (state_31172[(7)]);
var inst_31154__$1 = (state_31172[(2)]);
var inst_31155 = (inst_31154__$1 == null);
var inst_31156 = cljs.core.not.call(null,inst_31155);
var state_31172__$1 = (function (){var statearr_31174 = state_31172;
(statearr_31174[(7)] = inst_31154__$1);

return statearr_31174;
})();
if(inst_31156){
var statearr_31175_31196 = state_31172__$1;
(statearr_31175_31196[(1)] = (8));

} else {
var statearr_31176_31197 = state_31172__$1;
(statearr_31176_31197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (1))){
var inst_31149 = (0);
var state_31172__$1 = (function (){var statearr_31177 = state_31172;
(statearr_31177[(8)] = inst_31149);

return statearr_31177;
})();
var statearr_31178_31198 = state_31172__$1;
(statearr_31178_31198[(2)] = null);

(statearr_31178_31198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (4))){
var state_31172__$1 = state_31172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31172__$1,(7),ch);
} else {
if((state_val_31173 === (6))){
var inst_31167 = (state_31172[(2)]);
var state_31172__$1 = state_31172;
var statearr_31179_31199 = state_31172__$1;
(statearr_31179_31199[(2)] = inst_31167);

(statearr_31179_31199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (3))){
var inst_31169 = (state_31172[(2)]);
var inst_31170 = cljs.core.async.close_BANG_.call(null,out);
var state_31172__$1 = (function (){var statearr_31180 = state_31172;
(statearr_31180[(9)] = inst_31169);

return statearr_31180;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31172__$1,inst_31170);
} else {
if((state_val_31173 === (2))){
var inst_31149 = (state_31172[(8)]);
var inst_31151 = (inst_31149 < n);
var state_31172__$1 = state_31172;
if(cljs.core.truth_(inst_31151)){
var statearr_31181_31200 = state_31172__$1;
(statearr_31181_31200[(1)] = (4));

} else {
var statearr_31182_31201 = state_31172__$1;
(statearr_31182_31201[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (11))){
var inst_31149 = (state_31172[(8)]);
var inst_31159 = (state_31172[(2)]);
var inst_31160 = (inst_31149 + (1));
var inst_31149__$1 = inst_31160;
var state_31172__$1 = (function (){var statearr_31183 = state_31172;
(statearr_31183[(10)] = inst_31159);

(statearr_31183[(8)] = inst_31149__$1);

return statearr_31183;
})();
var statearr_31184_31202 = state_31172__$1;
(statearr_31184_31202[(2)] = null);

(statearr_31184_31202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (9))){
var state_31172__$1 = state_31172;
var statearr_31185_31203 = state_31172__$1;
(statearr_31185_31203[(2)] = null);

(statearr_31185_31203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (5))){
var state_31172__$1 = state_31172;
var statearr_31186_31204 = state_31172__$1;
(statearr_31186_31204[(2)] = null);

(statearr_31186_31204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (10))){
var inst_31164 = (state_31172[(2)]);
var state_31172__$1 = state_31172;
var statearr_31187_31205 = state_31172__$1;
(statearr_31187_31205[(2)] = inst_31164);

(statearr_31187_31205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31173 === (8))){
var inst_31154 = (state_31172[(7)]);
var state_31172__$1 = state_31172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31172__$1,(11),out,inst_31154);
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
});})(c__16142__auto___31195,out))
;
return ((function (switch__16086__auto__,c__16142__auto___31195,out){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_31191 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31191[(0)] = state_machine__16087__auto__);

(statearr_31191[(1)] = (1));

return statearr_31191;
});
var state_machine__16087__auto____1 = (function (state_31172){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_31172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e31192){if((e31192 instanceof Object)){
var ex__16090__auto__ = e31192;
var statearr_31193_31206 = state_31172;
(statearr_31193_31206[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31207 = state_31172;
state_31172 = G__31207;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_31172){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_31172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto___31195,out))
})();
var state__16144__auto__ = (function (){var statearr_31194 = f__16143__auto__.call(null);
(statearr_31194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___31195);

return statearr_31194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto___31195,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t31215 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31215 = (function (ch,f,map_LT_,meta31216){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31216 = meta31216;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31215.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31215.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t31215.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31215.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t31218 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31218 = (function (fn1,_,meta31216,map_LT_,f,ch,meta31219){
this.fn1 = fn1;
this._ = _;
this.meta31216 = meta31216;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31219 = meta31219;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31218.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31218.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t31218.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31208_SHARP_){
return f1.call(null,(((p1__31208_SHARP_ == null))?null:self__.f.call(null,p1__31208_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t31218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31220){
var self__ = this;
var _31220__$1 = this;
return self__.meta31219;
});})(___$1))
;

cljs.core.async.t31218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31220,meta31219__$1){
var self__ = this;
var _31220__$1 = this;
return (new cljs.core.async.t31218(self__.fn1,self__._,self__.meta31216,self__.map_LT_,self__.f,self__.ch,meta31219__$1));
});})(___$1))
;

cljs.core.async.t31218.cljs$lang$type = true;

cljs.core.async.t31218.cljs$lang$ctorStr = "cljs.core.async/t31218";

cljs.core.async.t31218.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cljs.core.async/t31218");
});})(___$1))
;

cljs.core.async.__GT_t31218 = ((function (___$1){
return (function __GT_t31218(fn1__$1,___$2,meta31216__$1,map_LT___$1,f__$1,ch__$1,meta31219){
return (new cljs.core.async.t31218(fn1__$1,___$2,meta31216__$1,map_LT___$1,f__$1,ch__$1,meta31219));
});})(___$1))
;

}

return (new cljs.core.async.t31218(fn1,___$1,self__.meta31216,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/anil/Code/clojure/clojurescript/anildigital-io/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__12706__auto__ = ret;
if(cljs.core.truth_(and__12706__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__12706__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t31215.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31215.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31215.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31217){
var self__ = this;
var _31217__$1 = this;
return self__.meta31216;
});

cljs.core.async.t31215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31217,meta31216__$1){
var self__ = this;
var _31217__$1 = this;
return (new cljs.core.async.t31215(self__.ch,self__.f,self__.map_LT_,meta31216__$1));
});

cljs.core.async.t31215.cljs$lang$type = true;

cljs.core.async.t31215.cljs$lang$ctorStr = "cljs.core.async/t31215";

cljs.core.async.t31215.cljs$lang$ctorPrWriter = (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cljs.core.async/t31215");
});

cljs.core.async.__GT_t31215 = (function __GT_t31215(ch__$1,f__$1,map_LT___$1,meta31216){
return (new cljs.core.async.t31215(ch__$1,f__$1,map_LT___$1,meta31216));
});

}

return (new cljs.core.async.t31215(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/anil/Code/clojure/clojurescript/anildigital-io/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t31224 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31224 = (function (ch,f,map_GT_,meta31225){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31225 = meta31225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31224.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t31224.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31224.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31226){
var self__ = this;
var _31226__$1 = this;
return self__.meta31225;
});

cljs.core.async.t31224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31226,meta31225__$1){
var self__ = this;
var _31226__$1 = this;
return (new cljs.core.async.t31224(self__.ch,self__.f,self__.map_GT_,meta31225__$1));
});

cljs.core.async.t31224.cljs$lang$type = true;

cljs.core.async.t31224.cljs$lang$ctorStr = "cljs.core.async/t31224";

cljs.core.async.t31224.cljs$lang$ctorPrWriter = (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cljs.core.async/t31224");
});

cljs.core.async.__GT_t31224 = (function __GT_t31224(ch__$1,f__$1,map_GT___$1,meta31225){
return (new cljs.core.async.t31224(ch__$1,f__$1,map_GT___$1,meta31225));
});

}

return (new cljs.core.async.t31224(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/anil/Code/clojure/clojurescript/anildigital-io/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t31230 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31230 = (function (ch,p,filter_GT_,meta31231){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31231 = meta31231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31230.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31230.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t31230.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31230.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31230.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31230.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31230.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31232){
var self__ = this;
var _31232__$1 = this;
return self__.meta31231;
});

cljs.core.async.t31230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31232,meta31231__$1){
var self__ = this;
var _31232__$1 = this;
return (new cljs.core.async.t31230(self__.ch,self__.p,self__.filter_GT_,meta31231__$1));
});

cljs.core.async.t31230.cljs$lang$type = true;

cljs.core.async.t31230.cljs$lang$ctorStr = "cljs.core.async/t31230";

cljs.core.async.t31230.cljs$lang$ctorPrWriter = (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cljs.core.async/t31230");
});

cljs.core.async.__GT_t31230 = (function __GT_t31230(ch__$1,p__$1,filter_GT___$1,meta31231){
return (new cljs.core.async.t31230(ch__$1,p__$1,filter_GT___$1,meta31231));
});

}

return (new cljs.core.async.t31230(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/anil/Code/clojure/clojurescript/anildigital-io/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16142__auto___31315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto___31315,out){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto___31315,out){
return (function (state_31294){
var state_val_31295 = (state_31294[(1)]);
if((state_val_31295 === (7))){
var inst_31290 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
var statearr_31296_31316 = state_31294__$1;
(statearr_31296_31316[(2)] = inst_31290);

(statearr_31296_31316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (1))){
var state_31294__$1 = state_31294;
var statearr_31297_31317 = state_31294__$1;
(statearr_31297_31317[(2)] = null);

(statearr_31297_31317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (4))){
var inst_31276 = (state_31294[(7)]);
var inst_31276__$1 = (state_31294[(2)]);
var inst_31277 = (inst_31276__$1 == null);
var state_31294__$1 = (function (){var statearr_31298 = state_31294;
(statearr_31298[(7)] = inst_31276__$1);

return statearr_31298;
})();
if(cljs.core.truth_(inst_31277)){
var statearr_31299_31318 = state_31294__$1;
(statearr_31299_31318[(1)] = (5));

} else {
var statearr_31300_31319 = state_31294__$1;
(statearr_31300_31319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (6))){
var inst_31276 = (state_31294[(7)]);
var inst_31281 = p.call(null,inst_31276);
var state_31294__$1 = state_31294;
if(cljs.core.truth_(inst_31281)){
var statearr_31301_31320 = state_31294__$1;
(statearr_31301_31320[(1)] = (8));

} else {
var statearr_31302_31321 = state_31294__$1;
(statearr_31302_31321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (3))){
var inst_31292 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31294__$1,inst_31292);
} else {
if((state_val_31295 === (2))){
var state_31294__$1 = state_31294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31294__$1,(4),ch);
} else {
if((state_val_31295 === (11))){
var inst_31284 = (state_31294[(2)]);
var state_31294__$1 = state_31294;
var statearr_31303_31322 = state_31294__$1;
(statearr_31303_31322[(2)] = inst_31284);

(statearr_31303_31322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (9))){
var state_31294__$1 = state_31294;
var statearr_31304_31323 = state_31294__$1;
(statearr_31304_31323[(2)] = null);

(statearr_31304_31323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (5))){
var inst_31279 = cljs.core.async.close_BANG_.call(null,out);
var state_31294__$1 = state_31294;
var statearr_31305_31324 = state_31294__$1;
(statearr_31305_31324[(2)] = inst_31279);

(statearr_31305_31324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (10))){
var inst_31287 = (state_31294[(2)]);
var state_31294__$1 = (function (){var statearr_31306 = state_31294;
(statearr_31306[(8)] = inst_31287);

return statearr_31306;
})();
var statearr_31307_31325 = state_31294__$1;
(statearr_31307_31325[(2)] = null);

(statearr_31307_31325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31295 === (8))){
var inst_31276 = (state_31294[(7)]);
var state_31294__$1 = state_31294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31294__$1,(11),out,inst_31276);
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
});})(c__16142__auto___31315,out))
;
return ((function (switch__16086__auto__,c__16142__auto___31315,out){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_31311 = [null,null,null,null,null,null,null,null,null];
(statearr_31311[(0)] = state_machine__16087__auto__);

(statearr_31311[(1)] = (1));

return statearr_31311;
});
var state_machine__16087__auto____1 = (function (state_31294){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_31294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e31312){if((e31312 instanceof Object)){
var ex__16090__auto__ = e31312;
var statearr_31313_31326 = state_31294;
(statearr_31313_31326[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31327 = state_31294;
state_31294 = G__31327;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_31294){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_31294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto___31315,out))
})();
var state__16144__auto__ = (function (){var statearr_31314 = f__16143__auto__.call(null);
(statearr_31314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___31315);

return statearr_31314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto___31315,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__16142__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto__){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto__){
return (function (state_31493){
var state_val_31494 = (state_31493[(1)]);
if((state_val_31494 === (7))){
var inst_31489 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31495_31536 = state_31493__$1;
(statearr_31495_31536[(2)] = inst_31489);

(statearr_31495_31536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (20))){
var inst_31459 = (state_31493[(7)]);
var inst_31470 = (state_31493[(2)]);
var inst_31471 = cljs.core.next.call(null,inst_31459);
var inst_31445 = inst_31471;
var inst_31446 = null;
var inst_31447 = (0);
var inst_31448 = (0);
var state_31493__$1 = (function (){var statearr_31496 = state_31493;
(statearr_31496[(8)] = inst_31448);

(statearr_31496[(9)] = inst_31446);

(statearr_31496[(10)] = inst_31445);

(statearr_31496[(11)] = inst_31470);

(statearr_31496[(12)] = inst_31447);

return statearr_31496;
})();
var statearr_31497_31537 = state_31493__$1;
(statearr_31497_31537[(2)] = null);

(statearr_31497_31537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (1))){
var state_31493__$1 = state_31493;
var statearr_31498_31538 = state_31493__$1;
(statearr_31498_31538[(2)] = null);

(statearr_31498_31538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (4))){
var inst_31434 = (state_31493[(13)]);
var inst_31434__$1 = (state_31493[(2)]);
var inst_31435 = (inst_31434__$1 == null);
var state_31493__$1 = (function (){var statearr_31499 = state_31493;
(statearr_31499[(13)] = inst_31434__$1);

return statearr_31499;
})();
if(cljs.core.truth_(inst_31435)){
var statearr_31500_31539 = state_31493__$1;
(statearr_31500_31539[(1)] = (5));

} else {
var statearr_31501_31540 = state_31493__$1;
(statearr_31501_31540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (15))){
var state_31493__$1 = state_31493;
var statearr_31505_31541 = state_31493__$1;
(statearr_31505_31541[(2)] = null);

(statearr_31505_31541[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (21))){
var state_31493__$1 = state_31493;
var statearr_31506_31542 = state_31493__$1;
(statearr_31506_31542[(2)] = null);

(statearr_31506_31542[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (13))){
var inst_31448 = (state_31493[(8)]);
var inst_31446 = (state_31493[(9)]);
var inst_31445 = (state_31493[(10)]);
var inst_31447 = (state_31493[(12)]);
var inst_31455 = (state_31493[(2)]);
var inst_31456 = (inst_31448 + (1));
var tmp31502 = inst_31446;
var tmp31503 = inst_31445;
var tmp31504 = inst_31447;
var inst_31445__$1 = tmp31503;
var inst_31446__$1 = tmp31502;
var inst_31447__$1 = tmp31504;
var inst_31448__$1 = inst_31456;
var state_31493__$1 = (function (){var statearr_31507 = state_31493;
(statearr_31507[(8)] = inst_31448__$1);

(statearr_31507[(9)] = inst_31446__$1);

(statearr_31507[(10)] = inst_31445__$1);

(statearr_31507[(12)] = inst_31447__$1);

(statearr_31507[(14)] = inst_31455);

return statearr_31507;
})();
var statearr_31508_31543 = state_31493__$1;
(statearr_31508_31543[(2)] = null);

(statearr_31508_31543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (22))){
var state_31493__$1 = state_31493;
var statearr_31509_31544 = state_31493__$1;
(statearr_31509_31544[(2)] = null);

(statearr_31509_31544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (6))){
var inst_31434 = (state_31493[(13)]);
var inst_31443 = f.call(null,inst_31434);
var inst_31444 = cljs.core.seq.call(null,inst_31443);
var inst_31445 = inst_31444;
var inst_31446 = null;
var inst_31447 = (0);
var inst_31448 = (0);
var state_31493__$1 = (function (){var statearr_31510 = state_31493;
(statearr_31510[(8)] = inst_31448);

(statearr_31510[(9)] = inst_31446);

(statearr_31510[(10)] = inst_31445);

(statearr_31510[(12)] = inst_31447);

return statearr_31510;
})();
var statearr_31511_31545 = state_31493__$1;
(statearr_31511_31545[(2)] = null);

(statearr_31511_31545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (17))){
var inst_31459 = (state_31493[(7)]);
var inst_31463 = cljs.core.chunk_first.call(null,inst_31459);
var inst_31464 = cljs.core.chunk_rest.call(null,inst_31459);
var inst_31465 = cljs.core.count.call(null,inst_31463);
var inst_31445 = inst_31464;
var inst_31446 = inst_31463;
var inst_31447 = inst_31465;
var inst_31448 = (0);
var state_31493__$1 = (function (){var statearr_31512 = state_31493;
(statearr_31512[(8)] = inst_31448);

(statearr_31512[(9)] = inst_31446);

(statearr_31512[(10)] = inst_31445);

(statearr_31512[(12)] = inst_31447);

return statearr_31512;
})();
var statearr_31513_31546 = state_31493__$1;
(statearr_31513_31546[(2)] = null);

(statearr_31513_31546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (3))){
var inst_31491 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31493__$1,inst_31491);
} else {
if((state_val_31494 === (12))){
var inst_31479 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31514_31547 = state_31493__$1;
(statearr_31514_31547[(2)] = inst_31479);

(statearr_31514_31547[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (2))){
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31493__$1,(4),in$);
} else {
if((state_val_31494 === (23))){
var inst_31487 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31515_31548 = state_31493__$1;
(statearr_31515_31548[(2)] = inst_31487);

(statearr_31515_31548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (19))){
var inst_31474 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31516_31549 = state_31493__$1;
(statearr_31516_31549[(2)] = inst_31474);

(statearr_31516_31549[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (11))){
var inst_31459 = (state_31493[(7)]);
var inst_31445 = (state_31493[(10)]);
var inst_31459__$1 = cljs.core.seq.call(null,inst_31445);
var state_31493__$1 = (function (){var statearr_31517 = state_31493;
(statearr_31517[(7)] = inst_31459__$1);

return statearr_31517;
})();
if(inst_31459__$1){
var statearr_31518_31550 = state_31493__$1;
(statearr_31518_31550[(1)] = (14));

} else {
var statearr_31519_31551 = state_31493__$1;
(statearr_31519_31551[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (9))){
var inst_31481 = (state_31493[(2)]);
var inst_31482 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31493__$1 = (function (){var statearr_31520 = state_31493;
(statearr_31520[(15)] = inst_31481);

return statearr_31520;
})();
if(cljs.core.truth_(inst_31482)){
var statearr_31521_31552 = state_31493__$1;
(statearr_31521_31552[(1)] = (21));

} else {
var statearr_31522_31553 = state_31493__$1;
(statearr_31522_31553[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (5))){
var inst_31437 = cljs.core.async.close_BANG_.call(null,out);
var state_31493__$1 = state_31493;
var statearr_31523_31554 = state_31493__$1;
(statearr_31523_31554[(2)] = inst_31437);

(statearr_31523_31554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (14))){
var inst_31459 = (state_31493[(7)]);
var inst_31461 = cljs.core.chunked_seq_QMARK_.call(null,inst_31459);
var state_31493__$1 = state_31493;
if(inst_31461){
var statearr_31524_31555 = state_31493__$1;
(statearr_31524_31555[(1)] = (17));

} else {
var statearr_31525_31556 = state_31493__$1;
(statearr_31525_31556[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (16))){
var inst_31477 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31526_31557 = state_31493__$1;
(statearr_31526_31557[(2)] = inst_31477);

(statearr_31526_31557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31494 === (10))){
var inst_31448 = (state_31493[(8)]);
var inst_31446 = (state_31493[(9)]);
var inst_31453 = cljs.core._nth.call(null,inst_31446,inst_31448);
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31493__$1,(13),out,inst_31453);
} else {
if((state_val_31494 === (18))){
var inst_31459 = (state_31493[(7)]);
var inst_31468 = cljs.core.first.call(null,inst_31459);
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31493__$1,(20),out,inst_31468);
} else {
if((state_val_31494 === (8))){
var inst_31448 = (state_31493[(8)]);
var inst_31447 = (state_31493[(12)]);
var inst_31450 = (inst_31448 < inst_31447);
var inst_31451 = inst_31450;
var state_31493__$1 = state_31493;
if(cljs.core.truth_(inst_31451)){
var statearr_31527_31558 = state_31493__$1;
(statearr_31527_31558[(1)] = (10));

} else {
var statearr_31528_31559 = state_31493__$1;
(statearr_31528_31559[(1)] = (11));

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
});})(c__16142__auto__))
;
return ((function (switch__16086__auto__,c__16142__auto__){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_31532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31532[(0)] = state_machine__16087__auto__);

(statearr_31532[(1)] = (1));

return statearr_31532;
});
var state_machine__16087__auto____1 = (function (state_31493){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_31493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e31533){if((e31533 instanceof Object)){
var ex__16090__auto__ = e31533;
var statearr_31534_31560 = state_31493;
(statearr_31534_31560[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31561 = state_31493;
state_31493 = G__31561;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_31493){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_31493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto__))
})();
var state__16144__auto__ = (function (){var statearr_31535 = f__16143__auto__.call(null);
(statearr_31535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto__);

return statearr_31535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto__))
);

return c__16142__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16142__auto___31658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto___31658,out){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto___31658,out){
return (function (state_31633){
var state_val_31634 = (state_31633[(1)]);
if((state_val_31634 === (7))){
var inst_31628 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
var statearr_31635_31659 = state_31633__$1;
(statearr_31635_31659[(2)] = inst_31628);

(statearr_31635_31659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (1))){
var inst_31610 = null;
var state_31633__$1 = (function (){var statearr_31636 = state_31633;
(statearr_31636[(7)] = inst_31610);

return statearr_31636;
})();
var statearr_31637_31660 = state_31633__$1;
(statearr_31637_31660[(2)] = null);

(statearr_31637_31660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (4))){
var inst_31613 = (state_31633[(8)]);
var inst_31613__$1 = (state_31633[(2)]);
var inst_31614 = (inst_31613__$1 == null);
var inst_31615 = cljs.core.not.call(null,inst_31614);
var state_31633__$1 = (function (){var statearr_31638 = state_31633;
(statearr_31638[(8)] = inst_31613__$1);

return statearr_31638;
})();
if(inst_31615){
var statearr_31639_31661 = state_31633__$1;
(statearr_31639_31661[(1)] = (5));

} else {
var statearr_31640_31662 = state_31633__$1;
(statearr_31640_31662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (6))){
var state_31633__$1 = state_31633;
var statearr_31641_31663 = state_31633__$1;
(statearr_31641_31663[(2)] = null);

(statearr_31641_31663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (3))){
var inst_31630 = (state_31633[(2)]);
var inst_31631 = cljs.core.async.close_BANG_.call(null,out);
var state_31633__$1 = (function (){var statearr_31642 = state_31633;
(statearr_31642[(9)] = inst_31630);

return statearr_31642;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31633__$1,inst_31631);
} else {
if((state_val_31634 === (2))){
var state_31633__$1 = state_31633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31633__$1,(4),ch);
} else {
if((state_val_31634 === (11))){
var inst_31613 = (state_31633[(8)]);
var inst_31622 = (state_31633[(2)]);
var inst_31610 = inst_31613;
var state_31633__$1 = (function (){var statearr_31643 = state_31633;
(statearr_31643[(7)] = inst_31610);

(statearr_31643[(10)] = inst_31622);

return statearr_31643;
})();
var statearr_31644_31664 = state_31633__$1;
(statearr_31644_31664[(2)] = null);

(statearr_31644_31664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (9))){
var inst_31613 = (state_31633[(8)]);
var state_31633__$1 = state_31633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31633__$1,(11),out,inst_31613);
} else {
if((state_val_31634 === (5))){
var inst_31610 = (state_31633[(7)]);
var inst_31613 = (state_31633[(8)]);
var inst_31617 = cljs.core._EQ_.call(null,inst_31613,inst_31610);
var state_31633__$1 = state_31633;
if(inst_31617){
var statearr_31646_31665 = state_31633__$1;
(statearr_31646_31665[(1)] = (8));

} else {
var statearr_31647_31666 = state_31633__$1;
(statearr_31647_31666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (10))){
var inst_31625 = (state_31633[(2)]);
var state_31633__$1 = state_31633;
var statearr_31648_31667 = state_31633__$1;
(statearr_31648_31667[(2)] = inst_31625);

(statearr_31648_31667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31634 === (8))){
var inst_31610 = (state_31633[(7)]);
var tmp31645 = inst_31610;
var inst_31610__$1 = tmp31645;
var state_31633__$1 = (function (){var statearr_31649 = state_31633;
(statearr_31649[(7)] = inst_31610__$1);

return statearr_31649;
})();
var statearr_31650_31668 = state_31633__$1;
(statearr_31650_31668[(2)] = null);

(statearr_31650_31668[(1)] = (2));


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
});})(c__16142__auto___31658,out))
;
return ((function (switch__16086__auto__,c__16142__auto___31658,out){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_31654 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31654[(0)] = state_machine__16087__auto__);

(statearr_31654[(1)] = (1));

return statearr_31654;
});
var state_machine__16087__auto____1 = (function (state_31633){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_31633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e31655){if((e31655 instanceof Object)){
var ex__16090__auto__ = e31655;
var statearr_31656_31669 = state_31633;
(statearr_31656_31669[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31670 = state_31633;
state_31633 = G__31670;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_31633){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_31633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto___31658,out))
})();
var state__16144__auto__ = (function (){var statearr_31657 = f__16143__auto__.call(null);
(statearr_31657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___31658);

return statearr_31657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto___31658,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16142__auto___31805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto___31805,out){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto___31805,out){
return (function (state_31775){
var state_val_31776 = (state_31775[(1)]);
if((state_val_31776 === (7))){
var inst_31771 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31777_31806 = state_31775__$1;
(statearr_31777_31806[(2)] = inst_31771);

(statearr_31777_31806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (1))){
var inst_31738 = (new Array(n));
var inst_31739 = inst_31738;
var inst_31740 = (0);
var state_31775__$1 = (function (){var statearr_31778 = state_31775;
(statearr_31778[(7)] = inst_31739);

(statearr_31778[(8)] = inst_31740);

return statearr_31778;
})();
var statearr_31779_31807 = state_31775__$1;
(statearr_31779_31807[(2)] = null);

(statearr_31779_31807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (4))){
var inst_31743 = (state_31775[(9)]);
var inst_31743__$1 = (state_31775[(2)]);
var inst_31744 = (inst_31743__$1 == null);
var inst_31745 = cljs.core.not.call(null,inst_31744);
var state_31775__$1 = (function (){var statearr_31780 = state_31775;
(statearr_31780[(9)] = inst_31743__$1);

return statearr_31780;
})();
if(inst_31745){
var statearr_31781_31808 = state_31775__$1;
(statearr_31781_31808[(1)] = (5));

} else {
var statearr_31782_31809 = state_31775__$1;
(statearr_31782_31809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (15))){
var inst_31765 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31783_31810 = state_31775__$1;
(statearr_31783_31810[(2)] = inst_31765);

(statearr_31783_31810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (13))){
var state_31775__$1 = state_31775;
var statearr_31784_31811 = state_31775__$1;
(statearr_31784_31811[(2)] = null);

(statearr_31784_31811[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (6))){
var inst_31740 = (state_31775[(8)]);
var inst_31761 = (inst_31740 > (0));
var state_31775__$1 = state_31775;
if(cljs.core.truth_(inst_31761)){
var statearr_31785_31812 = state_31775__$1;
(statearr_31785_31812[(1)] = (12));

} else {
var statearr_31786_31813 = state_31775__$1;
(statearr_31786_31813[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (3))){
var inst_31773 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31775__$1,inst_31773);
} else {
if((state_val_31776 === (12))){
var inst_31739 = (state_31775[(7)]);
var inst_31763 = cljs.core.vec.call(null,inst_31739);
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31775__$1,(15),out,inst_31763);
} else {
if((state_val_31776 === (2))){
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31775__$1,(4),ch);
} else {
if((state_val_31776 === (11))){
var inst_31755 = (state_31775[(2)]);
var inst_31756 = (new Array(n));
var inst_31739 = inst_31756;
var inst_31740 = (0);
var state_31775__$1 = (function (){var statearr_31787 = state_31775;
(statearr_31787[(10)] = inst_31755);

(statearr_31787[(7)] = inst_31739);

(statearr_31787[(8)] = inst_31740);

return statearr_31787;
})();
var statearr_31788_31814 = state_31775__$1;
(statearr_31788_31814[(2)] = null);

(statearr_31788_31814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (9))){
var inst_31739 = (state_31775[(7)]);
var inst_31753 = cljs.core.vec.call(null,inst_31739);
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31775__$1,(11),out,inst_31753);
} else {
if((state_val_31776 === (5))){
var inst_31748 = (state_31775[(11)]);
var inst_31739 = (state_31775[(7)]);
var inst_31743 = (state_31775[(9)]);
var inst_31740 = (state_31775[(8)]);
var inst_31747 = (inst_31739[inst_31740] = inst_31743);
var inst_31748__$1 = (inst_31740 + (1));
var inst_31749 = (inst_31748__$1 < n);
var state_31775__$1 = (function (){var statearr_31789 = state_31775;
(statearr_31789[(11)] = inst_31748__$1);

(statearr_31789[(12)] = inst_31747);

return statearr_31789;
})();
if(cljs.core.truth_(inst_31749)){
var statearr_31790_31815 = state_31775__$1;
(statearr_31790_31815[(1)] = (8));

} else {
var statearr_31791_31816 = state_31775__$1;
(statearr_31791_31816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (14))){
var inst_31768 = (state_31775[(2)]);
var inst_31769 = cljs.core.async.close_BANG_.call(null,out);
var state_31775__$1 = (function (){var statearr_31793 = state_31775;
(statearr_31793[(13)] = inst_31768);

return statearr_31793;
})();
var statearr_31794_31817 = state_31775__$1;
(statearr_31794_31817[(2)] = inst_31769);

(statearr_31794_31817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (10))){
var inst_31759 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31795_31818 = state_31775__$1;
(statearr_31795_31818[(2)] = inst_31759);

(statearr_31795_31818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (8))){
var inst_31748 = (state_31775[(11)]);
var inst_31739 = (state_31775[(7)]);
var tmp31792 = inst_31739;
var inst_31739__$1 = tmp31792;
var inst_31740 = inst_31748;
var state_31775__$1 = (function (){var statearr_31796 = state_31775;
(statearr_31796[(7)] = inst_31739__$1);

(statearr_31796[(8)] = inst_31740);

return statearr_31796;
})();
var statearr_31797_31819 = state_31775__$1;
(statearr_31797_31819[(2)] = null);

(statearr_31797_31819[(1)] = (2));


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
});})(c__16142__auto___31805,out))
;
return ((function (switch__16086__auto__,c__16142__auto___31805,out){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_31801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31801[(0)] = state_machine__16087__auto__);

(statearr_31801[(1)] = (1));

return statearr_31801;
});
var state_machine__16087__auto____1 = (function (state_31775){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_31775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e31802){if((e31802 instanceof Object)){
var ex__16090__auto__ = e31802;
var statearr_31803_31820 = state_31775;
(statearr_31803_31820[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31821 = state_31775;
state_31775 = G__31821;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_31775){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_31775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto___31805,out))
})();
var state__16144__auto__ = (function (){var statearr_31804 = f__16143__auto__.call(null);
(statearr_31804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___31805);

return statearr_31804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto___31805,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16142__auto___31964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto___31964,out){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto___31964,out){
return (function (state_31934){
var state_val_31935 = (state_31934[(1)]);
if((state_val_31935 === (7))){
var inst_31930 = (state_31934[(2)]);
var state_31934__$1 = state_31934;
var statearr_31936_31965 = state_31934__$1;
(statearr_31936_31965[(2)] = inst_31930);

(statearr_31936_31965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (1))){
var inst_31893 = [];
var inst_31894 = inst_31893;
var inst_31895 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31934__$1 = (function (){var statearr_31937 = state_31934;
(statearr_31937[(7)] = inst_31894);

(statearr_31937[(8)] = inst_31895);

return statearr_31937;
})();
var statearr_31938_31966 = state_31934__$1;
(statearr_31938_31966[(2)] = null);

(statearr_31938_31966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (4))){
var inst_31898 = (state_31934[(9)]);
var inst_31898__$1 = (state_31934[(2)]);
var inst_31899 = (inst_31898__$1 == null);
var inst_31900 = cljs.core.not.call(null,inst_31899);
var state_31934__$1 = (function (){var statearr_31939 = state_31934;
(statearr_31939[(9)] = inst_31898__$1);

return statearr_31939;
})();
if(inst_31900){
var statearr_31940_31967 = state_31934__$1;
(statearr_31940_31967[(1)] = (5));

} else {
var statearr_31941_31968 = state_31934__$1;
(statearr_31941_31968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (15))){
var inst_31924 = (state_31934[(2)]);
var state_31934__$1 = state_31934;
var statearr_31942_31969 = state_31934__$1;
(statearr_31942_31969[(2)] = inst_31924);

(statearr_31942_31969[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (13))){
var state_31934__$1 = state_31934;
var statearr_31943_31970 = state_31934__$1;
(statearr_31943_31970[(2)] = null);

(statearr_31943_31970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (6))){
var inst_31894 = (state_31934[(7)]);
var inst_31919 = inst_31894.length;
var inst_31920 = (inst_31919 > (0));
var state_31934__$1 = state_31934;
if(cljs.core.truth_(inst_31920)){
var statearr_31944_31971 = state_31934__$1;
(statearr_31944_31971[(1)] = (12));

} else {
var statearr_31945_31972 = state_31934__$1;
(statearr_31945_31972[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (3))){
var inst_31932 = (state_31934[(2)]);
var state_31934__$1 = state_31934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31934__$1,inst_31932);
} else {
if((state_val_31935 === (12))){
var inst_31894 = (state_31934[(7)]);
var inst_31922 = cljs.core.vec.call(null,inst_31894);
var state_31934__$1 = state_31934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31934__$1,(15),out,inst_31922);
} else {
if((state_val_31935 === (2))){
var state_31934__$1 = state_31934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31934__$1,(4),ch);
} else {
if((state_val_31935 === (11))){
var inst_31898 = (state_31934[(9)]);
var inst_31902 = (state_31934[(10)]);
var inst_31912 = (state_31934[(2)]);
var inst_31913 = [];
var inst_31914 = inst_31913.push(inst_31898);
var inst_31894 = inst_31913;
var inst_31895 = inst_31902;
var state_31934__$1 = (function (){var statearr_31946 = state_31934;
(statearr_31946[(11)] = inst_31912);

(statearr_31946[(7)] = inst_31894);

(statearr_31946[(12)] = inst_31914);

(statearr_31946[(8)] = inst_31895);

return statearr_31946;
})();
var statearr_31947_31973 = state_31934__$1;
(statearr_31947_31973[(2)] = null);

(statearr_31947_31973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (9))){
var inst_31894 = (state_31934[(7)]);
var inst_31910 = cljs.core.vec.call(null,inst_31894);
var state_31934__$1 = state_31934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31934__$1,(11),out,inst_31910);
} else {
if((state_val_31935 === (5))){
var inst_31898 = (state_31934[(9)]);
var inst_31902 = (state_31934[(10)]);
var inst_31895 = (state_31934[(8)]);
var inst_31902__$1 = f.call(null,inst_31898);
var inst_31903 = cljs.core._EQ_.call(null,inst_31902__$1,inst_31895);
var inst_31904 = cljs.core.keyword_identical_QMARK_.call(null,inst_31895,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31905 = (inst_31903) || (inst_31904);
var state_31934__$1 = (function (){var statearr_31948 = state_31934;
(statearr_31948[(10)] = inst_31902__$1);

return statearr_31948;
})();
if(cljs.core.truth_(inst_31905)){
var statearr_31949_31974 = state_31934__$1;
(statearr_31949_31974[(1)] = (8));

} else {
var statearr_31950_31975 = state_31934__$1;
(statearr_31950_31975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (14))){
var inst_31927 = (state_31934[(2)]);
var inst_31928 = cljs.core.async.close_BANG_.call(null,out);
var state_31934__$1 = (function (){var statearr_31952 = state_31934;
(statearr_31952[(13)] = inst_31927);

return statearr_31952;
})();
var statearr_31953_31976 = state_31934__$1;
(statearr_31953_31976[(2)] = inst_31928);

(statearr_31953_31976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (10))){
var inst_31917 = (state_31934[(2)]);
var state_31934__$1 = state_31934;
var statearr_31954_31977 = state_31934__$1;
(statearr_31954_31977[(2)] = inst_31917);

(statearr_31954_31977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31935 === (8))){
var inst_31898 = (state_31934[(9)]);
var inst_31902 = (state_31934[(10)]);
var inst_31894 = (state_31934[(7)]);
var inst_31907 = inst_31894.push(inst_31898);
var tmp31951 = inst_31894;
var inst_31894__$1 = tmp31951;
var inst_31895 = inst_31902;
var state_31934__$1 = (function (){var statearr_31955 = state_31934;
(statearr_31955[(14)] = inst_31907);

(statearr_31955[(7)] = inst_31894__$1);

(statearr_31955[(8)] = inst_31895);

return statearr_31955;
})();
var statearr_31956_31978 = state_31934__$1;
(statearr_31956_31978[(2)] = null);

(statearr_31956_31978[(1)] = (2));


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
});})(c__16142__auto___31964,out))
;
return ((function (switch__16086__auto__,c__16142__auto___31964,out){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_31960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31960[(0)] = state_machine__16087__auto__);

(statearr_31960[(1)] = (1));

return statearr_31960;
});
var state_machine__16087__auto____1 = (function (state_31934){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_31934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e31961){if((e31961 instanceof Object)){
var ex__16090__auto__ = e31961;
var statearr_31962_31979 = state_31934;
(statearr_31962_31979[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31980 = state_31934;
state_31934 = G__31980;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_31934){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_31934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto___31964,out))
})();
var state__16144__auto__ = (function (){var statearr_31963 = f__16143__auto__.call(null);
(statearr_31963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto___31964);

return statearr_31963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto___31964,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1424021764383