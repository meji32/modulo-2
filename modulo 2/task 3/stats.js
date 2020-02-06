let members = data.results[0].members
let stats= {
	n_dem: 0,
	n_rep: 0,
	n_ind: 0,
	n_tot: 0,
	vot_dem: 0,
	vot_rep: 0,
	vot_ind: 0,
	vot_tot: 0
}
const tbody = document.querySelector("tbody")
function totalParty(member,val1,val2) {
	return member.filter(e => e[val1]==val2)}
	stats.n_dem = totalParty(members,"party","D").length
	stats.n_rep = totalParty(members,"party","R").length
	stats.n_ind = totalParty(members,"party","I").length
	stats.n_tot = stats.n_rep + stats.n_dem + stats.n_ind

function votedParty(val2) {
	let prom =totalParty(members,"party",val2)
	return (prom.reduce((sum,member)=>sum + member.votes_with_party_pct,0))/prom.length
	}
	stats.vot_dem = votedParty("D").toFixed(2)
	stats.vot_rep = votedParty("R").toFixed(2)
	stats.vot_ind = votedParty("I").toFixed(2)
	stats.vot_tot = (members.reduce((sum,member)=>sum + members.votes_with_party_pct,0))/members.length.toFixed(2)
/*function mostrar (){
	if (true) {*/
tbody.innerHTML = 
						`<tr>
                            <td class="text-center">Republican</td>
                            <td class="text-center">${stats.n_rep}</td>
                            <td class="text-center">${stats.vot_rep}</td>
                        </tr>
                        <tr>
                            <td class="text-center">Democrat</td>
                            <td class="text-center">${stats.n_dem}</td>
                            <td class="text-center">${stats.vot_dem}</td>
                        </tr>
                        <tr>
                            <td class="text-center">Independent</td>
                            <td class="text-center">${stats.n_ind}</td>
                            <td class="text-center">${stats.vot_ind}</td>
                        </tr>
                        <tr>
                            <td class="text-center">Total</td>
                            <td class="text-center">${stats.n_tot}</td>
                            <td class="text-center">${stats.vot_tot}</td>
                        </tr>`
                 //   }}