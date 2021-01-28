// MAC SECTION
// increase  
function handleMacChange(isIncrease) {
    const macInput = document.getElementById('mac-count');
    const macCount = parseInt(macInput.value);
    //  const macNewCount = macCount - 1;
    let macNewCount = 0;
    if (isIncrease == true) {
        macNewCount = macCount + 1;
    }
    if (isIncrease == false && macCount > 0) {
        macNewCount = macCount - 1;
    }
    macInput.value = macNewCount;
    const macTotal = macNewCount * 500;
    document.getElementById('mac-total').innerText = '$' + macTotal;
    calculateTotal()
}

document.getElementById('mac-increase').addEventListener('click', function() {
    handleMacChange(true);
})

// decrease 
document.getElementById('mac-decrease').addEventListener('click', function() {
    handleMacChange(false);
})


// RIFLE SECTION
// increase 
function handleRifleChange(isDecrease) {
    const rifleInput = document.getElementById('rifle-count');
    const rifleCount = parseInt(rifleInput.value);
    //  const macNewCount = macCount - 1;
    let rifleNewCount = 0;
    if (isDecrease == true) {
        rifleNewCount = rifleCount + 1;
    }
    if (isDecrease == false && rifleCount > 0) {
        rifleNewCount = rifleCount - 1;
    }
    rifleInput.value = rifleNewCount;
    const rifleTotal = rifleNewCount * 1000;
    document.getElementById('rifle-total').innerText = '$' + rifleTotal;
    calculateTotal()
}

document.getElementById('rifle-increase').addEventListener('click', function() {
        handleRifleChange(true);
    })
    // decrease 
document.getElementById('rifle-decrease').addEventListener('click', function() {
    handleRifleChange(false);
})

// TOTAL
function calculateTotal() {
    const rifle = document.getElementById('rifle-count');
    const rifles = parseInt(rifle.value);

    const mac = document.getElementById('mac-count');
    const macs = parseInt(mac.value);

    const totalPrice = rifles * 1000 + macs * 500;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}
// RIFLE SECTION
// document.getElementById('rifle-increase').addEventListener('click', function() {
//     const rifleInput = document.getElementById('rifle-count');
//     const rifleCount = parseInt(rifleInput.value)
//     const rifleNewCount = rifleCount + 1;
//     rifleInput.value = rifleNewCount;
//     const rifleTotal = rifleNewCount * 1000;
//     document.getElementById('rifle-total').innerText = '$' + rifleTotal;
// })

// MAC SECTION
// increase  
//  document.getElementById('mac-increase').addEventListener('click', function() {
//      const macInput = document.getElementById('mac-count');
//      const macCount = parseInt(macInput.value);
//      const macNewCount = macCount + 1;
//      macInput.value = macNewCount;
//      const macTotal = macNewCount * 500;
//      document.getElementById('mac-total').innerText = '$' + macTotal;
//  })

//  // decrease 
//  document.getElementById('mac-decrease').addEventListener('click', function() {
//      const macInput = document.getElementById('mac-count');
//      const macCount = parseInt(macInput.value);
//      const macNewCount = macCount - 1;
//      macInput.value = macNewCount;
//      const macTotal = macNewCount * 500;
//      document.getElementById('mac-total').innerText = '$' + macTotal;
//  })