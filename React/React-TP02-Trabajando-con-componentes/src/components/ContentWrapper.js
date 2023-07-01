import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Tablelist from './TableList'

const ContentWrapper = () => {
    return (
        <>
        <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <Tablelist/>
                    <Footer />
                </div>
            </div>    
        </>
    )
};

export default ContentWrapper;