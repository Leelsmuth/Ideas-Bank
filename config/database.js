if(process.env.NODE_ENV === 'production'){
module.exports= {mongoURI: 'mongodb+srv://anjorinio:1234@cluster0-hogdg.gcp.mongodb.net/test?retryWrites=true&w=majority'}
}else {
module.exports={mongoURI: 'mongodb://localhost/vidjot-dev'}
}