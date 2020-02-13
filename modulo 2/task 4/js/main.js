let title = document.querySelector("title").text


if (title=="Senators") {
	var url = "https://api.propublica.org/congress/v1/113/senate/members.json"
	var init = {
		method: 'GET',
		headers:
		{
			"X-API-Key":"C7XLtH2O3ahv3Zo2SnOYl6PI9eLwvSdvldaZaHrY",
		}
	}
} else {
	var url = "https://api.propublica.org/congress/v1/113/house/members.json"
	var init = {
		method: 'GET',
		headers:
		{
			"X-API-Key":"C7XLtH2O3ahv3Zo2SnOYl6PI9eLwvSdvldaZaHrY",
		}
	}
}

let members


		async function getData(url,init){
			await fetch(url, init)
			.then(function(res){
				if(res.ok){
					return res.json()
				} else{
					throw new Error(res.status)
				}
			})

			.then(function(json){
				let data = json
				members= data.results[0].members
				let stateFilter = ["All"]
				members.forEach(e =>{ 
				if(stateFilter.indexOf(e.state)==-1)
					stateFilter.push(e.state)
				})

				for(let i=0; i< stateFilter.length;i++)
					document.querySelector("select").innerHTML += `<option value=${stateFilter[i]}> ${stateFilter[i]}</option>`
					createTable()
				})
			.catch(function(error){
				console.log(error)
			})
			
		}

getData(url,init)

function createTable (){
let tbody = document.querySelector("tbody")
tbody.innerHTML = ""
let checkbox = document.querySelectorAll("input[name=party]:checked")
let stateSelect = document.querySelector("select").value
var values= []
for(let i=0;i<checkbox.length;i++)
	values.push(checkbox[i].value)

members.forEach(member =>{
	if(values.indexOf(member.party)!=-1 && (member.state==stateSelect || stateSelect=="All")){
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
	}
	})


const checkEvent = document.querySelectorAll("input[name=party]")
checkEvent.forEach(e =>{e.addEventListener("change",createTable)})
const selectEvent = document.querySelector("select")
selectEvent.addEventListener("change",createTable)


}
