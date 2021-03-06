let title = document.querySelector("title").text
let live

title == "Senators" ? live = "https://api.propublica.org/congress/v1/113/senate/members.json" : live = "https://api.propublica.org/congress/v1/113/house/members.json"

const app = new Vue({
	el: "#app",
	data: {
		url : live,
		init: {
			method : 'GET',
			headers: {
				"X-Api-Key":"C7XLtH2O3ahv3Zo2SnOYl6PI9eLwvSdvldaZaHrY",
			}
		},
		members: [],
		n_dem: 0,
	   	n_ind: 0,
	   	n_rep: 0,
	   	total_rep: 0,
	   	total_dem: 0,
	   	total_ind: 0,
	   	total: 0,	
	   	total_per: 0, 
	   	prom_per: 0,
	   	leastAttendance: [],
	   	mostAttendance: [],
	   	leastLoyal: [],
	   	mostLoyal: [],
		parties: [],
		states: [],
		stateAct: "All"
	},
	created(){
		fetch(this.url, this.init)
			.then(function(res){
				if(res.ok){
					return res.json()
				} else{
					throw new Error(res.status)
				}
			})
			.then(function(json){
				let data = json
				app.members = data.results[0].members
				app.parties = app.test(app.members,"party")
				app.states = app.test(app.members,"state")
				app.n_dem = app.numbers(app.members,"party","total_dem", "D")
				app.n_rep = app.numbers(app.members,"party", "total_rep", "R")
				app.n_ind = app.numbers(app.members,"party", "total_ind", "I")
				app.total = app.n_dem + app.n_rep + app.n_ind
				app.total_per=	app.total_dem + app.total_rep + app.total_ind
				app.n_ind != 0 ? app.prom_per = app.total_per / 3 : app.prom_per = app.total_per / 2
				app.leastAttendance = app.tenPct(app.members,"missed_votes_pct",true)
				app.mostAttendance = app.tenPct(app.members,"missed_votes_pct",false)
				app.leastLoyal = app.tenPct(app.members,"votes_with_party_pct",false)
				app.mostLoyal = app.tenPct(app.members,"votes_with_party_pct",true)
			})
			.catch(function(error){
				console.log(error)
			})
	},
	methods:{
		test(array,key){
			let result = []
			array.forEach(e => !result.includes(e[key]) ? result.push(e[key]) : null)
			return result
		},
		numbers(array,key,key2,letter){
			let sum = 0
			for (i = 0; i < array.length; i++) {
				if (array[i][key] == letter) {
					sum ++
					app[key2]+=array[i].votes_with_party_pct
				}
			}
			app[key2] /= sum
			return sum
		},
        tenPct(array,key,boolean){
                let pre_result = array.filter(e => e.total_votes > 0)
                	.sort(function(a,b){
                		return a[key] - b[key]
                	})
                	let prc = Math.round(pre_result.length*0.1)

                	if (boolean){
                		pre_result.reverse()
                	}
                	let result = pre_result.slice(0,prc)

                	while (pre_result[prc][key] == pre_result[prc + 1][key]){
                		prc+=1
                		result.push(pre_result[prc])
                	}
                	return result 
		},
	},
	computed:{
		filter(){
			return this.members.filter(e => app.parties.includes(e.party) && (e.state == app.stateAct || app.stateAct == "All"))
		}
	}
})

