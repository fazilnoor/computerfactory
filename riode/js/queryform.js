function submitquery() {

    var username = document.getElementById('name').value;
    var company = document.getElementById('companyname').value;
    var mail = document.getElementById('email').value;
    var mobile = document.getElementById('phone').value;
    var product = document.getElementById('product').value;
    var productquantity =  document.getElementById('quantity').value;

    if ((username == '' || username == null) || (company == '' || company == null) || (mail == '' || mail == null) || (mobile == '' || mobile == null) || (product == '' || product == null) || (productquantity == '' || productquantity == null)) {
        window.alert('all fileds are required');
    }else {
        emailjs.send("service_8zp4yhp","template_kvsj7kk", {
            name: username,
            companyname: company,
            email: mail,
            phone: mobile,
            product: product,
            quantity: productquantity,
            mailto: "fazil.noor@geonix.in, contact@computerfactory.in, praveen.geonix@gmail.com",
            formname: "computer factory",
        })
        .then(function() {
            console.log('SUCCESS!');
            location.href = '/thankyou.html'
        }, function(error) {
            console.log('FAILED...', error);
            window.alert(error);
        });
        console.log('its not working')
    }


    // console.log(formdata)
}