const products = $(".hz-product-card--small");
jsonObj = []; 
for(i=0;i<90; i++){ 
    item = {};
    item ["title"] = $(products[i]).find('.hz-color-link__text:eq(0)').text();
    item ["price"] = $(products[i]).find('.hz-color-link__text:eq(2)').text();
    item ["link"] =  $(products[i]).find('.hz-product-card__link').attr("href");
    item ["imgLink"] = $(products[i]).find('img').attr("src");
    jsonObj.push(item);
}
console.log(JSON.stringify(jsonObj));