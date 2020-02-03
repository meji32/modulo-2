const tbody = document.querySelector("tbody")

const members = data.results[0].members

members.forEach(member =>{
	let row = tbody.insertRow(-1);
	if (member.url!="") {row.innerHTML= `<td><a target="_blank" href="${member.url}">${member.first_name} ${member.last_name}</td>
	<td> ${member.party}</td>
	<td> ${member.state}</td>
	<td> ${member.seniority}</td>
	<td> ${member.votes_with_party_pct} %</td>`}
	else
	{row.innerHTML= `<td><a target="_blank">${member.first_name} ${member.last_name}</td>
	<td> ${member.party}</td>
	<td> ${member.state}</td>
	<td> ${member.seniority}</td>
	<td> ${member.votes_with_party_pct} %</td>`}
	})
