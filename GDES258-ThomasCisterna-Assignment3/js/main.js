const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});

const client = contentful.createClient({
  space: 'hl5brgt0kvrt',
  accessToken: 'Rdw0dIb2NeikfOhlaykxxGy9VPyVcSO4udmTuu_BvbU',
});

client.getEntries({content_type: 'crossOdor'}).then(function (entries) {
entries.items.sort((a, b) => a.fields.order - b.fields.order);
entries.items.forEach(function (entry) {

  var product = document.createElement('div');
  document.getElementById('products').append(product);
  product.classList.add('product');

    var productImageWrapper = document.createElement('div');
    productImageWrapper.classList.add('productImageWrapper');
    product.append(productImageWrapper);

      var productImage = document.createElement('img');
      productImage.src = 'http:' + entry.fields.productImage.fields.file.url;
      productImageWrapper.append(productImage);
    
    var productTextWrapper = document.createElement('div');
    productTextWrapper.classList.add('productTextWrapper');
    product.append(productTextWrapper);

      var productName = document.createElement('h2');
      productName.innerHTML = entry.fields.productName;
      productTextWrapper.append(productName);

      var productPrice = document.createElement('h3');
      productPrice.innerHTML = entry.fields.productPrice;
      productTextWrapper.append(productPrice);

    var productButtonWrapper = document.createElement('div');
    productButtonWrapper.classList.add('productButtonWrapper');
    product.append(productButtonWrapper);

      var detailsButton = document.createElement('a');
      detailsButton.innerHTML = "View details";
      productButtonWrapper.append(detailsButton);
      detailsButton.href = "details.html?id=" + entry.sys.id;
      detailsButton.classList.add('details-button');

  })
})

.catch((error) => {
  console.log('Error fetching products: ', error);
});


client.getEntries({content_type: 'coTestimonials'}).then(function (entries) {
entries.items.forEach(function (entry) {

  var testimonialWrap = document.createElement('div');
  document.getElementById('testimonials').append(testimonialWrap);
  testimonialWrap.classList.add('testimonialWrap');

    var testimonialImageWrapper = document.createElement('div');
    testimonialImageWrapper.classList.add('testimonialImageWrapper');
    testimonialWrap.append(testimonialImageWrapper);

      var testimonialImage = document.createElement('img');
      testimonialImage.src = 'http:' + entry.fields.testimonialImage.fields.file.url;
      testimonialImageWrapper.append(testimonialImage);
    
    var testimonialTextWrapper = document.createElement('div');
    testimonialTextWrapper.classList.add('testimonialTextWrapper');
    testimonialWrap.append(testimonialTextWrapper);

      var testimonialName = document.createElement('h2');
      testimonialName.innerHTML = entry.fields.testimonialName;
      testimonialName.classList.add('testimonialName');
      testimonialTextWrapper.append(testimonialName);

      var testimonialText = document.createElement('h3');
      testimonialText.innerHTML = entry.fields.testimonialText;
      testimonialText.classList.add('testimonialText');
      testimonialTextWrapper.append(testimonialText);
  })
})

.catch((error) => {
  console.log('Error fetching products: ', error);
});
