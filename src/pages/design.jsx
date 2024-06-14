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
            <h1>.</h1>


            <div className="monaco"> 
                <h2>Monaco Circuit</h2>
                
             <header>
             <span id="structure">
                <h3>THE WIREFRAMES</h3>
             </span>
             
             <span id="struct">
                <h3>THE WIREFRAMES</h3>
             </span>
             </header>

                <h3>Website Wireframes</h3>
                <h4>The Homepage Wireframes</h4>
                <p>The <span>image</span> on the right is a <span>wireframe</span> for the <span>home page</span> of my website. It</p>
                <p>shows <span>all</span> the <span>elements</span> of the page laid out in the way I <span>envisioned</span> the </p>
                <p>home page would look. It starts with the <span>navbar component</span> right at the <span>top</span>,</p>
                <p>which would be a <span>different colour</span> to the <span>rest</span> of the <span>page</span>. It was a deep red.</p>
                <p>The <span>checkered flag</span> would appear <span>underneath</span> the navbar to draw in a <span>feature</span></p>
                <p>of <span>F1</span>, however both the red navbar and checkered flag did not make the final</p>
                <p>iteration as they were too distracting. The <span>layout</span> for this <span>wireframe</span> was to</p>
                <p>have the <span>title</span> with <span>no background</span> and then the <span>rest</span> of the components follow</p>
                <p>in a <span>uniform manner</span>. <span>However</span>, the <span>layout completely changed</span> because it did <span>not</span></p>
                <p><span>resonate</span> with the theme strongly.</p>
                <img src= {Home} alt="Wireframe for the home page" />
            </div>

            <span className="mon">
                <img src= {Home1} alt="Second wireframe for home page" />
            </span>

            <div className="circuit">
            <p>The <span>image alongside</span> is the <span>second wireframe</span> for the <span>home page</span>. It has a few</p>
            <p><span>differences</span> to the first. In this <span>layout</span> the <span>navbar</span> becomes the <span>checkered flag</span></p>
            <p>which resulted in <span>being</span> too <span>distracting</span> so it was <span>removed</span>. The second element</p>
            <p>that I wanted to include but did not, was an image gallery slideshow. This would</p>  
            <p>allow the users to view a ferrari from different eras. In the end it did not suit the</p>
            <p>rest of the layout I was going for. The rest of the layout like the text and images</p>
            <p>would have followed the first wireframe's layout. The <span>home page</span> now <span>features</span></p>
            <p>a <span>video background</span> with the <span>navbar blending</span> seamlessly with it. Giving the </p>
            <p>appearance that the navbar is part of the background. The <span>rest</span> of the <span>layout</span></p>
            <p>consists of <span>image, text, text, image</span> as well as <span>big headings</span>.</p>
            </div>

            <div className="circ">
                <h4>The Design Page Wireframes</h4>
                <p>The <span>initial idea</span> for the <span>design page</span> as can be seen in the <span>wireframe</span> featured a</p>
                <p><span>similar style</span> to the <span>first home page wireframe</span>. Including the checkered flag and</p>
                <p>the image gallery slideshow. The rest of the <span>layout was</span> going to consist of <span>4x4</span> </p>
                <p><span>grid</span> to display the <span>wireframes</span>. <span>However</span>, that particular <span>layout seemed boring</span>,</p>
                <p>offering no room for explanations of each wireframe. It <span>would</span> have also <span>created</span></p>
                <p><span>disharmony</span> between all the pages, as it would have looked like it did not form </p>
                <p>part of the same website. The <span>current layout</span> of the <span>design page features</span> a <span>track</span></p>
                <p>as a <span>background</span> well the rest of the <span>layout follows</span> that of the <span>home page</span>.</p>
                <img src= {Designn} alt="The design page wireframe"/>
            </div>

            
            <span className="wireframe">
                <img src= {Designn2} alt="First wireframe for home page"/>
            </span>

            <div className="para">
            <p>This <span>second wireframe</span> for the <span>design page</span> is the <span>layout</span> that I decided to <span>choose</span>.</p>
                <p>As mentioned above it <span>follows</span> the <span>layout</span> of the <span>home page</span> to keep the <span>unity</span></p>
                <p>between each page. I used a famous racing circuit in Formula 1 as the background</p>
                <p>but I made it <span>smaller</span> in <span>height</span> than the <span>home page background</span>. This was an </p>
                <p>interesting way to incorporate and element formula one into the design page.</p>
                <p>I added <span>little racing animations</span> to the page to further <span>emphasize</span> the <span>theme</span> that</p>
                <p>I chose. This <span>particular layout</span> with the text and images <span>provides</span> the user with a </p>
                <p><span>break</span> so that they are <span>not overwhelmed</span> with information. The design page </p>
                <p>specifically has a lot of text because each wireframe and design decision requires</p>
                <p>an explanation and reason for its use.</p>
            </div>

            <div className="frame">
                <h4>The Theory Page Wireframe</h4>
                <p>The <span>theory page wireframe</span> is the <span>section</span> of my website that <span>contains</span> the <span>essay</span></p>
                <p>and the <span>proposal</span> for my <span>internet artwork</span> that will be placed on the art page.</p>
                <p>This <span>wireframe</span> is <span>similar</span> to the <span>second wireframe</span> for the <span>design page</span> with a few</p>
                <p>select <span>differences</span>. For example on this <span>wireframe</span> I included a <span>scroll indicator</span> on</p>
                <p>the <span>background image</span> to indicate to user that they must <span>scroll down</span> as there is</p>
                <p>more content that they can view and interact with. Another <span>difference</span> that I </p>
                <p>wanted to experiment was <span>adding</span> the <span>checkered flag</span> component to <span>separate</span> the</p>
                <p><span>sections</span>. It would look sleek as well as bring in that theme of Ferrari and F1.</p>
                <img src= {Theoryy} alt="The theory page wireframe"/>
            </div>

            <span className="track">
                <img src= {Artt} alt="The art page wireframe"/>
            </span>

            <div className="description">
                <h4>The Art Page Wireframe</h4>
                <p>The <span>art page wireframe</span> follows a <span>similar structure</span> to all the other <span>pages</span>in that</p>
                <p>it has a <span>smaller background</span> of one of the <span>racing circuits</span> that F1 takes place at.</p>
                <p>Since this <span>page</span> is <span>mainly focused</span> on the <span>internet artwork</span>, there will <span>not</span> be a lot</p>
                <p>of <span>text</span>, other than the description of the artwork and how to use it if it is a game</p>
                <p>Therefore, the <span>layout</span> as can be seen in the <span>wireframe alongside</span> does <span>not</span> follow</p>
                <p>the <span>image, text, text, and image layout</span>. Rather it <span>contains</span> the <span>checkered flag</span> as</p>
                <p><span>borders</span>, which as mentioned before creates that connection between the theme</p>
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
              <p>The <span>colours </span>that I chose were picked <span>specifically</span> with the <span>theme in mind</span>, which  </p>
                <p>is the <span>Scuderia Ferrari team</span> from <span>Formula one</span>. My website makes use of <span>black</span>, </p>
                <p>a <span>red</span> that is strikingly <span>like</span> that of the <span>Ferrari</span>, <span>grey</span>, and an <span>orange yellow</span> which </p>
                <p>emulates the yellow used for the finer details on the car. The reason I chose </p>
                <p>these colours is because they would <span>work well</span> in <span>tying</span> the <span>theme</span> and the </p>
                <p><span>website</span> together. I used <span>red for the main headings</span> since it is the most important </p>
                <p>colour on the Ferrari, it works well in <span>highlighting</span> the headings which are </p>
                <p>significant in informing the users of what is to follow in the sections below it.</p>
                <p>I used <span>black for the sub-headings</span>, because just like how the tyres of the Ferrari  </p>
                <p>are very important in it being able to function, the sub-headings provide the </p>
                <p>users with a more <span>in-depth understanding</span> of what they are about to read/engage with.</p>
                <img src= {Colour} alt="The Colour Guide" />
            </span>

            <span className="section3">
             <img src= {Layout} alt="The Layout Guide" />
            </span>

            <span className="sect3">
                <h4>The Layout Guide For My Website</h4>
            <p>The <span>layout</span> that I am using <span>throughout my website</span> was taken as <span>inspiration</span>  </p>
                <p>from other <span>formula one websites</span> as well as <span>car websites</span> like <span>Ferrari</span>. This </p>
                <p>specific <span>layout</span> that I chose is <span>sleek, and elegant</span> thereby encapsulating what </p>
                <p>the very <span>team of Ferrari represents</span>. The layout features <span>images and text</span> that</p>
                <p><span>change position</span> in each <span>section</span>. So, it goes text, image, image, text which  </p>
                <p>creates an interesting dynamic. This layout provides the users a break between </p>
                <p>each body of text therefore not overwhelming the users. It <span>allows</span> them to <span>absorb</span> </p>
                <p>what they are <span>reading</span> before moving onto the next part of information. As can be </p>
                <p> seen there is a <span>generous amount of white space</span> between each component. It</p>
                <p> helps to <span>solidify</span> the <span>breathing room</span> that the layout presents to the user as it gives</p>
                <p>a visual and textual break.</p>
            </span>

            <div className="section4">
                <h4>The Fonts Guide For My Website</h4>
                <p>The <span>fonts</span> for the <span>website</span> were a <span>difficult process</span> to find because I needed a font</p>
                <p>that was <span>bold</span>, and exuded the <span>theme of F1</span> through it. My <span>original idea</span> was to use a</p>
                <p><span>blocky and strong font</span>. It was used in the monaco website, another website that was </p>
                <p>dedicated to Formula 1, and it suited the theme very well. <span>However</span>, on my search for </p>
                <p>such a font, I was <span>unable</span> to find the <span>exact one</span> or one that closely resembled that font.</p>
                <p><span>Therefore</span>, I decided to just <span>keep the font</span> as it is. It may not be the most interesting</p>
                <p>choice of font, but it still gives me room to style it whether that be through <span>increasing</span></p>
                <p>the <span>size</span> or making it <span>bold</span> as well as <span>changing the colour</span>. Alongside are some examples</p>
                <p>of fonts that I found interesting but did not believe would suit my website or theme.</p>
                <img src= {Fonts} alt="The fonts guide"/>
            </div>

            <span id="reflect">
                <h3>THE REFLECTION & RATIONALE</h3>
             </span>
             
             <span id="reflect1">
                <h3>THE REFLECTION & RATIONALE</h3>
             </span>

            <div className="rationale">
                <img src="https://public-images.interaction-design.org/tags/td-visual-design-principles.png" alt="" />
            </div>

            <div className="reflection">
             <h4>The Rationale/Reflection</h4>
             <p>For many of my design decisions I consulted various sources that analysed and discussed </p>
             <p>what made good, intuitive web design as well as what deterred users from a website and  </p>
             <p>what grasped their attention. Many of these external sources like blog posts addressed </p>
             <p>balance, repetition, alignment, proximity, and contrast. Combining these design principles </p>
             <p>together in ways that work for the website one is trying to achieve can determine whether </p>
             <p>the application is user-friendly or not. Great balance is when elements of the page are </p>
             <p>placed generously equal across the page rather than having one side of the page  </p>
             <p>overwhelmingly filled with information and the other side of the page lacking. This can  </p>
             <p>be an overload of visual and cognitive work for the user as they would have to  </p>
             <p>sift through bouts of information to find what they are looking for.</p>
            </div>

            <div className="reflection1">
             <h4>The Rationale/Reflection</h4>
             <p>However, with balance comes the choice of symmetry or asymmetry. Symmetrical   </p>
             <p>balance is when everything from the text to the negative space is equal </p>
             <p>throughout the page, whereas asymmetrical balance is for example having </p>
             <p>a picture of a car one side of the page but balancing that out with having </p>
             <p>a body of text on the opposite side of the page. These are different elements,</p>
             <p> but they carry the same visual weight. I would say my website layout makes </p>
             <p>use of both symmetrical and asymmetrical balance, but asymmetry is more </p>
             <p>prevalent because I have images on one side while there is text on the </p>
             <p>other side.  Repetition in a website can do with many elements of the website </p>
             <p>like layout, images, size, colour, and text. However, it mainly depends on </p>
             <p>the consistency and unity in the design by trying to create cohesion and a </p>
             <p>relationship between all the elements of the page. Repetition is significant </p>
             <p>when it comes to the typography of a website. For example, all h1 tags </p>
             <p>should be the same size and colour, the header and footer of each page should </p>
             <p>be the same, the text in paragraphs should all have the same spacing and be </p>
             <p>the same size. These decisions create for a good user experience as it ensures </p>
             <p>that the user understands the difference between each of these elements as well </p>
             <p>as recognises the same elements across each page.</p>
            <img src="https://marketing.invisionapp-cdn.com/cms/images/lr1orcar/marketing-pages/cf70b49ddf845f664f73a47c1c0c65f38bfcc82f-2881x2161.png?w=2000&fm=jpg&q=90" alt="" />
            </div>

            <div className="rationale2">
                <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/A-Brief-Guide-to-Alignment-mdash_-A-Design-Principle-1024x576.png" alt="" />
            </div>

            <div className="reflection2">
             <h4>The Rationale/Reflection</h4>
             <p>Alignment addresses how elements are placed on the pages in a website. This design </p>
             <p>principle mainly has to do with text alignment, so whether the text of a website is  </p>
             <p>aligned left, centre, or right. The best alignment to use for text is left alignment </p>
             <p>because it is common practice and so users are familiar with it. Thereby making  </p>
             <p>reading the text natural and easy. My website makes use of the left alignment for all  </p>
             <p>paragraphs so that it does not confuse or even irritate the user. However, alignment can </p>
             <p>also be used to make interesting placements with images. for example, instead of having  </p>
             <p>a standard 4 x 4 grid of images, alignment makes it possible to place those images in </p>
             <p>more interesting way. Proximity is how close elements of a website sit together. The </p>
             <p>main purpose of proximity is to create a relationship between those elements. For </p>
             <p>example, in my website layout, images are always placed close enough to text that </p>
             <p>discusses those images. This informs the user that those images and that text go  </p>
             <p>together and so explain each other.</p>
            </div>

            <footer className="footer">
                created in 2024 by Kiara Mohun
                <p>Made with love and drive</p>
            </footer>

        </div>
        
    )
}

export default Design;