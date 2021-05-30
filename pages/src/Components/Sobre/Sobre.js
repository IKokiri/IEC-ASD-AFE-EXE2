import Image from 'next/image'

function Sobre() {
  return (

    <div>
      <div class="row">
        <div class="col-md-2">
        <Image
        src="./manuser.png"
        alt="Picture of the author"
        width={128}
        height={128}
      />
        </div>
        <div class="col">
          <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lobortis mi id nunc maximus, non consectetur leo venenatis. 
          Donec a eros quis velit egestas varius convallis non lacus. 
          Etiam at turpis metus. Ut in imperdiet odio. Sed ultrices tincidunt ultrices. 
          Vestibulum sagittis consectetur dolor sed rhoncus. Mauris vitae imperdiet ex. Donec 
          consectetur nibh elit, in tincidunt justo tincidunt id. Vestibulum ante ipsum primis 
          in faucibus orci luctus et ultrices posuere cubilia curae; Mauris cursus aliquet dui, 
          a interdum magna consequat in. Suspendisse suscipit rhoncus urna, ac porttitor dui cursus 
          nec. Cras sodales, nunc vitae fermentum convallis, odio elit suscipit orci, in tincidunt 
          metus nisl sed sem. Ut mauris lectus, faucibus id condimentum aliquet, ultrices id justo.
          </p>          
      </div>
      </div>  
    </div>
  );
}

export default Sobre;