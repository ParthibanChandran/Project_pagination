var mobileTemplate = document.querySelector(".mobile-card-template");
var wrapperSection = document.querySelector(".mobile-wrapper")
var mobileSection = document.querySelector(".mobiles-section");
var mobileheader = document.querySelector(".mobile-header-template");
var pagenum= document.querySelector(".numbering");
var mobile_pagination= document.querySelector(".pagination");
var mobiles = {
  OnePlus: [
    {
      name: "OnePlus 7",
      ram: 6,
      price: 32999.00
    },
    {
      name: "OnePlus 7 Pro",
      ram: 6,
      price: 48999.00
    },
    {
      name: "OnePlus 6T",
      ram: 6,
      price: 37999.00
    },
    {
      name: "OnePlus 6",
      ram: 6,
      price: 39999.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    }
  ],
  SamSung: [
    {
      name: "OnePlus 7",
      ram: 6,
      price: 32999.00
    },
    {
      name: "OnePlus 7 Pro",
      ram: 6,
      price: 48999.00
    },
    {
      name: "OnePlus 6T",
      ram: 6,
      price: 37999.00
    },
    {
      name: "OnePlus 6",
      ram: 6,
      price: 39999.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    }
  ],
  Redmi:[
    {
      name: "OnePlus 7",
      ram: 6,
      price: 32999.00
    },
    {
      name: "OnePlus 7 Pro",
      ram: 6,
      price: 48999.00
    },
    {
      name: "OnePlus 6T",
      ram: 6,
      price: 37999.00
    },
    {
      name: "OnePlus 6",
      ram: 6,
      price: 39999.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    },
    {
      name: "OnePlus 5",
      ram: 8,
      price: 33000.00
    }
  ]
};
for (let mobileType in mobiles){
  var temp= wrapperSection.cloneNode(false);
  temp.classList.remove("mobile-wrapper-template");
  var header=mobileheader.cloneNode(true);
  header.classList.remove("mobile-header-template");
  header.innerText=mobileType;
  temp.appendChild(header);
  mobiles[mobileType].forEach(function(item) {
    var mobile = mobileTemplate.cloneNode(true);
    mobile.classList.remove("mobile-card-template");
    mobile.querySelector(".mobile-name").innerText = item["name"];
    mobile.querySelector(".mobile-ram").innerText = item["ram"];
    mobile.querySelector(".mobile-price").innerText = item["price"];
    temp.appendChild(mobile);
  });
  var page=mobile_pagination.cloneNode(true);
  var container_no=Math.ceil(mobiles[mobileType].length/6)
  for (let i=1;i<=container_no;i++){
    var pages=pagenum.cloneNode(true);
    pages.innerText=i;
    page.appendChild(pages);
  }
  temp.appendChild(page);
  mobileSection.appendChild(temp);
}








