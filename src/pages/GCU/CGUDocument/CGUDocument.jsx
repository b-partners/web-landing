import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import * as PropTypes from 'prop-types';
import './CGUDocument.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export function CGUDocument() {
    const [page, setPage] = useState(1);
    const [numPages, setNumPages] = useState(1);
    return (
        <div>
            <div className='cgu-document'>
                <Document
                    error={<p>Impossible d'afficher le document.</p>}
                    loading={<p>Chargement du document...</p>}
                    onLoadSuccess={(props) => setNumPages(props.numPages)}
                    file={process.env.REACT_APP_CGU_URL}
                >
                    <Page pageNumber={page} />
                    <nav>
                        <ul className="pager">
                            <li className="previous">
                                {page !== 1 && <button
                                    type='button'
                                    disabled={page === 1}
                                    onClick={() => setPage(page - 1)}
                                    className='pagination__button'
                                >
                                    <a href="#header">
                                        <i className="fa fa-chevron-left" />
                                    </a>
                                </button>}
                            </li>
                            <li>
                                Page {page} sur {numPages}
                            </li>
                            <li className="next">
                                {page !== numPages && <button
                                    type='button'
                                    disabled={page === Document.numPages}
                                    onClick={() => setPage(page + 1)}
                                    className='pagination__button'
                                >
                                    <a href="#header">
                                        <i className="fa fa-chevron-right" />
                                    </a>
                                </button>}
                            </li>
                        </ul>
                    </nav>
                </Document>
            </div>
        </div>
    )
}

CGUDocument.propTypes = {
    numPages: PropTypes.number.isRequired
};