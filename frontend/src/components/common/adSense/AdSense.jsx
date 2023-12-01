import React, { useEffect  } from 'react';

export default function AdSense() {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
        catch (e) {
        }

    },[]);



    return (
        <>
            <ins class="adsbygoogle"
                data-ad-client="ca-pub-9974690322751979"
                data-ad-slot="3463581793"
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        </>
    );
};