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
      toggleClassfunction();
    }
    reader.readAsDataURL(input.files[0]);
  }
}

function changeImage(){
  $("#filename").change(function() {
    submitImage(this);
    toggleClassfunction();
    $("#tbl-food").empty();
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
        // $('#clickto-show-items').html(`<a href="#">Click here to see ingredients!</a>`)
        $('#clickto-show-items').html(`<h6>Click Image to See What's in It.</h6>`);
        let manyItems = response.outputs[0].data.concepts;
        $('#tbl-food').append(`<table class="hidden" border="1"><caption>Items of <strong>${toTitleCase(tag)}.</strong></caption><br><tr><th>Food</th><th>Probability</th></tr></table>`);
        var myTable = $('#tbl-food').children();

        // $('#food-ingredients').html(`<h3 class="hidden">Below are the items of ${toTitleCase(tag)}</h3>`)
        manyItems.forEach(frame => {
          myTable.append(`<tr><td>${toTitleCase(frame.name)}</td><td>${(frame.value.toFixed(4)*100).toFixed(2)}%</td></tr>`);
        })
    }).catch(error => console.log(error)
    );
}

function toggleClassfunction(){
  $("#myImg").off("click").on("click", function(e){
    $("table").toggleClass("hidden");
    $("#food-ingredients").toggleClass("hidden");
  });
}


function runMethods() {
  // $(toggleClassfunction)
  $(findFoodItem)
}

$(runMethods)