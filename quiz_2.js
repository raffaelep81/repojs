var input = [
  {
    slug: "Start",
    text: "Q1/4<br />Who is<br /> the gift<br /> for?",
    connectsto: "her~ him",
    connectstext: "<img src='img/fh-her.png' width='100%' />~ <img src='img/fh-him.png' width='100%' />", 
    toolTipText: "Her~ Him",
    rowNumber: 1,
    nostoId: ""
  },
  
  //For Her
  
  {
    slug: "her",
    text: "Q2/4<br />What <br/>role does <br/>she play<br/> in your<br/> heart?",
    connectsto: "her-love~ her-friend",
    connectstext: "<img src='img/fh-love.png' width='100%' />~ <img src='img/fh-friend.png' width='100%' />",
    toolTipText: "My Love~ My friend",
    rowNumber: 2,
    nostoId: ""
  },
  
  //love
  
  {
    slug: "her-love",
    text: "Q3/4<br />What<br /> kind of <br />woman<br /> is she?",
    connectsto: "her-love-ontrend~ her-love-luxurious",
    connectstext: "<img src='img/fh-ontrend.png' width='100%' />~ \n\
                   <img src='img/fh-luxurious.png' width='100%' />",
    toolTipText: "On Trend~ Luxurious",
    rowNumber: 3,
    nostoId: ""
  },
  {
    slug: "her-love-luxurious",
    text: "Q4/4<br />Do you<br /> already<br /> have an <br />idea?",
    connectsto: "The End~ The End~ The End~ The End",
    connectstext: "<a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-her/my-love/luxurious/diamond-jewellery'>\n\
                       <img src='img/fh-her-love-lux-diamonjewellery.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-her/my-love/luxurious/engagement-rings'>\n\
                       <img src='img/fh-her-love-luxontrend-engagementrings.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-her/my-love/luxurious/luxurious-watches'>\n\
                       <img src='img/fh-her-lovefriend-lux-luxuriouswatches.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-her/my-love/luxurious/'>\n\
                       <img src='img/fh-inspireme.png' width='100%' /></a>",
    toolTipText: "Diamond Jewellery~ Engagement Rings~ Luxurious Watches~ Inspire Me",
    rowNumber: 4,
    nostoId: ""
  },
  {
    slug: "her-love-ontrend",
    text: "Q4/4<br />Do you<br /> already<br /> have an <br />idea?",
    connectsto: "The End~ The End~ The End~ The End",
    connectstext: "<a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-her/my-love/fashionable/jewellery'>\n\
                       <img src='img/fh-her-love-ontrend-jewellery.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-her/my-love/fashionable/engagement-rings'>\n\
                       <img src='img/fh-her-love-luxontrend-engagementrings.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-her/my-love/fashionable/fashion-watches'>\n\
                       <img src='img/fh-her-lovefriend-ontrend-fashionwatches.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-her/my-love/fashionable/'>\n\
                       <img src='img/fh-inspireme.png' width='100%' /></a>",
    toolTipText: "Jewellery~ Engagement Rings~ Fashion Watches~ Inspire Me",
    rowNumber: 4,
    nostoId: ""
  },
  
  //friend
  
  {
    slug: "her-friend",
    text: "Q3/4<br />What<br /> kind of <br />woman<br /> is she?",
    connectsto: "her-friend-ontrend~ her-friend-luxurious ",
    connectstext: "<img src='img/fh-ontrend.png' width='100%' />~ \n\
                   <img src='img/fh-luxurious.png' width='100%' />",
    toolTipText: "On Trend~ Luxurious",
    rowNumber: 3,
    nostoId: ""
  },
  
  {
    slug: "her-friend-luxurious",
    text: "Q4/4<br />Do you<br /> already<br /> have an <br />idea?",
    connectsto: "The End~ The End~ The End~ The End",
    connectstext: "<a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-her/my-friend/luxurious/diamond-jewellery'>\n\
                       <img src='img/fh-her-love-lux-diamonjewellery.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-her/my-friend/luxurious/jewellery-brands'>\n\
                       <img src='img/fh-her-friend-lux-jewellerybrand.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-her/my-friend/luxurious/luxurious-watches'>\n\
                       <img src='img/fh-her-lovefriend-lux-luxuriouswatches.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-her/my-friend/luxurious/'>\n\
                       <img src='img/fh-inspireme.png' width='100%' /></a>",
    toolTipText: "Diamond Jewellery~ Jewellery Brands~ Luxurious Watches~ Inspire Me",
    rowNumber: 4,
    nostoId: ""
  },
  {
    slug: "her-friend-ontrend",
    text: "Q4/4<br />Do you<br /> already<br /> have an <br />idea?",
    connectsto: "The End~ The End~ The End~ The End",
    connectstext: "<a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-her/my-friend/fashionable/earrings'>\n\
                       <img src='img/fh-her-friend-ontrend-earrings.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-her/my-friend/fashionable/pendants'>\n\
                       <img src='img/fh-her-friend-ontrend-pendants.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-her/my-friend/fashionable/fashion-watches'>\n\
                       <img src='img/fh-her-lovefriend-ontrend-fashionwatches.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-her/my-friend/fashionable/'>\n\
                       <img src='img/fh-inspireme.png' width='100%' /></a>",
    toolTipText: "Earrings~ Pendants~ Fashion Watches~ Inspire Me",
    rowNumber: 4,
    nostoId: ""
  },
  
  
  //For Him
  
  
  {
    slug: "him",
    text: "Q2/4<br />What <br/>role does <br/>he play<br/> in your<br/> heart?",
    connectsto: "him-love~ him-friend",
    connectstext: "<img src='img/fh-love.png' width='100%' />~ \n\
                   <img src='img/fh-friend.png' width='100%' />",
    toolTipText: "My Love~ My friend",
    rowNumber: 2,
    nostoId: ""
  },
  
  //love
  
  {
    slug: "him-love",
    text: "Q3/4<br />What<br /> kind of <br />man<br /> is he?",
    connectsto: "him-love-ontrend~ him-love-luxurious",
    connectstext: "<img src='img/fh-ontrend.png' width='100%' />~ \n\
                   <img src='img/fh-luxurious.png' width='100%' />",
    toolTipText: "On Trend~ Luxurious",
    rowNumber: 3,
    nostoId: ""
  },
  {
    slug: "him-love-luxurious",
    text: "Q4/4<br />Do you<br /> already<br /> have an <br />idea?",
    connectsto: "The End~ The End~ The End~ The End",
    connectstext: "<a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-him/my-love/luxurious/jewellery'>\n\
                       <img src='img/fh-love-ontrendlux-jewellery.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-him/my-love/luxurious/luxury-watches'>\n\
                       <img src='img/fh-him-lovefriend-lux-luxurywatch.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-him/my-love/luxurious/accessories'>\n\
                       <img src='img/fh-him-friendlove-ontrendlux-accessories.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-him/my-love/luxurious/'>\n\
                       <img src='img/fh-inspireme.png' width='100%' /></a>",
    toolTipText: "Jewellery~ Luxurious Watches~ Accessories~ Inspire Me",
    rowNumber: 4,
    nostoId: ""
  },
  {
    slug: "him-love-ontrend",
    text: "Q4/4<br />Do you<br /> already<br /> have an <br />idea?",
    connectsto: "The End~ The End~ The End~ The End",
    connectstext: "<a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-him/my-love/fashionable/jewellery'>\n\
                       <img src='img/fh-love-ontrendlux-jewellery.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-him/my-love/fashionable/fashion-watches'>\n\
                       <img src='img/fh-him-lovefriend-ontrend-fashionwatch.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-him/my-love/fashionable/accessories'>\n\
                       <img src='img/fh-him-friendlove-ontrendlux-accessories.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-him/my-love/fashionable/'>\n\
                       <img src='img/fh-inspireme.png' width='100%' /></a>",
    toolTipText: "Jewellery~ Fashion Watches~ Accessories~ Inspire Me",
    rowNumber: 4,
    nostoId: ""
  },
  
  //friend
  
  {
    slug: "him-friend",
    text: "Q3/4<br />What<br /> kind of <br />man<br /> is he?",
    connectsto: "him-friend-ontrend~ him-friend-luxurious",
    connectstext: "<img src='img/fh-ontrend.png' width='100%' />~ \n\
                   <img src='img/fh-luxurious.png' width='100%' />",
    toolTipText: "On Trend~ Luxurious",
    rowNumber: 3,
    nostoId: ""
  },
  {
    slug: "him-friend-luxurious",
    text: "Q4/4<br />Do you<br /> already<br /> have an <br />idea?",
    connectsto: "The End~ The End~ The End~ The End",
    connectstext: "<a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-him/my-friend/luxurious/jewellery'>\n\
                       <img src='img/fh-friend-ontrendlux-jewellery.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-him/my-friend/luxurious/luxury-watches'>\n\
                       <img src='img/fh-him-lovefriend-lux-luxurywatch.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-him/my-friend/luxurious/accessories'>\n\
                       <img src='img/fh-him-friendlove-ontrendlux-accessories.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-him/my-friend/luxurious/'>\n\
                       <img src='img/fh-inspireme.png' width='100%' /></a>",
    toolTipText: "Jewellery~ Luxurious Watches~ Accessories~ Inspire Me",
    rowNumber: 4,
    nostoId: ""
  },
  {
    slug: "him-friend-ontrend",
    text: "Q4/4<br />Do you<br /> already<br /> have an <br />idea?",
    connectsto: "The End~ The End~ The End~ The End",
    connectstext: "<a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-him/my-friend/fashionable/jewellery'>\n\
                       <img src='img/fh-friend-ontrendlux-jewellery.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-him/my-friend/fashionable/fashion-watches'>\n\
                       <img src='img/fh-him-lovefriend-ontrend-fashionwatch.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-him/my-friend/fashionable/accessories'>\n\
                       <img src='img/fh-him-friendlove-ontrendlux-accessories.png' width='100%' /></a>~ \n\
                   <a href='https://www.fraserhart.co.uk/gifts/occasion/valentines/gift-guide/for-him/my-friend/fashionable/'>\n\
                       <img src='img/fh-inspireme.png' width='100%' /></a>",
    toolTipText: "Jewellery~ Fashion Watches~ Accessories~ Inspire Me",
    rowNumber: 4,
    nostoId: ""
  },
  
];