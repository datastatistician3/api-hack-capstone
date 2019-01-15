var toTitleCase = function (str) {
	str = str.toLowerCase().split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
};

const app = new Clarifai.App({ apiKey: 'c4226e96294a4238a5b4fa8ac9aae598' });
const appModel = 'bd367be194cf45149e75f01d59f77ba7';

const image = 'https://samples.clarifai.com/food.jpg';

$(function() {
	app.models.predict(appModel, image)
    // .then(res => res.json(res))
    // .then(res => console.log(res))
    .then(out => {
      let frames = out.outputs[0].data.concepts;
      frames.forEach(frame => {
        console.log(toTitleCase(frame.name), frame.value)
      })
    })
    .catch(error => console.log(error));
    
  require('plotly')('energeticsom', '8gyeFQPQDjZyHSmogidW');

var data = [
  {
    x: ["giraffes", "orangutans", "monkeys"],
    y: [20, 14, 23],
    type: "bar"
  }
];
var graphOptions = {filename: "basic-bar", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});

// // 	// fetch(
// // 	// 	`https://samples.clarifai.com/food.jpg`
// // 	// )
// // 		.then(res => res.json())
// // 		.then(json => console.log(json))
// // 		.catch(err => console.log(err));
// // 	// fetch('https://samples.clarifai.com/food.jpg')
// // 	// 	.then(res => res.json())
// // 	// 	.then(json => console.log(json.avatar_url))
// // 	// 	.catch(err => console.log(err));
});


// $(function(){
// app.models.predict(
//   appModel,
//   image
//   {video: true, sampleMs: 1000}
//   )
// .then(response => {
//   let frames = response['outputs'][0]['data']['frames'];
//   frames.forEach(frame => {
//     console.log('Concepts in frame at time: ' + frame['frame_info']['time'] + 'ms');
//     frame['data']['concepts'].forEach(concept => {
//       console.log(' ' + concept['name'] + ' ' + concept['value']);
//     });
//   });
// })
// .catch(error => {
//   console.log('Error status code: ' + error.data['status']['code']);
//   console.log('Error description: ' + error.data['status']['description']);
//   if (error.data['status']['details'])
//   {
//     console.log('Error details: ' + error.data['status']['details']);
//   }
// })
// })


const zomatoapiKey = 'iaBarGgT3QLFcCGUavwLHM2ocQ398f8tojCVviYB'
const zomatosearchURL = 'https://api.nps.gov/api/v1/parks'

function formatQueryParams(params) {
    const queryItems = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
}











// // $(function () {
// //     app.models
// //         .predict(appModel, image)
// //         .then(function(response) {
// //         if(response._55.rawData.outputs[0].data.hasOwnProperty("concepts")) {
// //           var tag = response.rawData.outputs[0].data.concepts[0].name;
// //         //   var url = 'http://api.wolframalpha.com/v2/query?input='+tag+'%20nutrition%20facts&appid='+myWolframAppId;
  
// //         //   getNutritionalInfo(url, function (result) {
// //         //     $('#concepts').html('<h3>'+ tag + '</h3>' + "<img src='"+result+"'>");
// //         //   });
// //         console.log(tag);
// //         }
// //       }, function(err) { console.log(err); }
// //     );
// //   }
// // )