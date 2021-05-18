var products = [
        ['products/africasWaterSupply.png', 29.99, 'Product 1 '],
        ['products/america.png', 29.99, 'Product 2 '],
        ['products/bannanabat.png', 29.99, 'Product 3 '],
        ['products/YES.png', 29.99, 'Product 4 '],
        ['products/british.png', 29.99, 'Product 5 '],
        ['products/cucumberbat.png', 29.99, 'Product 6 '],
        ['products/darkDestroyer.png', 29.99, 'Product 7 '],
        ['products/eggplantbat.png', 29.99, 'Product 8 '],
        ['products/forTheKids.png', 29.99, 'Product 9 '],
        ['products/gretaThunburgsNemisis.png', 29.99, 'Product 10'],
        ['products/herpies.png', 29.99, 'Product 11'],
        ['products/infinityBat.png', 29.99, 'Product 12'],
        ['products/LimitedSecondHand.png', 29.99, 'Product 13'],
        ['products/mexico.png', 29.99, 'Product 14'],
        ['products/minecraftHorseNoise.png', 29.99, 'Product 15'],
        ['products/stone.png', 29.99, 'Product 16']
    ];

var kartitems = [];

function run() {

    //        alert('testing'); 
    var main = document.getElementById('products');

    for (var i = 0; i < products.length; i++) {
        var ele = document.createElement('li');
        var pic = document.createElement('img');
        var price = document.createElement('h1');
        var desc = document.createElement('h2');
        var add = document.createElement('button');
        var typeBox = document.createElement('input');

        main.appendChild(ele);
        ele.appendChild(pic);
        ele.appendChild(price);
        ele.appendChild(desc);
        ele.appendChild(add);
        ele.appendChild(typeBox);

        pic.src = products[i][0];
        price.innerHTML = '$' + products[i][1];
        desc.innerHTML = products[i][2];
        add.innerHTML = 'add';
        typeBox.type = 'number';

        typeBox.setAttribute("id", "input" + i);
        typeBox.value = 1;

        add.dataset.kartindex = i;
        add.addEventListener('click', adding, false);
    }


}
    function adding(event) {
        const NUM = event.currentTarget.dataset.kartindex;

        kartitems.push([products[NUM]]);
        kartitems[kartitems.length - 1][1] = Number(document.getElementById('input' + NUM).value);

        updatekart();
    }

    var totalitems = 0;

function updatekart() {
    var itemcount = document.getElementById('itemcount');

    totalitems = 0;

    for (var i = 0; i < kartitems.length; i++) {
        totalitems += kartitems[i][1];
    }

    window.sessionStorage.setItem('kartitems', JSON.stringify(kartitems));

    itemcount.innerHTML = totalitems;
}

function loadkart() {
    //        alert('testing'); 
    var main = document.getElementById('kartproducts');

    var data = sessionStorage.getItem('kartitems');
    data = JSON.parse(data);

    kartitems = data;

    updatekart();

    for (var i = 0; i < kartitems.length; i++) {
        var ele = document.createElement('li');
        var pic = document.createElement('img');
        var price = document.createElement('h1');
        var desc = document.createElement('h2');
        var amount = document.createElement('h2');
        var subtotal = document.createElement('h3');
        var deleteitem = document.createElement('button');

        main.appendChild(ele);
        ele.appendChild(pic);
        ele.appendChild(price);
        ele.appendChild(desc);
        ele.appendChild(deleteitem);
        ele.appendChild(amount);
        ele.appendChild(subtotal);

        pic.src = kartitems[i][0][0];
        price.innerHTML = '$' + kartitems[i][0][1];
        desc.innerHTML = kartitems[i][0][2];

        deleteitem.innerHTML = 'delete';
        deleteitem.dataset.kartindex = i;
        deleteitem.addEventListener('click', deleteme, false);

        amount.innerHTML = 'items ordered : ' + kartitems[i][1];
        subtotal.innerHTML = '$' + kartitems[i][1] * kartitems[i][0][1];
    }
    
    function deleteme() {
        const NUM = event.currentTarget.dataset.kartindex;

        delete kartitems[NUM];

        kartitems = kartitems.filter(item => item !== undefined);

        updatekart();
        loadkart();
        window.location.reload(true);
    }
    
}

