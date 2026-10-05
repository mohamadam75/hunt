const WATCHLIST=[];
const $=id=>document.getElementById(id);
function render(){
  $("walletRows").innerHTML=WATCHLIST.length?WATCHLIST.map(w=>'<tr><td class="wallet">'+w.slice(0,6)+'…'+w.slice(-4)+'</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td><span class="badge watch">TRACK</span></td></tr>').join(''):'<tr><td colspan="7">No wallets configured yet. Live data connector is the next step.</td></tr>';
  $("status").textContent='Watchlist: '+WATCHLIST.length+' wallet(s) • read-only mode';
}
$("refreshBtn").onclick=render;
$("notifyBtn").onclick=async()=>{if(!("Notification" in window))return alert("Browser notifications are not supported here.");const p=await Notification.requestPermission();if(p==="granted")new Notification("Wallet Hunter",{body:"Notifications enabled."});};
render();
