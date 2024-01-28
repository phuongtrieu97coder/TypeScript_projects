<img src="https://github.com/phuongtrieu97coder/Readme_Content_Structure/assets/82598726/e1e4c288-80b1-4757-beb2-9232cddc38db" alt="TypeScript" width="50px" height="50px"> ![image](https://img.shields.io/badge/NodeJS-black?style=for-the-badge&logo=node.js) ![image](https://img.shields.io/badge/ReactJS-black?style=for-the-badge&logo=react) ![image](https://img.shields.io/badge/mongoDB-black?style=for-the-badge&logo=mongodb)  ![image](https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5) ![image](https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=css3) ![image](https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap) ![image](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript) ![image](https://img.shields.io/badge/jQuery-black?style=for-the-badge&logo=jquery) ![image](https://img.shields.io/badge/JSON-black?style=for-the-badge&logo=json)

![image](https://github.com/phuongtrieu97coder/TypeScript_projects/assets/82598726/e218b143-4733-4649-955b-d78447786317)



<a type="button" title="Codecademy_Learn_TypeScript_Course_button" href="https://www.codecademy.com/courses/learn-typescript/projects/typemart" target="_blank" data-CodecademyLearnTypescriptCourseButt="CodecademyLearnTypescriptCourseButt_data"><img src="https://user-images.githubusercontent.com/82598726/175697552-f960b057-9e97-4c3e-a3e2-f2b5f7876de9.png" alt="Codecademy_Learn_TypeScript_Course_button" width="400px" height="300px"></a>

<br><br>

# TypeMart
<br>

# 1. Introduction:
![Alt text](image.png)
<br>
<br>

# 2. Output:
![Alt text](image-20.png)
<br>
<br>

# 3. Prompts:
![Alt text](image-1.png)
![Alt text](image-2.png)
![Alt text](image-3.png)
![Alt text](image-4.png)
![Alt text](image-5.png)
![Alt text](image-6.png)
![Alt text](image-7.png)
![Alt text](image-8.png)
![Alt text](image-9.png)
```js
if(Boolean(product.preOrder)===true){
  console.log("We'll send you a message when your product is on its way.");
}
```
![Alt text](image-10.png)
![Alt text](image-11.png)
![Alt text](image-12.png)
![Alt text](image-13.png)
![Alt text](image-14.png)
```js
if(Number(product.price) >= 25){
  shipping=0;
  console.log("We provide free shipping for this product")
}else{
  shipping=5;
}
```
![Alt text](image-15.png)
![Alt text](image-16.png)
```js
if(shippingAddress.includes("New York")){
  taxPercent = 0.1;
}else{
  taxPercent = 0.05;
}
```
![Alt text](image-17.png)
```js
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price)+taxTotal+shipping;
```
![Alt text](image-18.png)
```js

console.log(`Product name: ${product.name}.\nShipping address: ${shippingAddress}.\nPrice of the product: \$${product.price}.\nTax total: \$${taxTotal}.\nShipping: \$${shipping}.\nTotal amount: \$${total}.\n`);
```
![Alt text](image-19.png)