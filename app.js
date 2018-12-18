new Vue({
	el: '#app',
	data: {
		isTrue: false,
		imgUrl: '',
		topText: '',
		bottomText: ''
	},
	methods: {
		generateMeme() {
			
			let inputfield1 = document.getElementById('input-1');
			let inputfield2 = document.getElementById('input-2');

			if(inputfield1.value === '' && inputfield2.value === '' ) 
				{
					alert('Enter Text')
				}
			else {
				axios.get(`https://api.imgflip.com/get_memes`)
				.then(res => {
					let rndm = Math.floor(Math.random() * 100);
					this.imgUrl = res.data.data.memes[rndm].url;
					this.isTrue = true;
				})
				.catch(err => console.log(err))
			}
		}
	}
});