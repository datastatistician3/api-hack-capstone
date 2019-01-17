// var myClarifaiApiKey = 'c4226e96294a4238a5b4fa8ac9aae598';
const app = new Clarifai.App({ apiKey: 'c4226e96294a4238a5b4fa8ac9aae598' });
const appModel = 'bd367be194cf45149e75f01d59f77ba7';

const nutrientURL = 'http://api.wolframalpha.com/v2/query?input='
const nutrientAPI = 'JLHA8Y-3WRLXGJQHY'

// imageLoading = "https://s3.amazonaws.com/static.mlh.io/icons/loading.svg"

// const image = 'https://samples.clarifai.com/food.jpg';

var toTitleCase = function (str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
};

function submitImage(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#myImg').attr('src', e.target.result);
      makePrediction({ base64: reader.result.split("base64,")[1] });
    }
    reader.readAsDataURL(input.files[0]);
  }
}

function changeImage(){
  $("#filename").change(function() {
    submitImage(this);
  });
}

function findFoodItem(){
  $('#submit-button').on('click', function(e){
    let fileName = $('#filename').val();
    submitImage(filename, 'file')

    changeImage();   
  })
}

function makePrediction(image) {
  app.models.predict(appModel, image).then(response => {
        let tag = response.outputs[0].data.concepts[0].name;

        $('#what-food').html(`<h2>This food is: ${toTitleCase(tag)}</h2>`)
        let manyItems = response.outputs[0].data.concepts;
        $('#tbl-food').append('<table border="1"><tr><th>Food</th><th>Probability</th></tr></table>');
        var myTable = $('#tbl-food').children();

        $('#food-ingredients').html(`<h3>Below are the ingredients of ${toTitleCase(tag)}</h3>`)
        manyItems.forEach(frame => {
          myTable.append(`<tr><td>${toTitleCase(frame.name)}</td><td>${frame.value.toFixed(4)}</td></tr>`);
        })
    }).catch(error => console.log(error)
    );
}

// $(getImage)
$(findFoodItem)
