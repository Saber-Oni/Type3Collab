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
        
  var productDetails = document.createElement('div');
  productDetails.classList.add('productDetails');
  document.getElementById('productDetails').append(productDetails);

      var productGallery = entry.fields.productGallery;

      if (productGallery) {
          var productGalleryWrapper = document.createElement('div');
          productGalleryWrapper.classList.add('productGalleryWrapper');
          productDetails.append(productGalleryWrapper);

          productGallery.forEach(function (asset) {
          var image = document.createElement('img');
          image.src = 'http:' + asset.fields.file.url;
          image.classList.add('product-gallery-image');
          productGalleryWrapper.append(image);
          });
      }
    
      var productDetailsTextWrapper = document.createElement('div');
      productDetailsTextWrapper.classList.add('productDetailsTextWrapper');
      productDetails.append(productDetailsTextWrapper);

          var productName = document.createElement('h2');
          productName.innerHTML = entry.fields.productName;
          productDetailsTextWrapper.append(productName);

          var productDescription = document.createElement('p');
          productDescription.innerHTML = entry.fields.productDescription;
          productDetailsTextWrapper.append(productDescription);

          var productPrice = document.createElement('h3');
          productPrice.innerHTML = entry.fields.productPrice;
          productDetailsTextWrapper.append(productPrice);

          var productDetailsButtonWrapper = document.createElement('div');
          productDetailsButtonWrapper.classList.add('productDetailsButtonWrapper');
          productDetailsTextWrapper.append(productDetailsButtonWrapper);

              var buyButton = document.createElement('a');
              buyButton.innerHTML = "Buy now";
              productDetailsButtonWrapper.append(buyButton);
              buyButton.href = "checkout.html?id=" + entry.sys.id;
              buyButton.classList.add('buyButton');
  })

.catch((error) => {
  console.log('Error fetching products: ', error);
});