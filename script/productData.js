var productData = [
    {
        image_url:
          "https://3.imimg.com/data3/BX/CS/MY-3792183/foundation-250x250.jpg",
        name: "Signature Make up foundation",
        catagory:"FOUNDATION",
        company:"Signature",
        price: "599",
        strikedoffprice: "2599",
      },
      {
        image_url:"https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg",
        name: "Baked Brick Lipstick",
        catagory:"Lipstick",
        company:"Lakme",
        price: "599",
        strikedoffprice: "2599",
      },
      {
        image_url:"https://3.imimg.com/data3/RK/XF/MY-3792183/01-250x250.jpg",
    name: "Lakme Lip Gloss",
    catagory:"Lip Gloss",
    company:"M.A.C",
      price: "599",
      strikedoffprice: "2599",
      },
      {
        image_url:"https://3.imimg.com/data3/NL/QG/MY-3792183/fruit-bleach-250x250.jpg",
    name: "Blue Heaven Fruit Bleach ",
    catagory:"Fruit Bleach",
    company:"Blue Heaven",
        price: "599",
        strikedoffprice: "2599",
      },
]
 
localStorage.setItem("productData",JSON.stringify(productData));