const app = new Clarifai.App({ apiKey: 'c4226e96294a4238a5b4fa8ac9aae598' });
const appModel = 'bd367be194cf45149e75f01d59f77ba7';

const image = 'https://samples.clarifai.com/food.jpg';

// $(function() {
// 	app.models.predict(appModel, image)
// 		.then(res => res.json(res))
// 		.catch(error => console.log(error));
// 	// fetch(
// 	// 	`https://samples.clarifai.com/food.jpg`
// 	// )
// 		.then(res => res.json())
// 		.then(json => console.log(json))
// 		.catch(err => console.log(err));
// 	// fetch('https://samples.clarifai.com/food.jpg')
// 	// 	.then(res => res.json())
// 	// 	.then(json => console.log(json.avatar_url))
// 	// 	.catch(err => console.log(err));
// });

$(function () {
    app.models
        .predict(appModel, image)
        .then(function(response) {
        if(response._55.rawData.outputs[0].data.hasOwnProperty("concepts")) {
          var tag = response.rawData.outputs[0].data.concepts[0].name;
        //   var url = 'http://api.wolframalpha.com/v2/query?input='+tag+'%20nutrition%20facts&appid='+myWolframAppId;
  
        //   getNutritionalInfo(url, function (result) {
        //     $('#concepts').html('<h3>'+ tag + '</h3>' + "<img src='"+result+"'>");
        //   });
        console.log(tag);
        }
      }, function(err) { console.log(err); }
    );
  }
)