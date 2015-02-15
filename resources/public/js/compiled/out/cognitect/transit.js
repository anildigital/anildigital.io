// Compiled by ClojureScript 0.0-2760 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__18845_18849 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__18846_18850 = null;
var count__18847_18851 = (0);
var i__18848_18852 = (0);
while(true){
if((i__18848_18852 < count__18847_18851)){
var k_18853 = cljs.core._nth.call(null,chunk__18846_18850,i__18848_18852);
var v_18854 = (b[k_18853]);
(a[k_18853] = v_18854);

var G__18855 = seq__18845_18849;
var G__18856 = chunk__18846_18850;
var G__18857 = count__18847_18851;
var G__18858 = (i__18848_18852 + (1));
seq__18845_18849 = G__18855;
chunk__18846_18850 = G__18856;
count__18847_18851 = G__18857;
i__18848_18852 = G__18858;
continue;
} else {
var temp__4126__auto___18859 = cljs.core.seq.call(null,seq__18845_18849);
if(temp__4126__auto___18859){
var seq__18845_18860__$1 = temp__4126__auto___18859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18845_18860__$1)){
var c__13506__auto___18861 = cljs.core.chunk_first.call(null,seq__18845_18860__$1);
var G__18862 = cljs.core.chunk_rest.call(null,seq__18845_18860__$1);
var G__18863 = c__13506__auto___18861;
var G__18864 = cljs.core.count.call(null,c__13506__auto___18861);
var G__18865 = (0);
seq__18845_18849 = G__18862;
chunk__18846_18850 = G__18863;
count__18847_18851 = G__18864;
i__18848_18852 = G__18865;
continue;
} else {
var k_18866 = cljs.core.first.call(null,seq__18845_18860__$1);
var v_18867 = (b[k_18866]);
(a[k_18866] = v_18867);

var G__18868 = cljs.core.next.call(null,seq__18845_18860__$1);
var G__18869 = null;
var G__18870 = (0);
var G__18871 = (0);
seq__18845_18849 = G__18868;
chunk__18846_18850 = G__18869;
count__18847_18851 = G__18870;
i__18848_18852 = G__18871;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__18872 = (i + (2));
var G__18873 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__18872;
ret = G__18873;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18874_18878 = cljs.core.seq.call(null,v);
var chunk__18875_18879 = null;
var count__18876_18880 = (0);
var i__18877_18881 = (0);
while(true){
if((i__18877_18881 < count__18876_18880)){
var x_18882 = cljs.core._nth.call(null,chunk__18875_18879,i__18877_18881);
ret.push(x_18882);

var G__18883 = seq__18874_18878;
var G__18884 = chunk__18875_18879;
var G__18885 = count__18876_18880;
var G__18886 = (i__18877_18881 + (1));
seq__18874_18878 = G__18883;
chunk__18875_18879 = G__18884;
count__18876_18880 = G__18885;
i__18877_18881 = G__18886;
continue;
} else {
var temp__4126__auto___18887 = cljs.core.seq.call(null,seq__18874_18878);
if(temp__4126__auto___18887){
var seq__18874_18888__$1 = temp__4126__auto___18887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18874_18888__$1)){
var c__13506__auto___18889 = cljs.core.chunk_first.call(null,seq__18874_18888__$1);
var G__18890 = cljs.core.chunk_rest.call(null,seq__18874_18888__$1);
var G__18891 = c__13506__auto___18889;
var G__18892 = cljs.core.count.call(null,c__13506__auto___18889);
var G__18893 = (0);
seq__18874_18878 = G__18890;
chunk__18875_18879 = G__18891;
count__18876_18880 = G__18892;
i__18877_18881 = G__18893;
continue;
} else {
var x_18894 = cljs.core.first.call(null,seq__18874_18888__$1);
ret.push(x_18894);

var G__18895 = cljs.core.next.call(null,seq__18874_18888__$1);
var G__18896 = null;
var G__18897 = (0);
var G__18898 = (0);
seq__18874_18878 = G__18895;
chunk__18875_18879 = G__18896;
count__18876_18880 = G__18897;
i__18877_18881 = G__18898;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18899_18903 = cljs.core.seq.call(null,v);
var chunk__18900_18904 = null;
var count__18901_18905 = (0);
var i__18902_18906 = (0);
while(true){
if((i__18902_18906 < count__18901_18905)){
var x_18907 = cljs.core._nth.call(null,chunk__18900_18904,i__18902_18906);
ret.push(x_18907);

var G__18908 = seq__18899_18903;
var G__18909 = chunk__18900_18904;
var G__18910 = count__18901_18905;
var G__18911 = (i__18902_18906 + (1));
seq__18899_18903 = G__18908;
chunk__18900_18904 = G__18909;
count__18901_18905 = G__18910;
i__18902_18906 = G__18911;
continue;
} else {
var temp__4126__auto___18912 = cljs.core.seq.call(null,seq__18899_18903);
if(temp__4126__auto___18912){
var seq__18899_18913__$1 = temp__4126__auto___18912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18899_18913__$1)){
var c__13506__auto___18914 = cljs.core.chunk_first.call(null,seq__18899_18913__$1);
var G__18915 = cljs.core.chunk_rest.call(null,seq__18899_18913__$1);
var G__18916 = c__13506__auto___18914;
var G__18917 = cljs.core.count.call(null,c__13506__auto___18914);
var G__18918 = (0);
seq__18899_18903 = G__18915;
chunk__18900_18904 = G__18916;
count__18901_18905 = G__18917;
i__18902_18906 = G__18918;
continue;
} else {
var x_18919 = cljs.core.first.call(null,seq__18899_18913__$1);
ret.push(x_18919);

var G__18920 = cljs.core.next.call(null,seq__18899_18913__$1);
var G__18921 = null;
var G__18922 = (0);
var G__18923 = (0);
seq__18899_18903 = G__18920;
chunk__18900_18904 = G__18921;
count__18901_18905 = G__18922;
i__18902_18906 = G__18923;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18924_18928 = cljs.core.seq.call(null,v);
var chunk__18925_18929 = null;
var count__18926_18930 = (0);
var i__18927_18931 = (0);
while(true){
if((i__18927_18931 < count__18926_18930)){
var x_18932 = cljs.core._nth.call(null,chunk__18925_18929,i__18927_18931);
ret.push(x_18932);

var G__18933 = seq__18924_18928;
var G__18934 = chunk__18925_18929;
var G__18935 = count__18926_18930;
var G__18936 = (i__18927_18931 + (1));
seq__18924_18928 = G__18933;
chunk__18925_18929 = G__18934;
count__18926_18930 = G__18935;
i__18927_18931 = G__18936;
continue;
} else {
var temp__4126__auto___18937 = cljs.core.seq.call(null,seq__18924_18928);
if(temp__4126__auto___18937){
var seq__18924_18938__$1 = temp__4126__auto___18937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18924_18938__$1)){
var c__13506__auto___18939 = cljs.core.chunk_first.call(null,seq__18924_18938__$1);
var G__18940 = cljs.core.chunk_rest.call(null,seq__18924_18938__$1);
var G__18941 = c__13506__auto___18939;
var G__18942 = cljs.core.count.call(null,c__13506__auto___18939);
var G__18943 = (0);
seq__18924_18928 = G__18940;
chunk__18925_18929 = G__18941;
count__18926_18930 = G__18942;
i__18927_18931 = G__18943;
continue;
} else {
var x_18944 = cljs.core.first.call(null,seq__18924_18938__$1);
ret.push(x_18944);

var G__18945 = cljs.core.next.call(null,seq__18924_18938__$1);
var G__18946 = null;
var G__18947 = (0);
var G__18948 = (0);
seq__18924_18928 = G__18945;
chunk__18925_18929 = G__18946;
count__18926_18930 = G__18947;
i__18927_18931 = G__18948;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a map of
* type constructors to handler instances.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x18958 = cljs.core.clone.call(null,handlers);
x18958.forEach = ((function (x18958,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__18959 = cljs.core.seq.call(null,coll);
var chunk__18960 = null;
var count__18961 = (0);
var i__18962 = (0);
while(true){
if((i__18962 < count__18961)){
var vec__18963 = cljs.core._nth.call(null,chunk__18960,i__18962);
var k = cljs.core.nth.call(null,vec__18963,(0),null);
var v = cljs.core.nth.call(null,vec__18963,(1),null);
f.call(null,v,k);

var G__18965 = seq__18959;
var G__18966 = chunk__18960;
var G__18967 = count__18961;
var G__18968 = (i__18962 + (1));
seq__18959 = G__18965;
chunk__18960 = G__18966;
count__18961 = G__18967;
i__18962 = G__18968;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__18959);
if(temp__4126__auto__){
var seq__18959__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18959__$1)){
var c__13506__auto__ = cljs.core.chunk_first.call(null,seq__18959__$1);
var G__18969 = cljs.core.chunk_rest.call(null,seq__18959__$1);
var G__18970 = c__13506__auto__;
var G__18971 = cljs.core.count.call(null,c__13506__auto__);
var G__18972 = (0);
seq__18959 = G__18969;
chunk__18960 = G__18970;
count__18961 = G__18971;
i__18962 = G__18972;
continue;
} else {
var vec__18964 = cljs.core.first.call(null,seq__18959__$1);
var k = cljs.core.nth.call(null,vec__18964,(0),null);
var v = cljs.core.nth.call(null,vec__18964,(1),null);
f.call(null,v,k);

var G__18973 = cljs.core.next.call(null,seq__18959__$1);
var G__18974 = null;
var G__18975 = (0);
var G__18976 = (0);
seq__18959 = G__18973;
chunk__18960 = G__18974;
count__18961 = G__18975;
i__18962 = G__18976;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18958,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x18958;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__18957 = obj;
G__18957.push(kfn.call(null,k),vfn.call(null,v));

return G__18957;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t18980 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t18980 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta18981){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta18981 = meta18981;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t18980.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t18980.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t18980.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t18980.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t18980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18982){
var self__ = this;
var _18982__$1 = this;
return self__.meta18981;
});

cognitect.transit.t18980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18982,meta18981__$1){
var self__ = this;
var _18982__$1 = this;
return (new cognitect.transit.t18980(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta18981__$1));
});

cognitect.transit.t18980.cljs$lang$type = true;

cognitect.transit.t18980.cljs$lang$ctorStr = "cognitect.transit/t18980";

cognitect.transit.t18980.cljs$lang$ctorPrWriter = (function (this__13305__auto__,writer__13306__auto__,opt__13307__auto__){
return cljs.core._write.call(null,writer__13306__auto__,"cognitect.transit/t18980");
});

cognitect.transit.__GT_t18980 = (function __GT_t18980(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta18981){
return (new cognitect.transit.t18980(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta18981));
});

}

return (new cognitect.transit.t18980(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),79,new cljs.core.Keyword(null,"end-line","end-line",1837326455),264,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"line","line",212345235),259,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/anil/Code/clojure/clojurescript/anildigital-io/resources/public/js/compiled/out/cognitect/transit.cljs"], null)));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big integer from a string.
*/
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big integer value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1424026960413