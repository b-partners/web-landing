import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './CGUDocument.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export function CGUDocument() {
    const [page, setPage] = useState(1);
    return (
        <>
            <div className='cgu-document'>
                <Document
                    error={<p>Impossible d'afficher le document.</p>}
                    loading={<p>Chargement du document...</p>}
                    file={process.env.REACT_APP_CGU_URL}
                >
                    <Page pageNumber={page} />
                </Document>
            </div>
            <nav>
                <ul className="pager">
                    <li className="previous">
                        <button
                            type='button'
                            disabled={page === 1}
                            onClick={() => setPage(page - 1)}
                        >
                            <a href="#header">Précédent</a>
                        </button>
                    </li>
                    <li className="next">
                        <button
                            type='button'
                            disabled={page === Document.numPages}
                            onClick={() => setPage(page + 1)}
                        >
                            <a href="#header">Suivant</a>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}
