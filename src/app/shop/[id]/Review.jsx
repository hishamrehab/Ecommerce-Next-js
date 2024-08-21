
import Rating from "../../components/Rating"
const reviwtitle = "Add a Review";


const Review = () => {

    return (
        <>
            {/* add review field  */}
            <div className='client-review'>
                <div className='review-form'>
                    <div className='review-title'>
                        <h5>{reviwtitle}</h5>
                    </div>
                    <form action='' className='row'>
                        <div className='col-md-4 col-12 mb-2'>
                            <input type='text' name="name" id='name' placeholder='Full Name...' />
                        </div>
                        <div className='col-md-4 col-12 mb-2'>
                            <input type='email' name="email" id='name' placeholder='Your Email...' />
                        </div>

                        <div className='col-md-4 col-12'>
                            <div className='rating d-flex mr-5'>
                                <span className='me-2'>Your Rating</span>
                                <div style={{
                                    color: "#ecb341"
                                }}> <Rating className='review' /></div>
                            </div>
                        </div>

                        <div className='col-md-12 col-12'>
                            <textarea name='message' id='message' rows="10" placeholder='Type Here Message'
                            ></textarea>
                        </div>
                        <div className='col-12'>
                            <button type='submit' className='default-button' style={{
                                "background": "#f16126",
                                color: "#FFF",
                                marginTop: "5px",
                                borderRadius: "5px"
                            }}>
                                <span>Submit Review</span>
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Review