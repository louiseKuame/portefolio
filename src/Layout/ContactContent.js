

export default function ContactContent(){
	return (
		<>
			 <section id="contact">
		        <div className="red-divider"></div>
		        <div className="heading">
		            <h2>Me contacter</h2>
		        </div>

		        <div className="container">

		            <div id="contact-form">
		                <div className="row" id="contact">
		                    <div className="col-md-6 col-lg-4">
		                        <h4>Adresse</h4>
		                        <p>Cocody, Abidjan, Cote d'Ivoire</p>
		                    </div>

		                    <div className="col-md-6 col-lg-4">
		                        <h4>Contact</h4>
		                        <p>(+225) 07 09 83 3038</p>
		                    </div>

		                    <div className="col-md-6 col-lg-4">
		                        <h4>Adresse email</h4>
		                        <p>hello@jina.com</p>
		                    </div>


		                </div>
		                <form>
		                    <div className="row">
		                        <div className="col-md-6 col-lg-4">
		                            <label>Nom</label>
		                            <input type="text" className="form-control" />
		                        </div>
		                        <div className="col-md-6 col-lg-4">
		                            <label>Prénom(s)</label>
		                            <input type="text" className="form-control" />
		                        </div>

		                        <div className="col-md-6 col-lg-4">
		                            <label>Email</label>
		                            <input type="text" className="form-control" />
		                        </div>

		                        <div className="col-md-12 col-lg-12">
		                            <label>Object</label>
		                            <input type="text" className="form-control" />
		                        </div>

		                        <div className="col-md-12 col-lg-12">
		                            <label>Message</label>
		                            <textarea className="form-control" rows="6"></textarea>
		                        </div>

		                        <div className="col-md-12 col-lg-12" >
		                            <button className="button" type="submit"> Envoyer</button>
		                        </div>


		                    </div>

		                </form>


		            </div>
		        </div>

		    </section>
	    </>

	)
}