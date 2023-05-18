function uploadImage(file) {
  var reader = new FileReader();
  reader.onload = function(e) {
    var img = new Image();
    img.src = e.target.result;
    img.onload = function() {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');

      var width = 250;
      var height = 250;

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      var resizedDataURL = canvas.toDataURL();

      localStorage.setItem('imageData', resizedDataURL);


      window.location.href = 'display.html';
    };
  };
  reader.readAsDataURL(file);
}
