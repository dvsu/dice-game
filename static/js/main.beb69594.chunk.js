(this["webpackJsonpdice-game"]=this["webpackJsonpdice-game"]||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){},15:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),s=i(8),r=i.n(s),o=(i(13),i(14),i(2)),l=i(3),a=i(4),u=i(6),d=i(5),h=(i(15),i(16),i(0)),b=function(e){Object(u.a)(i,e);var t=Object(d.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(h.jsx)("div",{class:this.props.rolling?"shake-chunk shake-constant":"",children:Object(h.jsx)("i",{class:"Dice fas fa-dice".concat(""===this.props.diceNumber?"":"-").concat(this.props.diceNumber)})})}}]),i}(n.Component),j=(i(18),function(e){Object(u.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={diceOne:"one",diceTwo:"two",diceThree:"three",isRolling:!1},n.roll=n.roll.bind(Object(a.a)(n)),n}return Object(l.a)(i,[{key:"generateDiceNumber",value:function(){return this.props.diceNumber[Math.floor(Math.random()*this.props.diceNumber.length)]}},{key:"roll",value:function(e){var t=this;this.setState({diceOne:"",diceTwo:"",diceThree:"",isRolling:!0}),setTimeout((function(){t.setState({diceOne:t.generateDiceNumber(),diceTwo:t.generateDiceNumber(),diceThree:t.generateDiceNumber(),isRolling:!1})}),1e3)}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[this.state.isRolling?Object(h.jsx)("div",{className:"RollDice",children:Object(h.jsx)(b,{diceNumber:this.state.diceTwo,rolling:this.state.isRolling})}):Object(h.jsxs)("div",{className:"RollDice",children:[Object(h.jsx)(b,{diceNumber:this.state.diceOne,rolling:this.state.isRolling}),Object(h.jsx)(b,{diceNumber:this.state.diceTwo,rolling:this.state.isRolling}),Object(h.jsx)(b,{diceNumber:this.state.diceThree,rolling:this.state.isRolling})]}),Object(h.jsx)("button",{className:"RollDice-button",disabled:this.state.isRolling,onClick:this.roll,children:this.state.isRolling?"Rolling...":"Roll Dice!"})]})}}]),i}(n.Component));j.defaultProps={diceNumber:["one","two","three","four","five","six"]};var g=j;var O=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Dice Game"}),Object(h.jsx)(g,{})]})},m=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,20)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),m()}},[[19,1,2]]]);
//# sourceMappingURL=main.beb69594.chunk.js.map