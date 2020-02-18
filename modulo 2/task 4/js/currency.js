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
		parties: [],
		states: [],
		stateAct: "All",
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
		}
	},
	computed:{
		filter(){
			return this.members.filter(e => app.parties.includes(e.party) && (e.state == app.stateAct || app.stateAct == "All"))
		}
	},
	})

	  

			
