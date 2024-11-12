"use strict";(self.webpackChunkcommerce_services=self.webpackChunkcommerce_services||[]).push([[865],{71971:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return o},default:function(){return p}});var a=t(87462),i=t(45987),r=(t(15007),t(64983)),m=t(91515);const d=["components"],o={},l={_frontmatter:o},s=m.Z;function p(e){let{components:n}=e,t=(0,i.Z)(e,d);return(0,r.mdx)(s,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"product-recommendations-sdk"},"Product Recommendations SDK"),(0,r.mdx)("p",null,"If you need to programmatically access product recommendations for your storefront, use the ",(0,r.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/@magento/recommendations-js-sdk"},"Product Recommendations JavaScript SDK"),". The SDK is a web services API wrapper that allows you to fetch recommendations programmatically in the browser. With the SDK, you do not need to manage the full lifecycle or understand the complexity of the web services API."),(0,r.mdx)("h2",{id:"installing"},"Installing"),(0,r.mdx)("h3",{id:"dependencies"},"Dependencies"),(0,r.mdx)("p",null,"Before installing the Product Recommendations JavaScript SDK, make sure you have installed the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/data-services-eap/tree/master/DataServices/docs/README.md#how-to-enroll"},"DataServices Module")," and the ",(0,r.mdx)("a",{parentName:"p",href:"catalog-saas-export-module.md"},"Catalog SaaS Export module"),"."),(0,r.mdx)("h3",{id:"product-recommendations-javascript-sdk"},"Product Recommendations JavaScript SDK"),(0,r.mdx)("p",null,"This SDK can be pulled down from a CDN or installed as a module from NPM."),(0,r.mdx)("h4",{id:"cdn"},"CDN"),(0,r.mdx)("p",null,"The SDK is published on a CDN in versioned directories."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-html"},'<script src="https://magento-recs-sdk.adobe.net/v1/index.js"><\/script>\n')),(0,r.mdx)("h4",{id:"npm"},"NPM"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install @magento/recommendations-js-sdk\n")),(0,r.mdx)("h2",{id:"initializing-the-client"},"Initializing the client"),(0,r.mdx)("p",null,"To programmatically fetch and render recommendations on your web site, you must first initialize your client by calling ",(0,r.mdx)("inlineCode",{parentName:"p"},"new RecommendationsClient()"),"."),(0,r.mdx)("h3",{id:"example-usage"},"Example usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"const client = new RecommendationsClient()\n")),(0,r.mdx)("p",null,"When you initialize the client, your store's ",(0,r.mdx)("inlineCode",{parentName:"p"},"environmentId"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"instanceId"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"storeCode"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"storeViewCode"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"websiteCode")," values are automatically retrieved by the SDK."),(0,r.mdx)("h2",{id:"registering-recommendations"},"Registering recommendations"),(0,r.mdx)("p",null,"With the client initialized, register the recommendations you want by calling the ",(0,r.mdx)("inlineCode",{parentName:"p"},"client.register()")," function and specifying the recommendation type."),(0,r.mdx)("h3",{id:"example-usage-1"},"Example usage"),(0,r.mdx)("p",null,"The following example registers a recommendation with a type of ",(0,r.mdx)("inlineCode",{parentName:"p"},"most-viewed"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'client.register({\n    name: "Most Viewed Products",\n    type: "most-viewed",\n})\n')),(0,r.mdx)("p",null,"The following example shows how to filter a recommendation that has a base price of less than \\$200."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'client.register({\n    name: "Most Viewed, Under $200",\n    type: "most-viewed",\n    filter: "prices.maximum.regular: <200",\n})\n')),(0,r.mdx)("h3",{id:"attributes"},"Attributes"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"client.register()")," function contains the following inputs."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Input"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:null},"The user-specified name of the recommendation unit")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"type")),(0,r.mdx)("td",{parentName:"tr",align:null},"Options: ",(0,r.mdx)("inlineCode",{parentName:"td"},"most-viewed"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"most-purchased"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"most-added-to-cart"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"trending"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"just-for-you"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"viewed-viewed"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"viewed-bought"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"bought-bought"),", and ",(0,r.mdx)("inlineCode",{parentName:"td"},"more-like-this"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"filter")),(0,r.mdx)("td",{parentName:"tr",align:null},"String used to filter the results. If you are setting a filter based on price, you must use the base currency specified for your store. Currency conversion is currently not supported when filtering")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"search")),(0,r.mdx)("td",{parentName:"tr",align:null},"Defines the search criteria for your custom recommendation. This input contains the ",(0,r.mdx)("inlineCode",{parentName:"td"},"signal")," attribute. In non-custom recommendations, the values specified in this attribute are the types defined above. However, in a custom recommendation, the value is ",(0,r.mdx)("inlineCode",{parentName:"td"},'"query"'),". ",(0,r.mdx)("inlineCode",{parentName:"td"},"search")," might also contain a ",(0,r.mdx)("inlineCode",{parentName:"td"},"key")," attribute, such as ",(0,r.mdx)("inlineCode",{parentName:"td"},'"categories:(159 OR 377)"'),". The ",(0,r.mdx)("inlineCode",{parentName:"td"},"key")," attribute is not required by all custom recommendations. Some types require you to be on a product page, which would mean you know the current SKU. Other types are more broad, and do not require you to have any specific filter data as they are site wide. Site wide types do not require the ",(0,r.mdx)("inlineCode",{parentName:"td"},"key")," attribute. Possible ",(0,r.mdx)("inlineCode",{parentName:"td"},"key")," values are: ",(0,r.mdx)("inlineCode",{parentName:"td"},"user_purchase_history"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"cart"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"current_pdp"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"user_view_history"),", and ",(0,r.mdx)("inlineCode",{parentName:"td"},"<custom query>"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"boost")),(0,r.mdx)("td",{parentName:"tr",align:null},"User-specified value that indicates the rank of a specific recommendation")))),(0,r.mdx)("h4",{id:"filtering"},"Filtering"),(0,r.mdx)("p",null,"Currently, you can filter on categories and prices."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Category")),(0,r.mdx)("p",null,"To include specific categories:"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"categories: (<url-key-1> OR <url-key-2> OR ...)")),(0,r.mdx)("p",null,"To exclude specific categories (note the ",(0,r.mdx)("inlineCode",{parentName:"p"},"-")," at the beginning):"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"-categories: (<url-key-1> OR <url-key-2> OR ...)")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Prices")),(0,r.mdx)("p",null,"To filter based on a specific price point (note that these filters use ",(0,r.mdx)("inlineCode",{parentName:"p"},"$50")," as the price point):"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"prices.maximum.final: <50"),"\n",(0,r.mdx)("inlineCode",{parentName:"p"},"prices.maximum.regular: <=50"),"\n",(0,r.mdx)("inlineCode",{parentName:"p"},"prices.minimum.final: >50"),"\n",(0,r.mdx)("inlineCode",{parentName:"p"},"prices.minimum.regular: >=50")),(0,r.mdx)("h3",{id:"registering-custom-recommendations"},"Registering custom recommendations"),(0,r.mdx)("p",null,"Instead of using one of the built-in types, the SDK provides a way to define a custom type by calling the ",(0,r.mdx)("inlineCode",{parentName:"p"},"client.register()")," function and passing in specific search criteria. For example, you can pass in a search query, such as ",(0,r.mdx)("inlineCode",{parentName:"p"},'"categories:(159 OR 377)"')," to register a recommendation that has a category ID of either ",(0,r.mdx)("inlineCode",{parentName:"p"},"159")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"377"),"."),(0,r.mdx)("h2",{id:"fetching-recommendations"},"Fetching recommendations"),(0,r.mdx)("p",null,"You can fetch the registered recommendations by calling the ",(0,r.mdx)("inlineCode",{parentName:"p"},"client.fetch()")," function."),(0,r.mdx)("h3",{id:"example-usage-2"},"Example usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"const {status, data} = await client.fetch()\n")),(0,r.mdx)("p",null,"The following shows an example of the fetched recommendations. This example is intentionally truncated."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "units": [\n        {\n            "unitId": "45687",\n            "unitName": "test-recs",\n            "searchTime": 10,\n            "totalResults": 3,\n            "results": [\n                {\n                    "rank": 1,\n                    "score": 0.38299224,\n                    "sku": "35123",\n                    "name": "Pursuit Lumaflex&trade; Tone Band",\n                    "shortDescription": null,\n                    "type": "simple",\n                    "categories": [\n                        "gear",\n                        "gear/fitness-equipment"\n                    ],\n                    "weight": 0.0,\n                    "weightType": null,\n                    "currency": "USD",\n                    "image": {\n                        "label": "",\n                        "url": "http://magento2sc.local/pub/media/catalog/product/cache/fbb00452bcc1f45faf89264b683c708f/u/g/ug02-bk-0.jpg"\n                    },\n                    "smallImage": {\n                        "label": "",\n                        "url": "http://magento2sc.local/pub/media/catalog/product/cache/fbb00452bcc1f45faf89264b683c708f/u/g/ug02-bk-0.jpg"\n                    },\n                    "thumbnailImage": null,\n                    "swatchImage": null,\n                    "parents": [],\n                    "url": "http://magento2sc.local/pursuit-lumaflex-trade-tone-band.html",\n                    "prices": {\n                        "maximum": {\n                            "finalAdjustments": [],\n                            "final": 16.0,\n                            "regular": 16.0,\n                            "regularAdjustments": []\n                        },\n                        "minimum": {\n                            "finalAdjustments": [],\n                            "final": 16.0,\n                            "regular": 16.0,\n                            "regularAdjustments": []\n                        }\n                    }\n                }\n...\n')),(0,r.mdx)("h3",{id:"attributes-1"},"Attributes"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"client.fetch()")," function contains the following inputs."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Input"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"ids")),(0,r.mdx)("td",{parentName:"tr",align:null},"Specifies the IDs of the recommendations. If unspecified, all recommendations are fetched; otherwise, only those recommendations you specify are fetched")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"limit")),(0,r.mdx)("td",{parentName:"tr",align:null},"(Optional) Specifies the number of recommendations to fetch. The maximum is 25")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"offset")),(0,r.mdx)("td",{parentName:"tr",align:null},"(Optional) Specifies where in the recommendations array to begin fetching the recommendations")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"currentSku")),(0,r.mdx)("td",{parentName:"tr",align:null},"The SKU of the product on the current product page")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"cartSkus")),(0,r.mdx)("td",{parentName:"tr",align:null},"The SKUs of the products within the cart")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"userViewHistorySkus")),(0,r.mdx)("td",{parentName:"tr",align:null},"List of SKUs the user recently viewed")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"userViewHistory")),(0,r.mdx)("td",{parentName:"tr",align:null},"List of recent user views")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"userPurchaseHistory")),(0,r.mdx)("td",{parentName:"tr",align:null},"List of recent user purchases")))),(0,r.mdx)("h2",{id:"injecting-recommendations-on-your-web-site"},"Injecting recommendations on your web site"),(0,r.mdx)("p",null,"To display recommendations on your web site, you need to define a template for the recommendation then render the recommendation on the web site."),(0,r.mdx)("h3",{id:"defining-a-template"},"Defining a template"),(0,r.mdx)("p",null,"The SDK works with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"mustache.js")," template."),(0,r.mdx)("h3",{id:"rendering-a-recommendation-on-your-web-site"},"Rendering a recommendation on your web site"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"client.render()")," function creates a string of HTML you can then place on your web site."),(0,r.mdx)("h3",{id:"attributes-2"},"Attributes"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"client.render()")," function contains the following inputs."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Input"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"template")),(0,r.mdx)("td",{parentName:"tr",align:null},"A ",(0,r.mdx)("a",{parentName:"td",href:"https://github.com/janl/mustache.js"},"mustache.js")," HTML template string. Uses reserved variable names such as ",(0,r.mdx)("inlineCode",{parentName:"td"},"{{#rec-items}} : {{url}}, {{image}}, {{title}}, {{price}}"),", which are ",(0,r.mdx)("inlineCode",{parentName:"td"},"keys")," returned in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"unit")," object")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"unit")),(0,r.mdx)("td",{parentName:"tr",align:null},"An object returned by the ",(0,r.mdx)("inlineCode",{parentName:"td"},"client.fetch")," method that contains the ",(0,r.mdx)("inlineCode",{parentName:"td"},"results"))))),(0,r.mdx)("h2",{id:"using-the-sdk-from-start-to-finish"},"Using the SDK from start to finish"),(0,r.mdx)("p",null,"The following example shows a sample workflow beginning with importing the SDK to rendering the recommendation."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'import RecommendationsClient from "@magento/recommendations-js-sdk"\n\n// create the client\nconst client = new RecommendationsClient()\n\n// register pre-built recommendation unit\nclient.register({\n    name: "Most Viewed Products",\n    type: "most-viewed",\n})\n\n// retrieve recommendations for all units\nconst {status, data} = await client.fetch()\n\n// render the markup\nconst markup = client.render({\n    unit: data.units[0],\n})\n\n// insert the markup\ndocument.body.insertAdjacentHTML("beforeend", markup)\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-product-recommendations-index-md-56742d10f6ccd6256844.js.map