// Compiled by ClojureScript 0.0-2760 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27916_27924 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27917_27925 = null;
var count__27918_27926 = (0);
var i__27919_27927 = (0);
while(true){
if((i__27919_27927 < count__27918_27926)){
var k_27928 = cljs.core._nth.call(null,chunk__27917_27925,i__27919_27927);
e.setAttribute(cljs.core.name.call(null,k_27928),cljs.core.get.call(null,attrs,k_27928));

var G__27929 = seq__27916_27924;
var G__27930 = chunk__27917_27925;
var G__27931 = count__27918_27926;
var G__27932 = (i__27919_27927 + (1));
seq__27916_27924 = G__27929;
chunk__27917_27925 = G__27930;
count__27918_27926 = G__27931;
i__27919_27927 = G__27932;
continue;
} else {
var temp__4126__auto___27933 = cljs.core.seq.call(null,seq__27916_27924);
if(temp__4126__auto___27933){
var seq__27916_27934__$1 = temp__4126__auto___27933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27916_27934__$1)){
var c__13505__auto___27935 = cljs.core.chunk_first.call(null,seq__27916_27934__$1);
var G__27936 = cljs.core.chunk_rest.call(null,seq__27916_27934__$1);
var G__27937 = c__13505__auto___27935;
var G__27938 = cljs.core.count.call(null,c__13505__auto___27935);
var G__27939 = (0);
seq__27916_27924 = G__27936;
chunk__27917_27925 = G__27937;
count__27918_27926 = G__27938;
i__27919_27927 = G__27939;
continue;
} else {
var k_27940 = cljs.core.first.call(null,seq__27916_27934__$1);
e.setAttribute(cljs.core.name.call(null,k_27940),cljs.core.get.call(null,attrs,k_27940));

var G__27941 = cljs.core.next.call(null,seq__27916_27934__$1);
var G__27942 = null;
var G__27943 = (0);
var G__27944 = (0);
seq__27916_27924 = G__27941;
chunk__27917_27925 = G__27942;
count__27918_27926 = G__27943;
i__27919_27927 = G__27944;
continue;
}
} else {
}
}
break;
}

