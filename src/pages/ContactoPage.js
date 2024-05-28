import React from "react";
import { useState } from 'react';
//import axios from 'axios';
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export const ContactoPage = (props) => {
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
          .sendForm('service_cjtlji8', 'template_6vwpo4k', form.current, {
            publicKey: 'cL_MgWgQZhqeeDilz',
            })
            .then(
              () => {
                window.alert('ENVIADO!');
              },
              (error) => {
                window.alert('ERROR...', error.text);
              },
            );
        };
      
        return (
            <main className="holder contacto">
            <div className="contenedor-form">
                <h2 className="titulo-contacto">Contacto</h2>
                <form ref={form} onSubmit={sendEmail} className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="user_name"/>
                    </p>

                    <p>
                        <label for="email">Email</label>
                        <input type="email" name="user_email"/>
                    </p>

                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" name="user_phone"/>
                    </p>

                    <p>
                        <label for="Mensaje">Mensaje o <br /> consulta</label>
                        <textarea name="message" id="" cols="30" rows="10"></textarea>
                    </p>

                    <p>
                        <input type="submit" value="Enviar"  />
                    </p>
                </form>

            </div>

            <div className="contenedor-ubi">
                <section className="ubi">
                    <h2 className="texto-ubi">¿Dónde estamos?</h2>
                    <iframe className="mapa" title="Mapa de irridelta"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.929127332791!2d-58.685103084775776!3d-34.40314728051191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca10d270a9be5%3A0x1f55b2bc18eddcdc!2sIRRIDELTA!5e0!3m2!1ses!2sar!4v1651178792662!5m2!1ses!2sar"
                        allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" />
                </section>
            </div>
        </main>
        );
      };


export default ContactoPage;