"use strict";(self.webpackChunkcommerce_services=self.webpackChunkcommerce_services||[]).push([[2872],{3960:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return o},default:function(){return h}});var a=r(58168),t=r(80045),i=(r(88763),r(15680)),s=r(83407);const d=["components"],o={},u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",n)},l=u("InlineAlert"),c=u("CodeBlock"),m={_frontmatter:o},p=s.A;function h(e){let{components:n}=e,r=(0,t.A)(e,d);return(0,i.mdx)(p,(0,a.A)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"import-api"},"Import API"),(0,i.mdx)("p",null,"The Adobe Commerce Reporting Import API allows you to push arbitrary data into your data warehouse using REST."),(0,i.mdx)("p",null,"Before using the import API, make sure you ",(0,i.mdx)("a",{parentName:"p",href:"../reporting/index.md#authentication"},"authenticate")," your connection."),(0,i.mdx)("h2",{id:"return-codes"},"Return Codes"),(0,i.mdx)("p",null,"The Data Import API uses standard HTTP return codes to indicate the status of a request. Your application should handle each of the following return statuses."),(0,i.mdx)("p",null,"Codes in the 2xx range indicate a successful transaction, codes in the 4xx range indicate a bad request, and codes in the 5xx range indicate an error with Adobe Commerce Reporting. If errors in the 5xx range persist, please contact ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-knowledge-base/kb/help-center-guide/magento-help-center-user-guide.html"},"support"),"."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"200 OK - request was successful."),(0,i.mdx)("li",{parentName:"ul"},"201 Created - new data was added as a result of the request."),(0,i.mdx)("li",{parentName:"ul"},"400 Bad request - Your request was missing a required parameter."),(0,i.mdx)("li",{parentName:"ul"},"401 Unauthorized - Authorization failed. Double check your API key."),(0,i.mdx)("li",{parentName:"ul"},"404 Not Found - The resource you are looking for does not exist."),(0,i.mdx)("li",{parentName:"ul"},"500 Server Error - There is an error in Adobe Commerce Reporting.")),(0,i.mdx)("h2",{id:"versioning"},"Versioning"),(0,i.mdx)("p",null,"The current version of the Import API is v2."),(0,i.mdx)("p",null,"v1 is still available, but will be deprecated in the future."),(0,i.mdx)("h2",{id:"test-environment"},"Test environment"),(0,i.mdx)("p",null,"The Data Import API has a full test (sandbox) environment."),(0,i.mdx)("p",null,"The sandbox environment uses the same keys and return codes as the production API, but does not persist incoming data. You can use this environment to test your integration."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"curl -v https://sandbox-connect.rjmetrics.com/v2/client/:cid/:endpoint?apikey=:apikey\n")),(0,i.mdx)("h2",{id:"methods"},"Methods"),(0,i.mdx)("h3",{id:"status"},"Status"),(0,i.mdx)("p",null,"You can always check the status of the Data Import API. This is called when you instantiate the client. This will return a ",(0,i.mdx)("inlineCode",{parentName:"p"},"200-Success")," response if the API is operational."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"curl -v https://connect.rjmetrics.com\n")),(0,i.mdx)("h3",{id:"upsert"},"Upsert"),(0,i.mdx)("p",null,"The upsert method allows you to push data into your RJMetrics data warehouse. You can push entire arrays of data or single data points. This endpoint will only accept data that have the following properties:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The data must be valid JSON."),(0,i.mdx)("li",{parentName:"ul"},"Each data point must contain a ",(0,i.mdx)("inlineCode",{parentName:"li"},"keys")," field. The ",(0,i.mdx)("inlineCode",{parentName:"li"},"keys")," field should specify which fields in the records represent the primary key(s)."),(0,i.mdx)("li",{parentName:"ul"},"An array of data must contain no more than 100 individual data points.")),(0,i.mdx)(l,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Each data point in your data warehouse will be uniquely indexed by the fields specified in ",(0,i.mdx)("inlineCode",{parentName:"p"},"keys"),". If a new data point has keys that conflict with a pre-existing data point, the old data point will be replaced."),(0,i.mdx)("p",null,"Tables in the Data Import API are schemaless. There is no command to create or destroy a table - you can push data to any table name and it will be dynamically generated."),(0,i.mdx)("p",null,"Here are some guidelines for managing tables:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Create one table for each type of data point you are pushing."),(0,i.mdx)("li",{parentName:"ul"},"Generally speaking, each data point pushed into a table should have the same schema."),(0,i.mdx)("li",{parentName:"ul"},"Typically, one type of 'thing' will correspond to one table. For example, a typical eCommerce company might have a 'customer', 'order', 'order_item', and 'product' table."),(0,i.mdx)("li",{parentName:"ul"},"Table names must be alphanumeric (plus underscores). Bad table names will result in a ",(0,i.mdx)("inlineCode",{parentName:"li"},"400 Bad Request")," return code.")),(0,i.mdx)("p",null,"Here's an example of an Upsert call:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -d @filename https://connect.rjmetrics.com/v2/client/:cid/table/:table/data?apikey=:apikey --header "Content-type: application/json"\n')),(0,i.mdx)("p",null,"The above call contains the following variables:"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"@filename")," - name of the file you are uploading\n",(0,i.mdx)("inlineCode",{parentName:"p"},":cid")," - your client Id\n",(0,i.mdx)("inlineCode",{parentName:"p"},":table")," - table name\n",(0,i.mdx)("inlineCode",{parentName:"p"},":apikey")," - your API key"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'"status": "complete",\n"created_at": "2019-08-05 04:51:02"\nclient.push_data(\n    "table_name",\n    test_data\n)\n')),(0,i.mdx)("h3",{id:"upsert-single-data-point-example"},"Upsert single data point example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "keys": ["id"],\n  "id": 1,\n  "email": "joe@schmo.com",\n  "status": "pending",\n  "created_at": "2019-08-01 14:22:32"\n}\n')),(0,i.mdx)("h3",{id:"upsert-array-of-data-points-example"},"Upsert array of data points example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'[{\n  "keys": ["id"],\n  "id": 1,\n  "email": "joe@schmo.com",\n  "status": "pending",\n  "created_at": "2019-08-01 14:22:32"\n},{\n  "keys": ["id"],\n  "id": 2,\n  "email": "anne@schmo.com",\n  "status": "pending",\n  "created_at": "2019-08-03 23:12:30"\n},{\n  "keys": ["id"],\n  "id": 1,\n  "email": "joe@schmo.com",\n  "status": "complete",\n  "created_at": "2019-08-05 04:51:02"\n}]\n')),(0,i.mdx)("h2",{id:"additional-examples"},"Additional Examples"),(0,i.mdx)("p",null,"The following section describes how you can call the import API through various libraries to perform the following tasks:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Create a Users Table"),(0,i.mdx)("li",{parentName:"ul"},"Create an Orders Table")),(0,i.mdx)("h3",{id:"create-a-users-table"},"Create a users table"),(0,i.mdx)("p",null,"Your most important table in Adobe Commerce Reporting is your ",(0,i.mdx)("inlineCode",{parentName:"p"},"Users")," table. In your application, you probably have a ",(0,i.mdx)("inlineCode",{parentName:"p"},"user")," object with some data like ",(0,i.mdx)("inlineCode",{parentName:"p"},"id"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"email"),", and ",(0,i.mdx)("inlineCode",{parentName:"p"},"acquisition_source"),"."),(0,i.mdx)("p",null,"This examples describes how to push this data to the Import API."),(0,i.mdx)("p",null,"First, define a template to push the data. Ensure the client is ",(0,i.mdx)("inlineCode",{parentName:"p"},"authenticated <api-authentication>")," and prepare to push the data to the Import API."),(0,i.mdx)(c,{slots:"heading, code",repeat:"5",languages:"JS, PHP, Clojure, Ruby, Python",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"javascript"},"Javascript"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'var rjmetrics = require("rjmetrics");\nclient = new rjmetrics.Client(your-client-id, "your-api-key");\n\n// make sure the client is authenticated before we do anything\nclient.authenticate().then( function(data) {\n  // this is where we\'ll push the data\n}).fail(function(err) {\n  console.error("Failed to authenticate!");\n});\n')),(0,i.mdx)("h4",{id:"php"},"PHP"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"require 'vendor/autoload.php';\n$client = new RJMetrics\\Client($your-client-id, \"your-api-key\");\n\n// make sure the client is authenticated before we do anything\nif($client->authenticate()) {\n  // this is where we'll push the data\n}\n")),(0,i.mdx)("h4",{id:"clojure"},"Clojure"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-clojure"},'(ns examples.acquisition-source\n  (:require [rjmetrics.core :as rjmetrics]))\n\n(defn run\n  []\n  (let [config {:client-id your-client-id :api-key "your-api-key"}]\n    (when (rjmetrics/authenticated? config)\n      ;; this is where we\'ll push data\n    )\n  )\n)\n')),(0,i.mdx)("h4",{id:"ruby"},"Ruby"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ruby"},'require "rjmetrics_client"\nclient = RJMetricsClient.new(your-client-id, "your-api-key")\n\n# make sure the client is authenticated before we do anything\nif client.authenticated?\n  # this is where we\'ll push data\nend\n')),(0,i.mdx)("h4",{id:"python"},"Python"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'import rjmetrics.client\nclient = rjmetrics.client.Client(your_client_id, "your_api_key")\n\n# make sure the client is authenticated before we do anything\nif client.authenticate()\n # this is where we\'ll push data\n')),(0,i.mdx)("p",null,"Next, create a new function to sync the new data."),(0,i.mdx)(c,{slots:"heading, code",repeat:"5",languages:"JS, PHP, Clojure, Ruby, Python",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"javascript-1"},"Javascript"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'function syncUser(client, user) {\n  return client.pushData(\n    // table named "users"\n    "users",\n    {\n      // user_id is the unique key here, since each user should only\n      // have one record in this table\n      "keys": ["id"],\n      "id": user.id,\n      "email": user.email,\n      "acquisition_source": user.acquisition_source\n    });\n}\n')),(0,i.mdx)("h4",{id:"php-1"},"PHP"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},'function syncUser($client, $user) {\n  $dataToPush = new stdClass();\n  $dataToPush->id = $user->id;\n  $dataToPush->email = $user->email;\n  $dataToPush->acquisition_source = $user->acquisitionSource;\n  // user_id is the unique key here, since each user should only\n  // have one record in this table\n  $dataToPush->keys = array("id");\n\n  // table named "users"\n  return $client->pushData("users", $dataToPush);\n}\n')),(0,i.mdx)("h4",{id:"clojure-1"},"Clojure"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-clojure"},'(defn- sync-user\n  [config user]\n  (let [result (rjmetrics/push-data config\n                                    ;; table named "users"\n                                    "users"\n                                    ;; user_id is the unique key here, since each user\n                                    ;; should only have one record in the table\n                                    (assoc user :keys ["id"]))]\n    (if (= (-> result first :status) 201)\n        (print "Synced user with id" (:id user) "\\n")\n        (print "Failed to sync user with id" (:id user) "\\n"))))\n')),(0,i.mdx)("h4",{id:"ruby-1"},"Ruby"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ruby"},'def sync_user(client, user)\n  # `id` is the unique key here, since each user should only\n  # have one record in this table\n  user[:keys] = [:id]\n  # table named "users"\n  return client.pushData("users", user)\nend\n')),(0,i.mdx)("h4",{id:"python-1"},"Python"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def sync_user(client, user):\n  # `id` is the unique key here, since each user should only\n  # have one record in this table\n  user["keys"] = ["id"]\n  # table named "users"\n  return client.push_data("users", [user]) # NOTE: the python library only pushes lists\n')),(0,i.mdx)("p",null,"Finally, incorporate the ",(0,i.mdx)("inlineCode",{parentName:"p"},"syncUser")," function into the original script."),(0,i.mdx)(c,{slots:"heading, code",repeat:"5",languages:"JS, PHP, Clojure, Ruby, Python",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"javascript-2"},"Javascript"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'var rjmetrics = require("rjmetrics");\nvar client = new rjmetrics.Client(your-client-id, "your-api-key");\n\nfunction syncUser(client, user) {\n  return client.pushData(\n    // table named "users"\n    "users",\n    {\n      // user_id is the unique key here, since each user should only\n      // have one record in this table\n      "keys": ["id"],\n      "id": user.id,\n      "email": user.email,\n      "acquisition_source": user.acquisition_source\n    });\n}\n\n// let\'s define some fake users\nvar users = [\n  {id: 1, email: "joe@schmo.com", acquisition_source: "PPC"},\n  {id: 2, email: "mike@smith.com", acquisition_source: "PPC"},\n  {id: 3, email: "lorem@ipsum.com", acquisition_source: "Referral"},\n  {id: 4, email: "george@vandelay.com", acquisition_source: "Organic"},\n  {id: 5, email: "larry@google.com", acquisition_source: "Organic"},\n];\n\n// make sure the client is authenticated before we do anything\nclient.authenticate().then( function(data) {\n\n  // iterate through users and push data\n  users.forEach( function(user) {\n    syncUser(client, user).then( function(data) {\n      console.log("Synced user with id " + user.id);\n    }, function(error) {\n      console.error("Failed to sync user with id " + user.id);\n    })\n  });\n\n}).fail(function(err) {\n  console.error("Failed to authenticate!");\n});\n')),(0,i.mdx)("h4",{id:"php-2"},"PHP"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},'require \'vendor/autoload.php\';\n$client = new RJMetrics\\Client($your-client-id, "your-api-key");\n\nfunction syncUser($client, $user) {\n  $dataToPush = new stdClass();\n  $dataToPush->id = $user->id;\n  $dataToPush->email = $user->email;\n  $dataToPush->acquisition_source = $user->acquisitionSource;\n  // user_id is the unique key here, since each user should only\n  // have one record in this table\n  $dataToPush->keys = array("id");\n\n  // table named "users"\n  return $client->pushData("users", $dataToPush);\n}\n\n// let\'s define some fake users\nfunction fakeUserGenerator($id, $email, $acquisitionSource) {\n  $toReturn = new stdClass();\n\n  $toReturn->id = $id;\n  $toReturn->email = $email;\n  $toReturn->acquisitionSource = $acquisitionSource;\n\n  return $toReturn;\n}\n\n$users = array(\n  fakeUserGenerator(1, "joe@schmo.com", "PPC"),\n  fakeUserGenerator(2, "mike@smith.com", "PPC"),\n  fakeUserGenerator(3, "lorem@ipsum.com", "Referral"),\n  fakeUserGenerator(4, "george@vandelay.com", "Organic"),\n  fakeUserGenerator(5, "larry@google.com", "Organic"),\n);\n\n// make sure the client is authenticated before we do anything\nif($client->authenticate()) {\n  // iterate through users and push data\n  foreach($users as $user) {\n    $responses = syncUser($client, $user);\n\n    // api calls always return an array of responses\n    foreach($responses as $response) {\n      if($response->code == 201)\n        print("Synced user with id {$user->id}\\n");\n      else\n        print("Failed to sync user with id {$user->id}\\n");\n    }\n  }\n}\n')),(0,i.mdx)("h4",{id:"clojure-2"},"Clojure"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-clojure"},'(ns examples.acquisition-source\n  (:require [rjmetrics.core :as rjmetrics]))\n\n(defn- sync-user\n  [config user]\n  (let [result (rjmetrics/push-data config\n                                    ;; table named "users"\n                                    "users"\n                                    ;; user_id is the unique key here, since each user\n                                    ;; should only have one record in the table\n                                    (assoc user :keys ["id"]))]\n    (if (= (-> result first :status) 201)\n        (print "Synced user with id" (:id user) "\\n")\n        (print "Failed to sync user with id" (:id user) "\\n"))))\n\n(defn run\n  []\n  (let [config {:client-id your-client-id :api-key "your-api-key"}\n        ;; let\'s define some fake users\n        users [{:id 1, :email "joe@schmo.com", :acquisition_source "PPC"}\n                {:id 2, :email "mike@smith.com", :acquisition_source "PPC"}\n                {:id 3, :email "lorem@ipsum.com", :acquisition_source "Referral"}\n                {:id 4, :email "george@vandelay.com", :acquisition_source "Organic"}\n                {:id 5, :email "larry@google.com", :acquisition_source "Organic"}]]\n    ;; make sure the client is authenticated before we do anything\n    (when (rjmetrics/authenticated? config)\n      ;; iterate through users and push data\n      (dorun (map (partial sync-user config) users)))))\n')),(0,i.mdx)("h4",{id:"ruby-2"},"Ruby"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ruby"},'require "rjmetrics_client"\nclient = RJMetricsClient.new(your-api-key, "your-client-id")\n\n# let\'s define some fake users\nfake_users = [\n  {:id => 1, :email => "joe@schmo.com", :acquisition_source => "PPC"},\n  {:id => 2, :email => "mike@smith.com", :acquisition_source => "PPC"},\n  {:id => 3, :email => "lorem@ipsum.com", :acquisition_source => "Referral"},\n  {:id => 4, :email => "george@vandelay.com", :acquisition_source => "Organic"},\n  {:id => 5, :email => "larry@google.com", :acquisition_source => "Organic"}\n]\n\ndef sync_user(client, user)\n  # `id` is the unique key here, since each user should only\n  # have one record in this table\n  user[:keys] = [:id]\n  # table named "users"\n  return client.pushData("users", user)\nend\n\n# make sure the client is authenticated before we do anything\nif client.authenticated?\n  fake_users.each do |user|\n    # iterate through users and push data\n    sync_user(client, user).each do |response|\n      if response["code"]\n        puts "Synced user with id #{user[:id]}"\n      else\n        puts "Failed to sync user with id #{user[:id]}"\n      end\n    end\n  end\nend\n')),(0,i.mdx)("h4",{id:"python-2"},"Python"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'import rjmetrics.client\n\nCLIENT_ID = 0000\nAPI_KEY = \'your_api_key\'\n\nclient = rjmetrics.client.Client(CLIENT_ID, API_KEY)\n\n# let\'s define some fake users\nfake_users = [\n  {"id": 1, "email": "joe@schmo.com", "acquisition_source": "PPC"},\n  {"id": 2, "email": "mike@smith.com", "acquisition_source": "PPC"},\n  {"id": 3, "email": "lorem@ipsum.com", "acquisition_source": "Referral"},\n  {"id": 4, "email": "george@vandelay.com", "acquisition_source": "Organic"},\n  {"id": 5, "email": "larry@google.com", "acquisition_source": "Organic"}\n]\n\n\ndef sync_user(client, user):\n  # `id` is the unique key here, since each user should only\n  # have one record in this table\n  user["keys"] = ["id"]\n  # table named "users"\n  return client.push_data("users", [user])[0]\n\n\n# make sure the client is authenticated before we do anything\nif client.authenticate():\n  for user in fake_users:\n    # iterate through users and push data\n    response = sync_user(client, user)\n    if response.ok:\n        print "Synced user with id ", user["id"]\n    else:\n        print "Failed to sync user with id ", user["id"]\n')),(0,i.mdx)("p",null,"This example is included with the ",(0,i.mdx)("a",{parentName:"p",href:"libraries.md"},"client libraries")," or can be ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/rjmetrics"},"downloaded from github"),"."),(0,i.mdx)(c,{slots:"heading, code",repeat:"5",languages:"JS, PHP, Clojure, Ruby, Python",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"javascript-3"},"JavaScript"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install\nnode users-table.js\n")),(0,i.mdx)("h4",{id:"php-3"},"PHP"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"composer install\nphp users-table.php\n")),(0,i.mdx)("h4",{id:"clojure-3"},"Clojure"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-clojure"},"lein repl\n\n> (ns examples.users-table)\n> (require :reload 'examples.users-table)\n> (run)\n")),(0,i.mdx)("h4",{id:"ruby-3"},"Ruby"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"bundle install\nruby users-table.rb\n")),(0,i.mdx)("h4",{id:"python-3"},"Python"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"pip install\npython examples/users_table.py\n")),(0,i.mdx)("h3",{id:"create-an-orders-table"},"Create an orders table"),(0,i.mdx)("p",null,"Now, create an orders table with the following fields: ",(0,i.mdx)("inlineCode",{parentName:"p"},"id"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"user_id"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"value")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"sku"),"."),(0,i.mdx)("p",null,"Create a new function to push the order object:"),(0,i.mdx)(c,{slots:"heading, code",repeat:"5",languages:"JS, PHP, Clojure, Ruby, Python",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"javascript-4"},"Javascript"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'function syncOrder(client, order) {\n  return client.pushData(\n    "orders",\n    {\n      "keys": ["id"],\n      "id": order.id,\n      "user_id": order.user_id,\n      "value": order.value,\n      "sku": order.sku\n    });\n}\n')),(0,i.mdx)("h4",{id:"php-4"},"PHP"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},'function syncOrder($client, $order) {\n  $dataToPush = new stdClass();\n  $dataToPush->id = $order->id;\n  $dataToPush->user_id = $order->user_id;\n  $dataToPush->value = $order->value;\n  $dataToPush->sku = $order->sku;\n  $dataToPush->keys = array("id");\n\n  return $client->pushData("orders", $dataToPush);\n}\n')),(0,i.mdx)("h4",{id:"clojure-4"},"Clojure"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-clojure"},'(defn- sync-order\n  [config order]\n  (let [result (rjmetrics/push-data config\n                                    "orders"\n                                    (assoc order :keys ["id"]))]\n    (if (= (-> result first :status) 201)\n        (print "Synced order with id" (:id order) "\\n")\n        (print "Failed to sync order with id" (:id order) "\\n"))))\n')),(0,i.mdx)("h4",{id:"ruby-4"},"Ruby"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ruby"},'def sync_order(client, order)\n  order[:keys] = [:id]\n  return client.pushData("orders", order)\nend\n')),(0,i.mdx)("h4",{id:"python-4"},"Python"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def sync_order(client, order):\n  order["keys"] = ["id"]\n  return client.push_data("orders", [order])[0]\n')),(0,i.mdx)("p",null,"Now, plug this into the same template from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"users")," table:"),(0,i.mdx)(c,{slots:"heading, code",repeat:"5",languages:"JS, PHP, Clojure, Ruby, Python",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"javascript-5"},"Javascript"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'var rjmetrics = require("rjmetrics");\nvar client = new rjmetrics.Client(your-client-id, "your-api-key");\n\nfunction syncOrder(client, order) {\n  return client.pushData(\n    "orders",\n    {\n      "keys": ["id"],\n      "id": order.id,\n      "user_id": order.user_id,\n      "value": order.value,\n      "sku": order.sku\n    });\n}\n\nvar orders = [\n  {"id": 1, "user_id": 1, "value": 58.40,  "sku": "milky-white-suede-shoes"},\n  {"id": 2, "user_id": 1, "value": 23.99,  "sku": "red-button-down-fleece"},\n  {"id": 3, "user_id": 2, "value": 5.00,   "sku": "bottle-o-bubbles"},\n  {"id": 4, "user_id": 3, "value": 120.01, "sku": "zebra-striped-game-boy"},\n  {"id": 5, "user_id": 5, "value": 9.90  , "sku": "kitten-mittons"}\n];\n\nclient.authenticate().then( function(data) {\n\n  orders.forEach( function(order) {\n    syncOrder(client, order).then( function(data) {\n      console.log("Synced order with id " + order.id);\n    }, function(error) {\n      console.error("Failed to sync order with id " + order.id);\n    })\n  });\n\n}).fail(function(err) {\n  console.error("Failed to authenticate!");\n});\n')),(0,i.mdx)("h4",{id:"php-5"},"PHP"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},'require \'vendor/autoload.php\';\n$client = new RJMetrics\\Client($your-client-id, "your-api-key");\n\nfunction syncOrder($client, $order) {\n  $dataToPush = new stdClass();\n  $dataToPush->id = $order->id;\n  $dataToPush->user_id = $order->user_id;\n  $dataToPush->value = $order->value;\n  $dataToPush->sku = $order->sku;\n  $dataToPush->keys = array("id");\n\n  return $client->pushData("orders", $dataToPush);\n}\n\nfunction fakeOrderGenerator($id, $userId, $value, $sku) {\n  $toReturn = new stdClass();\n\n  $toReturn->id = $id;\n  $toReturn->user_id = $userId;\n  $toReturn->value = $value;\n  $toReturn->sku = $sku;\n\n  return $toReturn;\n}\n\n$orders = array(\n  fakeOrderGenerator(1, 1, 58.40, "milky-white-suede-shoes"),\n  fakeOrderGenerator(2, 1, 23.99, "red-buttons-down-fleece"),\n  fakeOrderGenerator(3, 2, 5.00, "bottle-o-bubbles"),\n  fakeOrderGenerator(4, 3, 120.01, "zebra-striped-game-boy"),\n  fakeOrderGenerator(5, 5, 9.90, "kitten-mittons")\n);\n\nif($client->authenticate()) {\n  foreach($orders as $order) {\n    $responses = syncOrder($client, $order);\n\n    foreach($responses as $response) {\n      if($response->code == 201)\n        print("Synced order with id {$order->id}\\n");\n      else\n        print("Failed to sync order with id {$order->id}\\n");\n    }\n  }\n}\n')),(0,i.mdx)("h4",{id:"clojure-5"},"Clojure"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-clojure"},'(ns examples.orders-table\n  (:require [rjmetrics.core :as rjmetrics]))\n\n(defn- sync-order\n  [config order]\n  (let [result (rjmetrics/push-data config\n                                    "orders"\n                                    (assoc order :keys ["id"]))]\n    (if (= (-> result first :status) 201)\n        (print "Synced order with id" (:id order) "\\n")\n        (print "Failed to sync orfer with id" (:id order) "\\n"))))\n\n(defn run\n  []\n  (let [config {:client-id your-client-id :api-key "your-api-key"}\n        orders [{:id 1, :user_id 1 :value 58.40  :sku "milky-white-suede-shoes"}\n                {:id 2, :user_id 1 :value 23.99  :sku "red-button-down-fleece"}\n                {:id 3, :user_id 2 :value 5.00   :sku "bottle-o-bubbles"}\n                {:id 4, :user_id 3 :value 120.01 :sku "zebra-striped-game-boy"}\n                {:id 5, :user_id 5 :value 9.90   :sku "kitten-mittons"}]]\n    (when (rjmetrics/authenticated? config)\n      (dorun (map (partial sync-order config) users)))))\n')),(0,i.mdx)("h4",{id:"ruby-5"},"Ruby"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ruby"},'require "rjmetrics_client"\nclient = RJMetricsClient.new(your-client-id, "your-api-key")\n\nfake_orders = [\n  {:id => 1, :user_id => 1, :value => 58.40,  :sku => "milky-white-suede-shoes"},\n  {:id => 2, :user_id => 1, :value => 23.99,  :sku => "red-button-down-fleece"},\n  {:id => 3, :user_id => 2, :value => 5.00,   :sku => "bottle-o-bubbles"},\n  {:id => 4, :user_id => 3, :value => 120.01, :sku => "zebra-striped-game-boy"},\n  {:id => 5, :user_id => 5, :value => 9.90,   :sku => "kitten-mittons"}\n]\n\ndef sync_order(client, order)\n  order[:keys] = [:id]\n  return client.pushData("orders", order)\nend\n\nif client.authenticated?\n  fake_orders.each do |order|\n    sync_order(client, order).each do |response|\n      if response["code"]\n        puts "Synced order with id #{order[:id]}"\n      else\n        puts "Failed to sync order with id #{order[:id]}"\n      end\n    end\n  end\nend\n')),(0,i.mdx)("h4",{id:"python-5"},"Python"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'import rjmetrics.client\n\nCLIENT_ID = 0000\nAPI_KEY = \'your_api_key\'\n\nclient = rjmetrics.client.Client(CLIENT_ID, API_KEY)\n\nfake_orders = [\n  {"id": 1, "user_id": 1, "value": 58.40,  "sku": "milky-white-suede-shoes"},\n  {"id": 2, "user_id": 1, "value": 23.99,  "sku": "red-button-down-fleece"},\n  {"id": 3, "user_id": 2, "value": 5.00,   "sku": "bottle-o-bubbles"},\n  {"id": 4, "user_id": 3, "value": 120.01, "sku": "zebra-striped-game-boy"},\n  {"id": 5, "user_id": 5, "value": 9.90,   "sku": "kitten-mittons"}\n]\n\n\ndef sync_order(client, order):\n  order["keys"] = ["id"]\n  return client.push_data("orders", [order])[0]\n\n\n# make sure the client is authenticated before we do anything\nif client.authenticate():\n  for order in fake_orders:\n    # iterate through users and push data\n    response = sync_order(client, order)\n    if response.ok:\n        print "Synced order with id ", order["id"]\n    else:\n        print "Failed to sync order with id ", order["id"]\n')))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reporting-import-api-md-a9d8f23c347ea39bd23c.js.map