var seq__27920_27945 = cljs.core.seq.call(null,children);
var chunk__27921_27946 = null;
var count__27922_27947 = (0);
var i__27923_27948 = (0);
while(true){
if((i__27923_27948 < count__27922_27947)){
var ch_27949 = cljs.core._nth.call(null,chunk__27921_27946,i__27923_27948);
e.appendChild(ch_27949);

var G__27950 = seq__27920_27945;
var G__27951 = chunk__27921_27946;
var G__27952 = count__27922_27947;
var G__27953 = (i__27923_27948 + (1));
seq__27920_27945 = G__27950;
chunk__27921_27946 = G__27951;
count__27922_27947 = G__27952;
i__27923_27948 = G__27953;
continue;
} else {
var temp__4126__auto___27954 = cljs.core.seq.call(null,seq__27920_27945);
if(temp__4126__auto___27954){
var seq__27920_27955__$1 = temp__4126__auto___27954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27920_27955__$1)){
var c__13505__auto___27956 = cljs.core.chunk_first.call(null,seq__27920_27955__$1);
var G__27957 = cljs.core.chunk_rest.call(null,seq__27920_27955__$1);
var G__27958 = c__13505__auto___27956;
var G__27959 = cljs.core.count.call(null,c__13505__auto___27956);
var G__27960 = (0);
seq__27920_27945 = G__27957;
chunk__27921_27946 = G__27958;
count__27922_27947 = G__27959;
i__27923_27948 = G__27960;
continue;
} else {
var ch_27961 = cljs.core.first.call(null,seq__27920_27955__$1);
e.appendChild(ch_27961);

var G__27962 = cljs.core.next.call(null,seq__27920_27955__$1);
var G__27963 = null;
var G__27964 = (0);
var G__27965 = (0);
seq__27920_27945 = G__27962;
chunk__27921_27946 = G__27963;
count__27922_27947 = G__27964;
i__27923_27948 = G__27965;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__27966__i = 0, G__27966__a = new Array(arguments.length -  2);
while (G__27966__i < G__27966__a.length) {G__27966__a[G__27966__i] = arguments[G__27966__i + 2]; ++G__27966__i;}
  children = new cljs.core.IndexedSeq(G__27966__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__27967){
var t = cljs.core.first(arglist__27967);
arglist__27967 = cljs.core.next(arglist__27967);
var attrs = cljs.core.first(arglist__27967);
var children = cljs.core.rest(arglist__27967);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__13615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__13616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__13617__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__13618__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__13619__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__13615__auto__,prefer_table__13616__auto__,method_cache__13617__auto__,cached_hierarchy__13618__auto__,hierarchy__13619__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__13615__auto__,prefer_table__13616__auto__,method_cache__13617__auto__,cached_hierarchy__13618__auto__,hierarchy__13619__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__13619__auto__,method_table__13615__auto__,prefer_table__13616__auto__,method_cache__13617__auto__,cached_hierarchy__13618__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

return document.body.appendChild(el);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
}
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__27968,st_map){
var map__27972 = p__27968;
var map__27972__$1 = ((cljs.core.seq_QMARK_.call(null,map__27972))?cljs.core.apply.call(null,cljs.core.hash_map,map__27972):map__27972);
var container_el = cljs.core.get.call(null,map__27972__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27972,map__27972__$1,container_el){
return (function (p__27973){
var vec__27974 = p__27973;
var k = cljs.core.nth.call(null,vec__27974,(0),null);
var v = cljs.core.nth.call(null,vec__27974,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27972,map__27972__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__27975,dom_str){
var map__27977 = p__27975;
var map__27977__$1 = ((cljs.core.seq_QMARK_.call(null,map__27977))?cljs.core.apply.call(null,cljs.core.hash_map,map__27977):map__27977);
var c = map__27977__$1;
var content_area_el = cljs.core.get.call(null,map__27977__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__27978){
var map__27980 = p__27978;
var map__27980__$1 = ((cljs.core.seq_QMARK_.call(null,map__27980))?cljs.core.apply.call(null,cljs.core.hash_map,map__27980):map__27980);
var content_area_el = cljs.core.get.call(null,map__27980__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__16142__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto__){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto__){
return (function (state_28022){
var state_val_28023 = (state_28022[(1)]);
if((state_val_28023 === (2))){
var inst_28007 = (state_28022[(7)]);
var inst_28016 = (state_28022[(2)]);
var inst_28017 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28018 = ["auto"];
var inst_28019 = cljs.core.PersistentHashMap.fromArrays(inst_28017,inst_28018);
var inst_28020 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28007,inst_28019);
var state_28022__$1 = (function (){var statearr_28024 = state_28022;
(statearr_28024[(8)] = inst_28016);

return statearr_28024;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28022__$1,inst_28020);
} else {
if((state_val_28023 === (1))){
var inst_28007 = (state_28022[(7)]);
var inst_28007__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28008 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28009 = ["10px","10px","100%","68px","1.0"];
var inst_28010 = cljs.core.PersistentHashMap.fromArrays(inst_28008,inst_28009);
var inst_28011 = cljs.core.merge.call(null,inst_28010,style);
var inst_28012 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28007__$1,inst_28011);
var inst_28013 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28007__$1,msg);
var inst_28014 = cljs.core.async.timeout.call(null,(300));
var state_28022__$1 = (function (){var statearr_28025 = state_28022;
(statearr_28025[(7)] = inst_28007__$1);

(statearr_28025[(9)] = inst_28013);

(statearr_28025[(10)] = inst_28012);

return statearr_28025;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28022__$1,(2),inst_28014);
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
var statearr_28029 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28029[(0)] = state_machine__16087__auto__);

(statearr_28029[(1)] = (1));

return statearr_28029;
});
var state_machine__16087__auto____1 = (function (state_28022){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_28022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e28030){if((e28030 instanceof Object)){
var ex__16090__auto__ = e28030;
var statearr_28031_28033 = state_28022;
(statearr_28031_28033[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28034 = state_28022;
state_28022 = G__28034;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_28022){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_28022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto__))
})();
var state__16144__auto__ = (function (){var statearr_28032 = f__16143__auto__.call(null);
(statearr_28032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto__);

return statearr_28032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto__))
);

return c__16142__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__28036 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__28036,(0),null);
var ln = cljs.core.nth.call(null,vec__28036,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__28039 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__28039,(0),null);
var file_line = cljs.core.nth.call(null,vec__28039,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28039,file_name,file_line){
return (function (p1__28037_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__28037_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__28039,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__28041 = figwheel.client.heads_up.ensure_container.call(null);
var map__28041__$1 = ((cljs.core.seq_QMARK_.call(null,map__28041))?cljs.core.apply.call(null,cljs.core.hash_map,map__28041):map__28041);
var content_area_el = cljs.core.get.call(null,map__28041__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__16142__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto__){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto__){
return (function (state_28088){
var state_val_28089 = (state_28088[(1)]);
if((state_val_28089 === (3))){
var inst_28071 = (state_28088[(7)]);
var inst_28085 = (state_28088[(2)]);
var inst_28086 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28071,"");
var state_28088__$1 = (function (){var statearr_28090 = state_28088;
(statearr_28090[(8)] = inst_28085);

return statearr_28090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28088__$1,inst_28086);
} else {
if((state_val_28089 === (2))){
var inst_28071 = (state_28088[(7)]);
var inst_28078 = (state_28088[(2)]);
var inst_28079 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28080 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28081 = cljs.core.PersistentHashMap.fromArrays(inst_28079,inst_28080);
var inst_28082 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28071,inst_28081);
var inst_28083 = cljs.core.async.timeout.call(null,(200));
var state_28088__$1 = (function (){var statearr_28091 = state_28088;
(statearr_28091[(9)] = inst_28082);

(statearr_28091[(10)] = inst_28078);

return statearr_28091;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28088__$1,(3),inst_28083);
} else {
if((state_val_28089 === (1))){
var inst_28071 = (state_28088[(7)]);
var inst_28071__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28072 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28073 = ["0.0"];
var inst_28074 = cljs.core.PersistentHashMap.fromArrays(inst_28072,inst_28073);
var inst_28075 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28071__$1,inst_28074);
var inst_28076 = cljs.core.async.timeout.call(null,(300));
var state_28088__$1 = (function (){var statearr_28092 = state_28088;
(statearr_28092[(7)] = inst_28071__$1);

(statearr_28092[(11)] = inst_28075);

return statearr_28092;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28088__$1,(2),inst_28076);
} else {
return null;
}
}
}
});})(c__16142__auto__))
;
return ((function (switch__16086__auto__,c__16142__auto__){
return (function() {
var state_machine__16087__auto__ = null;
var state_machine__16087__auto____0 = (function (){
var statearr_28096 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28096[(0)] = state_machine__16087__auto__);

(statearr_28096[(1)] = (1));

return statearr_28096;
});
var state_machine__16087__auto____1 = (function (state_28088){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_28088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e28097){if((e28097 instanceof Object)){
var ex__16090__auto__ = e28097;
var statearr_28098_28100 = state_28088;
(statearr_28098_28100[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28101 = state_28088;
state_28088 = G__28101;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_28088){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_28088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto__))
})();
var state__16144__auto__ = (function (){var statearr_28099 = f__16143__auto__.call(null);
(statearr_28099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto__);

return statearr_28099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto__))
);

return c__16142__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__16142__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16142__auto__){
return (function (){
var f__16143__auto__ = (function (){var switch__16086__auto__ = ((function (c__16142__auto__){
return (function (state_28133){
var state_val_28134 = (state_28133[(1)]);
if((state_val_28134 === (4))){
var inst_28131 = (state_28133[(2)]);
var state_28133__$1 = state_28133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28133__$1,inst_28131);
} else {
if((state_val_28134 === (3))){
var inst_28128 = (state_28133[(2)]);
var inst_28129 = figwheel.client.heads_up.clear.call(null);
var state_28133__$1 = (function (){var statearr_28135 = state_28133;
(statearr_28135[(7)] = inst_28128);

return statearr_28135;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28133__$1,(4),inst_28129);
} else {
if((state_val_28134 === (2))){
var inst_28125 = (state_28133[(2)]);
var inst_28126 = cljs.core.async.timeout.call(null,(400));
var state_28133__$1 = (function (){var statearr_28136 = state_28133;
(statearr_28136[(8)] = inst_28125);

return statearr_28136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28133__$1,(3),inst_28126);
} else {
if((state_val_28134 === (1))){
var inst_28123 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28133__$1 = state_28133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28133__$1,(2),inst_28123);
} else {
return null;
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
var statearr_28140 = [null,null,null,null,null,null,null,null,null];
(statearr_28140[(0)] = state_machine__16087__auto__);

(statearr_28140[(1)] = (1));

return statearr_28140;
});
var state_machine__16087__auto____1 = (function (state_28133){
while(true){
var ret_value__16088__auto__ = (function (){try{while(true){
var result__16089__auto__ = switch__16086__auto__.call(null,state_28133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16089__auto__;
}
break;
}
}catch (e28141){if((e28141 instanceof Object)){
var ex__16090__auto__ = e28141;
var statearr_28142_28144 = state_28133;
(statearr_28142_28144[(5)] = ex__16090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28145 = state_28133;
state_28133 = G__28145;
continue;
} else {
return ret_value__16088__auto__;
}
break;
}
});
state_machine__16087__auto__ = function(state_28133){
switch(arguments.length){
case 0:
return state_machine__16087__auto____0.call(this);
case 1:
return state_machine__16087__auto____1.call(this,state_28133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16087__auto____0;
state_machine__16087__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16087__auto____1;
return state_machine__16087__auto__;
})()
;})(switch__16086__auto__,c__16142__auto__))
})();
var state__16144__auto__ = (function (){var statearr_28143 = f__16143__auto__.call(null);
(statearr_28143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16142__auto__);

return statearr_28143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16144__auto__);
});})(c__16142__auto__))
);

return c__16142__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1424021762323