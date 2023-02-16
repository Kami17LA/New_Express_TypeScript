import Head from "next/head";
/* import { Inter } from "@next/font/google"; */
import styles from "@/styles/Home.module.css";
import Tesseract from "tesseract.js";
import * as fs from "node:fs";
/* const filePath = "ruta/al/documento.png"; */

import React, { useState } from "react";

export default function UploadPDF() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar el archivo a un servidor o hacer cualquier otra cosa que necesites hacer con él.
  };

  return (
    <div className={styles.content}>
      <h1>Aquí puedes subir tú PDF de imagenes para convertilo en texto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Seleccionar archivo PDF:
          <input type="file" accept=".pdf" onChange={handleFileChange} />
        </label>
        <button type="submit">Subir archivo</button>
      </form>
    </div>
  );
}

/* export default function imageUpload() {
  return (
    <>
      <Head>Visualizando un PDF</Head>
      <div className={styles.content}>
        <h1>Aquí puedes subir tú PDF de imagenes para convertilo en texto</h1>
        <form>
          <input type="file" name="pdfFile" id="pdfFile" required></input>
          <button onClick={}>Convertir a PDF</button>
        </form>
      </div>
    </>
  );
}
 */
