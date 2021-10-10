let priceList = [{
        title: "Free",
        price: "$0/month",
        userCount: "Single user",
        storage: "5GB storage",
        acess: "Unlimited Public Projects",
        accessAll: "Community Access",
        project: "Unlimited Private Projects",
        support: "Dedicated Phone Support",
        domain: "Free Subdomain",
        reports: "Monthly Status Reports"
    },
    {
        title: "PLUS",
        price: "$9/month",
        userCount: "5 user",
        storage: "50GB storage",
        acess: "Unlimited Public Projects",
        accessAll: "Community Access",
        project: "Unlimited Private Projects",
        support: "Dedicated Phone Support",
        domain: "Free Subdomain",
        reports: "Monthly Status Reports"
    },
    {
        title: "PRO",
        price: "$49/month",
        storage: "105GB storage",
        userCount: "Unlimited user",
        acess: "Unlimited Public Projects",
        accessAll: "Community Access",
        project: "Unlimited Private Projects",
        support: "Dedicated Phone Support",
        domain: "Free Subdomain",
        reports: "Monthly Status Reports"
    }
]

const priceCardList = document.querySelector('.price-list');


priceList.forEach(cardListProduct => {

    priceCardList.innerHTML += `
  <div class="design-card">  
<h3 class="header">${cardListProduct.title}</h3>
<h2 class="header"> ${cardListProduct.price}</h2>

<hr>

<ol class="content">
    <li>${cardListProduct.userCount}</li>
    <li>${cardListProduct.storage}</li>
    <li>${cardListProduct.acess}</li>
    <li>${cardListProduct.accessAll}</li>
    <li>${cardListProduct.project}</li>
    <li>${cardListProduct.support}</li>
    <li>${cardListProduct.domain}</li>
    <li>${cardListProduct.reports}</li>
</ol>
<div class="btn">
<button type="button" >Button</button>
</div>
</div> `
})