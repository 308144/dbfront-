var jwt = require('jsonwebtoken');
const  userInfo={
    name:'aaa',
    id:1,
    auto:'admin'
}

const key='111'



var token=jwt.sign(userInfo,key,{
    expiresIn:'60 days'
})
// console.log(token);
const info=jwt.decode(token)
// console.log(info);


// setTimeout(() => {
    
//     try{
//         const verify=jwt.verify(userInfo,key)
//         console.log(verify);
//     }catch(error){
//         console.log(error.message);
//     }


// }, 3000);



// 解析token数据
jwt.verify(token,'12222',function(err,data){
   if(err){
    return console.log('发生错误了');
   }
   console.log(data);
})