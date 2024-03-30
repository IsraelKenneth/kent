"use client"
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { slideIn } from '@/utils/frame-motion'

import "../trial/trial.css"


const Contact = () => {
    const formRef = useRef()
    const [form, setForm] = useState({ name: "", email: "", message: "", })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send('service_61amqse',
            'template_6ktf3bd',
            { from_name: form.name, to_name: 'Kenneth Asamoah', from_email: form.email, to_email: 'israel.kenneth2011@gmail.com', message: form.message },
            '8G4z4SxHohbbl5YFF'
        ).then(() => {
            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible.'
            )

            setForm({ name: "", email: "", message: "", })
        },
            (error) => {
                setLoading(false);
                console.log(error);
                alert('Something went wrong.')

            })
    }
    return (
        <section id='contact' className= "w-full flex md:flex-row flex-col padding justify-center items-center padding-y ">

<div className="md:w-2/3 w-full px-4  flex flex-col mb-4">
            <div className="w-full lg:text-7xl text-4xl font-bold">
                <h1 className="w-full md:w-2/3">How can we help you. get
                    in touch</h1>
            </div>
            <div class="flex mt-8 flex-col md:flex-row md:justify-between">
                <p class="w-full md:w-2/3 text-gray-400">Interested in elevating your project with professional expertise? Get in touch to discuss how my services can benefit you!</p>

            </div>
           
        </div>

            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='form-container shadow-lg'
            >

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='form'
                >
                <div className="form-group">
                    <label className='flex flex-col cursor-none'>
                        <span className='text-white font-medium mb-4 '>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder=""
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        /> 
                    </label>
                    </div>
                    <div className="form-group">
                    <label className='flex flex-col cursor-none'>
                        <span className='text-white font-medium mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    </div>
                    <div className="form-group">
                    <label className='flex flex-col cursor-none'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={5}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    </div>
                    <button
                        type='submit'
                        className='bg-white text-black py-3 px-8 rounded-xl outline-none w-fit  font-bold shadow-md shadow-primary'
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>
            </section>
    )
}

export default Contact
