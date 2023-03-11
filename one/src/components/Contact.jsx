import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>CONTACT US</h1>
        <form action="">
            <div>
                <label >Name</label>
                <input type="text" required placeholder='Abc' />
            </div>
            <div>
                <label >Email</label>
                <input type="email" required placeholder='Abc@example.com' />
            </div>
            <div>
                <label >Massage</label>
                <input type="text" required placeholder='Write here' />
            </div>

            <button type='submit'>Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact
