
function ImageShow({image}){
    return (
    <div >
               <img alt={image.alt_description} src={image.urls.thumb} />
       </div>
    );}

export default ImageShow;