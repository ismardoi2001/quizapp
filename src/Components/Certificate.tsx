import React from 'react'
import { PDFDocument, StandardFonts, rgb} from 'pdf-lib'
import download from 'downloadjs';
import { Button } from 'reactstrap';
import {CertificateType} from './../Types/quiz-types';

async function handlePDF(name:string, level:string) {

    // Load Template
    const path = `https://quizee.imfast.io/${level}_template.pdf`;
    const existingPdfBytes = await fetch(path).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Draw a string of text diagonally across the first page
    firstPage.drawText(name, {
        x: 360,
        y: 320,
        size: 40,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    });
    
    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();
    // Trigger the browser to download the PDF document
    download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
}

function Certificate(props:CertificateType) {
    return (
            <Button className='ml-5' color='success' onClick={() => handlePDF(props.name, props.level)}>Certificate</Button>
    )
}

export default Certificate;
