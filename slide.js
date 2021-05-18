setInterval(imgChanger, 2000);

var imgs = ['products/africasWaterSupply.png', 'products/america.png', 'products/bannanabat.png', 'products/british.png', 'products/cucumberbat.png', 'products/eggplantbat.png', 'products/forTheKids.png', 'products/gretaThunburgsNemisis.png', 'products/herpies.png', 'products/infinityBat.png', 'products/LimitedSecondHand.png', 'products/mexico.png', 'products/minecraftHorseNoise.png', 'products/stone.png', 'products/YES.png', ]

var i = 0;

function imgChanger() {
    document.getElementById('slideReel').src = imgs[i];
    //            console.log(i)
    i++;
    if (i >= imgs.length) {
        i = 0;
    }
}




