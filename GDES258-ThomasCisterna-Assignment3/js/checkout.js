var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});
   
const client = contentful.createClient({
    space: 'hl5brgt0kvrt',
    accessToken: 'Rdw0dIb2NeikfOhlaykxxGy9VPyVcSO4udmTuu_BvbU',
});

client.getEntry(id).then(function (entry) {

    var checkoutImage = document.createElement('img');
    checkoutImage.src = 'http:' + entry.fields.productImage.fields.file.url;
    checkoutImage.classList.add('checkoutImage');
    document.getElementById('checkoutImageWrapper').append(checkoutImage);

    var checkoutProduct = document.createElement('h2');
    checkoutProduct.innerHTML = entry.fields.productName;
    checkoutProduct.classList.add('checkoutProduct');
    document.getElementById('checkoutTextWrapper').append(checkoutProduct);

    var checkoutPrice = document.createElement('h3');
    checkoutPrice.innerHTML = entry.fields.productPrice;
    checkoutPrice.classList.add('checkoutPrice');
    document.getElementById('checkoutTextWrapper').append(checkoutPrice);

    var checkoutPrice = document.createElement('h3');
    checkoutPrice.innerHTML = entry.fields.productPrice;
    checkoutPrice.classList.add('checkoutPrice');
    document.getElementById('checkoutPriceWrapper').append(checkoutPrice);

    var checkoutPrice = document.createElement('h3');
    checkoutPrice.innerHTML = entry.fields.productPrice;
    checkoutPrice.classList.add('checkoutPrice');
    document.getElementById('checkoutTotalWrapper').append(checkoutPrice);
    
    })

  .catch((error) => {
    console.log('Error fetching products: ', error);
  });