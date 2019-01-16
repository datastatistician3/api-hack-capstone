var toTitleCase = function (str) {
	str = str.toLowerCase().split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
};

const app = new Clarifai.App({ apiKey: 'c4226e96294a4238a5b4fa8ac9aae598' });
const appModel = 'bd367be194cf45149e75f01d59f77ba7';

const nutrientURL = 'http://api.wolframalpha.com/v2/query?input='
const nutrientAPI = 'JLHA8Y-3WRLXGJQHY'

const image = 'https://samples.clarifai.com/food.jpg';

function getPreditedData() {
	app.models.predict(appModel, image)
    // .then(res => res.json(res))
    // .then(res => console.log(res))
    .then(out => {
      let manyItems = out.outputs[0].data.concepts;
      let oneItem = out.outputs[0].data.concepts[0].name;
      let foodItemURL = nutrientURL + oneItem + '%20nutrition%20facts&appid='+nutrientAPI;
      console.log(foodItemURL)

        $('#concepts').html('<h3>'+ oneItem + '</h3>')
        $('#myImg').html(`<img src='"${foodItemURL}"'>`);

      // getNutritionalInfo(foodItemURL, function (result) {
      //   $('#concepts').html('<h3>'+ oneItem + '</h3>') + "<img src='"+foodItemURL+"'>");
      // });
    }, function(err){console.log(err)})
};


// function makeTable() {
//     getPreditedData();
//     $('#tbl-food').append('<table><tr><th>Food</th><th>Probability</th></tr></table>');
//     var myTable = $('#tbl-food').children();
//     manyItems.forEach(frame => {
//       myTable.append(`<tr><td>${frame.name}</td><td>${frame.value.toFixed(4)}</td></tr>`);
//     })
// }


// function doPredict() {
//   app.models.predict(Clarifai.appModel, image).then(function(response) {
//       if(response.rawData.outputs[0].data.concepts) {
//         var tag = response.outputs[0].data.concepts[0].name;
//         var url = 'http://api.wolframalpha.com/v2/query?input='+tag+'%20nutrition%20facts&appid='+nutrientAPI;
//         console.log(url)

//         // getNutritionalInfo(url, function (result) {
//         //   $('#concepts').html('<h3>'+ tag + '</h3>' + "<img src='"+result+"'>");
//         // });
//       }
//     }, function(err) { console.log(err); }
//   );
// }



$(getPreditedData)


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


// const zomatoapiKey = 'iaBarGgT3QLFcCGUavwLHM2ocQ398f8tojCVviYB'
// const zomatosearchURL = 'https://api.nps.gov/api/v1/parks'

// function formatQueryParams(params) {
//     const queryItems = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
//     return queryItems.join('&');
// }











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