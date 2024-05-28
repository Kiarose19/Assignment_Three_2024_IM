import React from "react";
import "./design.css";
import Home from "./image/Home.png";
import Home1 from "./image/Home1.png";
import Designn from "./image/Designn.png";
import Designn2 from "./image/Designn2.png";
import Theoryy from "./image/Theoryy.png";
import Artt from "./image/Artt.png";
import Colour from "./image/Colour.png";
import Layout from "./image/Layout.png";
import Fonts from "./image/Fonts.png";

function Design() {
    return(
        <div className="design">
            <h1>Monaco Circuit</h1>


            <div className="monaco"> 
                <h2>Monaco Circuit</h2>


             <span id="structure">
                <h3>THE WIREFRAMES</h3>
             </span>
             
             <span id="struct">
                <h3>THE WIREFRAMES</h3>
             </span>

                <h3>Website Wireframes</h3>
                <h4>The Homepage Wireframes</h4>
                <p>The image on the right is a wireframe for the home page of my website. It</p>
                <p>shows all the elements of the page laid out in the way I envisioned the </p>
                <p>home page would look. It starts with the navbar component right at the top,</p>
                <p>which would be a different colour to the rest of the page. It was a deep red.</p>
                <p>The checkered flag would appear underneath the navbar to draw in a feature</p>
                <p>F1, however both the red navbar and checkered flag did not make the final</p>
                <p>iteration as they were too distracting. The layout for this wireframe was to</p>
                <p>have the title with no background and then the rest of the components follow</p>
                <p>in a uniform manner. However, the layout completely changed because it did not</p>
                <p>resonate with the theme strongly.</p>
                <img src= {Home} alt="Wireframe for the home page" />
            </div>

            <span className="mon">
                <img src= {Home1} alt="Second wireframe for home page" />
            </span>

            <div className="circuit">
            <p>The image alongside is the second wireframe for the home page. It has a few</p>
            <p>differences to the first. In this layout the navbar becomes the checkered flag</p>
            <p>which resulted in beign too distracting so it was removed. The second element</p>
            <p>that I wanted to include but did not, was an image gallery slideshow. This would</p>  
            <p>allow the users to view a ferrari from different eras. In the end it did not suit the</p>
            <p>rest of the layout I was going for. The rest of the layout like the text and images</p>
            <p>would have followed the first wireframe's layout. The home page now features</p>
            <p>a video background with the navbar blending seamlessly with it. Giving the </p>
            <p>appearance that the navbar is part of the background. The rest of the layout</p>
            <p>consists of image, text, text, image as well as big headings.</p>
            </div>

            <div className="circ">
                <h4>The Design Page Wireframes</h4>
                <p>The initial idea for the design page as can be seen in the wireframe featured a</p>
                <p>similar style to the first home page wireframe. Including the checkered flag and</p>
                <p>the image gallery slideshow. The rest of the layout was going to consist of 4x4 </p>
                <p>grid to display the wireframes. However, that particular layout seemed boring,</p>
                <p>offering no room for explanations of each wireframe. It would have also created</p>
                <p>disharmony between all the pages, as it would have looked like it did not form </p>
                <p>part of the same website. The current layout of the design page features a track</p>
                <p>as a background well the rest of the layout follows that of the home page.</p>
                <img src= {Designn} alt="The design page wireframe"/>
            </div>

            
            <span className="wireframe">
                <img src= {Designn2} alt="First wireframe for home page"/>
            </span>

            <div className="para">
            <p>This second wireframe for the design page is the layout that I decided to choose.</p>
                <p>As mentioned above it follows the layout of the home page to keep the unity</p>
                <p>between each page. I used a famous racing circuit in Formula 1 as the background</p>
                <p>but I made it smaller in height than the home page background. This was an </p>
                <p>interesting way to incorporate and element formula one into the design page.</p>
                <p>I added little racing animations to the page to further emphasize the theme that</p>
                <p>I chose. This particular layout with the text and images provides the user with a </p>
                <p>break so that they are not overwhelmed with information. The design page </p>
                <p>specifically has a lot of text because each wireframe and design decision requires</p>
                <p>an explanation and reason for its use.</p>
            </div>

            <div className="frame">
                <h4>The Theory Page Wireframe</h4>
                <p>The theory page wireframe is the section of my website that contains the essay</p>
                <p>and the proposal for my internet artwork that will be placed on the art page.</p>
                <p>This wireframe is similar to the second wireframe for the design page with a few</p>
                <p>select differences. For example on this wireframe I included a scroll indicator on</p>
                <p>the background image to indicate to user that they must scroll down as there is</p>
                <p>more content that they can view and interact with. Another difference that I </p>
                <p>wanted to experiment was adding the checkered flag component to separate the</p>
                <p>sections. It would look sleek as well as bring in that theme of Ferrari and F1.</p>
                <img src= {Theoryy} alt="The theory page wireframe"/>
            </div>

            <span className="track">
                <img src= {Artt} alt="The art page wireframe"/>
            </span>

            <div className="description">
                <h4>The Art Page Wireframe</h4>
                <p>The art page wireframe follows a similar structure to all the other pages in that</p>
                <p>it has a smaller background of one of the racing circuits that F1 takes place at.</p>
                <p>Since this page is mainly focused on the internet artwork, there will not be a lot</p>
                <p>of text, other than the description of the artwork and how to use it if it is a game</p>
                <p>Therefore, the layout as can be seen in the wireframe alongside does not follow</p>
                <p>the image, text, text, and image layout. Rather it contains the checkered flag as</p>
                <p>borders, which as mentioned before creates that connection between the theme</p>
                <p>and the pages. The description will be at the top and the artwork will occupy the</p>
                <p>rest of the page.</p>
            </div>

            <span id="style">
                <h3>VISUAL DESIGN CHOICES</h3>
             </span>
             
             <span id="style1">
                <h3>VISUAL DESIGN CHOICES</h3>
             </span>

            <span className="section2">
              <h3>The Style Guide </h3>
              <h4>The Colour Guide For My Website</h4>
              <p>The colours that I chose were picked specifically with the theme in mind, which  </p>
                <p>is the Scuderia Ferrari team from Formula one. My website makes use of black, </p>
                <p>a red that is strikingly like that of the Ferrari, grey, and an orange yellow which </p>
                <p>emulates the yellow used for the finer details on the car. The reason I chose </p>
                <p>these colours is because they would work well in tying the theme and the </p>
                <p>website together. I used red for the main headings since it is the most important </p>
                <p>colour on the Ferrari, it works well in highlighting the headings which are </p>
                <p>significant in informing the users of what is to follow in the sections below it.</p>
                <p>I used black for the sub-headings, because just like how the tyres of the Ferrari  </p>
                <p>are very important in it being able to function, the sub-headings provide the </p>
                <p>users with a more in-depth understanding of what they are about to read/engage with.</p>
                <img src= {Colour} alt="The Colour Guide" />
            </span>

            <span className="section3">
             <img src= {Layout} alt="The Layout Guide" />
            </span>

            <span className="sect3">
                <h4>The Layout Guide For My Website</h4>
            <p>The layout that I am using throughout my website was taken as inspiration  </p>
                <p>from other formula one websites as well as car websites like Ferrari. This </p>
                <p>specific layout that I chose is sleek, and elegant thereby encapsulating what </p>
                <p>the very team of Ferrari represents. The layout features images and text that</p>
                <p>change position in each section. So, it goes text, image, image, text which  </p>
                <p>creates an interesting dynamic. This layout provides the users a break between </p>
                <p>each body of text therefore not overwhelming the users. It allows them to absorb </p>
                <p>what they are reading before moving onto the next part of information. As can be </p>
                <p> seen there is a generous amount of white space between each component. It</p>
                <p> helps to solidify the breathing room that the layout presents to the user as it gives</p>
                <p>a visual and textual break.</p>
            </span>

            <div className="section4">
                <h4>The Fonts Guide For My Website</h4>
                <p>The fonts for the website were a difficult process to find because I needed a font</p>
                <p>that was bold, and exuded the theme of F1 through it. My original idea was to use a</p>
                <p>blocky and strong font. It was used in the monaco website, another website that was </p>
                <p>dedicated to Formula 1, and it suited the theme very well. However, on my search for </p>
                <p>such a font, I was unable to find the exact one or one that closely resembled that font.</p>
                <p>Therefore, I decided to just keep the font as it is. It may not be the most interesting</p>
                <p>choice of font, but it still gives me room to style it whether that be through increasing</p>
                <p>the size or making it bold as well as changing the colour. Alongside are some examples</p>
                <p>of fonts that I found interesting but did not believe would suit my website or theme.</p>
                <img src= {Fonts} alt="The fonts guide"/>
            </div>

        </div>
        
    )
}

export default Design;