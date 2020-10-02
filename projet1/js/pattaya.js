document.onkeyup = function(e) {
    if (e.ctrlKey && e.which == 66) {
        console.log("mode pattaya active");
        const pattaya_image= [
            "images/pattaya/001.jpg",
            "images/pattaya/002.jpg",
            "images/pattaya/003.jpg"
        ];

        let title = document.getElementsByTagName('h1');
        console.log(title);
        title[0].textContent = "Pattaya";

        let someimage = document.getElementById('article');
        let myimg = someimage.getElementsByTagName('img');

        for (let index = 0; index < myimg.length; index++) {
            let pimg = myimg[index];
            pimg.src = pattaya_image[index];
            
        }
        console.log(myimg);

    }
  };