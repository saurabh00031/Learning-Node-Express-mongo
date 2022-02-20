const express=require('express');
const fs=require('fs');
const app=express();
const path=require('path');



//EXPRESS SPECIFIC STUFFS
app.use('/static',express.static('static'));  //set the STATICFILES
app.use(express.urlencoded());


//PUB SPECIFIC STUFFS
app.set('view engine', 'pug')  //set the template engine
app.set('views',path.join(__dirname,'views')); //set the templates directory





//our endpoints//
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' });
  })



//our endpoints//
app.get('/', (req, res) => {
    params={'title':'yes its index','content':'this is index.html'};
    res.status(200).render('index',params);
  })




const port=80;


app.post("/",(req,res)=>{

    console.log(req.body);
    forms=req.body;
    name=forms.name;
    age=forms.age;
    gender=forms.gender;
    address=forms.address;
    more=forms.more;
    let mixxer=`name is ${name},age is ${age},gender is ${gender},more about is : ${more},address is ${address};`;
    fs.writeFileSync('output.txt',mixxer);
    params={'message':'Your form has been submited successfully'};
    res.status(200).render('index',params);
});


app.post("/about",(req,res)=>{

    res.send("This is about page");
});


app.get("/contact",(req,res)=>{

    res.status(200).send("This is contact page");
});


app.get("/features",(req,res)=>{

    res.send("This is features page");
});

app.get("/services",(req,res)=>{

    res.send("This is services page");
});


//start the server

app.listen(port,()=>{
    console.log(`port opened successfully at : ${port}`);
})

