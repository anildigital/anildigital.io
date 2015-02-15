// Compiled by ClojureScript 0.0-2760 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28152_28156 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28153_28157 = null;
var count__28154_28158 = (0);
var i__28155_28159 = (0);
while(true){
if((i__28155_28159 < count__28154_28158)){
var f_28160 = cljs.core._nth.call(null,chunk__28153_28157,i__28155_28159);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_28160);

var G__28161 = seq__28152_28156;
var G__28162 = chunk__28153_28157;
var G__28163 = count__28154_28158;
var G__28164 = (i__28155_28159 + (1));
seq__28152_28156 = G__28161;
chunk__28153_28157 = G__28162;
count__28154_28158 = G__28163;
i__28155_28159 = G__28164;
continue;
} else {
var temp__4126__auto___28165 = cljs.core.seq.call(null,seq__28152_28156);
if(temp__4126__auto___28165){
var seq__28152_28166__$1 = temp__4126__auto___28165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28152_28166__$1)){
var c__13505__auto___28167 = cljs.core.chunk_first.call(null,seq__28152_28166__$1);
var G__28168 = cljs.core.chunk_rest.call(null,seq__28152_28166__$1);
var G__28169 = c__13505__auto___28167;
var G__28170 = cljs.core.count.call(null,c__13505__auto___28167);
var G__28171 = (0);
seq__28152_28156 = G__28168;
chunk__28153_28157 = G__28169;
count__28154_28158 = G__28170;
i__28155_28159 = G__28171;
continue;
} else {
var f_28172 = cljs.core.first.call(null,seq__28152_28166__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_28172);

var G__28173 = cljs.core.next.call(null,seq__28152_28166__$1);
var G__28174 = null;
var G__28175 = (0);
var G__28176 = (0);
seq__28152_28156 = G__28173;
chunk__28153_28157 = G__28174;
count__28154_28158 = G__28175;
i__28155_28159 = G__28176;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map?rel=1424021762367