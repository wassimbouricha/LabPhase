var articles = document.querySelectorAll('article')

function calSum() {
    let sum = 0;
    for (var i = 0; i < articles.length - 1; i++) {
        price = parseInt(articles[i].children[5].children[0].innerHTML)
        sum += price
    }
    document.querySelector('#price').innerHTML = sum
}

calSum();

for (var i = 0; i < articles.length - 1; i++) {
    let qnt = articles[i].children[3]
    let prx = articles[i].children[5].children[0];

    articles[i].children[2].addEventListener('click', function (e) {
        if (parseInt(qnt.innerHTML) > 0) {
            qnt.innerHTML = parseInt(qnt.innerHTML) - 1
            prx.innerHTML = parseInt(qnt.innerHTML) * 5
            calSum();
        }
        if (qnt.innerHTML == "0") {
            e.target.parentElement.remove()
            articles = document.querySelectorAll('article')
            console.log(articles.length)

            calSum();

            if (articles.length == 1)
                document.querySelector('h3').innerHTML = "Your shopping cart is empty !"

        }
    })
    articles[i].children[4].addEventListener('click', function () {

        qnt.innerHTML = parseInt(qnt.innerHTML) + 1
        prx.innerHTML = parseInt(qnt.innerHTML) * 5
        calSum();

    })
    articles[i].children[6].addEventListener('click', function (e) {
        e.target.parentElement.remove();
        articles = document.querySelectorAll('article')
        console.log(articles.length)

        calSum();

        if (articles.length == 1)
            document.querySelector('#shopping-cart').innerHTML = "Your shopping cart is empty !"

    })

}
