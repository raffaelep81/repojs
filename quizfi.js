var input = [
  {
    slug: "Start",
    text: "Q1/4<br />Who is<br /> the gift<br /> for?",
    connectsto: "her~ him",
    connectstext: "<img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611775768328' width='100%' />~ <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895310' width='100%' />", 
    toolTipText: "Her~ Him",
    rowNumber: 1,
    nostoId: ""
  },
  
  //For Her
  
  {
    slug: "her",
    text: "Q2/4<br />What <br/>role does <br/>she play<br/> in your<br/> heart?",
    connectsto: "her-love~ her-friend",
    connectstext: "<img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895316' width='100%' />~ <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895294' width='100%' />",
    toolTipText: "My Love~ My friend",
    rowNumber: 2,
    nostoId: ""
  },
  
  //love
  
  {
    slug: "her-love",
    text: "Q3/4<br />What<br /> kind of <br />woman<br /> is she?",
    connectsto: "her-love-ontrend~ her-love-luxurious",
    connectstext: "<img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895328' width='100%' />~ \n\
                   <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895317' width='100%' />",
    toolTipText: "On Trend~ Luxurious",
    rowNumber: 3,
    nostoId: ""
  },
  {
    slug: "her-love-luxurious",
    text: "Q4/4<br />Do you<br /> already<br /> have an <br />idea?",
    connectsto: "The End~ The End~ The End~ The End",
    connectstext: "<a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-her/my-love/luxurious/diamond-jewellery'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895307' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-her/my-love/luxurious/engagement-rings'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895309' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-her/my-love/luxurious/luxurious-watches'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895306' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-her/my-love/luxurious/'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895315' width='100%' /></a>",
    toolTipText: "Diamond Jewellery~ Engagement Rings~ Luxurious Watches~ Inspire Me",
    rowNumber: 4,
    nostoId: ""
  },
  {
    slug: "her-love-ontrend",
    text: "Q4/4<br />Do you<br /> already<br /> have an <br />idea?",
    connectsto: "The End~ The End~ The End~ The End",
    connectstext: "<a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-her/my-love/fashionable/jewellery'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895308' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-her/my-love/fashionable/engagement-rings'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895309' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-her/my-love/fashionable/fashion-watches'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895302' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-her/my-love/fashionable/'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895315' width='100%' /></a>",
    toolTipText: "Jewellery~ Engagement Rings~ Fashion Watches~ Inspire Me",
    rowNumber: 4,
    nostoId: ""
  },
  
  //friend
  
  {
    slug: "her-friend",
    text: "Q3/4<br />What<br /> kind of <br />woman<br /> is she?",
    connectsto: "her-friend-ontrend~ her-friend-luxurious ",
    connectstext: "<img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895328' width='100%' />~ \n\
                   <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895317' width='100%' />",
    toolTipText: "On Trend~ Luxurious",
    rowNumber: 3,
    nostoId: ""
  },
  
  {
    slug: "her-friend-luxurious",
    text: "Q4/4<br />Do you<br /> already<br /> have an <br />idea?",
    connectsto: "The End~ The End~ The End~ The End",
    connectstext: "<a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-her/my-friend/luxurious/diamond-jewellery'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895307' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-her/my-friend/luxurious/jewellery-brands'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895303' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-her/my-friend/luxurious/luxurious-watches'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895306' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-her/my-friend/luxurious/'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895315' width='100%' /></a>",
    toolTipText: "Diamond Jewellery~ Jewellery Brands~ Luxurious Watches~ Inspire Me",
    rowNumber: 4,
    nostoId: ""
  },
  {
    slug: "her-friend-ontrend",
    text: "Q4/4<br />Do you<br /> already<br /> have an <br />idea?",
    connectsto: "The End~ The End~ The End~ The End",
    connectstext: "<a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-her/my-friend/fashionable/earrings'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895304' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-her/my-friend/fashionable/pendants'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895305' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-her/my-friend/fashionable/fashion-watches'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895302' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-her/my-friend/fashionable/'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895315' width='100%' /></a>",
    toolTipText: "Earrings~ Pendants~ Fashion Watches~ Inspire Me",
    rowNumber: 4,
    nostoId: ""
  },
  
  
  //For Him
  
  
  {
    slug: "him",
    text: "Q2/4<br />What <br/>role does <br/>he play<br/> in your<br/> heart?",
    connectsto: "him-love~ him-friend",
    connectstext: "<img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895316' width='100%' />~ \n\
                   <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895294' width='100%' />",
    toolTipText: "My Love~ My friend",
    rowNumber: 2,
    nostoId: ""
  },
  
  //love
  
  {
    slug: "him-love",
    text: "Q3/4<br />What<br /> kind of <br />man<br /> is he?",
    connectsto: "him-love-ontrend~ him-love-luxurious",
    connectstext: "<img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895328' width='100%' />~ \n\
                   <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895317' width='100%' />",
    toolTipText: "On Trend~ Luxurious",
    rowNumber: 3,
    nostoId: ""
  },
  {
    slug: "him-love-luxurious",
    text: "Q4/4<br />Do you<br /> already<br /> have an <br />idea?",
    connectsto: "The End~ The End~ The End~ The End",
    connectstext: "<a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-him/my-love/luxurious/jewellery'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895295' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-him/my-love/luxurious/luxury-watches'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895312' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-him/my-love/luxurious/accessories'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895311' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-him/my-love/luxurious/'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895315' width='100%' /></a>",
    toolTipText: "Jewellery~ Luxurious Watches~ Accessories~ Inspire Me",
    rowNumber: 4,
    nostoId: ""
  },
  {
    slug: "him-love-ontrend",
    text: "Q4/4<br />Do you<br /> already<br /> have an <br />idea?",
    connectsto: "The End~ The End~ The End~ The End",
    connectstext: "<a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-him/my-love/fashionable/jewellery'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895295' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-him/my-love/fashionable/fashion-watches'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895314' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-him/my-love/fashionable/accessories'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895311' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-him/my-love/fashionable/'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895315' width='100%' /></a>",
    toolTipText: "Jewellery~ Fashion Watches~ Accessories~ Inspire Me",
    rowNumber: 4,
    nostoId: ""
  },
  
  //friend
  
  {
    slug: "him-friend",
    text: "Q3/4<br />What<br /> kind of <br />man<br /> is he?",
    connectsto: "him-friend-ontrend~ him-friend-luxurious",
    connectstext: "<img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895328' width='100%' />~ \n\
                   <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895317' width='100%' />",
    toolTipText: "On Trend~ Luxurious",
    rowNumber: 3,
    nostoId: ""
  },
  {
    slug: "him-friend-luxurious",
    text: "Q4/4<br />Do you<br /> already<br /> have an <br />idea?",
    connectsto: "The End~ The End~ The End~ The End",
    connectstext: "<a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-him/my-friend/luxurious/jewellery'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895295' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-him/my-friend/luxurious/luxury-watches'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895312' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-him/my-friend/luxurious/accessories'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895311' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-him/my-friend/luxurious/'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895315' width='100%' /></a>",
    toolTipText: "Jewellery~ Luxurious Watches~ Accessories~ Inspire Me",
    rowNumber: 4,
    nostoId: ""
  },
  {
    slug: "him-friend-ontrend",
    text: "Q4/4<br />Do you<br /> already<br /> have an <br />idea?",
    connectsto: "The End~ The End~ The End~ The End",
    connectstext: "<a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-him/my-friend/fashionable/jewellery'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895295' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-him/my-friend/fashionable/fashion-watches'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895314' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-him/my-friend/fashionable/accessories'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895311' width='100%' /></a>~ \n\
                   <a href='https://www.fields.ie/gifts/occasion/valentines/gift-guide/for-him/my-friend/fashionable/'>\n\
                       <img src='https://d21m4dsqdd3b9h.cloudfront.net/magento-207b9a1a/onsiteContent/1611774895315' width='100%' /></a>",
    toolTipText: "Jewellery~ Fashion Watches~ Accessories~ Inspire Me",
    rowNumber: 4,
    nostoId: ""
  },
  
];