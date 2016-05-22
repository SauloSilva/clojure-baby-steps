// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9773_9787 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9774_9788 = null;
var count__9775_9789 = (0);
var i__9776_9790 = (0);
while(true){
if((i__9776_9790 < count__9775_9789)){
var f_9791 = cljs.core._nth.call(null,chunk__9774_9788,i__9776_9790);
cljs.core.println.call(null,"  ",f_9791);

var G__9792 = seq__9773_9787;
var G__9793 = chunk__9774_9788;
var G__9794 = count__9775_9789;
var G__9795 = (i__9776_9790 + (1));
seq__9773_9787 = G__9792;
chunk__9774_9788 = G__9793;
count__9775_9789 = G__9794;
i__9776_9790 = G__9795;
continue;
} else {
var temp__4425__auto___9796 = cljs.core.seq.call(null,seq__9773_9787);
if(temp__4425__auto___9796){
var seq__9773_9797__$1 = temp__4425__auto___9796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9773_9797__$1)){
var c__7557__auto___9798 = cljs.core.chunk_first.call(null,seq__9773_9797__$1);
var G__9799 = cljs.core.chunk_rest.call(null,seq__9773_9797__$1);
var G__9800 = c__7557__auto___9798;
var G__9801 = cljs.core.count.call(null,c__7557__auto___9798);
var G__9802 = (0);
seq__9773_9787 = G__9799;
chunk__9774_9788 = G__9800;
count__9775_9789 = G__9801;
i__9776_9790 = G__9802;
continue;
} else {
var f_9803 = cljs.core.first.call(null,seq__9773_9797__$1);
cljs.core.println.call(null,"  ",f_9803);

var G__9804 = cljs.core.next.call(null,seq__9773_9797__$1);
var G__9805 = null;
var G__9806 = (0);
var G__9807 = (0);
seq__9773_9787 = G__9804;
chunk__9774_9788 = G__9805;
count__9775_9789 = G__9806;
i__9776_9790 = G__9807;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9808 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6746__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6746__auto__)){
return or__6746__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9808);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9808)))?cljs.core.second.call(null,arglists_9808):arglists_9808));
}
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9777 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9778 = null;
var count__9779 = (0);
var i__9780 = (0);
while(true){
if((i__9780 < count__9779)){
var vec__9781 = cljs.core._nth.call(null,chunk__9778,i__9780);
var name = cljs.core.nth.call(null,vec__9781,(0),null);
var map__9782 = cljs.core.nth.call(null,vec__9781,(1),null);
var map__9782__$1 = ((((!((map__9782 == null)))?((((map__9782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9782):map__9782);
var doc = cljs.core.get.call(null,map__9782__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9782__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9809 = seq__9777;
var G__9810 = chunk__9778;
var G__9811 = count__9779;
var G__9812 = (i__9780 + (1));
seq__9777 = G__9809;
chunk__9778 = G__9810;
count__9779 = G__9811;
i__9780 = G__9812;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9777);
if(temp__4425__auto__){
var seq__9777__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9777__$1)){
var c__7557__auto__ = cljs.core.chunk_first.call(null,seq__9777__$1);
var G__9813 = cljs.core.chunk_rest.call(null,seq__9777__$1);
var G__9814 = c__7557__auto__;
var G__9815 = cljs.core.count.call(null,c__7557__auto__);
var G__9816 = (0);
seq__9777 = G__9813;
chunk__9778 = G__9814;
count__9779 = G__9815;
i__9780 = G__9816;
continue;
} else {
var vec__9784 = cljs.core.first.call(null,seq__9777__$1);
var name = cljs.core.nth.call(null,vec__9784,(0),null);
var map__9785 = cljs.core.nth.call(null,vec__9784,(1),null);
var map__9785__$1 = ((((!((map__9785 == null)))?((((map__9785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9785):map__9785);
var doc = cljs.core.get.call(null,map__9785__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9785__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9817 = cljs.core.next.call(null,seq__9777__$1);
var G__9818 = null;
var G__9819 = (0);
var G__9820 = (0);
seq__9777 = G__9817;
chunk__9778 = G__9818;
count__9779 = G__9819;
i__9780 = G__9820;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map