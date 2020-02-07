let members = data.results[0].members

const tbody1 = document.querySelector(".tbody1") //glance
const tbody2 = document.querySelector(".tbody2") //most engaged 
const tbody3 = document.querySelector(".tbody3") //least engaged
const tbody4 = document.querySelector(".tbody4") //most loyal
const tbody5 = document.querySelector(".tbody5") //least loyal

let stats= {
	n_dem: 0,
	n_rep: 0,
	n_ind: 0,
	n_tot: 0,
	vot_dem: 0,
	vot_rep: 0,
	vot_ind: 0,
	vot_tot: 0,}



/////////////////////////////////////////////////////////GLANCE////////////////////////////////////////////////////



function totalParty(member,val1,val2) {
	return member.filter(e => e[val1]==val2)}

	stats.n_dem = totalParty(members,"party","D").length
	stats.n_rep = totalParty(members,"party","R").length
	stats.n_ind = totalParty(members,"party","I").length
	stats.n_tot = stats.n_rep + stats.n_dem + stats.n_ind

if (stats.n_ind!=0) {
function votedParty(val2) {
	let prom =totalParty(members,"party",val2)
	return (prom.reduce((sum,member)=>sum + member.votes_with_party_pct,0))/prom.length
	}
	stats.vot_dem = votedParty("D")
	stats.vot_rep = votedParty("R")
	stats.vot_ind = votedParty("I")
	stats.vot_tot = (stats.vot_dem + stats.vot_rep + stats.vot_ind) / 3
}
else{
	function votedParty(val2) {
	let prom =totalParty(members,"party",val2)
	return (prom.reduce((sum,member)=>sum + member.votes_with_party_pct,0))/prom.length
	}
	stats.vot_dem = votedParty("D")
	stats.vot_rep = votedParty("R")
	stats.vot_ind = 0
	stats.vot_tot = (stats.vot_dem + stats.vot_rep ) / 2
}
tbody1.innerHTML = 
						`<tr>
                            <td class="text-center">Republican</td>
                            <td class="text-center">${stats.n_rep}</td>
                            <td class="text-center">${stats.vot_rep.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td class="text-center">Democrat</td>
                            <td class="text-center">${stats.n_dem}</td>
                            <td class="text-center">${stats.vot_dem.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td class="text-center">Independent</td>
                            <td class="text-center">${stats.n_ind}</td>
                            <td class="text-center">${stats.vot_ind.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td class="text-center">Total</td>
                            <td class="text-center">${stats.n_tot}</td>
                            <td class="text-center">${stats.vot_tot.toFixed(2)}</td>
                        </tr>`



/////////////////////////////////////ATTENDANCE/////////////////////////////////////////




if(document.querySelector(".tbody2")!=null){



///////////////////////////////////////////MOST ENGAGED////////////////////////////////////////////



let missedVotesBotton = []

members.sort((a,b) => a.missed_votes_pct - b.missed_votes_pct)
	
	for (i=0; i<members.length/10 || members[i-1].missed_votes_pct==members[i].missed_votes_pct; i++) {
		missedVotesBotton.push(members[i])
	}

	 for (i=0; i < missedVotesBotton.length; i++) {
	 	let row = tbody2.insertRow(-1)
		row.innerHTML =
						`<tr>
                     		<td class="text-center">${missedVotesBotton[i].first_name} ${missedVotesBotton[i].last_name}</td>
                            <td class="text-center">${missedVotesBotton[i].missed_votes}</td>
                            <td class="text-center">${missedVotesBotton[i].missed_votes_pct}</td>
                       	</tr>`
		
	}



//////////////////////////////////////////////////////////LEAST ENGAGED//////////////////////////////////////////////



let missedVotesTop = []
members.reverse()
	
for (i=0; i<members.length/10 || members[i-1].missed_votes_pct==members[i].missed_votes_pct; i++) {
	missedVotesTop.push(members[i])
	}

	 for (i=0; i < missedVotesTop.length; i++) {
	let row = tbody3.insertRow(-1)
	row.innerHTML =
					`<tr>
                		<td class="text-center">${missedVotesTop[i].first_name} ${missedVotesTop[i].last_name}</td>
                        <td class="text-center">${missedVotesTop[i].missed_votes}</td>
                        <td class="text-center">${missedVotesTop[i].missed_votes_pct}</td>
                   	</tr>`}
}



/////////////////////////////////////////////////PARTY LOYALTY///////////////////////////////////////////////////////



else{



///////////////////////////////////////////MOST LOYAL////////////////////////////////////////////////////////////////



const tbody4 = document.querySelector(".tbody4")
let topLoyalty = []
members.sort((a,b) => a.votes_with_party_pct - b.votes_with_party_pct)
	for (i=0; i<members.length/10 || members[i-1].votes_with_party_pct==members[i].votes_with_party_pct; i++) {
		topLoyalty.push(members[i])
	}
	for (i=0; i < topLoyalty.length; i++) {
	 	let row = tbody4.insertRow(-1)
		row.innerHTML =
						`<tr>
                     		<td class="text-center">${topLoyalty[i].first_name} ${topLoyalty[i].last_name}</td>
                            <td class="text-center">${(topLoyalty[i].total_votes.toFixed(0)*topLoyalty[i].votes_with_party_pct.toFixed(4)/100).toFixed()}</td>
                            <td class="text-center">${topLoyalty[i].votes_with_party_pct}</td>
                       	</tr>`
                       }



/////////////////////////////////////////////LEAST LOYAL////////////////////////////////////////////////////////////////



let bottomLoyalty = []
members.reverse()


	for (i=0; i<members.length/10 || members[i-1].votes_with_party_pct==members[i].votes_with_party_pct; i++) {
		bottomLoyalty.push(members[i])
	}
	for (i=0; i < bottomLoyalty.length; i++) {
	 	let row = tbody5.insertRow(-1)
		row.innerHTML =
						`<tr>
                     		<td class="text-center">${bottomLoyalty[i].first_name} ${bottomLoyalty[i].last_name}</td>
                            <td class="text-center">${(bottomLoyalty[i].total_votes.toFixed(0)*bottomLoyalty[i].votes_with_party_pct.toFixed(4)/100).toFixed(0)}</td>
                            <td class="text-center">${bottomLoyalty[i].votes_with_party_pct}</td>
                       	</tr>`}

}