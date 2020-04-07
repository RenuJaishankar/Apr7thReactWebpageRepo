import React from 'react'
import 'bulma/css/bulma.css'
import '../components/style.css'

    
  const contentpage =() =>{
      return(
   
            <div className="container-fluid">
                

                <div className="columns">
                    <div className="column ">
                        <p className="justified">
                            <span className = "icon is-large">
                            <i className="fas fa-ship" style={{float:"is-pulled-left" ,margin:"1rem"}}></i></span>
                            This paragraph column is a demonstration of float. Notice how the image in this column is
                            placed
                            off to the left. This is because there is a float property called on it, along with margin.
                        </p>
                    </div>
                    <div className="column">

                        <p id="myId" className="justified">
                            
                    
                            <i className="fas fa-eraser" style={{float:"is-pulled-left", margin:"1rem"}}></i>
                            This block of text is justified. That means that it will take up its entire element width by
                            spacing out words and characters. The browser will automatically adjust this text. This
                            block
                            will also disappear if the viewport is small enough!

                        </p>

                    </div>
                    <div className="column">

                        <p className="justified">
                            <i className="fas fa-eye" style={{float:"is-pulled-left", margin:"1rem"}}></i>
                            Notice the difference between this column and the other two. Can you spot it? You can right
                            click and inspect element if you want a hint. And hey, <span>check this out</span>! Neat,
                            huh?
                            If you want to edit inline text, the span tag is the way to go!
                        </p>
                    </div>

                </div>
                </div>
)
}
export default contentpage