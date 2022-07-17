import cyberhero from '../assets/images/Bg.jpg';
export default function Contact() {
    return (
   <main>
            <div class="contact-text">
                <h1>Cyberpunk</h1>
                <h2>Del Coronado Bridge, Badlands</h2>
                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec
                </p>
                <a href="cyberpunk2077@gmail.com">cyberpunk2077@gmail.com</a><br></br>
                <a href="tel:+13115552368">(311) 555-2368</a>
            </div>
            <div class="contact-card">
                <div class="contact-header">
                    SEND FEEDBACK
                </div>
                <form class="contact-body">
                    <input type="email" class="contact-body__email" placeholder="Email" /><textarea type="text" class="contact-body__message" placeholder="Message"></textarea><button class="contact-body__submit">SEND</button>
                </form>
            </div>

        </main >

 /*       
<main>
        <div className="project-container">
          <div className="project1-img">
            <h1>Cyberpunk</h1>
            <h2>Del Coronado Bridge, Badlands</h2>
            <p className='contact-text'> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. Aenean massa. Cum  sociis 
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec
            </p>
            <a href="cyberpunk2077@gmail.com">cyberpunk2077@gmail.com</a><br></br>
            <a href="tel:+13115552368">(311) 555-2368</a>
          </div>
          <div className="project1-text">
            <div class="contact-card">
                <div class="contact-header">
                    SEND FEEDBACK
                </div>
                <form class="contact-body">
                    <input type="email" class="contact-body__email" placeholder="Email" /><textarea type="text" class="contact-body__message" placeholder="Message"></textarea><button class="contact-body__submit">SEND</button>
                </form>
            </div>
          </div> 
        </div>
        
      </main>

*/
        
                    )
}