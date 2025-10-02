let reviewAmount = Number(localStorage.getItem('review-amount'));

reviewAmount += 1;

localStorage.setItem('review-amount', reviewAmount);

document.getElementById('review-amount').innerHTML = `
    ${reviewAmount} reviews have been submitted.
`;