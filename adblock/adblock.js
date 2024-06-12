function removePromotionElements() {
    const promoElements = document.querySelectorAll('.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-1tl8opc');
    promoElements.forEach(element => {
        if (element.textContent.trim() === 'プロモーション') {
            let parent = element.closest('.css-175oi2r');
            while (parent) {
                if (parent.className === 'css-175oi2r') {
                    parent.style.display = 'none';
                    break;
                }
                parent = parent.parentElement;
            }
        }
    });
}

setInterval(removePromotionElements, 100);