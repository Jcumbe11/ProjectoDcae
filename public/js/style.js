const doc = [
    {
        doc1:"reg.pdf",
        doc2:"calendario.pdf",
        doc3: "taxas.pdf"

    }
];


var viewpdf = $("viewpdf");
// var viewpdf1 = $("viewpdf1");
const imagelinkcalendario = document.getElementById("imagelinkcalendario");

const imagelink =  document.getElementById("imagelink");
const taxas = document.getElementById("taxas");

if(imagelink!==null){
    imagelink.addEventListener('click',function(){
        PDFObject.embed(doc[0].doc1,viewpdf);
    });
}

if(imagelinkcalendario!==null){
    imagelinkcalendario.addEventListener('click',function(){
        PDFObject.embed(doc[0].doc2,viewpdf);
    });
}

if(taxas!==null){
    taxas.addEventListener('click',function(){
        PDFObject.embed(doc[0].doc3,viewpdf);
    });
}






