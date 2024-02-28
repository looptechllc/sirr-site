// import images 
import img1 from "../assets/images/img1.png"
import img2 from "../assets/images/img2.png"
import img3 from "../assets/images/img3.png"
import img4 from "../assets/images/img4.png"
import img5 from "../assets/images/img5.png"
import img6 from "../assets/images/img6.png"
import img7 from "../assets/images/img7.png"
import img8 from "../assets/images/img8.png"
import img9 from "../assets/images/img9.png"
import img10 from "../assets/images/img10.png"
import img11 from "../assets/images/img11.png"
import img12 from "../assets/images/img12.png"
import bg1 from "../assets/images/aboutVideoBgImg.jpg"
import bg2 from "../assets/images/contactPageBgImg.jpg"
import bg3 from "../assets/images/prDetailsBgImg.jpg"
import bg4 from "../assets/images/ourCatalogImg.jpg"
import bg5 from "../assets/images/searchBgImg.jpg"
import aboutOurCatalogImg from "../assets/images/ourCatalogImg.jpg"


import StoryBgImg from "../assets/images/MostlyStoryCakeStoreBgImg.svg"


// main slider data
export const MainSliderDatas=[
	{
		id:1,
		image:bg1,
		title:"Qarışıq Tortlar",
		description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia fuga consequuntur facere incidunt nulla ab voluptatibus maiores, pariatur, eaque saepe porro iusto corrupti est blanditiis error sequi possimus placeat earum?"
	},
	{  
		id:2,
		image:bg2,
		title:"Meyvəli Tortlar",
		description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia fuga consequuntur facere incidunt nulla ab voluptatibus maiores, pariatur, eaque saepe porro iusto corrupti est blanditiis error sequi possimus placeat earum?"
	},
	{
		id:3,
		image:bg3,
		title:"Şokaladlı Tortlar",
		description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia fuga consequuntur facere incidunt nulla ab voluptatibus maiores, pariatur, eaque saepe porro iusto corrupti est blanditiis error sequi possimus placeat earum?"
	},
	{
		id:4,
		image:bg4,  
		title:"Yüngül Tortlar",
		description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia fuga consequuntur facere incidunt nulla ab voluptatibus maiores, pariatur, eaque saepe porro iusto corrupti est blanditiis error sequi possimus placeat earum?"
	},
	{
		id:5,
		image:bg5,  
		title:"Balli Tortlar",
		description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia fuga consequuntur facere incidunt nulla ab voluptatibus maiores, pariatur, eaque saepe porro iusto corrupti est blanditiis error sequi possimus placeat earum?"
	},
]

export const DesertsSliderLeftDatas=[
	{
		id:1,
		image:"https://www.sendbestgift.com/media/images/product/fe9166071e62bea605816e51f8b436df.webp"
	},
	{
		id:2,
		image:"https://images.tokopedia.net/img/cache/250-square/VqbcmM/2022/1/14/6244879b-dbf6-4051-958e-ad5884622af2.jpg?ect=4g"
	},
	{
		id:3,
		image:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/89/72/z1waTloRRUeZkdkAPS7A_rvcc1.jpg"
	},
	{
		id:4,
		image:"https://miakouppa.com/wp-content/uploads/2023/02/Greek-chocolate-cake-edited-11-1024x681.jpg"
	},
]

export const DesertsSliderCenterDatas=
	{
		id:1,
		title:"Deserts",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam et est enim dignissimos inventore ratione facilis! Eos, voluptatum! Delectus iusto voluptatem ea maiores ut voluptate consectetur explicabo et nostrum animi?"
	}

export const DesertsSliderRightDatas=[
	{
		id:1,
		image:"https://foodmeanderings.com/wp-content/uploads/2017/08/Red-Velvet-Ice-Cream-Cake-Recipe-1-360x480.jpg"
	},
	{
		id:2,
		image:"https://recipes.net/wp-content/uploads/2023/07/rainbow-cake-recipe_6e8002c9539c0b50cf2249863ae57187.jpeg"
	},
	{
		id:3,
		image:"https://assets.bonappetit.com/photos/57afbf181b33404414975e84/master/pass/chocolate-hazelnut-cake-with-praline-chocolate-crunch.jpg"
	},
	{
		id:4,
		image:"https://minimalistbaker.com/wp-content/uploads/2015/03/AMAZING-Vegan-Chocolate-Hazelnut-Cake-1-bowl-SUPER-RICH-and-glutenfree-vegan.jpg"
	},
]
 
export const FavoriteItemsCategoryDatas=[
	"Bulka","Tort","Milli Sirniyatlar","Desertlər","Paxlavalar","Keks", "Piroqlar","Peraskiler","Bulka","Ruletler","Peceniyalar", "Bişmələr",
]

