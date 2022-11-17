import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import './CGUDocument.css';

export function CGUDocument() {
    const [page, setPage] = useState(1);
    return (
        <div className='cgu-document'>
            <Document
                error={<p>On n'a pas pu afficher le pdf.</p>}
                loading={<p>Chargement du document...</p>}
                file={process.env.REACT_APP_CGU_URL}
            >
                <Page pageNumber={page} />
                <nav>
                    <ul className="pager">
                        <li className="previous">
                            <button
                                type='button'
                                disabled={page === 1}
                                onClick={() => setPage(page - 1)}
                            >
                                Previous
                            </button>
                        </li>
                        <li className="next">
                            <button
                                type='button'
                                disabled={page === Document.numPages}
                                onClick={() => setPage(page + 1)}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </Document>
        </div>
    )
}
