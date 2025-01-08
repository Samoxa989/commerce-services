"use strict";(self.webpackChunkcommerce_services=self.webpackChunkcommerce_services||[]).push([[7672],{41460:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return s}});var n=a(58168),d=a(80045),r=(a(88763),a(15680)),i=a(83407);const o=["components"],l={},m={_frontmatter:l},p=i.A;function s(e){let{components:t}=e,a=(0,d.A)(e,o);return(0,r.mdx)(p,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"using-the-data-ingestion-api"},"Using the data ingestion API"),(0,r.mdx)("p",null,"Use the data ingestion API to create and manage product data for your ecommerce catalog. Data includes products, product attribute metadata, prices books, and prices."),(0,r.mdx)("h2",{id:"endpoints"},"Endpoints"),(0,r.mdx)("p",null,"Send all Data Ingestion requests to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"https://commerce.adobe.io/feeds")," endpoint. For details about using the API, see the ",(0,r.mdx)("a",{parentName:"p",href:"api-reference.md"},"API Reference"),"."),(0,r.mdx)("h2",{id:"authentication"},"Authentication"),(0,r.mdx)("p",null,"Add authentication information here."),(0,r.mdx)("h3",{id:"headers"},"Headers"),(0,r.mdx)("p",null,"Headers list should be present in each Data Ingestion API call"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Header name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Content-Type")),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"Media type of the resource. Accepted value: ",(0,r.mdx)("inlineCode",{parentName:"td"},"application/json"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"x-api-key")),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"Public API Key. TODO: add link docs according to ",(0,r.mdx)("a",{parentName:"td",href:"https://wiki.corp.adobe.com/display/ACDS/Feed+Ingestion+Service+-+notes+for+public+docs#FeedIngestionServicenotesforpublicdocs-RegistertenantAPIkeys"},"https://wiki.corp.adobe.com/display/ACDS/Feed+Ingestion+Service+-+notes+for+public+docs#FeedIngestionServicenotesforpublicdocs-RegistertenantAPIkeys"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"x-gw-signature")),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"JWT generated for Public API key. TODO: add link to docs according to ",(0,r.mdx)("a",{parentName:"td",href:"https://wiki.corp.adobe.com/display/ACDS/Feed+Ingestion+Service+-+notes+for+public+docs#FeedIngestionServicenotesforpublicdocs-ObtainaJWTtokenforyourrequest"},"https://wiki.corp.adobe.com/display/ACDS/Feed+Ingestion+Service+-+notes+for+public+docs#FeedIngestionServicenotesforpublicdocs-ObtainaJWTtokenforyourrequest"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Content-Encoding")),(0,r.mdx)("td",{parentName:"tr",align:null},"No"),(0,r.mdx)("td",{parentName:"tr",align:null},"Use this header only if the payload is compressed with gzip. Accepted value: ",(0,r.mdx)("inlineCode",{parentName:"td"},"gzip"))))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)("p",null,"Use the following examples to learn about the basic scenarios for using the Data Ingestion API."),(0,r.mdx)("p",null,"The Example below demonstrate how you can create your catalog in Commerce Services.\nThis example will register 4 products, category tree, product attributes metadata and scopes in Commerce Services."),(0,r.mdx)("p",null,"Use the following template for API call:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://commerce.adobe.io/api/<API_ENDPOINT>/<DATA_SPACE_ID>' \\\n--header 'Content-Type:  application/json' \\\n--header 'x-api-key: <API_KEY>' \\\n--header 'x-gw-signature: <JWT_TOKEN>' \\\n--data '<API_PAYLOAD>'\n")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Placeholder name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"API_ENDPOINT"),(0,r.mdx)("td",{parentName:"tr",align:null},"API endpoint retrieved from API reference for specific Data Ingestion API, for example: ",(0,r.mdx)("inlineCode",{parentName:"td"},"metadata/v2/metadata"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"DATA_SPACE_ID"),(0,r.mdx)("td",{parentName:"tr",align:null},"Data Space ID obtained in this section.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"API_KEY"),(0,r.mdx)("td",{parentName:"tr",align:null},"API_KEY obtained in this section.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"JWT_TOKEN"),(0,r.mdx)("td",{parentName:"tr",align:null},"JWT token obtained in this section.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"API_PAYLOAD"),(0,r.mdx)("td",{parentName:"tr",align:null},"API payload see in examples below")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-composable-catalog-data-ingestion-using-the-api-md-f5cbd12a924802d95041.js.map