export const FavoriteItemsDatas=[
	{
		id:1,
		CoverImage:img1,
		title:"Şokoladlı-albalı tort Şokoladlı-albalı tort dfsfdsfsfsfsdfdsfsf",
		slug:"sokoladli-albali-tort",
		quantity:"1",
		unit:"kq",
		price:"20.99",
		description:"Flour, butter, eggs, sugar, milk chocolate, black chocolate,boiled condensed milk, vegetable cream, baking powder,vanilla, emulsifier, water...",
		gallery:[img2,img3,img4,img5,img7]
	},
	{
		id:2,
		CoverImage:img2,
		title:"Meyveli tort",
		slug:"meyveli-tort",
		quantity:"1",
		unit:"kq",
		price:"87.50",
		description:"Flour, butter, eggs, sugar, milk chocolate, black chocolate,boiled condensed milk, vegetable cream, baking powder,vanilla, emulsifier, water...",
		gallery:[img8,img6,img11,img5,img7]
	},
	{
		id:3,
		CoverImage:img3,
		title:"Cemli tort",
		slug:"cemli-tort",
		quantity:"1",
		unit:"kq",
		price:"32.99",
		description:"Flour, butter, eggs, sugar, milk chocolate, black chocolate,boiled condensed milk, vegetable cream, baking powder,vanilla, emulsifier, water...",
		gallery:[img6,img2,img11,img9,img1]
	},
	{
		id:4,
		CoverImage:img4,
		title:"Napaleon tort",
		slug:"napaleon-tort",
		quantity:"1",
		unit:"kq",
		price:"120.40",
		description:"Flour, butter, eggs, sugar, milk chocolate, black chocolate,boiled condensed milk, vegetable cream, baking powder,vanilla, emulsifier, water...",
		gallery:[img5,img3,img12,img6,img10]
	},
	{
		id:5,
		CoverImage:img5,
		title:"Qarisiq tort",
		slug:"qarisiq-tort",
		quantity:"1",
		unit:"kq",
		price:"91.99",
		description:"Flour, butter, eggs, sugar, milk chocolate, black chocolate,boiled condensed milk, vegetable cream, baking powder,vanilla, emulsifier, water...",
		gallery:[img6,img8,img4,img12,img9]
	},
	{
		id:6,
		CoverImage:img6,
		title:"Qozlu tort",
		slug:"qozlu-tort",
		quantity:"1",
		unit:"kq",
		price:"78.00",
		description:"Flour, butter, eggs, sugar, milk chocolate, black chocolate,boiled condensed milk, vegetable cream, baking powder,vanilla, emulsifier, water...",
		gallery:[img11,img5,img4,img1,img8]
	},
	{
		id:7,
		CoverImage:img7,
		title:"Balli  tort",
		slug:"balli-tort",
		quantity:"1",
		unit:"kq",
		price:"20.30",
		description:"Flour, butter, eggs, sugar, milk chocolate, black chocolate,boiled condensed milk, vegetable cream, baking powder,vanilla, emulsifier, water...",
		gallery:[img5,img3,img1,img10,img6]
	},
	{
		id:8,
		CoverImage:img8,
		title:"Yungul tort",
		slug:"yungul-tort",
		quantity:"1",
		unit:"kq",
		price:"20.99",
		description:"Flour, butter, eggs, sugar, milk chocolate, black chocolate,boiled condensed milk, vegetable cream, baking powder,vanilla, emulsifier, water...",
		gallery:[img4,img1,img3,img9,img2]
	},
]

export const MostlyStoryCakeStoreDatas={
	bgImg:StoryBgImg,
	mainTitle:"Mostly story cake store",
	detailedTitle:"We cook everything fresh from own ovens short cake item!",
	description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default mode"
}

export const SocialMediaSliderDatas=[img12,img11,img10,img9,img8,img7,img6,img12,img11,img10,img9,img8,img7,img6]
	
export const aboutOurCatalogDatas={
	detailedTitle:"Our catalog",
	description:"It is a long established fact that a reader will be distracted by the readable content of a page whenIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use",
	image:aboutOurCatalogImg
}

export const contactTextImgDatas={
	mainTitle:"Mostly story cake store",
	detailedTitle:"We cook everything fresh from own ovens short cake item!",
	description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default mode",
	image:aboutOurCatalogImg
}

export const BranchesDatas=[
	{id:1,
	title:"Office at Narimanov",
	working_hours:"Hər zaman açıq",
	address:"Heydər Əliyev prospekti 68",
	phones:"070 266 16 26/012 566 16 20/070 266 16 26/012 566 16 20",
	}
	,{id:2,
	title:"Office at Inshaatchilar",
	"working_hours":null,
	address:"Hüseyn Cavid prospekti 47F",
	phones:"070 338 51 50/012 538 51 50",
	},
	{id:3,
	title:"Office at Elmlar",
	"working_hours":null,
	address:"İnşaatçılar prospekti 28",
	phones:"070 610 89 00/012 510 89 00",
	},

]
