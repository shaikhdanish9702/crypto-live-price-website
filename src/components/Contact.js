import './Contact.css'
const Contact = () => {
  return (
    <>
      <section className='contact-container'>
        
        <div className='from-color'>
          <form className='shadow'>
                      <h2>Fillup The Form</h2>
                      
            <div>
                          <input className='contactInput' type='text' placeholder='Name' />
                          <br />
                           <br/>
              <input className='contactInput'  type='text' placeholder='Email' />
                      </div>
                       <br/>
                      
                      <input className='contactInput'  type='text' placeholder='Subject' />
                      <br />
                       <br/>
                      <textarea cols='30' rows='10'></textarea>
                      <br />
                       <br/>
            <button onClick={(e)=>e.preventDefault()} className='btn'>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact