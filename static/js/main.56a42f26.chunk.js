(this.webpackJsonpsingleplayer=this.webpackJsonpsingleplayer||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},21:function(e,t,n){},23:function(e,t,n){},36:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(13),i=n.n(o),s=(n(21),n(1)),c=n(2),u=n(4),l=n(3),d=n(15),h=n(14),p=n.n(h),m=(n(23),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.onClick,t=this.props.card,n=this.props.hidden;return t||(n=!0),r.createElement("div",{onClick:function(n){return e?e(n,t):null},className:"".concat(n?"truco-card-hidden":""," ").concat(t?"":"truco-card-slot"," ").concat(e?"truco-card-listened":""," ").concat(void 0!==this.props.whitespace&&!0===this.props.whitespace?"truco-card-whitespace":""," truco-card"),style:{color:t?t.suit.suitColor:"black"}},r.createElement("div",{className:"truco-card-top"},r.createElement("span",{className:"truco-card-value"},n?"":t.value.name),r.createElement("span",{className:"truco-card-suit"},n?"":t.suit.icon)),r.createElement("div",{className:"truco-card-bottom"},r.createElement("span",{className:"truco-card-value"},n?"":t.value.name),r.createElement("span",{className:"truco-card-suit"},n?"":t.suit.icon)))}}]),n}(r.Component)),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).handleClick=function(e,t){if(r.props.game.hand.round.isPlayerTurn(r.props.player)&&!r.props.game.isLocked())try{r.props.game.play(r.props.player,t)}catch(e){return void(r.props.notYourTurn&&r.props.notYourTurn())}else r.props.notYourTurn&&r.props.notYourTurn()},r.props.game.addListener("played",(function(e,t){r.props.player===e&&r.forceUpdate()})),r}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return 0===this.props.game.hand.deck.playerCards.get(this.props.player).length?r.createElement("div",{className:"table-player"},r.createElement(m,{card:void 0,hidden:!0,whitespace:!0})):r.createElement("div",{className:"table-player"},this.props.game.hand.deck.playerCards.get(this.props.player).map((function(t){return r.createElement(m,{key:t.toString(),card:t,hidden:e.props.hide,onClick:e.props.hide?void 0:e.handleClick})})))}}]),n}(r.Component),g=n(5),y=function(){function e(t){var n=this;Object(s.a)(this,e),this.cards=void 0,this.turned=void 0,this.playerCards=new Map,this.cards=this.getRandomCards(),this.turned=this.cards[0];var r=1;t.forEach((function(e){n.playerCards.set(e,n.cards.slice(r,r+3)),r+=3}))}return Object(c.a)(e,[{key:"getRandomInt",value:function(e,t){return Math.floor(Math.random()*t)+e}},{key:"getRandomCards",value:function(){for(var e=new Array;e.length!==g.cards.length;){var t=this.getRandomInt(0,g.cards.length-1),n=void 0;do{n=g.cards[t],t===g.cards.length-1?t=0:t++}while(e.includes(n));e.push(n)}return e}}]),e}(),f=n(9),w=n.n(f),k=n(7),b=n.n(k),T=function e(t,n){Object(s.a)(this,e),this.name=void 0,this.color=void 0,this.name=t.toUpperCase(),this.color=n},P=new T("info","white"),E=new T("warning","yellow"),C=new T("debug","green"),O=new T("error","red"),j=new T("game","aqua"),L=new T("you","blue"),N=new T("computer","black"),R=new(function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"game",value:function(e){this.log(j,e)}},{key:"you",value:function(e){this.log(L,e)}},{key:"computer",value:function(e){this.log(N,e)}},{key:"info",value:function(e){this.log(P,e)}},{key:"warning",value:function(e){this.log(E,e)}},{key:"debug",value:function(e){this.log(C,e)}},{key:"error",value:function(e){this.log(O,e)}},{key:"log",value:function(e,t){null===e&&(e=P),null===t&&(t=""),this.emit("log",t,e),console.log(w.a.bold(w.a.keyword(e.color)("[".concat(e.name,"]"))),t)}}]),n}(b.a)),A=function(){function e(t,n,r){Object(s.a)(this,e),this.winner=void 0,this.playedCards=new Map,this.players=void 0,this.currentPlayer=void 0,this.trump=void 0,this.strongestPlayer=void 0,this.draw=!1,this.players=t,this.trump=Object(g.getNextCard)(n),this.currentPlayer=r}return Object(c.a)(e,[{key:"isPlayerTurn",value:function(e){return this.currentPlayer===this.players.indexOf(e)}},{key:"play",value:function(e,t){if(void 0!==this.winner)throw new Error("Round ended");if(this.playedCards.size===this.players.length)throw new Error("All players already played");if(this.playedCards.has(e))throw new Error("You already played in that round");if(!this.isPlayerTurn(e))throw new Error("It's not your turn");this.playedCards.set(e,t),R.game("".concat(e.name," played ").concat(t.toString())),this.currentPlayer===this.players.length-1?this.currentPlayer=0:this.currentPlayer++,this.updateWinner(e,t)}},{key:"updateWinner",value:function(e,t){if(void 0!==this.strongestPlayer){var n=this.playedCards.get(this.strongestPlayer);n.value.power===this.trump.value.power&&(n=new g.Card(Object(g.toTrumpValue)(n.value),n.suit)),t.value.power===this.trump.value.power&&(t=new g.Card(Object(g.toTrumpValue)(t.value),t.suit)),t.value.power<n.value.power&&(this.strongestPlayer=e),n.isTrump()&&t.isTrump()?t.suit.power<n.suit.power&&(this.strongestPlayer=e,this.draw=!1):this.draw=t.value.power===n.value.power,this.playedCards.size===this.players.length&&(R.game(this.draw?"Round draw":"".concat(this.strongestPlayer.name," won round")),this.winner=this.draw?null:this.strongestPlayer)}else this.strongestPlayer=e}}]),e}(),M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e,r,a,o){var i;return Object(s.a)(this,n),(i=t.call(this)).players=void 0,i.rounds=new Array,i.firstPlayer=void 0,i.winner=void 0,i.deck=void 0,i.lastTrucker=void 0,i.isTrucoPending=!1,i.lock=void 0,i.unlock=void 0,i.value=0,i.lock=a,i.unlock=o,i.players=e,i.firstPlayer=r,i.deck=new y(e),i.startNewRound(),i}return Object(c.a)(n,[{key:"startNewRound",value:function(){this.rounds.push(new A(this.players,this.deck.turned,this.firstPlayer)),this.emit("newRound")}},{key:"startNewRoundLater",value:function(){var e=this,t=new W("start new round");return this.lock(t),new Promise((function(n){return setTimeout((function(){e.unlock(t),e.startNewRound(),n()}),2500)}))}},{key:"points",get:function(){return Math.max(this.value,1)}},{key:"truco",value:function(e){if(!this.round.isPlayerTurn(e))throw new Error("It's not your turn");if(this.value>=12)throw new Error("Max truco already reached");if(e===this.lastTrucker)throw new Error("You already asked for truco");R.game("".concat(e.name," trucked")),this.lastTrucker=e,this.isTrucoPending=!0}},{key:"acceptTruco",value:function(e){if(!this.isTrucoPending)throw new Error("There's nothing to accept");if(e===this.lastTrucker)throw new Error("You cannot accept the truco");this.value+=3,this.isTrucoPending=!1,R.game("".concat(e.name," accepted the truco, hand now has ").concat(this.value," point"))}},{key:"declineTruco",value:function(e){if(!this.isTrucoPending)throw new Error("There's nothing to accept");if(e===this.lastTrucker)throw new Error("You cannot accept the truco");this.winner=this.lastTrucker,this.isTrucoPending=!1,R.game("".concat(e.name," declined the truco"))}},{key:"round",get:function(){return this.rounds[this.rounds.length-1]}},{key:"play",value:function(e,t){if(!this.deck.playerCards.get(e).includes(t))throw new Error("Invalid card");if(this.isTrucoPending)throw new Error("There's a pending truco request");try{this.round.play(e,t),this.deck.playerCards.set(e,this.deck.playerCards.get(e).filter((function(e){return e!==t})))}catch(n){throw n}this.updateWinner(),void 0===this.winner&&void 0!==this.round.winner&&(null!==this.round.winner&&(this.firstPlayer=this.players.indexOf(this.round.winner)),this.startNewRoundLater())}},{key:"updateWinner",value:function(){if(1!==this.rounds.length){if(2===this.rounds.length){var e=this.rounds.map((function(e){return e.winner})),t=e[0],n=e[1],r=e.filter((function(e){return null===e})).length;if(2===r)return;return 1===r&&(this.winner=e.find((function(e){return null!==e}))),t===n?void(this.winner=t):void 0}null!==this.round.winner?this.winner=this.round.winner:this.winner=this.rounds[0].winner}}}]),n}(k.EventEmitter),W=function e(t){Object(s.a)(this,e),this.id=void 0,this.id=t},S=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this)).hands=new Array,r.players=void 0,r.firstPlayerIndex=0,r.winner=void 0,r.locks=new Array,r.lock=function(e){r.locks.push(e)},r.unlock=function(e){r.locks=r.locks.filter((function(t){return e!==t}))},r.players=e,r}return Object(c.a)(n,[{key:"isLocked",value:function(){return 0!==this.locks.length}},{key:"getPlayerScore",value:function(e){return this.hands.filter((function(t){return t.winner===e})).map((function(e){return e.points})).reduce((function(e,t){return e+t}),0)}},{key:"startNewHand",value:function(){var e=this;this.hands.push(new M(this.players,this.firstPlayerIndex,this.lock,this.unlock)),this.hand.addListener("newRound",(function(){return e.emit("newRound")})),this.emit("newHand")}},{key:"startNewHandLater",value:function(){var e=this,t=new W("new hand later");return this.lock(t),new Promise((function(n){return setTimeout((function(){e.unlock(t),e.startNewHand(),n()}),2500)}))}},{key:"truco",value:function(e){try{this.hand.truco(e),this.emit("truco",e)}catch(t){throw t}}},{key:"acceptTruco",value:function(e){try{this.hand.acceptTruco(e),this.emit("trucoAccepted",e)}catch(t){throw t}}},{key:"declineTruco",value:function(e){try{this.hand.declineTruco(e),this.updateWinner(),this.emit("trucoDeclined",e)}catch(t){throw t}}},{key:"startGame",value:function(){this.startNewHand()}},{key:"hand",get:function(){return this.hands[this.hands.length-1]}},{key:"updateWinner",value:function(){if(void 0!==this.hand.winner){if(null===this.hand.winner?R.game("Hand draw"):R.game("".concat(this.hand.winner.name," won hand")),this.firstPlayerIndex===this.players.length-1?this.firstPlayerIndex=0:this.firstPlayerIndex++,this.hand.winner&&this.getPlayerScore(this.hand.winner)>=12)return R.game("".concat(this.hand.winner.name," won the game")),this.emit("gameEnded",this.hand.winner),void(this.winner=this.hand.winner);this.startNewHandLater()}}},{key:"play",value:function(e,t){if(this.isLocked())throw console.log(this.locks),new Error("The game is locked");try{this.hand.play(e,t),this.emit("played",e,t)}catch(n){throw n}this.updateWinner()}}]),n}(k.EventEmitter),x=(n(36),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).props.game.addListener("played",(function(e,t){r.forceUpdate()})),r.props.game.addListener("newRound",(function(e,t){r.forceUpdate()})),r}return Object(c.a)(n,[{key:"render",value:function(){return r.createElement(m,{card:this.props.game.hand.round.playedCards.get(this.props.player),hidden:void 0===this.props.game.hand.round.playedCards.get(this.props.player)})}}]),n}(r.Component)),U=n(6),Y=n.n(U),H=function e(t){Object(s.a)(this,e),this.defaultMessage=void 0,this.defaultMessage=t},I=new H("Truco!"),B=new H("Go ahead!"),G=new H("No way"),D=new H("EASY!"),q=new Map;function z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];n.push(e.defaultMessage),q.set(e,n)}function F(e){var t=q.get(e);return void 0===t||0===t.length?e.defaultMessage:t[Math.floor(Math.random()*t.length)]}z(I,"TRUCO!","TRUUCO!","Truco","TRUUUCOOOO!"),z(B,"GO AHEAD!","Go ahead loser!","Throw the braba"),z(G,"No","Nope","NO LOL"),z(D,"That one was EASY","EZ","LOL","That's all? LOL");var J=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).popoverTimeout=new Map,a.priorityElemement=!1,a.handleTrucoResponse=function(e){e?a.props.game.acceptTruco(a.props.game.players[0]):a.props.game.declineTruco(a.props.game.players[0]),a.closePopoverComputer()},a.closePopover=function(e){Y()(e).popover("dispose"),a.priorityElemement=!1},a.popover=function(e,t,n,r,o,i){if(void 0===o&&(o=2e3),void 0===r&&(r=""),!a.priorityElemement){a.closePopover(e),Y()(e).popover({title:r,content:n,html:void 0!==i&&i,placement:t}),Y()(e).popover("show");var s=a.popoverTimeout.get(e);void 0===s&&(s=0),a.popoverTimeout.set(e,++s),o>0?setTimeout((function(){a.popoverTimeout.get(e)===s&&a.closePopover(e)}),o):a.priorityElemement=!0}},a.popoverPlayer=function(e,t,n){a.popover("#player-hand","top",e,t,n)},a.popoverComputer=function(e,t,n){a.popover("#computer-hand","bottom",e,t,n)},a.closePopoverPlayer=function(){a.closePopover("#player-hand")},a.closePopoverComputer=function(){a.closePopover("#computer-hand")},a.popoverHtmlComputer=function(e,t,n){a.popover("#computer-hand","bottom",p.a.renderToString(e),t,n,!0)},a.handleTruco=function(){a.props.game.hand.round.isPlayerTurn(a.props.game.players[0])?a.props.game.hand.lastTrucker!==a.props.game.players[0]?(a.props.game.truco(a.props.game.players[0]),a.popoverPlayer(F(I))):a.popoverComputer("You cant do it now"):a.popoverComputer("Wait for your turn")},a.props.game.addListener("newRound",(function(){a.forceUpdate(),a.props.game.winner||(a.closePopoverComputer(),a.closePopoverPlayer())})),a.props.game.addListener("newHand",(function(){a.props.game.winner||(a.closePopoverComputer(),a.closePopoverPlayer()),a.forceUpdate()})),a.props.game.addListener("truco",(function(e){e!==a.props.game.players[0]&&(a.popoverHtmlComputer(r.createElement("div",{id:"truco-popover"},r.createElement("span",{className:"truco-response",id:"truco-accept"},"Yes")," ",r.createElement("span",{className:"truco-response",id:"truco-decline"},"No")),"Asked for Truco",-1),Y()("#truco-accept").on("click",(function(){return a.handleTrucoResponse(!0)})),Y()("#truco-decline").on("click",(function(){return a.handleTrucoResponse(!1)})))})),a.props.game.addListener("trucoAccepted",(function(e){var t=new W("truco accepted");a.props.game.lock(t),e===a.props.game.players[0]?a.popoverPlayer(F(B)):a.popoverComputer(F(B)),setTimeout((function(){a.props.game.unlock(t),a.forceUpdate()}),1e3)})),a.props.game.addListener("trucoDeclined",(function(e){var t=new W("truco declined");a.props.game.lock(t),e===a.props.game.players[0]?a.popoverPlayer(F(G)):a.popoverComputer(F(G)),setTimeout((function(){a.props.game.unlock(t),a.forceUpdate()}),1e3)})),a.props.game.addListener("gameEnded",(function(e){a.forceUpdate(),e===a.props.game.players[0]?a.popoverPlayer(F(D),void 0,1e4):a.popoverComputer(F(D),void 0,1e4),a.props.game.lock(new W("Game ended"))})),a}return Object(c.a)(n,[{key:"formatRoundStatus",value:function(e,t){return void 0===e.winner?"_":null===e.winner?"-":e.winner===t?"\u2713":"\u2717"}},{key:"render",value:function(){var e=this,t=Object(d.a)(this.props.game.players,2),n=t[0],a=t[1];return r.createElement("div",{className:"table"},r.createElement("div",{id:"game-status"},r.createElement("p",{id:"title"},"Status"),r.createElement("p",{className:"score",id:"you"},"You: ",this.props.game.getPlayerScore(n)),r.createElement("p",{className:"score",id:"him"},"Him: ",this.props.game.getPlayerScore(a)),r.createElement("p",{id:"rounds"},this.props.game.hand.rounds.map((function(t){return"[".concat(e.formatRoundStatus(t,n),"]")})))),r.createElement("div",{id:"turned-card"},r.createElement(m,{card:this.props.game.hand.deck.turned,hidden:!1})),r.createElement("div",{id:"computer-hand"},r.createElement(v,{game:this.props.game,player:a,hide:!0})),r.createElement("div",{id:"played-cards"},r.createElement(x,{game:this.props.game,player:a}),r.createElement("br",null),r.createElement(x,{game:this.props.game,player:n})),r.createElement("div",{id:"player-hand"},r.createElement(v,{game:this.props.game,player:n,hide:!1,notYourTurn:function(){return e.popoverComputer("Wait for your turn")}})),r.createElement("span",{id:"player-truco-button",onClick:this.handleTruco},"TRUCO!"))}}]),n}(r.Component),V=function e(t){Object(s.a)(this,e),this.name=void 0,this.name=t},K=function e(t,n,r){if(Object(s.a)(this,e),this.name=void 0,this.description=void 0,this.value=void 0,this.name=t,this.description=n,r>1)throw new Error("The value cannot be more than 1");this.value=r},Z=function(){function e(t,n,r,a,o){Object(s.a)(this,e),this.openness=void 0,this.conscientiousness=void 0,this.extroversion=void 0,this.agreeableness=void 0,this.neuroticism=void 0,this.openness=new K("openness","Imagination, feelings, actions, ideas",t),this.conscientiousness=new K("conscientiousness","Competence, self-discipline, goal-driven",n),this.extroversion=new K("extroversion","Sociability, assertiveness, emotional expression",r),this.agreeableness=new K("agreeableness","Cooperative, trustworthy, good-natured",a),this.neuroticism=new K("neuroticism","tendency toward unstable emotions",o)}return Object(c.a)(e,[{key:"calcWeightedAvg",value:function(){for(var e=0,t=0,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return r.forEach((function(n){var r=n.value,a=n.weight;a<0&&(a*=-1,r=1-r),t+=a,e+=r*a})),e/t}},{key:"getAvgWithWeight",value:function(e,t,n,r,a){return this.calcWeightedAvg({value:this.openness.value,weight:e},{value:this.conscientiousness.value,weight:t},{value:this.extroversion.value,weight:n},{value:this.agreeableness.value,weight:r},{value:this.neuroticism.value,weight:a})}},{key:"withScenarioBias",value:function(e,t){return void 0===t?e:this.calcWeightedAvg({value:t,weight:2.5},{value:e,weight:1})}},{key:"getTrucoResponseProbability",value:function(e){return this.withScenarioBias(this.getAvgWithWeight(1,-2,3,3,-2),e)}},{key:"getTrucoProbability",value:function(e){return this.withScenarioBias(this.getAvgWithWeight(2,-1,2,2,3),e)}},{key:"getFalseTrucoProbability",value:function(e){return this.withScenarioBias(this.getAvgWithWeight(2,-4,4,1,3),e)}}]),e}(),$=function e(t,n){Object(s.a)(this,e),this.name=void 0,this.personality=void 0,this.name=t,this.personality=n},_=[new $("Ben\xe9",new Z(.7,.7,.4,.6,.3)),new $("Ednaldo",new Z(.7,.8,.4,.3,.3)),new $("Adivanir",new Z(.6,.4,.4,.5,.4)),new $("Baianinho de Mau\xe1",new Z(.9,.9,.3,.5,.1)),new $("Katrina",new Z(.7,.1,.7,.55,.65))],Q=function(){function e(t,n){var r=this;Object(s.a)(this,e),this.player=void 0,this.opponent=void 0,this.game=void 0,this.bot=void 0,this.handleTruco=function(e){if(r.player!==e){var t=new W("computer handle truco");r.game.lock(t);var n=r.calcBias();setTimeout((function(){r.game.unlock(t);try{var e=r.bot.personality.getTrucoResponseProbability(n);Math.random()<e?r.game.acceptTruco(r.player):r.game.declineTruco(r.player)}catch(a){return void console.log(a)}}),1e3)}},this.handlePlay=function(){if(r.game.hand.round.isPlayerTurn(r.player)){if(r.game.isLocked())return;var e=new W("computer handle play");r.game.lock(e);var t=r.sortCards(),n=t.length-1,a=r.calcBias(-.1),o=r.bot.personality.getTrucoProbability(a),i=r.bot.personality.getFalseTrucoProbability(a-.1);if(2===r.game.hand.rounds.length)if(null===r.game.hand.rounds[0].winner)n=0;else if(r.game.hand.rounds[0].winner!==r.player){var s=r.game.hand.round.playedCards.get(r.opponent),c=r.minimunToWin(s,t);void 0!==c&&(n=t.indexOf(c))}else Math.random()>.15&&(n=0);else if(1===r.game.hand.rounds.length){var u=r.game.hand.round.playedCards.get(r.opponent);if(void 0===u)Math.random()>.2&&(n=Math.floor(2*Math.random()));else if(Math.random()>.2){var l=r.minimunToWin(u,t);void 0!==l&&(n=t.indexOf(l))}}setTimeout((function(){if(r.game.unlock(e),r.game.hand.lastTrucker!==r.player&&(Math.random()<o||Math.random()<i))r.game.truco(r.player);else try{r.game.play(r.player,t[n])}catch(a){return void r.handlePlay()}}),1e3)}},this.game=n,this.player=t,this.opponent=this.game.players[0],this.addListeners(),this.bot=_[Math.floor(Math.random()*(_.length-1))],console.log(this.bot.name)}return Object(c.a)(e,[{key:"compareCards",value:function(e,t){return void 0===t||t===e?e:e.value===this.game.hand.round.trump.value?t.value===this.game.hand.round.trump.value?e.suit.power<t.suit.power?e:t:e:(e.value.power<t.value.power&&(t=e),t)}},{key:"sortCards",value:function(){for(var e=this,t=this.game.hand.deck.playerCards.get(this.player),n=new Array,r=function(){var r=void 0;r=void 0,t.forEach((function(t){n.includes(t)||(r=e.compareCards(t,r))})),n.push(r)};n.length!==t.length;)r();return n}},{key:"minimunToWin",value:function(e,t){var n,r=this;return t.forEach((function(t){void 0!==n&&r.compareCards(t,e)===t&&(n=t)})),n}},{key:"getCardScore",value:function(e){return e.value===this.game.hand.round.trump.value?e.suit===g.suits[0]?.5:.3:e.value.power>=1&&e.value.power<=3?.1+(6-2*e.value.power)/100:0}},{key:"calcBias",value:function(e){var t=this,n=e||0;(2===this.game.hand.rounds.length&&this.game.hand.rounds[0].winner===this.player||3===this.game.hand.rounds.length&&this.game.hand.rounds[0].winner===this.player)&&(n+=.25),this.game.hand.deck.playerCards.get(this.player).forEach((function(e){n+=t.getCardScore(e)}));var r=this.game.hand.round.playedCards.get(this.player),a=this.game.hand.round.playedCards.get(this.opponent);return void 0!==r&&(n+=this.getCardScore(r)),void 0!==a&&(n-=this.getCardScore(a)),n+=this.game.getPlayerScore(this.player)/100*1.5,n-=this.game.getPlayerScore(this.opponent)/100*1.5,this.game.hands.filter((function(e){return e.lastTrucker===t.opponent&&e!==t.game.hand})).forEach((function(e){1===e.points?n+=.05:e.winner===t.player?n+=.1:e.winner===t.opponent&&(n-=.15)})),11===this.game.getPlayerScore(this.opponent)&&(n=2),n}},{key:"addListeners",value:function(){var e=this;this.game.addListener("played",this.handlePlay),this.game.addListener("newRound",this.handlePlay),this.game.addListener("newHand",this.handlePlay),this.game.addListener("truco",this.handleTruco),this.game.addListener("trucoAccepted",(function(t){t===e.opponent&&setTimeout((function(){for(;e.game.isLocked(););e.handlePlay()}),2e3)}))}}]),e}(),X=(n(37),n(38),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={game:new S([new V("player"),new V("computer")])},r.state.game.startGame(),new Q(r.state.game.players[1],r.state.game),r}return Object(c.a)(n,[{key:"render",value:function(){return r.createElement("div",{className:"App"},r.createElement(J,{game:this.state.game}))}}]),n}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));U((function(){U('[data-toggle="popover"]').popover()})),i.a.render(a.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.56a42f26.chunk.js.map