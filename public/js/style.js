const doc = [
    {
        doc1:"reg.pdf",
        doc2:""

    }
];


var viewpdf = $("viewpdf");


const imagelink =  document.getElementById("imagelink");

if(imagelink!=null){
    imagelink.addEventListener('click',function(){
        PDFObject.embed(doc[0].doc1,viewpdf);
    });
}




